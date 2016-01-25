require('../css/styles.css');

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import kanji_dict_data from './kanji_dict_data.js';

class InputBox extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearText = this.clearText.bind(this);
    this.state = { value: '' };
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.onSearch(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();

    // When the form is submitted, call the onSearch callback that is passed to the component
    this.props.onSearch(this.state.value);

    // Unfocus the text input field
    ReactDOM.findDOMNode(this).querySelector('input').blur();
  }

  clearText() {
    this.setState({value: ''});
    this.props.onSearch('');
  }

  render() {
    return (
      <form id="input_form" className="form-horizontal" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <div className="col-xs-12 col-md-12 col-md-offset-0">
            <div className="input-group">
              <input type="text" className="form-control" id="address" placeholder="简体中文输入 -> 日文汉字输出..."
              value={this.state.value} onChange={this.handleChange} />
              <span className="input-group-btn">
                <span className="glyphicon glyphicon-remove" aria-hidden="false" onClick={this.clearText}></span>
              </span>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export class App extends Component {
  constructor(props) {
    super(props);
    this.convertToKanji = this.convertToKanji.bind(this);
    this.state = { kanjified_string: ''};
  }

  convertToKanji(input_string) {
    var output_string = "";
    for (var i = 0; i < input_string.length; i++) {
      var convertedKanji = kanji_dict_data[input_string.charAt(i)];
      if (convertedKanji) {
        output_string = output_string.concat(convertedKanji[0]);
      } else {
        output_string = output_string.concat(input_string.charAt(i));
      }
    }
    this.setState({ kanjified_string: output_string });
  }

  render() {
    return (
      <div>
        <div className="col-xs-12 col-md-8">
          <h1>Kanjify Simplified Chinese</h1>
        </div>
        <InputBox onSearch={this.convertToKanji} />
        <div className="col-xs-12 col-md-8">
          <h2>{this.state.kanjified_string}</h2>
        </div>
      </div>
    );
  }
}
