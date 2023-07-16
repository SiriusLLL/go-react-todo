import React from "react";
import "./App.css";
import { Container } from "semantic-ui-react"
import TodoList from "./To-Do-List"


function App() {
  return (
    <div>
      <Container>
        <TodoList />
      </Container>
    </div>
  );
}

export default App;