
import { Router } from 'express';
import {ensureAuthenticated} from '../middleware/auth.js'
import { profile } from '../controllers/authController.js';

const router = Router();

router.get('/profile', ensureAuthenticated, profile);

router.get('/', ensureAuthenticated, (req, res) => {
    res.status(200).json([

        {
            name: "mobile"
        }
    ])
})

export default router;
