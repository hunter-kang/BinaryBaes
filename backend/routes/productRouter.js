import { Router } from 'express';
import {ensureAuthenticated} from '../middleware/auth.js'

const router = Router();
//THIS IS FOR AFTER THEY LOG IN -- WHAT THEY SEE
router.get('/', ensureAuthenticated, (req, res) => {
    res.status(200).json([
        //fill with stuff
        {
            name: "mobile"
        }
    ])
})

export default router;
