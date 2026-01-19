import User from "../model/userModel.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

export const Init = (async (req, res) => {
    try {
        res.send("Hello form auth routes")
    } catch (error) {
        console.log(error);

    }
})

export const RegisterUser = (async (req, res) => {
    try {

        const { name, email, password } = req.body

        // console.log(name, email, password);

        if (!name || !email || !password) {
            return res.json({
                success: false,
                message: "All fields are required"
            })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
        })

        if (!newUser) {
            return res.json({
                success: false,
                message: "User Not Created"
            })
        }

        return res.json({
            success: true,
            message: "User Created Successfully",
            user: newUser
        })


    } catch (error) {
        console.log(error);

    }
})

export const LoginUser = (async (req, res) => {
    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.json({
                success: false,
                message: "Email and Password are required"
            })
        }

        const user = await User.findOne({ email }).select("_id email password")

        if (!user) {
            return res.json({
                success: false,
                message: "Invalid credentials"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password)


        if (!isMatch) {
            return res.json({
                success: false,
                message: "Invalid credentials"
            })
        }

        let payload = {
            id: user._id,
            email: user.email
        }

        const token = await jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" })

        return res.json({
            success: true,
            message: "You can procced",
            token
        })


    } catch (error) {
        console.log(error);

    }
})

export const GetUserById = (async (req, res) => {
    try {

        console.log(req.user);
        

        const user = await User.findById(req.user.id)

        return res.json({
            user
        })


    } catch (error) {
        console.log(error);

    }
})