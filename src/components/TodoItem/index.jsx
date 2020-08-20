import React from "react";
//import TodoList from "../TodoList";

import "./TodoItem.sass";

class TodoItem extends React.Component {
    state = {
        done: false,
        important: false,
    };

    /* constructor() {
        super();
        this.state = {
            done: true,
        };
    } */

    toggleDone() {
        this.setState((prevState) => {
            return {
                done: !prevState.done,
            };
        });
    }

    removeHandler() {
        this.props.onDelete();
    }

    toggleImportant() {
        this.setState((prevState) => {
            return {
                important: !prevState.important,
            };
        });
    }

    importantHalder() {
        this.props.onImportant();
    }

    render() {
        const { message } = this.props;
        let classNameText = "task-text";

        if (this.state.done) {
            classNameText += " text_is_done";
        }

        if (this.state.important) {
            classNameText += " text_is_important";
        }

        return (
            <div className="item">
                <span
                    className={classNameText}
                    onClick={() => this.toggleDone()}
                >
                    {message}
                </span>
                <div className="wrapperRemoveFavorites">
                    <button className="buttonRemove">
                        <i
                            className="fas fa-trash-alt"
                            onClick={() => this.removeHandler()}
                        ></i>
                    </button>
                    <button
                        className="buttonFavorites"
                        onClick={() => this.toggleImportant()}
                    >
                        <i
                            className="fas fa-star"
                            onClick={() => this.importantHalder()}
                        ></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default TodoItem;
