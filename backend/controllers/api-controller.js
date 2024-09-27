const userModel = require('../model/user-model');
var jwt = require('jsonwebtoken');

class ApiController {

    // Login Method
    Login = async (req, res) => {
        try {
            const { email, password } = req.body;

            if (!email) {
                return res.status(400).json({
                    message: "Email is required",
                    data: {}
                });
            }

            if (!password) {
                return res.status(400).json({
                    message: "Password is required",
                    data: {}
                });
            }

            const userExistData = await userModel.findOne({ "delete_status": false, "email": email.toLowerCase() });

            if (userExistData) {
                let User = new userModel();
                let checkPassword = User.compareHash(password, userExistData.password);

                console.log(`Password check: ${checkPassword}, Password entered: ${password}, Hashed password: ${userExistData.password}`);

                if (checkPassword) {
                    const payload = {
                        id: userExistData._id,
                        email: userExistData.email
                    };
                    const expTime = "12h";
                    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: expTime });

                    return res.status(200).json({
                        message: "Login Successful",
                        data: userExistData,
                        token: token
                    });
                } else {
                    return res.status(401).json({
                        message: "Email or password is wrong",
                        data: {}
                    });
                }
            } else {
                return res.status(404).json({
                    message: "User not found",
                    data: {}
                });
            }
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                message: "Internal Server Error",
                data: err
            });
        }
    };

    // Signup Method
    signUp = async (req, res) => {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(400).json({
                    message: "Email and password are required",
                    data: {}
                });
            }

            
            if (password.length < 4) {
                return res.status(400).json({
                    message: "Password must be at least 4 characters long",
                    data: {}
                });
            }

            
            let userExistData = await userModel.findOne({ "delete_status": false, "email": email.toLowerCase() });

            if (userExistData) {
                return res.status(409).json({
                    message: "User already exists",
                    data: {}
                });
            }

            let User = new userModel();
            req.body.password = User.generateHash(password); 
            req.body.email = email.toLowerCase(); 

            let userData = new userModel(req.body);
            let saveData = await userData.save();

            return res.status(201).json({
                message: "User registered successfully",
                data: saveData
            });
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                message: "Internal Server Error",
                data: err
            });
        }
    };
}

module.exports = new ApiController();
