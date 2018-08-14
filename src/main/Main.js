import React from "react";
import LanguageDetection from "./LanguageDetection";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      result: [],
      error: false
    };
  }

  change = e => {
    this.setState({
      query: e.target.value
    });
  };
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
  reset = () => {
    this.setState({
      query: "",
      error: false
    });
  };
  clear = refData => {};
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
