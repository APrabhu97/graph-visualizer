import { AlgorithmRegistry } from "./algorithm-registry";

@AlgorithmRegistry.register("dijkstras")
export class DijkstrasAlgorithm{
    label: string;
    doAThing(){
        console.log("reached dijkstras");
    }
    constructor(){
        this.label = "Dijkstra's Algorithm";
    }

    getLabel(){
        return this.label;
    }
}