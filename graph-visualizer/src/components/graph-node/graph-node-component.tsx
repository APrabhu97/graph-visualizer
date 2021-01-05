import React from "react";
import "./graph-node-component.css";
import { GraphNode } from "./graph-node-model";

interface Props {
  nodeData: GraphNode;
}

interface State {}

export default class GraphNodeComponent extends React.Component<Props, State> {
  render() {
    return (
      <div
        id={`node-${this.props.nodeData.row}-${this.props.nodeData.column}`}
        className="graph-node"
      ></div>
    );
  }
}
