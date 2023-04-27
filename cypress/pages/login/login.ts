import { wrongLogin, loginMethod, notFilledInputs } from "./index";

export class LoginService {
  static login(
    wrongData = false,
    notFilled = false
  ) {

    if (wrongData) {
      wrongLogin();
    }

    if (notFilled) {
      notFilledInputs();
    }

    loginMethod();
  }
}
