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

//linkedin school location pronouns gender major employment salary height ethnicity education frugal age color lookingFor goingOutFrequency showerFrequency codingLanguage employmentStatus company
    const schema = Joi.object({
        linkedin: Joi.string().uri().allow(''), // Allows a valid URL or empty string
        school: Joi.string().uri().optional().allow(''),
        location: Joi.string().allow(''),
        prnouns: Joi.string().allow(''),
        gender: Joi.string().allow(''),
        major: Joi.string().allow(''),
        employment: Joi.string().allow(''),
        salary: Joi.string().allow(''),
        height: Joi.string().allow(''),
        ethnicity: Joi.string().allow(''),
        education: Joi.string().allow(''),
        frugal: Joi.string().allow(''),
        age: Joi.string().allow(''),
        color: Joi.string().allow(''),
        lookingFor: Joi.string().allow(''),
        goingOutFrequency: Joi.string().allow(''),
        showerFrequency: Joi.string().allow(''),
        codingLanguage: Joi.string().allow(''),
        employmentStatus: Joi.string().allow(''),
        company: Joi.string().allow('')
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: "Bad Request", error });
    }
    next();
};

export { signupValidation, loginValidation, profileValidation };

