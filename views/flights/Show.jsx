import React from "react"
import DefaultLayout from '../layouts/DefaultLayout'

function Show(props) {
    // can't use hooks or state 
    // can't use event listeners in the same way

    let airportsDestinations = ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']
    let airportsInObjt = [] //['LAX', 'SAN', 'SEA']

    for (let i = 0; i < props.flight.destinations.length; i++) {
        airportsInObjt.push(props.flight.destinations[i].airport.toString())
    }
    
    for (let i = 0; i < airportsInObjt.length; i++) {
        const index = airportsDestinations.findIndex(item => item == airportsInObjt[i])
        airportsDestinations.splice(index, 1)
    }

    const currentDate = new Date()

    return (
        <DefaultLayout>
            <div>
                <h1 className="title">{props.flight.airline} {props.flight.flightNo}</h1>
                <div className="details-box"> 
                    <p>From: {props.flight.airport}</p>
                    <p>Departs: {props.flight.departs.toLocaleDateString()} at {props.flight.departs.toLocaleTimeString()}</p>

                    {props.flight.destinations.length ?
                        <>
                            <p>Destinations:</p>

                            {props.flight?.destinations?.map((destination, index) => 
                                <div className="destination-box" key={index}>
                                    <p>To: {destination.airport}</p>
                                    <p>Arrival: {destination.arrival.toLocaleDateString()} at {destination.arrival.toLocaleTimeString()}</p>
                                    <form className="form-index" action={`/flights/${props.flight._id}/destinations/${destination._id}`}>
                                        <button className="btn-destination">EDIT</button>
                                    </form>
                                    
                                    <form className="form-index" action={`/flights/${props.flight._id}/destinations/${destination._id}?_method=DELETE`} method="POST">
                                        <button className="btn-destination">DELETE DESTINATION</button>
                                    </form>
                                    <br /><br />
                                </div>
                            )}
                        </>
                        :
                        <>
                            Destinations: TBD
                            <br/><br/>
                        </>
                    }
                </div>

                <details className="add-destination">
                    <summary>ADD DESTINATION</summary>
                    <br /><br />
                    <form action={`/flights/${props.flight._id}/destinations`} method="POST">
                        <label htmlFor="airport">Select Airport:</label><br />
                        <select id="airport" name="airport">
                            {airportsDestinations.map((destination, index) => 
                                <div key={index}>
                                    <option value={destination}>{destination}</option>
                                </div>
                            )}
                        </select>

                        <br /><br />

                        <label htmlFor="arrival">Arrival:</label><br />
                        <input type="datetime-local" id="arrival" name="arrival" defaultValue={props.departsDate}/><br /><br />
                        <button className="btn-destination">ADD DESTINATION</button>
                    </form>
                </details>

                <br/><br/>

                <form className="form-index" action="/flights">
                    <button className="btn-index">BACK</button>
                </form>

                <form className="form-index" action={`/flights/${props.flight._id}/edit`}>
                    <button className="btn-index">EDIT FLIGHT</button>
                </form>

                <form className="form-index" action={`/flights/${props.flight._id}?_method=DELETE`} method="POST">
                    <button className="btn-index">DELETE FLIGHT</button>
                </form>
            </div>
        </DefaultLayout>

    )
}

export default Show;