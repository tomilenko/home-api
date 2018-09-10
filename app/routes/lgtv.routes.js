module.exports = (app) => {

    const lgtv = require('../controllers/lgtv.controller.js');

    app.get('/', (req, res) => res.json({"message": "Welcome to lgtv/."}));

    app.get('turnOff', lgtv.turnOff);

    app.get('changeInput/:id', lgtv.changeInput);
}