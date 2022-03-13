const url = 'http://localhost:4000/api/user';

export async function fetchRegister(data) {
    let response = await fetch(url + `/register`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    let result = await response.json();

    if (response.ok) {
        return result;
    } else {
        throw result.message;
    }
}

export async function fetchLogin(data) {
    let response = await fetch(url + `/login`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    let result = await response.json();
    try {
        if (response.ok) {
            return result;
        } else {
            throw result.message;
        }
    } catch (err) {
        console.log(err);
    }
}