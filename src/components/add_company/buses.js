import { toLower, get, map } from "lodash";
import * as InputComponnets from "./components/types";
import { Field } from "redux-form";

import "./style.scss";
const getYears = (startYear) => {
  var currentYear = new Date().getFullYear(),
    years = [];
  startYear = startYear || 1980;
  while (startYear <= currentYear) {
    years.push({ Value: startYear++ });
  }
  return years;
};
const controls = (member) => [
  {
    name: `${member}.BusTypeID`,
    label: "Vechile Type 1",
    type: "Select",
  },
  {
    name: `${member}.Brand`,
    label: "Brand",
    type: "Input",
  },
  {
    name: `${member}.YearModel`,
    label: "Year Model",
    type: "Select",
  },
  {
    name: `${member}.Description`,
    label: "Description",
    type: "Input",
  },
  {
    name: `${member}.Number_Of_Seats`,
    label: "Number Of Seats",
    type: "Input",
  },
  {
    name: `${member}.Number_Of_Seats_Per_Raw`,
    label: "Number Of Seats Per Raw",
    type: "Input",
  },
  {
    name: `${member}.Total_Number_Of_Buses`,
    label: "Total Number Of Buses",
    type: "Input",
  },
  {
    name: `${member}.Bus_Layout`,
    label: "Vechile Layout",
    type: "Input",
  },
  {
    name: `${member}.Notes`,
    label: "Notes",
    type: "Input",
  },
];
const renderField = ({
  input,
  data,
  label,
  type,
  val,
  meta: { touched, error, warning },
}) => {
  const Comp = get(InputComponnets, toLower(type), toLower(type));

  return (
    <div className="element">
      <label className="control-label">{label}</label>
      <div>
        <Comp
          // placeholder={label}
          // type={type}
          {...input}
          val={val}
          data={data}
          className="form-control"
        />
        {touched &&
          ((error && <span className="text-danger">{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  );
};
export const renderBuses = ({
  vehicleTypes,
  required,
  fields,
  meta: { error, submitFailed },
}) => {
  const years = getYears(2019 - 30);
  !fields.length && fields.push({});
  return (
    <div className="busesCont">
      {submitFailed && error && <span>{error}</span>}

      {fields.map((member, index) => (
        <div key={index}>
          <p>{`Bus ${index + 1} Data`}</p>
          <div className="div">
            {map(controls(member), (d) => {
              return (
                <Field
                  name={d.name}
                  component={renderField}
                  label={d.label}
                  type={d.type}
                  validate={required}
                  data={d.name == `${member}.BusTypeID` ? vehicleTypes : years}
                  //   val={d.name == "YearModel" ? "Value" : ""}
                />
              );
            })}
          </div>
          {index != 0 && (
            <button
              type="button"
              title="Remove Member"
              onClick={() => fields.remove(index)}
            >
              Remove
            </button>
          )}
          <button type="button" onClick={() => fields.push({})}>
            Add
          </button>
        </div>
      ))}
    </div>
  );
};
