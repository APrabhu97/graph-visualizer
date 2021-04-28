import React from "react";
import "./graph-node-component.scss";
import { GraphNode, NodeType } from "./graph-node-model";

interface Props {
  nodeData: GraphNode;
}

export function GraphNodeComponent(props: Props) {
  const typeTemplateMap = new Map<NodeType, any>()
    .set("start", <div className="start-node"></div>)
    .set("target", <div className="target-node"></div>)
    .set("wall", <div className="wall"></div>);

  const {
    id,
    row,
    column,
    onMouseDown,
    onMouseEnter,
    onMouseUp,
    type,
  } = props.nodeData;

  return (
    <div
      id={id}
      className="graph-node"
      onMouseDown={() => onMouseDown(row, column)}
      onMouseEnter={() => onMouseEnter(row, column)}
      onMouseUp={() => onMouseUp(row, column)}
    >
      {typeTemplateMap.get(type!)}
    </div>
  );
}
