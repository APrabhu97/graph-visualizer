import { AlgorithmRegistry } from "./algorithm-registry";

@AlgorithmRegistry.register("dijkstras")
export class DijkstrasAlgorithm {
  label = "Dijkstra's Algorithm";

  doAThing() {}

  getLabel() {
    return this.label;
  }
}
