
import React, { useState } from 'react';

function Counter(){
    // Set up the state for the count value
    const [count, setCount] = useState(0);

    // Add functions to increase and decrease the count

    // return some JSX
    return(
        <div>
            {/* Some elements go here */}
            <p>Count: {count}</p>
            {/* Buttons to be added later */}
        </div>
    )
}

export default Counter;