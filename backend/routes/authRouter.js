import { Router } from 'express';

const router = Router();

import { signupValidation } from '../middleware/authValidation.js';
import { loginValidation } from '../middleware/authValidation.js';
import {signup} from '../controllers/authController.js';
import {login} from '../controllers/authController.js';


router.post('/login', loginValidation, login)

router.post('/signup', signupValidation, signup)
export default router;