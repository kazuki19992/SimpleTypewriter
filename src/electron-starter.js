const application = require('./application.js');

global.application = new application();
global.application.run();