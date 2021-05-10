import React from "react";
import "./graph-node-component.scss";
import { GraphNode, NodeType } from "./graph-node-model";
import SelectedPathNode from "./selected-path-node/selected-path-node.component";
import StartNode from "./start-node/start-node.component";
import TargetNode from "./target-node/target-node.component";
import VisitedNode from "./visited-node/visited-node.component";
import WallNode from "./wall-node/wall-node.component";

interface Props {
  nodeData: GraphNode;
}

export function GraphNodeComponent(props: Props) {
  const typeTemplateMap = new Map<NodeType, any>()
    .set("start", <StartNode />)
    .set("target", <TargetNode />)
    .set("wall", <WallNode />)
    .set("shortestPath", <SelectedPathNode />)
    .set("visited", <VisitedNode />);

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
