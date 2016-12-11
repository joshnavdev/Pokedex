class SearchBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      element: 'doapps'
    };
    this.changeText = this.changeText.bind(this);
  }

  getName() {
    return 'Bootcamp JS'
  }

  changeText(event){
    const text = event.target.value;
    // this.state.element = text;
    this.setState({
      element: text
    });
  }

  render(){
    const name = this.getName();
    const {nombre} = this.props;
    const {element} = this.state;
    return (
      <div>
        <h1>Hello World {name}, {nombre} y {element}</h1>
        <input type="text" onChange = {this.changeText} />
      </div>
    )

  }
}
