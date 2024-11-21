import { Router } from 'express';
import {ensureAuthenticated} from '../middleware/auth.js'
import { profile, questionnaire,home} from '../controllers/profileController.js';

const router = Router();

//remove ensureAuthenticated for easier time on postman
router.get('/profile', ensureAuthenticated, profile);
router.post('/questionnaire', ensureAuthenticated, questionnaire);
router.get('/home', ensureAuthenticated, home)

//test router
router.get('/', ensureAuthenticated, (req, res) => {
    res.status(200).json([

        {
            name: "mobile"
        }
    ])
})

export default router;
