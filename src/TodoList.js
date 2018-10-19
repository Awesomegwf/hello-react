import React from 'react';

class TodoList extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    }
  }
  
  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  render() {
    return (
      <div>
      <div>
        <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
        {/* 此处this指代button,bind(this)后指向组件实例 */}
        <button onClick={this.handleBtnClick.bind(this)}>add</button>
      </div>
      <ul>
        {
          // 此处this指代组件实例
          this.state.list.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
      </div>
    );
  }
}

export default TodoList;
