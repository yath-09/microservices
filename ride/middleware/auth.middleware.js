const jwt=require('jsonwebtoken');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();


module.exports.userAuth = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization.split(' ')[ 1 ];
        
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        //console.log(token)
        const response = await axios.get(`${process.env.BASE_URL}/user/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            
        })
        // console.log("Happ")
        const user = response.data;
        // console.log("Happ")
        if (!user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        req.user = user;

        next();

    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}