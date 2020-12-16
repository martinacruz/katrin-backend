//create an event to pass into the main page.
// a single page will manage all of CRUD

const db = require('../models');

const index = (req, res) => {
    db.event.findAll().then((foundEvents) => {
        if (!foundEvents) return res.json({
            message: 'No scheduled events.'
        })

        res.json({ events: foundEvents})
    })
        .catch(err => console.log("Error at event#index", err))
}

const show = (req, res) => {
    db.event.findByPk(req.params.id).then((foundEvents) => {
        if (!foundEvents) return res.json({
            message: 'Event with provided ID not found.'
        })

        res.send('Incomplete event#show controller function')
    })
        .catch(err => console.log("Error at event#index", err))
}

const create = (req, res) => {
    db.event.create(req.body).then((createdEvent) => {

        // validations?

        res.send('Incomplete event#create controller function')
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
        res.send('Incomplete event#update controller function')
    })
        .catch(err => console.log("Error at event#index", err))
}

//not sure
const destroy = (req, res) => {
    db.event.destroy({
        where: { id: req.params.id }
    }).then(() => {
        res.send('Incomplete event#delete controller function')
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