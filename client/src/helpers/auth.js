import cookie from "js-cookie";

//Set in Cookie
export const setCookie = (key, value) => {
  if (window !== "undefined") {
    cookie.set(key, value, {
      //Expires in 1 Day
      expires: 1,
    });
  }
};

//Remove Cookie
export const removeCookie = (key) => {
  if (window !== "undefined") {
    cookie.remove(key, {
      expires: 1,
    });
  }
};

//Get from Cookie
export const getCookie = (key) => {
  if (window !== "undefined") {
    return cookie.get(key);
  }
};

//Set in localstorage
export const setLocalStorage = (key, value) => {
  if (window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

//Remove from localstorage
export const removeLocalStorage = (key) => {
  if (window !== "undefined") {
    localStorage.removeItem(key);
  }
};

//Auth user afer login
export const authenticate = (response, next) => {
  setCookie("token", response.data.token);
  setLocalStorage("user", response.data.others);
  setLocalStorage("userWallet", response.data.wallet);
  next();
};

//Signout User
export const signout = (next) => {
  removeCookie("token");
  removeLocalStorage("user");
  removeLocalStorage("userWallet");
};

//Get user info from localstorage
export const isAuth = () => {
  if (window !== "undefined") {
    const cookieChecked = getCookie("token");
    if (cookieChecked) {
      if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user"));
      } else {
        return false;
      }
    }
  }
};

//Update user data in localstorage
export const updateUser = (response) => {
  if (window !== "undefined") {
    let auth = JSON.parse(localStorage.getItem("user"));
    auth = response.data;
    localStorage.setItem("user", JSON.stringify(auth));
  }
};
