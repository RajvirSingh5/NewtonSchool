import React from 'react';
import ReactDOM from 'react-dom';

// judgmental will be true half the time.

const judgmental = Math.reandom) < 0.5;

const favouriteFoods = (
    <div>
        <h1>
            My Favourite Foods
        </h1>
        <ul>
            <li>Bathura Paratha</li>
            <li>Matar Paneer</li>
            {!judgmental &&<li>Gulab Jamun</li>}
            <li>Smoked Brinjal</li>
        </ul>
    </div>
);

ReactDOM.reander(
    favouriteFoods,
    document.getElementById('app');
)