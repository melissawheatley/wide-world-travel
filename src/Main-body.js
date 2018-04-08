import React from 'react';
import prettyPhoto from './img/ICELAND.jpg';

function Main(props){

    return (
    <main className="Pretty-Picture">
        {/* this is a comment. A comment cannot be the first line after a return */}
        {console.log('hello from Main-body.js')}
        <img src={prettyPhoto} alt="Iceland with Northern Lights" />
        <h1>World Wide Travel Main Body</h1>
        <p>This is the main body text.</p>
    </main>
    );
}

export default Main;

