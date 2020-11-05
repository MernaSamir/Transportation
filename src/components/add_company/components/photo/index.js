import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { map, get, find, reject } from "lodash";
const config = {
  headers: {
    "content-type": "multipart/form-data",
  },
};
export class photo extends Component {
  onChangeFile(index, event) {
    event.stopPropagation();
    event.preventDefault();
    const file = event.target.files[0];
    const formData = new window.FormData();
    formData.append("file", file);
  }

  render() {
    const { field, width } = this.props;
    return (
      <div className="photos">
        {map((v, index) => {
          return (
            <div className="outerDiv" key={index}>
              <button
                className="button"
                onClick={() => {
                  this.upload.click();
                }}
                type="button"
                style={{ width: width ? width : undefined }}
              >
                {<img />}

                <input
                  type="file"
                  id="file"
                  ref={(ref) => (this.upload = ref)}
                  style={{ display: "none" }}
                  onChange={this.onChangeFile.bind(this, index)}
                />
              </button>
            </div>
          );
        })}
        <div className="outerDiv">
          <button
            className="button"
            onClick={() => {
              this.upload.click();
            }}
            type="button"
          >
            <FontAwesomeIcon
              icon="camera"
              size="5x"
              color="#b7b7b7"
              className="camera"
            />

            <input
              type="file"
              id="file"
              ref={(ref) => (this.upload = ref)}
              style={{ display: "none" }}
              onChange={this.onChangeFile.bind(this)}
            />
          </button>
        </div>
      </div>
    );
  }
}
export default photo;
