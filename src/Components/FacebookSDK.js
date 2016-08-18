
class FacebookSDK {

  constructor() {
    this.isLogin  = null;
    this.userInfo = {};
  }

  connectFacebook() {
    window.fbAsyncInit = () => {
      FB.init({
        appId: '921617737961651',
        xfbml: true,
        version: 'v2.7'
      });

      FB.getLoginStatus(this.checkLoginStatus.bind(this));
    };

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  login(callback) {
    this.callback = callback;
    FB.login(this.checkLoginStatus.bind(this), {scope: 'public_profile,email'});

  }

  getLoginStatus(callback) {
    this.callback = callback;
    if (this.isLogin === null) {
      this.connectFacebook();
    } else {
      callback({
        isLogin: this.isLogin,
        userInfo: this.userInfo
      });
    }
  }

  checkLoginStatus(response) {
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      FB.api('/me', (info) => {
        this.userInfo = info;
        this.isLogin  = response.status;
        this.callback({
          userInfo: this.userInfo ,
          isLogin: this.isLogin
        });
      });

    } else {
      this.callback({
        isLogin: response.status
      });
    }
  }

}

let facebookSDK = new FacebookSDK();

export default facebookSDK;