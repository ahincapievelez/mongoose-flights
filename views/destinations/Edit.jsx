import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout';

function Edit(props) {
    return ( 
        <DefaultLayout>
            <div>
                <h3>Edit Destination</h3>
                    <form className="add-flight" action={`/flights/${props.flightId}/destinations/${props.destination._id}?_method=PUT`} method="POST">
                        <label htmlFor="airport">Select Airport:</label><br />
                        <select id="airport" name="airport" >
                            <option defaultValue={props.destination.airport}>{props.destination.airport}</option>
                            <option value="AUS">Austin, TX</option>
                            <option value="DAL">Dallas, TX</option>
                            <option value="LAX">Los Angeles, CA</option>
                            <option value="SAN">San Francisco, CA</option>
                            <option value="SEA">Seattle, WA</option>
                        </select>
                        <br /><br />

                        <label htmlFor="arrival">Arrival:</label><br />
                        <input type="datetime-local" id="arrival" name="arrival" defaultValue={props.destination.arrival.toISOString().slice(0, 16)}/><br /><br />
                        <button className="btn-destination">SUBMIT</button>
                    </form>

                    <br /><br />

                    <form action={`/flights/${props.destinationId}`}>
                        <button className="btn-index">Back</button>
                    </form>
            </div>
        </DefaultLayout>
    );
}

export default Edit;