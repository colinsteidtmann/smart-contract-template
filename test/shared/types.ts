import { Greeter } from "../../typechain";
import { Fixture, MockContract } from "ethereum-waffle";

declare module "mocha" {
  export interface Context {
    greeter: Greeter;
  }
}
