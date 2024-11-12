import { Router } from 'express';
import cors from 'cors';

const router = Router();


import { signupValidation } from '../middleware/authValidation.js';
import { loginValidation } from '../middleware/authValidation.js';
import {signup} from '../controllers/authController.js';
import {login} from '../controllers/authController.js';
import {profile} from '../controllers/authController.js';
import {profileValidation} from '../middleware/authValidation.js';




router.post('/login', loginValidation, login)

router.post('/signup', signupValidation, signup)

router.post('/profile', profileValidation, profile)
export default router;