//imports
const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/:userId', ctrl.event.index)
//router.get('/:id', ctrl.event.show)
router.post('/', ctrl.event.create)
//router.put('/:id', ctrl.event.update)
router.delete('/:userId', ctrl.event.destroy)

// export
module.exports = router;
