//create an event to pass into the main page.
// a single page will manage all of CRUD

const db = require('../models');

const index = (req, res) => {
    console.log("inside")
    db.event.findAll({
        where: {
            userId: req.params.userId
        }
    }).then((foundEvents) => {
        console.log(foundEvents)
        if (!foundEvents) return res.json({
            message: 'No scheduled events.'
        })
        res.json(foundEvents)
    })
        .catch(err => console.log("Error at event#index", err))
}

const create = (req, res) => {
    db.event.create({
            userId: req.user.id,
            name: req.body.name,
            date: req.body.date,
            location: req.body.location,
            time: req.body.time,
            description: req.body.description,
    }).then((createdEvent) => {
        res.json({ createdEvent, message: "New event created" })
    })
        .catch(err => console.log("Error at event#create", err))
}

const update = (req, res) => {
    // make the update route
    db.event.update(req.body, {
        where: {
            id: req.body.id
        }
    }).then((updatedEvent) => {
        // Validations and error handling here
        res.json({ updatedEvent, message:"Your event has been updated"})
    })
        .catch(err => console.log("Error at event#index", err))
}


const destroy = (req, res) => {
    db.event.findOne({
        where: { 
            id: req.params.id 
        }
    }).then((foundEvent) => {
        console.log(foundEvent)
        foundEvent.destroy().then(() => res.sendStatus(200));
    })
}


module.exports = {
    index,
    create,
    update,
    destroy,
};