import React from "react"
import DefaultLayout from '../layouts/DefaultLayout';

function New(props) {

    return (
        <DefaultLayout>
            <div>
                <h3>New Flight</h3>

                <form className="add-flight" action="/flights" method="POST">
                    <label htmlFor="airln">Airline:</label><br />
                    <input type="text" id="airln" name="airline" /><br /><br />

                    <label htmlFor="flNum">Flight Number:</label><br />
                    <input type="text" id="flNum" name="flightNo" /><br /><br />

                    <label htmlFor="airport">Select Airport:</label><br />
                    <select id="airport" name="airport" >
                        <option value="SAN">SAN</option>
                        <option value="AUS">AUS</option>
                        <option value="DAL">DAL</option>
                        <option value="LAX">LAX</option>
                        <option value="SEA">SEA</option>
                    </select>
                    <br /><br />

                    <label htmlFor="dprts">Departs:</label><br />
                    <input type="datetime-local" id="dprts" name="departs" defaultValue={props.departsDate}/><br /><br />

                    <button className="btn-destination">SUBMIT</button>
                </form>
                <br /><br />
                <form className="form-index" action="/flights">
                    <button className="btn-index">BACK</button>
                </form>
            </div>
        </DefaultLayout>
    )
}

export default New;