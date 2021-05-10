import { GraphNode } from "../components/graph-node/graph-node-model";
import { AlgorithmRegistry } from "./algorithm-registry";

@AlgorithmRegistry.register("dijkstras")
export class DijkstrasAlgorithm {
  label = "Dijkstra's Algorithm";
  graph: GraphNode[][] | undefined;
  maxRows: number | undefined;
  maxCols: number | undefined;

  getGraphWithSelectedPath(graph: GraphNode[][]): GraphNode[][] {
    const shortestPathSet: GraphNode[] = [];
    let startNode: GraphNode;
    let targetNode: GraphNode;
    let targetFound = false;
    this.graph = graph;
    this.maxRows = graph.length - 1;
    this.maxCols = graph[0].length - 1;
    graph.forEach((row) => {
      startNode = startNode || row.find((node) => node.type === "start")!;
      targetNode = targetNode || row.find((node) => node.type === "target")!;
    });
    startNode!.distance = 0;
    let currentNode = startNode!;
    while (!targetFound) {
      this.reccCalcDistance(currentNode, currentNode);
      targetFound = targetNode!.distance !== Infinity;
    }
    return graph;
  }

  private reccCalcDistance(node: GraphNode, prevNode: GraphNode) {
    if (node && node.type !== "visited") {
      node.distance = prevNode.distance + 1;
      node.type = ['start','target'].includes(node.type!) ? node.type : "visited";
      if (node.row > 0) {
        this.reccCalcDistance(this.graph![node.row - 1][node.column], node);
      }
      if (node.column > 0) {
        this.reccCalcDistance(this.graph![node.row][node.column - 1], node);
      }
      if (node.row < this.maxRows!) {
        this.reccCalcDistance(this.graph![node.row + 1][node.column], node);
      }
      if (node.column < this.maxCols!) {
        this.reccCalcDistance(this.graph![node.row][node.column + 1], node);
      }
    }
  }

  getLabel() {
    return this.label;
  }
}
