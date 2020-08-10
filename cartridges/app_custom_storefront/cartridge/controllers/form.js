/**
 * A simple form controller.
 *
 */

'use strict';

var server = require('server');
var URLUtils = require('dw/web/URLUtils');

server.get('Start', server.middleware.https, function (req, res, next) {
    var actionUrl = URLUtils.url('form-Show'); //sets the route to call for the form submit action
    var SFRAhelloform = server.forms.getForm('SFRAFormDef'); //creates empty JSON object using the form definition
    SFRAhelloform.clear();

    res.render('/exercises/SFRAFormTemplate', {
        actionUrl: actionUrl,
        SFRAhelloform: SFRAhelloform
    });
    next();
});

server.post('Show', server.middleware.https,
    function (req, res, next) {

        var nickname = req.form.nickname;

        res.render('/exercises/SFRAResultTemplate', {
            nickname: nickname
        });
        next();
    });

module.exports = server.exports();