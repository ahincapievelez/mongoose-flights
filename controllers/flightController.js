const Flight = require('../models/flightModel')
const Destination = require('../models/destinationModel')

// module.exports.seed = async (req, res) => {
//     await Posts.deleteMany({})
//     await Posts.create(posts)
//     res.redirect('/posts')
// }

module.exports.index = async (req, res) => {
    const flights = await Flight.find().sort({ departs: 1 })
    res.render('flights/Index', { flights: flights})
}

module.exports.new = async (req, res) => {
    const newFlight = new Flight()
    const departsDate = newFlight.departs.toISOString().slice(0, 16)
    res.render('flights/New', { departsDate })
}

module.exports.delete = async (req, res) => {
    // first find the post, store it in a variable, then delete it from database
    const flight = await Flight.findByIdAndDelete(req.params.id)
    // delete all comments where the comment id 
    await Destination.deleteMany({ _id: { 
        // equals/matches any comment ids in this array
        $in: flight.destinations 
    }})
    res.redirect('/flights')
}

module.exports.update = async (req, res) => {
    await Flight.findByIdAndUpdate(req.params.id, req.body)
    res.redirect(`/flights/${req.params.id}`)
}

module.exports.edit = async (req, res) => {
    const flight = await Flight.findById(req.params.id)
    res.render('flights/Edit', { flight })
}

module.exports.create = async (req, res) => {
    try {
        // use the model to interact with db and create a new document in the fruit collection
        const flight = await Flight.create(req.body)
        res.redirect('/flights')
    } catch(err) {
        console.log('error')
    }
}

module.exports.show = async (req, res) => {
    // populate replaces the ids with actual documents/objects we can use
    const flight = await Flight.findById(req.params.id).populate({path: 'destinations', options: {sort: {arrival: 1}}})
    res.render('flights/Show', { flight: flight })
}

module.exports.clear = async (req, res) => {
    try {
        await Flight.deleteMany({})
        res.redirect('/flights')
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}


// EXTRA LOGIC (for destinations)

module.exports.createDestination = async (req, res) => {
    // create a document in our destination collection
    const destination = await Destination.create(req.body)
    // find the flight
    await Flight.findByIdAndUpdate(req.params.id, {
        // and push the new destination document's id
        $push: {
            // to the destination's flight field/property
            destinations: destination._id
        }
    })
    res.redirect(`/flights/${req.params.id}`)
}

module.exports.indexDestination = async (req, res) => {
    // target the destination property 
    res.send('')
}

module.exports.showDestination = async (req, res) => {
    // find the destination and filter it's destinations property array
    const destination = await Destination.findById(req.params.did)
    res.render('destinations/Edit', { flightId: req.params.id, destination })
}

module.exports.updateDestination = async (req, res) => {
    // update a comment by updating an item in the comments property in post
    await Destination.findByIdAndUpdate(req.params.did, req.body)
    res.redirect(`/flights/${req.params.id}`)
}

module.exports.deleteDestination = async (req, res) => {
    // first use the id to delete the comment from the comments collection
    await Destination.findByIdAndDelete(req.params.did)
    // then use the post's id to find the post
    await Flight.findByIdAndUpdate(req.params.id, {
        // and pull/remove the reference id (to the comment) from
        $pull: {
            // the comments array
            destinations: req.params.did
        }
    })
    res.redirect(`/flights/${req.params.id}`)
}