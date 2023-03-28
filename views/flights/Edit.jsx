import React from "react"
import DefaultLayout from '../layouts/DefaultLayout';

function Edit(props) {

    return (
        <DefaultLayout>
            <div>
                <h3>Edit Flight</h3>
                <form className="add-flight" action={`/flights/${props.flight._id}?_method=PUT`} method="POST">
                    <label htmlFor="airln">Airline:</label><br />
                    <input type="text" id="airln" name="airline" defaultValue={props.flight.airline}/><br /><br />

                    <label htmlFor="flNum">Flight Number:</label><br />
                    <input type="text" id="flNum" name="flightNo" defaultValue={props.flight.flightNo}/><br /><br />

                    <label htmlFor="airport">Select Airport:</label><br />
                    <select id="airport" name="airport" >
                        <option defaultValue={props.flight.airport}>{props.flight.airport}</option>
                        <option value="AUS">Austin, TX</option>
                        <option value="DAL">Dallas, TX</option>
                        <option value="LAX">Los Angeles, CA</option>
                        <option value="SAN">San Francisco, CA</option>
                        <option value="SEA">Seattle, WA</option>
                    </select>
                    <br /><br />

                    <label htmlFor="dprts">Departs:</label><br />
                    <input type="datetime-local" id="dprts" name="departs" defaultValue={props.flight.departs.toISOString().slice(0, 16)}/><br /><br />

                    <button className="btn-destination">Submit</button>
                </form>
                <br /><br />
                <form action={`/flights/${props.flight._id}`}>
                    <button className="btn-index">BACK</button>
                </form>
            </div>
        </DefaultLayout>
    )
}

export default Edit;