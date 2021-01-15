import axios from "../utils/axios";

class AuthService {
  signIn = (email, password) => {
    return new Promise((resolve, reject) => {
      axios
        .post("/api/home/login", { email, password })
        .then((response) => {
          if (response.data.user) {
            resolve(response.data.user);
            //this.setUser(response.data.user);
          } else {
            reject(response.data.error);
          }
        })
        .catch((e) => {
          reject(e);
        });
    });
  };

  setUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };

  getUser = () => {
    const user = localStorage.getItem("user");
    if (user) {
      return JSON.parse(user);
    }

  };

  isAuthenticaded = () => {
    return !!this.getUser();
  }
}

const authService = new AuthService();

export default authService;
