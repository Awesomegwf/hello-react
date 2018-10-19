import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {

  constructor(props){
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    }
    
    // 将bind(this)写在这里改变函数this指向,可以提高代码的性能(涉及到react底层)
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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

  handleDelete(index) {
      console.log(index)
    // 在react中改变state数据时，一般复制一个副本进行操作
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list  // 在ES6中键和值名字一样时，可直接写成 list
    })
  }

  getTodoItems() {
    return (
      // 此处this指代组件实例
      this.state.list.map((item, index) => {
        // 父组件通过属性的形式向子组件传递参数
        return (
          <TodoItem 
            delete={this.handleDelete} 
            key={index} 
            content={item} 
            index={index}
          />
        )
      }) 
    )
  }

  // render函数只能返回一个包裹标签
  // 如果想返回多个标签，可以用React.Fragment标签替换div

  render() {
    return (
      <Fragment>
      <div>
        <input value={this.state.inputValue} onChange={this.handleInputChange}/>
        {/* 此处this指代button,bind(this)后指向组件实例 */}
        {/* 在react中年写行内样式时应该按照对象的方式编码,最外面花括号表示js表达式，
        里面的花括号表示js对象
        style={{background: 'red', color: '#fff'}} 
        */}
        <button className='red-btn' onClick={this.handleBtnClick}>add</button>
      </div>
        <ul>{this.getTodoItems()}</ul>
      </Fragment>
    );
  }
}

export default TodoList;
