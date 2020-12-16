//imports
const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/', ctrl.event.index)
router.get('/:id', ctrl.event.show)
router.post('/', ctrl.event.create)
router.put('/:id', ctrl.event.update)
router.delete('/:id', ctrl.event.destroy)

// export
module.export = router;