import React, { Component } from "react";
import { connect } from "react-redux";
import { map } from "lodash";
export default class selectBox extends Component {
  onChange = (val) => {
    const { onChange, value } = this.props;
    console.log(value, "vaaaaa");
    onChange(val);
  };
  renderOptions = () => {
    const { data, val } = this.props;
    return map(data, (d) => (
      <option key={d.ID} value={val || d.ID}>
        {d.Value}
      </option>
    ));
  };
  render() {
    console.log("gethnaaaaaaaa");
    const { className } = this.props;
    return (
      <select
        className={className}
        placeholder="choose"
        onChange={this.onChange.bind(this)}
      >
        {this.renderOptions()}
      </select>
    );
  }
}

export const select = selectBox;
