var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

var Character = sequelize.define("allcharacters",{
	id: {
		type:Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	routeName: {
		type: Sequelize.STRING,
	},
	name: {
		type: Sequelize.STRING,
	},
	role: {
		type: Sequelize.STRING,
	},
	age: {
		type: Sequelize.INTEGER,
    },
    forcePoint: {
    	type: Sequelize.INTEGER,
    },
});

Character.sync();

module.exports = Character;