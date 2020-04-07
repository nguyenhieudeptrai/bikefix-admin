import React from 'react'

const Auth = {
  isLoggedIn: function () {
    let user = localStorage.getItem('user');
    let pass = localStorage.getItem('pass');
    if (user === "admin" && pass === "admin") {
      return true;
    } else {
      return false;
    }
  },
  saveUser: function (user, pass) {
    localStorage.setItem('user', user);
    localStorage.setItem('pass', pass);
  }
}

export default Auth