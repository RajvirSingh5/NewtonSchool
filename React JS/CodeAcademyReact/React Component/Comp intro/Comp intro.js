
/* Below line Creates JS object. This object contains properties that are needed to make React work such as
React.createElement() and React.Component
*/
import React from 'react';

/* Below lines creates another JS object. This object contains method 
that help react interact with the DOM such ReactDOM.render()
*/ 
import ReactDOM from 'react-dom';

/* Below line creates a component CLASS.   */
class MyComponentClass extends React.Component {
    render() {
        return <h1>Hello world</h1>;
    }
}


ReactDOM.render(
    <MyComponentClass />,
    document.getElementById('app')
);


