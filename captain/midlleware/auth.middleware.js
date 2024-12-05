const jwt = require('jsonwebtoken');
const captainModel = require('../models/captain.models');
const blacklisttokenModel = require('../models/blacklisttoken.model');


module.exports.captainAuth = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization.split(' ')[ 1 ];
        //console.log(token)
        if (!token) {
            //console.log("heheh")
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const isBlacklisted = await blacklisttokenModel.find({ token });

        if (isBlacklisted.length) {
            //console.log("heheh")
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const captain = await captainModel.findById(decoded.id);
        //console.log(captain)
        if (!captain) {
            console.log("heheheeee")
            return res.status(401).json({ message: 'Unauthorized' });
        }

        req.captain = captain;

        next();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}