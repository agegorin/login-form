class AuthStore {
  isAuthenticated = false;
  token = "";

  constructor() {
    // check cookies for auth info
  }

  callAuth(email: string, password: string): Promise<string> {
    console.log(`try to log in with ${email} / ${password}`);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve('ok');
        } else {
          reject('not ok');
        }
      }, 1000);
    });
  }
}

const authStore = new AuthStore();

export default authStore;
