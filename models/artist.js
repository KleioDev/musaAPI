/**
 * Created by cesarcruz on 3/10/15.
 * Artist Model
 */

exports.module = function(sequelize, dataTypes) {
    return sequelize.define('Artist', {
        name : {
            type: dataTypes.STRING,
            field: 'name'
        },
        biography : {
            type : dataTypes.STRING,
            field: 'biography'
        },
        birthDay : {
            type: dataTypes.STRING,
            field: 'birth_day'
        }
    }, {
        freezeTableName : true
    });
}