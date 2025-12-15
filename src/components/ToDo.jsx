
import React, { useState } from 'react';

function ToDo({ label }){
    const [isCompleted, setIsCompleted] = useState(false);

    const handleToggle = () => {
        setIsCompleted((prev) => !prev);
    }

    return (
        <div>
            <label>
                <input 
                    type='checkbox'
                    checked={ isCompleted }
                    onChange={handleToggle}
                />
                <span
                    style={{
                        textDecoration: isCompleted ? 'line-through': 'none'
                    }}
                >{label}</span>
            </label>
        </div>
    )
}

export default ToDo;