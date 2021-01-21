import React from "react";
import GraphContainer from "../graph-container/graph-container";
import { Header } from "../header/header";

import "./app-container.css";

interface Props {}

interface State {
  windowHeight: number;
  headerHeight: number | undefined;
  width: number;
}

export default class AppContainer extends React.Component<Props, State> {
  headerElement: HTMLElement | undefined | null;
  state: Readonly<State> = {
    windowHeight: 0,
    headerHeight: 0,
    width: 0,
  };
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    const headerHeight = this.headerElement?.clientHeight;
    const windowHeight = window.innerHeight;
    const width = window.innerWidth;
    if (
      this.state.windowHeight !== windowHeight ||
      this.state.width !== width
    ) {
      this.setState({
        headerHeight: headerHeight,
        width: width,
        windowHeight: windowHeight,
      });
    }
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    return (
      <div className="app-container">
        <div
          className="header-container"
          ref={(headerElement) => {
            this.headerElement = headerElement;
          }}
        >
          <Header />
        </div>
        <div className="graph-container">
          <GraphContainer
            graphHeight={this.state.windowHeight - this.state.headerHeight!}
            graphWidth={this.state.width}
          />
        </div>
      </div>
    );
  }
}
