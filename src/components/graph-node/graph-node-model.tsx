export interface GraphNode {
  id: string;
  column: number;
  row: number;
  type: NodeType | null;
  distance: number;
  previousNode: GraphNode | null;
  onMouseDown: (row: number, column: number) => void;
  onMouseEnter: (row: number, column: number) => void;
  onMouseUp: (row: number, column: number) => void;
}

export type NodeType = 'start' | 'target' | 'wall' | 'visited' | 'shortestPath';