const express = require('express')

const router = express.Router()

const flightControl = require('../controllers/flightController')

// // seed 
// router.get('/seed', postControl.seed)

// index
router.get('/', flightControl.index)

// new
router.get('/new', flightControl.new)

// // clear
router.delete('/clear', flightControl.clear)

// // delete
router.delete('/:id', flightControl.delete)

// // update
router.put('/:id', flightControl.update)

// // create
router.post('/', flightControl.create)

// // edit 
router.get('/:id/edit', flightControl.edit)

// // show
router.get('/:id', flightControl.show)



// EXTRA ROUTES (for destinations)

router.post('/:id/destinations', flightControl.createDestination)

router.delete('/:id/destinations/:did', flightControl.deleteDestination)

router.get('/:id/destinations', flightControl.indexDestination)

router.get('/:id/destinations/:did', flightControl.showDestination)

router.put('/:id/destinations/:did', flightControl.updateDestination)

module.exports = router