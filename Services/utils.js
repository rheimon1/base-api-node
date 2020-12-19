const validateMiddleware = require('../Http/Middlewares/ValidateMiddleware');
const validateProduct = require('../Http/Validations/ProductValidation');

function errorInsideMiddleware(res, statusCode, message) {
    res.status(statusCode).json({
        message
    })
}

function mainController(ControllerClass, actionName) {
    return (req, res) => {
        // const errors = validationResult(req);

        // if (!errors.isEmpty()) {
        //     let reponseErrors: any = {};
        //     errors.array().forEach(error => {
        //         if (!reponseErrors[error.param]) {
        //             reponseErrors[error.param] = [];
        //         }
        //         reponseErrors[error.param].push(error.msg);
        //     })
        //     return res.status(422).json({ 
        //         errors: reponseErrors
        //     });
        // }

        let _controller = new ControllerClass(req, res);
        return _controller[actionName](req, res);
    }
}

function resources(router, validate, path, ControllerClass) {
        router.get(`${path}`, mainController(ControllerClass, 'index'))
        router.get(`${path}/:id`, mainController(ControllerClass, 'show'))
        router.put(`${path}/:id`, mainController(ControllerClass, 'update'))
        router.post(`${path}`, [validateMiddleware(validate)],  mainController(ControllerClass, 'store'))
        router.delete(`${path}/:id`, mainController(ControllerClass, 'destroy'))
};


module.exports = {
    resources, mainController, errorInsideMiddleware
}

// module.exports = new Utils();