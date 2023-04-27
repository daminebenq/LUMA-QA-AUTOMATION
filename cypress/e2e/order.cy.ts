import { Checkout } from "../pages/checkoutOrdering";
import HomePage from "../pages/home.page";
import { Cart } from "../pages/addCart";
import { LoginService } from "../pages/login/login";
import { Reorder } from "../pages/reOrder";

describe("Testing checkout page and ordering a product", () => {
  it("Orders a product when you are logged in your account and then proceed to checkout", () => {
    HomePage.visit();
    LoginService.login();
    Cart.addItemCart();
    Checkout.checkout();
  });

  it("Reoders a product when you are logged in your account", () => {
    HomePage.visit();
    LoginService.login();
    Reorder.reOrder();
  });
});
