import { Order } from "../pages/findOrderOut";

describe("Tests finding order feature", () => {
  it("Finding order by email", () => {
    Order.findsOrder();
  });
  it("Finding order by zip", () => {
    Order.findsOrder(undefined, undefined, undefined, undefined, true);
  });
});
