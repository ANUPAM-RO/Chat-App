const jwt = require('jsonwebtoken');
const User = require('../models/user');


// Register
const register = (req, res) => {
    console.log(req.body)
    let newUser = new User({
        username: req.body.username,
        phone_no: req.body.phone_no
    });
    const token = jwt.sign({newUser},"myanmehkjfkjkjwkerhrkrrhbvdftrurbmjjkhhhfbbg"); 
    console.log(token);
    newUser.token = token;
    newUser.save((err) => {
        if (err) throw err;
        res.json({
            success: true,
            token: token,
            msg: 'User registered'
        });
    });
}

const login = (req, res) => {

    const token = req.body.token;
    User.findOne({
        token: token
    }, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({
                success: false,
                msg: 'User not found'
            });
        }
        compare(token, user.token, (err, isMatch) => {
            if (err) throw err;
            console.log(isMatch);
            // if (isMatch) {
            //     const token = jwt.sign(user.toJSON(), process.env.SECRET_KEY, {
            //         // expiresIn: '10h'
            //     });
            //     req.user = user;
            //     res.json({
            //         success: true,
            //         ...user._doc,
            //         token: token
            //     });
            // } else {
            //     return res.json({
            //         success: false,
            //         msg: 'Wrong token'
            //     });
            // }
        });
    });
}



// check user info
const checkUser = (req, res) => {
    const user = (req.user) ? req.user : null;
    res.json({
        user: user
    });
}


module.exports = {
    register,
    login,
    checkUser
}