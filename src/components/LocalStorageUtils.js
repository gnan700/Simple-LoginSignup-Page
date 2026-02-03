// LocalStorageUtils.js
export const saveUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
  };
  
  export const getUser = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  };
  
  export const deleteUser = () => {
    localStorage.removeItem('user');
  };
  