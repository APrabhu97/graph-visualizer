import React from "react";
import { DropdownComponent } from "../dropdown/dropdown-component";
import { Algorithm, AlgorithmRegistry } from "./../../algorithms";
import "./header.scss";
interface Props {}

interface State {
  selectedAlgorithm: any;
}

export default class Header extends React.Component<Props, State> {
  state: Readonly<State> = {
    selectedAlgorithm: null,
  };
  keyVsAlgoConstructorMap: Map<
    string,
    AlgorithmRegistry.Constructor<Algorithm>
  >;

  constructor(props: Props, state: State) {
    super(props);
    this.keyVsAlgoConstructorMap = AlgorithmRegistry.GetImplementationMap();
  }

  onAlgorithmSelected = (data: { key: string }) => {
    this.setState({ selectedAlgorithm: data });
    if (this.keyVsAlgoConstructorMap.has(data.key)) {
      const algorithm = new (this.keyVsAlgoConstructorMap.get(data.key)!)();
      algorithm.doAThing();
    }
  };

  render() {
    const dropdownData = {
      label: "Algorithms",
      options: [
        {
          label: "Dijkstra's Algorithm",
          data: { key: "dijkstras", label: "Dijkstra's Algorithm" },
        },
        { label: "A* Search", data: { key: "astar", label: "A* Search" } },
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
