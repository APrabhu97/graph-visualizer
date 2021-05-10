import { DropdownComponent } from "../dropdown/dropdown-component";
import { Algorithm, AlgorithmRegistry } from "./../../algorithms";
import "./header.scss";
interface Props {
  onAlgorithmSelected: (alorithm: Algorithm) => void;
  selectedAlgorithm: Algorithm | undefined;
  executeAlgorithm: () => void;
}
export function Header(props: Props) {
  const keyVsAlgoMap = AlgorithmRegistry.GetImplementationMap();

  const onAlgorithmSelected = (data: { key: string }) => {
    if (keyVsAlgoMap.has(data.key)) {
      const algorithm = keyVsAlgoMap.get(data.key)!;
      props.onAlgorithmSelected(algorithm);
    }
  };

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
      <button className="visualize-button" onClick={() => props.executeAlgorithm()}>
        Visualize {props.selectedAlgorithm?.getLabel()}
      </button>
    </div>
  );
}
