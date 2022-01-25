import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Tarefas from "./componentes/Tarefas";
class App extends Component {
  render() {
    return (
      <div className="App">
      <Tarefas titulo="To-Do" />
      </div>
    );
  }
}

export default App;