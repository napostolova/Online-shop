export async function createProduct(data) {
    let response = await fetch(`http://localhost:4000/api/products`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
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

export async function getAllProducts() {
    let response = await fetch(`http://localhost:4000/api/products`);
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
    let response = await fetch(`http://localhost:4000/api/products/${id}`);

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