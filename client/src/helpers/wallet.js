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

//Update user wallet
export const updateWallet = (response, next) => {
  if (window !== "undefined") {
    let wallet = JSON.parse(localStorage.getItem("userWallet"));
    wallet = response.data;
    localStorage.setItem("userWallet", JSON.stringify(wallet));
  }
};
