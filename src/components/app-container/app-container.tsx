import React, { useEffect, useState } from "react";
import { Algorithm } from "../../algorithms";
import { GraphContainer } from "../graph-container/graph-container";
import { Header } from "../header/header";
import "./app-container.css";

interface Props {}

interface State {
  windowHeight: number;
  headerHeight: number | undefined;
  width: number;
}

export default function AppContainer(props: Props) {
  // const headerElement: HTMLElement | undefined | null;
  /*   state: Readonly<State> = {
    windowHeight: 0,
    headerHeight: 0,
    width: 0,
  }; */
  const [windowHeight, setWindowHeight] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [headerHeight, setHeaderHeight] = useState<number | undefined>(0);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<Algorithm>();
  const [canExecuteAlgorithm, setExecuteAlgorithm] = useState(false);

  const updateDimensions = () => {
    //  const currentHeaderHeight = headerElement?.clientHeight;
    const currentWindowHeight = window.innerHeight;
    const currentWindowWidth = window.innerWidth;
    if (
      windowHeight !== currentWindowHeight ||
      windowWidth !== currentWindowWidth
    ) {
      setWindowHeight(currentWindowHeight);
      setWindowWidth(currentWindowWidth);
      //   setHeaderHeight(currentHeaderHeight);
    }
  };

  useEffect(() => updateDimensions(), []);

  const graph = windowHeight ? (
    <div className="graph-container">
      <GraphContainer
        graphHeight={windowHeight - headerHeight!}
        graphWidth={windowWidth}
        selectedAlgorithm={selectedAlgorithm}
        canExecuteAlgorithm={canExecuteAlgorithm}
        setExe={() => setExecuteAlgorithm(false)}
      />
    </div>
  ) : null;
  return (
    <div className="app-container">
      <div
        className="header-container"
        ref={(headerElement) => setHeaderHeight(headerElement?.clientHeight)}
      >
        <Header
          onAlgorithmSelected={(algorithm) => setSelectedAlgorithm(algorithm)}
          selectedAlgorithm={selectedAlgorithm}
          executeAlgorithm={() => setExecuteAlgorithm(true)}
        />
      </div>
      {graph}
    </div>
  );
}
