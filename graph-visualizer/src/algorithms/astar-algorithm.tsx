import { AlgorithmRegistry } from "./algorithm-registry";

@AlgorithmRegistry.register("astar")
export class AstarAlgorithm{
    doAThing(){
        console.log("reached astar");
    }
}