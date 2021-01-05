import React from "react";
import { DropdownComponent } from "../dropdown/dropdown-component";
import "./header.scss";
import {
  AlgorithmRegistry,
  Algorithm,
} from "./../../algorithms/algorithm-registry";
interface Props {}

interface State {
  selectedAlgorithm: any;
}

export default class Header extends React.Component<Props, State> {
  state: Readonly<State> = {
    selectedAlgorithm: null,
  };
  implementedAlgorithms: AlgorithmRegistry.Constructor<Algorithm>[] = [];
  onAlgorithmSelected = (data: any) => {
    this.setState({ selectedAlgorithm: data });
    console.log(this.implementedAlgorithms);
  };
  componentDidMount() {
    this.implementedAlgorithms = AlgorithmRegistry.GetImplementations();
  }
  render() {
    const dropdownData = {
      label: "Algorithms",
      options: [
        {
          label: "Dijkstra's Algorithm",
          data: { key: "dijkstra", label: "Dijkstra's Algorithm" },
        },
        { label: "A* Search", data: { key: "aStar", label: "A* Search" } },
      ],
    };

    return (
      <div className="header-component">
        <div className="dropdown-container">
          <DropdownComponent
            label={dropdownData.label}
            options={dropdownData.options}
            onSelectOption={this.onAlgorithmSelected}
          />
        </div>
        <button className="visualize-button">
          Visualize{" "}
          {this.state.selectedAlgorithm
            ? this.state.selectedAlgorithm.label
            : null}
        </button>
      </div>
    );
  }
}
