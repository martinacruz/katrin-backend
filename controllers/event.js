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

// const show = (req, res) => {
//     db.event.findByPk(req.params.id).then((foundEvents) => {
//         if (!foundEvents) return res.json({
//             message: 'Event with provided ID not found.'
//         })

//         res.json({ event: foundEvents })
//     })
//         .catch(err => console.log("Error at event#show", err))
// }

const create = (req, res) => {
    db.event.create({
        where: {
            userId: req.body.userId,
            name: req.body.name,
            date: req.body.date,
            location: req.body.location,
            time: req.body.time,
            description: req.body.description,
        }
    }).then((createdEvent) => {
        res.json({ createdEvent, message: "New event created" })
    })
        .catch(err => console.log("Error at event#create", err))
}

// const update = (req, res) => {
//     // make the update route
//     db.event.update(req.body, {
//         where: {
//             id: req.params.id
//         }
//     }).then((updatedEvent) => {
//         // Validations and error handling here
//         res.json({ event: updatedEvent})
//     })
//         .catch(err => console.log("Error at event#index", err))
// }

//not sure
const destroy = (req, res) => {
    db.event.destroy({
        where: { 
            userId: req.params.userId 
        }
    }).then(() => {
        res.json({ message: `Event with id ${req.params.id} has been deleted`})
    })
        .catch(err => console.log("Error at event#index", err))
}


module.exports = {
    index,
    //show,
    create,
    //update,
    destroy,
};