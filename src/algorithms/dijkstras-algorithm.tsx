import { flatMap } from "lodash";
import { GraphNode } from "../components/graph-node/graph-node-model";
import { BinaryMinHeap } from "../utils/binary-min-heap";
import { AlgorithmRegistry } from "./algorithm-registry";

@AlgorithmRegistry.register("dijkstras")
export class DijkstrasAlgorithm {
  label = "Dijkstra's Algorithm";

  getUpdatedGrid(graph: GraphNode[][]): GraphNode[] {
    const orderedVisitedNodes: GraphNode[] = [];
    let startNode: GraphNode;
    let targetNode: GraphNode;
    graph.forEach((row) => {
      startNode = startNode || row.find((node) => node.type === "start")!;
      targetNode = targetNode || row.find((node) => node.type === "target")!;
    });
    const unorderedNodes = flatMap(graph);
    startNode!.distance = 0;
    const minHeap = new BinaryMinHeap<GraphNode>(
      "distance",
      "id",
      unorderedNodes
    );
    while (minHeap.length()) {
      const closestNode = minHeap.getMin();
      if (closestNode === targetNode!) break;
      if (closestNode!.distance === Infinity) break;
      if(closestNode?.type === 'wall')continue;
      closestNode!.type = ["target", "start"].includes(closestNode!.type!)
        ? closestNode!.type
        : "visited";
      const neighbors = this.updateNeighbors(graph, closestNode!);
      neighbors.forEach((node) => minHeap.delete(node));
      neighbors.forEach((node) => minHeap.insert(node));
      orderedVisitedNodes.push(closestNode!);
      minHeap.popMin();
    }
    return orderedVisitedNodes;
  }

  updateNeighbors(graph: GraphNode[][], currentNode: GraphNode): GraphNode[] {
    const neighbors = this.getNeighbors(graph, currentNode);
    neighbors.forEach((node) => {
      node.distance = currentNode.distance + 1;
      node.previousNode = currentNode;
    });
    return neighbors;
  }

  getNeighbors(graph: GraphNode[][], currentNode: GraphNode): GraphNode[] {
    const neighbors: GraphNode[] = [];
    const { column, row } = currentNode;
    if (row > 0) neighbors.push(graph[row - 1][column]);
    if (column > 0) neighbors.push(graph[row][column - 1]);
    if (graph.length - 1 > row) neighbors.push(graph[row + 1][column]);
    if (graph[0].length - 1 > column) neighbors.push(graph[row][column + 1]);
    return neighbors.filter((node) => node.type !== "visited");
  }

  getLabel() {
    return this.label;
  }
}
