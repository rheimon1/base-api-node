const httpMessages = require('../HttpMessages');
const RootController = require('../Controllers/RootController');

class BaseController extends RootController {
    service;

    async index(req, res) {
        try {
            const response = await this.service.find();

            return this.successResponse(response)
        } catch (error) {
            console.log(error);
            return this.errorResponse(500, error);
        }
    }

    async store(req, res) {
        try {
            const response = await this.service.saveRecord(req.body);

            if (!response) {
                return this.errorResponse(500, HttpMessages.http_unknow_error);    
            }

            return this.successResponse(response)
        } catch (error) {
            console.log(error);
            return this.errorResponse(500, HttpMessages.http_unknow_error);
        }
    }

    async show(req, res) {
        try {
            const response = await this.service.findById(req.params.id);

            return this.successResponse(response)
        } catch (error) {
            console.log(error);
            return this.errorResponse(500, error);
        }
    }

    async update(req, res) {
        try {
            const response = await this.service._findByIdAndUpdate(req.params.id, req.body);

            return this.successResponse(response)
        } catch (error) {
            console.log(error);
            return this.errorResponse(500, error);
        }
    }

    async destroy(req, res) {
        try {
            const response = await this.service.softDelete(req.params.id);

            return this.successResponse(response)
        } catch (error) {
            console.log(error);
            return this.errorResponse(500, error);
        }
    }
}

module.exports = BaseController;