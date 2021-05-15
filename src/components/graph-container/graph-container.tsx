import { cloneDeep } from "lodash";
import React, { useEffect, useRef, useState } from "react";
import { setTimeout } from "timers";
import { Algorithm } from "../../algorithms";
import { GraphNodeComponent } from "../graph-node/graph-node-component";
import { GraphNode, NodeType } from "../graph-node/graph-node-model";
import "./graph-container.css";

interface Props {
  graphHeight: number;
  graphWidth: number;
  selectedAlgorithm: Algorithm | undefined;
  canExecuteAlgorithm: boolean;
  setExe: () => void;
}

export function GraphContainer(props: Props) {
  const NODE_HEIGHT = 25.5;
  const NODE_WIDTH = 25;
  const maxCols = Math.floor(props.graphWidth / NODE_WIDTH);
  const maxRows = Math.floor(props.graphHeight / NODE_HEIGHT);
  const startNodeId = `node-${Math.floor(maxRows / 2)}-${
    maxCols - Math.floor(maxCols * 0.9)
  }`;
  const targetNodeId = `node-${Math.floor(maxRows / 2)}-${
    maxCols - Math.floor(maxCols * 0.1)
  }`;

  const [isMousePressed, _setMousePressed] = useState<boolean>(false);
  const isMousePressedRef = useRef(isMousePressed);
  const setMousePressed = (setPressed: boolean) => {
    isMousePressedRef.current = setPressed;
    _setMousePressed(setPressed);
  };

  const getNodeId = (row: number, column: number): string => {
    return `node-${row}-${column}`;
  };

  const getNodeType = (currentId: string): NodeType | null => {
    switch (currentId) {
      case startNodeId:
        return "start";
      case targetNodeId:
        return "target";
      default:
        return null;
    }
  };

  const getNewGraphWithWallToggle = (
    graph: GraphNode[][],
    row: number,
    column: number
  ): GraphNode[][] => {
    const newGraph = graph.slice();
    const graphNode = newGraph[row][column];
    newGraph[row][column] = {
      ...graphNode,
      type: getUpdatedType(graphNode.type),
    };
    return newGraph;
  };

  const onNodePressed = (row: number, column: number) => {
    setMousePressed(true);
    setGraph(getNewGraphWithWallToggle(graph, row, column));
  };

  const onNodeEnter = (row: number, column: number) => {
    if (isMousePressedRef.current) {
      setGraph(getNewGraphWithWallToggle(graph, row, column));
    }
  };

  const onNodeUnpressed = () => {
    setMousePressed(false);
  };

  const createNode = (column: number, row: number): GraphNode => {
    const id = getNodeId(row, column);
    const type = getNodeType(id);
    return {
      id: id,
      column: column,
      row: row,
      type: type,
      previousNode: null,
      distance: Infinity,
      onMouseDown: onNodePressed,
      onMouseEnter: onNodeEnter,
      onMouseUp: onNodeUnpressed,
    };
  };

  const createGraphNodes = (
    maxRows: number,
    maxCols: number
  ): GraphNode[][] => {
    const graphNodes: GraphNode[][] = [];
    for (let rowNum = 0; rowNum < maxRows; rowNum++) {
      const currentRowColumns: GraphNode[] = [];
      for (let colNum = 0; colNum < maxCols; colNum++) {
        currentRowColumns.push(createNode(colNum, rowNum));
      }
      graphNodes.push(currentRowColumns);
    }
    return graphNodes;
  };

  const [graph, setGraph] = useState<GraphNode[][]>(
    createGraphNodes(maxRows, maxCols)
  );

  const getUpdatedType = (currentType?: NodeType | null): NodeType | null => {
    switch (currentType) {
      case "wall":
        return null;
      case "start":
        return "start";
      case "target":
        return "target";
      case "visited":
        return "visited";
      default:
        return "wall";
    }
  };
  const { canExecuteAlgorithm, selectedAlgorithm, setExe } = props;
  useEffect(() => {
    if (canExecuteAlgorithm) {
      setExe();
      const updatedGraph = selectedAlgorithm!.getUpdatedGrid(cloneDeep(graph));
      const selectedPath = selectedAlgorithm!.getSelectedPath!(updatedGraph)!;
      updatedGraph.forEach((node) => {
        setTimeout(() => {
          graph[node.row][node.column] = node;
          setGraph(cloneDeep(graph));
        }, 5);
      });
      selectedPath.forEach((node) => {
        setTimeout(() => {
          graph[node.row][node.column] = node;
          setGraph(cloneDeep(graph));
        }, 5);
      });
    }
  }, [canExecuteAlgorithm, selectedAlgorithm, setExe, graph]);

  const graphComponent = graph.map((rows, col) => {
    return (
      <div key={col}>
        {rows.map((row) => {
          return (
            <GraphNodeComponent
              key={row.id}
              nodeData={row}
            ></GraphNodeComponent>
          );
        })}
      </div>
    );
  });

  return <div className="graph-nodes">{graphComponent}</div>;
}
