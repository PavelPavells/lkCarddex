/* eslint no-restricted-global: 0 */

import auth0 from "auth0-js";
export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: "carddex.auth0.com",
        clientID: "rCPOT3ujLJS6yShe0N7Wf3t4BHsi19zr",
        redirectUri: "http://localhost:3000/dashboard",
        responseType: "token id_token",
        scope: "open id profile email"
    });
    login = () => {
        this.auth0.authorize()
    };
    handleAuth = () => {
        this.auth0.parseHash((err, authResult) => {
            console.log(authResult);
            if (authResult) {
                localStorage.setItem("session_token", authResult.access_token);
                localStorage.setItem("id_token", authResult.id_token);
                let expiresAt = JSON.stringify((authResult.expiresIn * 1000 + new Date().getTime()));
                localStorage.setItem("expiresAt", expiresAt);
            } else if(err) {
                console.log(err);
            }
        })
    }
    logout = () => {
        localStorage.removeItem("session_token");
        localStorage.removeItem("id-token");
        localStorage.removeItem("expiresAt")
    }
    isAuthorization0 = () => {
        let expiresAt = JSON.parse(localStorage.getItem("expiresAt"));
        return new Date().getTime() < expiresAt;
    }
    getAccessToken = () => {
        if(localStorage.getItem("access_token")) {
            const accessToken = localStorage.getItem("access_token");
            return accessToken;
        } else {
            return null;
        }
    }
    getProfile = () => {
        let accessToken = this.accessToken;
        if(accessToken) {
            this.auth0.client.userInfo(accessToken, (err, profile) => {
                if(profile) {
                    this.userProfile = { profile };
                } else {
                    console.log(err);
                }
            });
        }
    }
}