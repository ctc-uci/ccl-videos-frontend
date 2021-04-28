const authenticate = () => {
  localStorage.setItem('isAuthenticated', 1);
}

const isAuthenticated = () => {
  return localStorage.getItem('isAuthenticated');
}

const logout = () => {
  localStorage.removeItem("isAuthenticated")
}

export default {
  authenticate,
  isAuthenticated,
  logout,
};