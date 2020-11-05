import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchCompanies } from "../../actions/transportationActions";
import CompaniesList from "./list";
import {
  GetCountries,
  getVehicleTypes,
  getCities,
} from "../../actions/lookupActions";
import "./style.scss";
class Companies extends Component {
  componentWillMount() {
    this.props.fetchCompanies();
    this.props.GetCountries();
    this.props.getCities(1);
    this.props.getVehicleTypes();
  }
  handleClick = () => {
    this.props.history.push("./new");
  };

  render() {
    const { companies } = this.props;
    return (
      <div>
        <div>
          <button className="button" onClick={this.handleClick}>
            + Add Transportation
          </button>
        </div>
        <CompaniesList companies={companies} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  companies: state.companies.items,
});

export default connect(mapStateToProps, {
  fetchCompanies,
  GetCountries,
  getVehicleTypes,
  getCities,
})(withRouter(Companies));
