import React from "react";
import "./graph-node-component.scss";
import { GraphNode } from "./graph-node-model";

interface Props {
  nodeData: GraphNode;
}

interface State {}

export default class GraphNodeComponent extends React.Component<Props, State> {
  render() {
    const {
      row,
      column,
      onMouseDown,
      onMouseEnter,
      onMouseUp,
      isWall,
    } = this.props.nodeData;
    const dynamicCssClass = isWall ? "wall" : "";
    return (
      <div
        id={`node-${row}-${column}`}
        className={"graph-node " + dynamicCssClass}
        onMouseDown={(event) => {
          event.preventDefault();
          onMouseDown(row, column);
        }}
        onMouseEnter={() => onMouseEnter(row, column)}
        onMouseUp={() => onMouseUp(row, column)}
      ></div>
    );
  }
}
