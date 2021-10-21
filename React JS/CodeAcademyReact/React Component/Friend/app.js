import React from 'react';
import ReactDOM from 'react-dom';

const friends = [
    {
    title: "Yummmmmmm",
    src: "https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys!  Wait Up!",
    src: "https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src: "https://content.codecademy.com/courses/React/react_photo-alpaca.jpg"
  }
    
]


class Friend extends React.Component{
    render() {
        const friend = friends[0];
        return(
            <div>
                <h1>
                    {friend.title}
                </h1>
                <img 
                    src={friend.src}
                />
            </div>
        );
    }

}

ReactDOM.render(<Friend/>, document.getElementById('app'));