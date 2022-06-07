import { assert, expect } from "chai";
import { deployments, getNamedAccounts } from "hardhat";
import { Greeter } from "../../../typechain";

export const shouldDeploy = () => {
  const message = "Hello";

  it("should set greeting", async () => {
    expect(await this.greeter.greet()).to.equal(message);
  });
};
