const url = 'http://localhost:4000';

export async function fetchRegister(data) {
    let response = await fetch(url + `/api/user/register`, {
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
            return result.message;
        }
    } catch (error) {
        console.log(error);
    }
}

export async function fetchLogin(data) {
    let response = await fetch(url + `/api/user/login`, {
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
            return result.message;
        }
    } catch (err) {
        console.log(err);

    }
}

export const logout = (token) => {
    return fetch(`${url}/api/user/logout`, {
        headers: {
            'X-Authorization': token
        }
    });
}