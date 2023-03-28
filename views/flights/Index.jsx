import React from "react"
import DefaultLayout from '../layouts/DefaultLayout'

function Index(props) {
    // can't use hooks or state 
    // can't use event listeners in the same way

    const currentDate = new Date()

    return (
        <DefaultLayout>
            <div>
                <h3>Flights Status</h3>
                <div>
                    <table>
                        <thead>
                            <tr className="t-header">
                                <th>AIRLINE</th>
                                <th>FLIGHT #</th>
                                <th>DATE</th>
                                <th>TIME</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.flights?.map((flight, index) => 
                                <tr style={flight.departs.getTime() < currentDate.getTime() ? {backgroundColor: '#FFD4D4'} : {backgroundColor: 'none'}} key={index}>
                                    <td>{flight.airline}</td>
                                    <td>{flight.flightNo}</td>
                                    <td>{flight.departs.toLocaleDateString()}</td>
                                    <td>{flight.departs.toLocaleTimeString()}</td>
                                    <td style={{fontWeight: '200', fontStyle: 'oblique'}}><a href={`/flights/${flight._id}`} style={{color: '#1A5F7A'}}>See details</a></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <br/><br/>

                <form className="form-index" action="/flights/new">
                    <button className="btn-index">ADD NEW FLIGHT</button>
                </form>

                <form className="form-index" action="/flights/clear?_method=DELETE" method="POST">
                    <button className="btn-index">CLEAR</button>
                </form>
            </div>
        </DefaultLayout>

    )
}

export default Index;