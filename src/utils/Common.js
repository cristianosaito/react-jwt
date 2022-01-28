// return the user data from the session storage
const getUser = () => {
    const userStr = sessionStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    else return null;
}

// return the token from the session storage
const getToken = () => {
    return sessionStorage.getItem('token') || null;
}

// remove the token and user from the session storage
const removeUserSession = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('role');
}

// set the token and user from the session storage
const setUserSession = (token, user, role) => {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('user', JSON.stringify(user));
    sessionStorage.setItem('role', JSON.stringify(role));
}


module.exports = {
    getUser,
    getToken,
    removeUserSession,
    setUserSession
}

  