import { useState } from "react";
import { DropdownComponent } from "../dropdown/dropdown-component";
import { Algorithm, AlgorithmRegistry } from "./../../algorithms";
import "./header.scss";

export function Header() {
  const keyVsAlgoMap = AlgorithmRegistry.GetImplementationMap();

  const onAlgorithmSelected = (data: { key: string }) => {
    if (keyVsAlgoMap.has(data.key)) {
      const algorithm = keyVsAlgoMap.get(data.key)!;
      setSelectedAlgorithm(algorithm);
      algorithm.doAThing();
    }
  };
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<Algorithm | null>(
    null
  );

  const dropdownOptions: {
    label: string;
    data: { key: string; label: string };
  }[] = [];
  keyVsAlgoMap.forEach((algo, key) => {
    dropdownOptions.push({
      label: algo.getLabel(),
      data: { key: key, label: algo.getLabel() },
    });
  });
  const dropdownData = {
    label: "Algorithms",
    options: dropdownOptions,
  };

  return (
    <div className="header-component">
      <div className="dropdown-container">
        <DropdownComponent
          label={dropdownData.label}
          options={dropdownData.options}
          onSelectOption={onAlgorithmSelected}
        />
      </div>
      <button className="visualize-button">
        Visualize {selectedAlgorithm?.getLabel()}
      </button>
    </div>
  );
}
