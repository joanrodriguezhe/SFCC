'use strict';

var server = require('server');
var Logger = require('dw/system/Logger');

var debugLog = Logger.getLogger("debug123", "customDebug");
debugLog.debug("This is the first category a debug");

var warnLog = Logger.getLogger("warn123", "customWarn");
warnLog.warn("This is the second category a warn");

var errorLog = Logger.getLogger("error123", "customError");
errorLog.error("This is the third category an error");

var infoLog = Logger.getLogger("info123", "customInfo");
infoLog.info("This the fourth category an info");

server.get('Show', function (req, res, next){
        res.render('/exercises/logRender', {
            info : errorLog,
            hola : "nuevo"
        });

        next();
    }
);

module.exports = server.exports();