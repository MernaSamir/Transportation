import React from "react";
import { reduxForm, Field } from "redux-form";
import { map, get, toLower } from "lodash";
import * as InputComponnets from "./components/types";
import "./style.scss";
/**
 * @author
 * @function CompanyData
 **/
const CompanyData = (props) => {
  const { countries, cities } = props;
  const renderField = ({
    input,
    data,
    label,
    type,

    meta: { touched, error, warning },
  }) => {
    // const { countries, input, label, type } = props;

    const Comp = get(InputComponnets, toLower(type), toLower(type));

    return (
      <div className="element">
        <label className="control-label">{label}</label>
        <div>
          <Comp
            {...input}
            // placeholder={label}
            // type={type}
            data={data}
            className="form-control"
          />
          {touched && error && <span className="text-danger">{error}</span>}
        </div>
      </div>
    );
  };
  const controls = [
    { name: "ID", label: "Company ID #", type: "Input" },
    { name: "Name", label: "Company Name", type: "Input" },
    { name: "Address", label: "Company Address", type: "Input" },
    { name: "Country", label: "Country", type: "Select" },
    { name: "City", label: "City", type: "Select" },
    { name: "TelephoneNumber", label: "Company Telephone Num.", type: "Input" },
    { name: "ContactPerson_Name", label: "Contact Person Name", type: "Input" },
    {
      name: "ContactPerson_TelephoneNumber",
      label: "Contact Person Tele. Num.",
      type: "Input",
    },
    {
      name: "ContactPerson_Email",
      label: "Contact Person Email",
      type: "Input",
    },
  ];
  return (
    <div className="div">
      <p>Company Data</p>
      {map(controls, (d) => {
        return (
          <Field
            data={d.name == "Country" ? countries : cities}
            name={d.name}
            component={renderField}
            label={d.label}
            type={d.type}
            validate={props.required}
          />

          // <Field
          //   name={d.name}
          //   label={d.label}
          //   type={d.type}
          //   component={renderComponent}
          //   validate={props.required}
          // />
        );
      })}
    </div>
  );
};
export default CompanyData;
