import React from "react";
import FormCode from "./components//add_company/Transportation_form";
import CompaniesList from "./components/companies";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

class App extends React.Component {
  render() {
    library.add(faCog);

    return (
      <Provider store={store}>
        <div className="all">
          <p className="header">Transportation</p>
          <Router>
            <Route exact path="/" component={CompaniesList} />
            <Route path="/new" component={FormCode} />
          </Router>
          {/* <FormCode /> */}
        </div>
      </Provider>
    );
  }
}

export default App;
