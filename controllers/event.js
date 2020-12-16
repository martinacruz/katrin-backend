//create an event to pass into the main page.
// a single page will manage all of CRUD

const db = require('../models');

const index = (req, res) => {
    console.log('inside index')
    db.event.findAll().then((foundEvents) => {
        if (!foundEvents) return res.json({
            message: 'No scheduled events.'
            
        })

        console.log(foundEvents)
        res.json({ events: foundEvents })
    })
        .catch(err => console.log("Error at event#index", err))
}

const show = (req, res) => {
    db.event.findByPk(req.params.id).then((foundEvents) => {
        if (!foundEvents) return res.json({
            message: 'Event with provided ID not found.'
        })

        res.json({ event: foundEvents })
    })
        .catch(err => console.log("Error at event#index", err))
}

const create = (req, res) => {
    db.event.create(req.body).then((createdEvent) => {

        res.json({ event: createdEvent })
    })
        .catch(err => console.log("Error at event#index", err))
}

const update = (req, res) => {
    // make the update route
    db.event.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then((updatedEvent) => {
        // Validations and error handling here
        res.json({ event: updatedEvent})
    })
        .catch(err => console.log("Error at event#index", err))
}

//not sure
const destroy = (req, res) => {
    db.event.destroy({
        where: { id: req.params.id }
    }).then(() => {
        res.json({ message: `Event with id ${req.params.id} has been deleted`})
    })
        .catch(err => console.log("Error at event#index", err))
}


module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};