import { Router } from 'express';
import {ensureAuthenticated} from '../middleware/auth.js'
import { profile, profilepost, questionnaire,home, saveMatches, getMatches} from '../controllers/profileController.js';
import { wordsearch, categoryFilter} from '../controllers/dateIdeaController.js';

const router = Router();

//remove ensureAuthenticated for easier time on postman
router.get('/profile/:userId?', ensureAuthenticated, profile);
router.post('/profilepost', ensureAuthenticated, profilepost);
router.post('/questionnaire', ensureAuthenticated, questionnaire);
router.post('/saveMatches', ensureAuthenticated, saveMatches)
router.get('/getMatches', ensureAuthenticated, getMatches)
router.get('/home', ensureAuthenticated, home)
router.get('/categoryFilter', categoryFilter)
router.get('/wordsearch', wordsearch)

//test router
router.get('/', ensureAuthenticated, (req, res) => {
    res.status(200).json([

        {
            name: "mobile"
        }
    ])
})

export default router;
