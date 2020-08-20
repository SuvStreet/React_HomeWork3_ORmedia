import React from "react";

import TodoItem from "../TodoItem";

const TodoList = ({ todos, onDelete, onImportant }) => {
    const elements = todos.map((item) => {
        const { id, ...itemProps } = item;

        return (
            <TodoItem
                {...itemProps}
                key={id}
                onDelete={() => {
                    onDelete(id);
                }}
                onImportant={() => {
                    onImportant(id);
                }}
            />
        );
    });

    return <div className="wrapperTask">{elements}</div>;
};

export default TodoList;
