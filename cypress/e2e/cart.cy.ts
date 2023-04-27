import { LoginService } from "../pages/login/login";
import { Cart } from "../pages/addCart";
import Delete from "../pages/deleteCart";
import HomePage from "../pages/home.page";

describe("Testing Cart", () => {
  it("Adding product to cart from home page", () => {
    HomePage.visit();
    LoginService.login();
    Cart.addItemCart();
    Delete.deleteCart();
  });

  it("Adding product to cart from a category", () => {
    HomePage.visit();
    LoginService.login();
    Cart.addItemCart(true);
    Delete.deleteCart();
  });

  it("Adding product to cart from search", () => {
    HomePage.visit();
    LoginService.login();
    Cart.addItemCart(false, true);
    Delete.deleteCart();
  });
});
