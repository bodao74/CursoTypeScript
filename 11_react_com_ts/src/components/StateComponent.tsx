import React, { useState, ChangeEvent } from 'react';

const StateComponent = () => {
    const [text, setText] = useState<string | null>(null);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }
    return (
        <div>
            <p>StateComponent</p>
            <p>O texto é: {text}</p>
            <input type='text' onChange={handleChange}></input>
        </div>
    );
};

export default StateComponent;