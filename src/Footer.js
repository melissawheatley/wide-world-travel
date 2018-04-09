import React from 'react';

function Footer(props){
   const place = props.destinations.map((destination) =>
       <li><a href={destination.url}>{destination.name}</a></li>
   );
    
    return (
    <footer>
        <div>
        <h3>Destinations</h3>
        <ul>{place}</ul>
        <p className = "Copyright">&copy; 2018 World Wide Travel</p>
        </div>
    </footer>
    );
}

export default Footer;