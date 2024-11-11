import Joi from 'joi'

const signupValidation = (req, res, next) =>{
    const schema = Joi.object({
        firstname: Joi.string().min(3).max(100).required(),
        lastname: Joi.string().min(3).max(100).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(4).max(100).required()
    })
    const {error} = schema.validate(req.body);
    if (error){
        return res.status(400).json({message: "Bad Request", error})
    }
    next();

}

const loginValidation = (req, res, next) =>{
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(4).max(100).required()
    })
    const {error} = schema.validate(req.body);
    if (error){
        return res.status(400).json({message: "Bad Request", error})
    }
    next();

}


const profileValidation = (req, res, next) => {
    const schema = Joi.object({
        linkedin: Joi.string().uri().optional().allow(''), // Allows a valid URL or empty string
        major: Joi.string().min(3).max(50).optional().allow(''),
        employment: Joi.string().min(3).max(50).optional().allow(''),
        salary: Joi.string().min(3).max(50).optional().allow(''),
        height: Joi.string().min(3).max(50).optional().allow(''),
        ethnicity: Joi.string().min(3).max(50).optional().allow(''), // Allows any string with min 3 and max 50 characters or empty string
        education: Joi.string().min(3).max(50).optional().allow(''),
        outside: Joi.string().min(3).max(50).optional().allow(''),
        so: Joi.string().min(3).max(50).optional().allow(''),
        frugal: Joi.string().min(3).max(50).optional().allow(''),
        shower: Joi.string().min(3).max(50).optional().allow(''),
        tech: Joi.string().min(3).max(50).optional().allow(''),
        cafe: Joi.string().min(3).max(50).optional().allow(''),
        language: Joi.string().min(3).max(50).optional().allow(''),
        color: Joi.string().min(3).max(50).optional().allow(''),
        art: Joi.string().min(3).max(50).optional().allow(''),
        boba: Joi.string().min(3).max(50).optional().allow('')
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: "Bad Request", error });
    }
    next();
};

export { signupValidation, loginValidation, profileValidation };

