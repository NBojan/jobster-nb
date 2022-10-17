export const addUserToLocal = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
}
export const getUserFromLocal = () => {
    const user = localStorage.user ? JSON.parse(localStorage.user) : null;
    return user
}
export const removeUserFromLocal = () => {
    localStorage.removeItem("user");
}