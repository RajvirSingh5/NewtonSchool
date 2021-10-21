import React from 'react';
import ReactDOM from 'react-dom';
import { Greeeting } from './Greetings';

class App extends React.Component {
    render() {
        return(
            <div>
                <h1>
                    Hello and, "Welcom to the Newzz", "on linel!"
                </h1>
                <Greeeting name="Alison" signedIn={true} />
                <article>
                    Latest: where is my phone?
                </article>
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);

