import React from 'react'

function DefaultLayout(props) {
    return ( 
        <html>
            <head>
                <link rel="stylesheet" href="/styles.css" />
            </head>
            <body>
                <div className="nav-bar">
                    <a href="/flights">ALL FLIGHTS</a>
                    <a href="/flights/new">NEW FLIGHT</a>
                </div>
                <div className="container">
                    {props.children}
                </div>
            </body>
        </html>
    );
}

export default DefaultLayout;