const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a model for the events table
// this table should serve as a place-holder for data pulled from the Ticketmaster app
Events.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        eventID: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        eventName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        eventDescription: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        eventDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        geoLat: {
            type: DataTypes.NUMBER,
            length: 25,
            allowNull: false,
        },
        geoLon: {
            type: DataTypes.NUMBER,
            length: 25,
            allowNull: false,
        },
    }
);

module.exports = Temporary;