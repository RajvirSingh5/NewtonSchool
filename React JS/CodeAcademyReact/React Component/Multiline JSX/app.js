import React from 'react';
import ReactDOM from 'react-dom';

class QuoteDisplay extends React.Component {
    render() {
        return(
            <blockquote>
                <p>
                    The heart doesn't speak, but you must listen.
                </p>
                <cite>
                <a target="_blank" 
          href="https://en.wikipedia.org/wiki/Susan_Sontag">
          Susan Sontag
          </a>
                </cite>
            </blockquote>
        );
    }
}


ReactDOM(<QuoteDisplay/>, document.getElementById('app'));