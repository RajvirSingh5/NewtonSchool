import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';

let message;

if(useReducer.age >= drinkingAge) {
    message = (
        <h1>
            Hey, check out this alcoholic beverage!
        </h1>
    );
}else {
    message = (
        <h1>
            Hey, check out these diamonds I got in my living room.
        </h1>
    );
}

ReactDOM.render(message, document.getElementById('app'));
