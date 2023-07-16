import React, { Component } from "react";
import axios from "axios";
import { Card, Header, Form, Input, Icon } from "semantic-ui-react";

let endpoint = "http://localhost:9000";

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            task: "",
            items: [],
        };
    }
    componentDidMount() {
        this.getTask();
    }

    render() {
        return (
            < div >
                <div className="row">
                    <Header className="header" as="h2" color="yellow">
                        To-Do List
                    </Header>
                </div>
                <div className="row">
                    <Form onSubmit={this.onSubmit}>
                        <Input
                            type="text"
                            name="task"
                            onChange={this.onChange}
                            value={this.state.task}
                            fuild
                            placeholder="Create a task"
                        />
                    </Form>
                </div>
            </div>
        );
    }
}

export default TodoList;

