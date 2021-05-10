import { GraphNode } from "../components/graph-node/graph-node-model";
import { AlgorithmRegistry } from "./algorithm-registry";

@AlgorithmRegistry.register("astar")
export class AstarAlgorithm {
  label = "A* Search";

  getLabel() {
    return this.label;
  }

  getGraphWithSelectedPath(graph: GraphNode[][]): GraphNode[][] {
    return graph;
  }
}
