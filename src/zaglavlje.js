import React from 'react';

function Zaglavlje(props)
{
    return(
        <>
        <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={props.url} alt="" width="30" height="24" class="d-inline-block align-text-top"/>
            {props.naslov}
          </a>
        </div>
      </nav>
        </>
        )
    
}
export default Zaglavlje;