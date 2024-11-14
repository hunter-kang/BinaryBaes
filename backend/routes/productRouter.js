import { Router } from 'express';
import {ensureAuthenticated} from '../middleware/auth.js'
import { profile, questionnaire} from '../controllers/profileController.js';

const router = Router();

router.get('/profile', ensureAuthenticated, profile);
router.post('/questionnaire', ensureAuthenticated, questionnaire);

router.get('/', ensureAuthenticated, (req, res) => {
    res.status(200).json([

        {
            name: "mobile"
        }
    ])
})

export default router;
