import React from "react";
import GraphNodeComponent from "../graph-node/graph-node-component";
import { GraphNode } from "../graph-node/graph-node-model";
import "./graph-container.css";

interface Props {
  graphHeight: number;
  graphWidth: number;
}

interface State {
  height: number | undefined;
  width: number | undefined;
  startNode: GraphNode | null;
  targetNode: GraphNode | null;
  graph: GraphNode[][];
  mouseIsPressed: boolean;
}
export default class GraphContainer extends React.Component<Props, State> {
  divElement: HTMLDivElement | null | undefined;
  NODE_HEIGHT = 25.5;
  NODE_WIDTH = 25;
  state: Readonly<State> = {
    height: 0,
    width: 0,
    startNode: null,
    targetNode: null,
    graph: [],
    mouseIsPressed: false,
  };

  createGraphNodes = (height: number, width: number): GraphNode[][] => {
    const maxCols = Math.floor(width / this.NODE_WIDTH);
    const graphNodes: GraphNode[][] = [];
    const maxRows = Math.floor(height / this.NODE_HEIGHT);
    for (let rowNum = 0; rowNum < maxRows; rowNum++) {
      const currentRowColumns: GraphNode[] = [];
      for (let colNum = 0; colNum < maxCols; colNum++) {
        currentRowColumns.push(this.createNode(colNum, rowNum));
      }
      graphNodes.push(currentRowColumns);
    }
    return graphNodes;
  };

  createNode = (column: number, row: number): GraphNode => {
    return {
      column: column,
      row: row,
      isStart:
        this.state.startNode?.column === column &&
        this.state.startNode?.row === row,
      isVisited: false,
      isWall: false,
      isFinish:
        this.state.targetNode?.column === column &&
        this.state.targetNode?.row === row,
      previousNode: null,
      distance: Infinity,
      onMouseDown: this.onNodePressed,
      onMouseEnter: this.onNodeEnter,
      onMouseUp: this.onNodeUnpressed,
      mouseIsPressed: false,
    };
  };

  onNodePressed = (row: number, column: number) => {
    console.log(row, column);
    this.setState({
      graph: this.getNewGraphWithWallToggle(this.state.graph, row, column),
      mouseIsPressed: true,
    });
  };

  onNodeEnter = (row: number, column: number) => {
    if (this.state.mouseIsPressed) {
      this.setState({
        graph: this.getNewGraphWithWallToggle(this.state.graph, row, column),
      });
    }
  };

  getNewGraphWithWallToggle = (
    graph: GraphNode[][],
    row: number,
    column: number
  ): GraphNode[][] => {
    const newGraph = graph.slice();
    const graphNode = newGraph[row][column];
    newGraph[row][column] = Object.assign({}, graphNode, {
      isWall: !graphNode.isWall,
    });
    return newGraph;
  };

  onNodeUnpressed = (row: number, column: number) => {
    this.setState({ mouseIsPressed: false });
  };

  componentDidMount() {
    this.setState({
      graph: this.createGraphNodes(
        this.props.graphHeight,
        this.props.graphWidth
      ),
      height: this.props.graphHeight,
      width: this.props.graphWidth,
    });
  }

  render() {
    if (
      this.props.graphHeight !== this.state.height ||
      this.props.graphWidth !== this.state.width
    ) {
      this.componentDidMount();
    }
    const graph = this.state.graph.map((rows, col) => {
      return (
        <div key={col}>
          {rows.map((row, rowIdx) => {
            return (
              <GraphNodeComponent
                key={rowIdx}
                nodeData={row}
              ></GraphNodeComponent>
            );
          })}
        </div>
      );
    });

    return <div className="graph-nodes">{graph}</div>;
  }
}
