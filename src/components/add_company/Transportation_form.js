import React, { useState } from "react";
import { Field, reduxForm, submit, FieldArray } from "redux-form";
import { renderBuses } from "./buses";
import CompanyData from "./company_data";
import {
  createCompany,
  updateCompany,
} from "../../actions/transportationActions";
import { connect } from "react-redux";
import { find } from "lodash";
const num_of_buses = 3;

const required = (v) => {
  if (!v || v === "") {
    return "This field is required";
  }

  return undefined;
};
const onSubmit = (values, dispatch, props) => {
  const { companies } = props;
  console.log(props, "cooommmm", values);
  const flag = find(companies, { ID: values.ID });
  if (!flag) {
    createCompany(JSON.stringify(values));
  } else {
    console.log("uuuuuuppp");
    updateCompany(JSON.stringify(flag.ID, values));
  }
  alert(JSON.stringify(values));
};

// const getBuses = (vehicleTypes, setBuses) => {
//   console.log("d5lttt kan");
//   return (
//     <>
//       <BusData
//         ID={1}
//         setBuses={setBuses}
//         vehicleTypes={vehicleTypes}
//         required={required}
//       />
//       ;
//       <BusData
//         ID={2}
//         setBuses={setBuses}
//         vehicleTypes={vehicleTypes}
//         required={required}
//       />
//       ;
//     </>
//   );
// };
let FormCode = (props) => {
  const {
    handleSubmit,
    valid,
    reset,
    pristine,
    submitting,
    countries,
    cities,
    vehicleTypes,
  } = props;
  const company = props.activeCompany;
  return (
    <form onSubmit={handleSubmit}>
      <CompanyData countries={countries} cities={cities} required={required} />
      <FieldArray
        name="TransportationCompanyBuses"
        vehicleTypes={vehicleTypes}
        component={renderBuses}
        required={required}
      />

      {/* {getBuses(vehicleTypes, setBuses)} */}

      <div className="div">
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear
        </button>
        <button type="submit" disabled={pristine || submitting}>
          Save
        </button>
      </div>
    </form>
  );
};
FormCode = reduxForm({
  form: "Parent",
  onSubmit,
  enableReinitialize: true,
})(FormCode);
// export default FormCode;
const mapStateToProps = (state) => ({
  countries: state.selects.countries,
  cities: state.selects.cities,
  vehicleTypes: state.selects.vehicleTypes,
  // activeCompany: state.companies.item,
  initialValues: state.companies.item,
  companies: state.companies.items,
});

export default connect(mapStateToProps, { createCompany })(FormCode);
