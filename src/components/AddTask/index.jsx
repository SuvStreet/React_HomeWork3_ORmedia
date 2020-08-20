import React from "react";

import "./AddTask.sass";

const AddTask = () => {
    // компонент
    return (
        <div className="wrapperInputTask">
            <input
                className="inputTask"
                type="text"
                placeholder="Добавить задачу..."
            />
            <button className="addBtn" id="addBtn">
                <span>Добавить</span>
            </button>
        </div>
    );
};

export default AddTask;
