import { network } from "hardhat";
import { developmentChains } from "../../helper-hardhat-config";
import { setupGreeter } from "../shared/fixtures";
import { shouldDeploy } from "./Greeter/ShouldDeploy";
import "../shared/types";
!developmentChains.includes(network.name)
  ? describe.skip
  : describe("Unit Tests", async function () {
      describe("Greeter", async () => {
        beforeEach(async () => {
          const { deployer, greeter } = await setupGreeter();
          this.deployer = deployer;
        });

        shouldDeploy();
      });
    });
