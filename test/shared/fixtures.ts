import { deployments } from "hardhat";
import { Greeter } from "../../typechain";

export const setupGreeter = deployments.createFixture(
  async ({ deployments, getNamedAccounts, ethers }) => {
    await deployments.fixture(); // ensure you start from a fresh deployments
    const { deployer } = await getNamedAccounts();
    const greeter: Greeter = await ethers.getContract("Greeter", deployer);
    return {
      deployer,
      greeter,
    };
  }
);
