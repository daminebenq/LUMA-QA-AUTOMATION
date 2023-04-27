import { Order } from "../pages/findOrderOut";

describe("Tests finding order feature", () => {
  it("Finding order by email and verifying its price", () => {
    Order.findsOrder();
  });
  it("Finding order by zip, and verifying its price", () => {
    Order.findsOrder(undefined, undefined, undefined, undefined, true);
  });
});
