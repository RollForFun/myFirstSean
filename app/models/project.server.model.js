/**
* @Author: Kevin <kevin>
* @Date:   2016-06-11T00:33:25-04:00
* @Last modified by:   Kevin
* @Last modified time: 2016-06-11T21:40:30-04:00
*/

'use strict';

/**
* Project Schema
*/
module.exports = function(sequelize, DataTypes) {
    var Project = sequelize.define('Project', {
        created: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        title: {
            type: DataTypes.STRING,
            defaultValue: '',
            allowNull: false,
            validate: { notEmpty: true}
        },
        content: {
            type: DataTypes.TEXT,
            defaultValue: ''
        }
    },
    {
        associate: function(models){
            Project.belongsTo(models.User);
        }
    });
    return Project;
};
