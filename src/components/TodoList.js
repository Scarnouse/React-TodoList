import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/TodoList.css';

import TodoListItem from './TodoListItem'

class TodoList extends Component {
  constructor(props){
      super(props);
      this.state = {
          items: this.props.items
      }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.length !== this.state.items.length) {
        this.setState({ items: nextProps.items });
    }
  }

  render() {
    let items = this.props.items.map((currentValue, index, array) => {
        return (
            <TodoListItem 
                name={ currentValue } 
                key={ index }
            />
        )
    });

    return (
    <div className="TodoList">
       <ul>
        { items }
       </ul>
    </div>
    );
  }
}

TodoList.propTypes = {
    items: PropTypes.array.isRequired
}

export default TodoList;