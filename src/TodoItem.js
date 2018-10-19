import React from 'react';

class TodoItem extends React.Component {

  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this);
  }
 
  handleDelete() {
    this.props.delete(this.props.index);
  }

  render() {
    const { content } = this.props;
    return (
      // 子组件通过props来接收父组件传递过来的参数
      // 子组件如果想和父组件通信,子组件要调用父组件传递过来的方法
      <div onClick={this.handleDelete}>{content}</div>
    )
  }
}

export default TodoItem;