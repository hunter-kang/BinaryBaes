import { Router } from 'express';
import cors from 'cors';
import { signupValidation, loginValidation, profileValidation } from '../middleware/authValidation.js';
import { signup, login } from '../controllers/authController.js';
import { ensureAuthenticated } from '../middleware/auth.js';

const router = Router();

router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);



export default router;