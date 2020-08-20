import React from "react";

import "./Count.sass";

const Count = () => {
    // компонент
    return (
        <div className="wrapperPrintCount">
            <p>
                Количество выполненых задач: <span>0</span>
            </p>
            <p>
                Количество избранных задач: <span>0</span>
            </p>
        </div>
    );
};

export default Count;
