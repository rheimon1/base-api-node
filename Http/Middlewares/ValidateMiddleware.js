const { errorInsideMiddleware } = require('../../Services/utils');

module.exports = (validator) => {
    return (req, res, next) => {
        try {
            const { error } = validator(req.body);
            
            if (error) {
                const errorDetails = error.details.map(value => { return { error: value.message, path: value.path } });
                return res.status(400).json(errorDetails);
            }

            return next();
        } catch (error) {
            return res.status(500).json({
                message: 'Unknow error'
            });
        }
    }
}