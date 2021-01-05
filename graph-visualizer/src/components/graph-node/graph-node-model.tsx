export interface GraphNode {
  column: number;
  row: number;
  isStart: boolean;
  isFinish: boolean;
  distance: number;
  isVisited: boolean;
  isWall: boolean;
  previousNode: Node | null;
  onMouseDown: (row: number, column: number) => void;
  onMouseEnter: (row: number, column: number) => void;
  onMouseUp: (row: number, column: number) => void;
  mouseIsPressed: boolean;
}
