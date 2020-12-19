const Joi = require('@hapi/joi');

const validateProduct = (product) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        price: Joi.number().required(),
        brand: Joi.string().required()
    })

    return schema.validate(product);
}

module.exports = validateProduct;