import { AlgorithmRegistry } from "./algorithm-registry";

@AlgorithmRegistry.register("dijkstras")
export class DijkstrasAlgorithm{
    doAThing(){
        console.log("reached dijkstras");
    }
}