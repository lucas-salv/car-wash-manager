const express = require('express');
const router = express.Router();
const clientController = require('../controllers/client');
const scheduleController = require('../controllers/schedule');

router.get('/clients', clientController.getClients);
router.get('/client/:id', clientController.getClientById);
router.post('/client', clientController.postClient);
router.put('/client/:id', clientController.putClient);
router.delete('/client/:id', clientController.deleteClient);

router.get('/schedules', scheduleController.getSchedule);
router.get('/schedule/:id', scheduleController.getScheduleById);
router.post('/schedule', scheduleController.postSchedule);
router.put('/schedule/:id', scheduleController.putSchedule);
router.delete('/schedule/:id', scheduleController.deleteSchedule);

module.exports = router;