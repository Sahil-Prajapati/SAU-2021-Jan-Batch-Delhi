import React from "react";
import PropTypes from "prop-types";

class Todolist extends React.Component {
  static propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        todo: PropTypes.string,
        marked: PropTypes.bool,
      })
    ),
  };

  
  render() {
    const { todos, markTaskAsCompleted } = this.props;

    var todoList;
    if (this.props.filterBy==='pending') 
    {
        todoList = todos.filter(todo => {
          return todo.marked === false;
        });
    }
    else if(this.props.filterBy==='completed') 
    {
    todoList = todos.filter(todo => {
        return todo.marked === true;
      });
    }
    else{
        todoList = [...todos];
    }

    return (
      <div>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {todoList
            ? todoList.map((value, index) => {
                return (
                  <li key={index} className="TaskRow">
                    <label
                      style={
                        value.marked
                          ? {
                              textDecoration: "line-through",
                            }
                          : {}
                      }
                      className={value.marked ? "checked" : ""}
                    >
                      <input
                        type="checkbox"
                        checked={value.marked}
                        onChange={(event) => markTaskAsCompleted(event, index)}
                      />
                      {value.todo}
                    </label>
                    <button className="hidden"
                     onClick = {this.props.delTodo.bind(this, value.id)}
                     style = {{backgroundColor: 'red'}}>Delete</button>
                     
                    <button className="hidden"
                     onClick = {this.props.duplicateTodo.bind(this, value.id)}
                     style = {{backgroundColor: '#4CAF50'}}>Duplicate</button>
                  </li>
                );
              })
            : null}
        </ul>
      </div>
    );
  }
}

// const Todolist = (props) => {
//     const { todos, title } = props;

//     return (
//       <div>
//         <h3>{title}</h3>
//         <ul>
//           {todos
//             ? todos.map((todo, index) => {
//                 return <li>{todo}</li>;
//               })
//             : null}
//         </ul>
//       </div>
//     );
// }

export default Todolist;
