export function setItemInLocaleStorage(data) {
    localStorage.setItem('username', data.username);
    localStorage.setItem('token', data.accessToken);
    localStorage.setItem('role', data.role);
}
export function getItemFromLocaleStorage() {
    const user = localStorage.getItem('username');
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    return {
        user,
        token,
        role
    }
}
export function clearLocalStorage() {
    localStorage.clear();
}