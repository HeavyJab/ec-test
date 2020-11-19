import express from 'express';
const userRoute = express.Router();
import fetchUser from '../lib/fetch.js'

userRoute.get('/api/users', (req, res) => { 
    fetchUser().then(users => {
        console.log(users)
        res.stauts(200).json(users)
    }
    ).catch(
        (err) => res.status
    )

});

export { userRoute };

