import React from 'react';



function Main(props){

    return (
    <div>
        {/* this is a comment. A comment cannot be the first line after a return */}
        {console.log('hello from Main-body.js')}
        <img className="Pretty-Picture" src={props.PrettyPhoto} alt="Iceland with Northern Lights" />
        <main>
            <h1>World Wide Travel Main Body</h1>
            <p>This is the main body text.</p>
        </main>
    </div>
    );
}

export default Main;

