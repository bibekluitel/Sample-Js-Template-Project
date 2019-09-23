const DummyUserCredentials = {
  userName: 'bibek',
  passWord: 'luitel'
}

function Auth() {
  this.isAuthenticated = () => {
    return this.userObj.authenticationToken;
  };

  this.getAuthenticationToken = () => {
    return this.userObj.authenticationToken;
  };

  this.login = (userName, passWord) => {
    if (userName === DummyUserCredentials.userName && passWord === DummyUserCredentials.passWord) {
      this.userObj.authenticationToken = btoa("testuser14@burstsms.com : testuser14");
      return Promise.resolve(true);
    }
    return Promise.resolve(false);
  }

  if (!Auth.instance) {
    this.userObj = {authenticationToken: 'bibek'};
    Auth.instance = this
    return Auth.instance;
  }
};

const instance = new Auth();

export default instance;
