import React from 'react';

import Header from './components/Header';
import SearchInput from './components/SearchInput';
import Filter from './components/Filter';
import TodoList from './components/TodoList';
import AddTask from './components/AddTask';
import Count from './components/Count';

import './App.css';

class App extends React.Component {
  state = {
    todolist: [
      { message: "Task 1", important: false, done: false, id: 1 },
      { message: "Task 2", important: false, done: false, id: 2 },
      { message: "Task 3", important: false, done: false, id: 3 },
      { message: "Task 4", important: false, done: false, id: 4 },
      { message: "Task 5", important: false, done: false, id: 5 },
    ],
  };

  onDelete(id) {
    console.log(id);
  }

  onImportant(id) {
    console.log(id);
  }

  render() {
    const { todolist } = this.state;

    return (
      <div className="wrapper">
        <Header />
        <SearchInput />
        <Filter />
        <TodoList todos={todolist} onDelete={this.onDelete} onImportant={this.onImportant} />
        <AddTask />
        <Count />
      </div>
    );
  }
}

export default App;
