import { LoginAction } from "../actions/login.action";
import { useAppDispatch, useAppSelector } from "../hooks";
import { getLoginAction } from "../reducers/LoginReducer";
import store from "../store";

export class StateServices {

  dispatch = store.dispatch;
  getState = store.getState;
  setLoginToken(token:string) {
    this.dispatch(getLoginAction(LoginAction.setToken, token));
  }

  getLoginToken() {
    return this.getLoginState().token;
  }

  getLoginState() {
    return this.getState().sharedLibs_login;
  }
}