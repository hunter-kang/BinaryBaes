
import { Router } from 'express';
import {ensureAuthenticated} from '../middleware/auth.js'
import { profile } from '../controllers/authController.js';

const router = Router();
//THIS IS FOR AFTER THEY LOG IN -- WHAT THEY SEE
router.get('/profile', ensureAuthenticated, profile);

router.get('/', ensureAuthenticated, (req, res) => {
    res.status(200).json([
        //fill with stuff
        {
            name: "mobile"
        }
    ])
})

export default router;
