import React from 'react';
import TodoItem from './TodoItem';

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

  handleItemClick(index) {
    console.log(index)
    // 在react中改变state数据时，一般复制一个副本进行操作
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list  // 在ES6中键和值名字一样时，可直接写成 list
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
            return <TodoItem />
          }) 
        }
      </ul>
      </div>
    );
  }
}

export default TodoList;
