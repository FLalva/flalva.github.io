import ReactMarkdown from "https://cdn.skypack.dev/react-markdown";

const DEFAULT_INPUT = "# H1 \n## H2 \n[Google](https://google.com)\n \n`In line Code` \n> Blockquote\n\n```\nfunction name() {\n   do something()\n}\n```\n\n**bold**\n\n* List Item 1 \n\n![puppy](https://www.thesprucepets.com/thmb/EnVypN9a56iuuOcZ93YOvLjp4-s=/941x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/stages-of-puppy-development-2804675-hero-d6906018203d45dfa05393bf7c27a93c.jpg)";

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: DEFAULT_INPUT };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value });

  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement(GetInput, {
        input: this.state.inputValue,
        handleChange: this.handleChange }), /*#__PURE__*/

      React.createElement(RenderInput, { input: this.state.inputValue })));


  }}
;

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "centre edit" }, /*#__PURE__*/
      React.createElement("textarea", { rows: "10", cols: "70", id: "editor", value: this.props.input,
        onChange: this.props.handleChange })));



  }}
;

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "preview" }, /*#__PURE__*/
      React.createElement(ReactMarkdown, null, this.props.input)));


  }}
;

ReactDOM.render( /*#__PURE__*/React.createElement(MyApp, null), document.getElementById('myapp'));