import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { map } from "lodash";
import "../style.scss";
import { withRouter } from "react-router";
import { getCompany } from "../../../actions/transportationActions";
import { connect } from "react-redux";

class List extends Component {
  getCompany = (ID) => {
    const { history } = this.props;
    this.props.getCompany(ID);
    history.push("/new");
  };
  renderRowData = (row) => {
    return (
      <>
        <td></td>
        <td>{row.ID} </td>
        <td>{row.Name} </td>
        <td>00 </td>
        <td>
          <button onClick={this.getCompany.bind(this, row.ID)}>Edit</button>
        </td>
      </>
    );
  };
  render() {
    const { companies } = this.props;
    return (
      <table class="table table-striped">
        <thead>
          <tr>
            <th></th>
            <th> Company ID #</th>
            <th>Company Name</th>
            <th>Total Fleet</th>
            <th style={{ paddingLeft: "8%" }}>
              <FontAwesomeIcon icon={["fas", "cog"]} />
            </th>
          </tr>
        </thead>
        <tbody>
          {map(companies, (d, key) => (
            <tr key={key}>{this.renderRowData(d)}</tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default connect(null, { getCompany })(withRouter(List));
