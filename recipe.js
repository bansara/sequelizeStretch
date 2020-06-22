const db = require('./dbConfig');
const Sequelize = require('sequelize');

//YOUR CODE GOES HERE
const Recipe = db.define('recipe', {
    name: {
        type: Sequelize.STRING,
        defaultValue: 'cereal',
        allowNull: false,
        validate: {
            isntEmptyString(val) {
                if (val === '') throw 'no empty strings';
            }
        }
    },
    cookTime: {
        type: Sequelize.INTEGER,
        validate: {
            checkTime(time) {
                if (time < 1 || time > 60) throw 'is this even food?';
            }
        }
    },
    vegan: {
        type: Sequelize.BOOLEAN,
    },
    foodGroup: {
        type: Sequelize.ENUM,
        values: ['vegetable', 'meat', 'dairy', 'grain', 'fruit']
    }
})
//--------------------
module.exports = Recipe;
