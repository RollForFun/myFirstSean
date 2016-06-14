/**
* @Author: Kevin
* @Date:   2016-06-11T22:01:36-04:00
* @Last modified by:   Kevin
* @Last modified time: 2016-06-11T22:03:26-04:00
*/

'use strict';

/**
 * Module dependencies.
  */

var _ = require('lodash'),
    db = require('../../config/sequelize'),
    errorHandler = require('./errors');

/**
* Create a project
*/
exports.create = function(req, res) {
	var project = req.body;

	project.UserId = req.user.id;

    db.Project.create(req.body).done(function(err, project){
        if(err){
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        }
        return res.jsonp(project);
    });
};
