import { AlgorithmRegistry } from "./algorithm-registry";

@AlgorithmRegistry.register("astar")
export class AstarAlgorithm{
    label:string;
    doAThing(){
        console.log("reached astar");
    }
    constructor(){
        this.label = "A* Search";
    }

    getLabel(){
        return this.label;
    }
}