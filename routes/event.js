//imports
const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/:userId', ctrl.event.index)
router.post('/', ctrl.event.create)
router.put('/:userId/:id', ctrl.event.update)
router.delete('/:userId/:id', ctrl.event.destroy)

// export
module.exports = router;
