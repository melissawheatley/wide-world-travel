import React from 'react';

function Footer(props){

    return (
    <footer>
        <div>
        <h3>Destinations</h3>
        <ul>
            <li><a href="#">Iceland</a></li>
            <li><a href="#">Democratic Republic of Congo</a></li>
            <li><a href="#">New Zealand</a></li>
            <li><a href="#">Greece</a></li>
        </ul>
        <p className = "Copyright">&copy; 2018 World Wide Travel</p>
        </div>
    </footer>
    );
}

export default Footer;