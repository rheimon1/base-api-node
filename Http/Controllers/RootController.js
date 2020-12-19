const Service = require('../../Services/RootService');
const httpMessages = require('../HttpMessages');

class RootController {
    constructor(req, res) {
        this.request = req;
        this.response = res;
    }

    successResponse(data) {
        let response = {};
        if (data) {
            Object.assign(response, data);
        }
        return this.response.status(200).json(response);
    }

    errorResponse(status, message) {
        return this.response.status(status).json({
            message: message || 'Unknow error'
        });
    }
}

module.exports = RootController;