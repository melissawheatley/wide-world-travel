import React from 'react';


function Header(props){
    return(
        <header className="App-header">
            <h1 className="App-title">{props.Title}</h1>
        </header>
    )
}

export default Header;