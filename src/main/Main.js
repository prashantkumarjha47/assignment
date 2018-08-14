import React from "react";
import LanguageDetection from "./LanguageDetection";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "", //This var holds the value entered in the text field
      result: [], //This array holds the response sent by the api
      error: false //This var shows the response status of the api
    };
  }
  /**
   * This is to set the value entered in the text field to the state var
   */
  change = e => {
    this.setState({
      query: e.target.value
    });
  };
  /**
   * This is to call the api on click of submit button
   */
  submit = () => {
    this.setState({
      error: false
    });
    fetch(
      `http://apilayer.net/api/detect?access_key=33505b7acd732000eadb050d5e692700&query=${
        this.state.query
      }`
    )
      .then(resp => {
        if (resp.ok) return resp.json();
      })
      .then(resp => {
        if (resp.success) return this.setState({ result: resp.results || [] });
        this.setState({
          error: true
        });
      })
      .catch(err => console.log(err));
  };
  /**
   * This is to reset the application to initial state
   */
  reset = () => {
    this.setState({
      query: "",
      error: false,
      result: []
    });
  };
  render() {
    return (
      <LanguageDetection
        change={this.change}
        submit={this.submit}
        reset={this.reset}
        {...this.state}
      />
    );
  }
}
export default Main;
