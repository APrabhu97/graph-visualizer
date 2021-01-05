import { AlgorithmRegistry } from "./algorithm-registry";

@AlgorithmRegistry.register
export class DijkstrasAlgoritm{
    doAThing(){
        console.log("reached dijkstras");
    }
}