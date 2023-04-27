import { LoginService } from "../pages/login/login";
import HomePage from "../pages/home.page";

describe("Tests login features", () => {
  it("Normal Log In filling in email an password", () => {
    HomePage.visit();
    LoginService.login();
  });

  it("Login with wrong email and password", () => {
    HomePage.visit();
    LoginService.login(true);
  });

  it("Login testing required fields", () => {
    HomePage.visit();
    LoginService.login(false, true);
  });
});
