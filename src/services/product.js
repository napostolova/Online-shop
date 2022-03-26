const apiUrl = `http://localhost:4000`;

export async function createProduct(data, token) {
    let response = await fetch(`${apiUrl}/api/products`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            'X-Authorization': token
        },
        body: JSON.stringify(data),
    });
    try {
        let result = await response.json();
        if (response.ok) {
            return result;
        } else {
            return result.message;
        }
    } catch (err) {
        console.log(err);
    }

}
export async function editProduct(id, data, token) {
    let response = await fetch(`${apiUrl}/api/products/${id}`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token      
        },
        body: JSON.stringify(data)
    });
    try {
        let result = await response.json();
        if (response.ok) {
            return result;
        } else {
            return result.message;
        }
    } catch (err) {
        console.log(err);
    }
    
}

export async function getAllProducts() {
    let response = await fetch(`${apiUrl}/api/products`);
    try {
        let result = await response.json();
        if (response.ok) {
            return result;
        } else {
            throw result.message;
        }
    } catch (error) {
        console.log(error);
    }
}

export async function getOneById(id) {
    let response = await fetch(`${apiUrl}/api/products/${id}`);

    try {
        let result = await response.json();
        if (response.ok) {
            return result;
        } else {
            throw result.message;
        }
    } catch (error) {
        console.log(error);
    }
}

export async function addFavouriteProduct(id, token) {
    let response = await fetch(`${apiUrl}/api/products/${id}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            'X-Authorization': token
        }
    });
    try {
        let result = await response.json();
        if (response.ok) {
            return result;
        } else {
            throw result.message;
        }
    } catch (err) {
        console.log(err);
    }
}

export async function buyProduct(id, token) {
    let response = await fetch(`${apiUrl}/api/products/buy/${id}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            'X-Authorization': token
        }
    });
    try {
        let result = await response.json();
        if (response.ok) {
            return result;
        } else {
            throw result.message;
        }
    } catch (err) {
        console.log(err);
    }
}

export async function getMyFavouriteProducts(token) {
    let response = await fetch(`${apiUrl}/api/products/favourites`, {
        method: "get",
        headers: {
            'X-Authorization': token
        }
    });
    try {
        let result = await response.json();
        if (response.ok) {
            return result;
        } else {
            throw result.message;
        }
    } catch (err) {
        console.log(err);
    }
}
export async function getOrderedProducts(token) {
    let response = await fetch(`${apiUrl}/api/products/orders`, {
        method: "get",
        headers: {
            'X-Authorization': token
        }
    });
    try {
        let result = await response.json();
        if (response.ok) {
            return result;
        } else {
            throw result.message;
        }
    } catch (err) {
        console.log(err);
    }
}

export async function deleteProduct(id, token) {
    return fetch(`${apiUrl}/api/products/${id}`, {
        method: 'delete',
        headers: {
            'X-Authorization': token
        }
    });
}
export async function deleteProductFromCart(id, token) {
    return fetch(`${apiUrl}/api/products/buy/${id}`, {
        method: 'delete',
        headers: {
            'X-Authorization': token
        }
    });
}