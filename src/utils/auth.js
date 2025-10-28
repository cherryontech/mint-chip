
export const setAuthToken = (token) => {
  localStorage.setItem('authToken', token);
  // Dispatch custom event to update navbar
  window.dispatchEvent(new Event('authChange'));
};

export const removeAuthToken = () => {
  localStorage.removeItem('authToken');
  window.dispatchEvent(new Event('authChange'));
};

export const getAuthToken = () => {
  return localStorage.getItem('authToken');
};

export const isAuthenticated = () => {
  return !!getAuthToken();
};