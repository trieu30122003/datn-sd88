export const getUser = () => {
    const userInfo = localStorage.getItem("userInfo"); 
    return userInfo
}