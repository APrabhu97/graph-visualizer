import React from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import "./dropdown-component.scss";
const classNames = require("classnames");
interface Props {
  label: string;
  options: DropdownOption[];
  onSelectOption: (data: any) => void;
}

export interface DropdownOption {
  label: string;
  data?: any;
}

interface State {
  isDropdownOpen: boolean;
}

export class DropdownComponent extends React.Component<Props, State> {
  state: Readonly<State> = {
    isDropdownOpen: false,
  };

  closeDropdown = () => {
    this.setState({ isDropdownOpen: false });
  };

  componentDidUpdate() {
    setTimeout(() => {
      if (this.state.isDropdownOpen) {
        window.addEventListener("click", this.closeDropdown);
      } else {
        window.removeEventListener("click", this.closeDropdown);
      }
    }, 0);
  }

  render() {
    const options = this.props.options.map((option) => (
      <div
        key={option.label}
        className="dropdown-option"
        onClick={() => this.props.onSelectOption(option.data)}
      >
        {option.label}
      </div>
    ));
    const dropdownTitleClass = classNames({
      "dropdown-title": true,
      clicked: this.state.isDropdownOpen,
      unclicked: !this.state.isDropdownOpen,
    });
    return (
      <div
        className="dropdown-body"
        onClick={() => {
          this.setState({ isDropdownOpen: !this.state.isDropdownOpen });
        }}
      >
        <div className={dropdownTitleClass}>
          <div className="dropdown-label">{this.props.label}</div>
          <div className="icon-container">
            {this.state.isDropdownOpen ? (
              <FaAngleUp className="caret-up-icon" />
            ) : (
              <FaAngleDown className="caret-down-icon" />
            )}
          </div>
        </div>
        {this.state.isDropdownOpen && (
          <div className="dropdown-option-container">{options}</div>
        )}
      </div>
    );
  }
}
