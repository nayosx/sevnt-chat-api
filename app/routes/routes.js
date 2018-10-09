const express = require('express'),
    router = express.Router();

require('./user.route')(router);
require('./message-room.route')(router);
require('./message-participant.route')(router);
require('./message.route')(router);
require('./contact.route')(router);

module.exports = router;


