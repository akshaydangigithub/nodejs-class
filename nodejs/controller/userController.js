import UserModel from "../model/userModel.js"


export const RegisterUser = (async (req, res) => {

  try {

    if (!req.body) {
      return res.json({
        message: "Please fill the data first"
      })
    }

    const { name, email, age, password } = req.body

    if (!name) {
      return res.send("Name is required")
    }

    if (!email) {
      return res.send("Email is required")
    }

    if (!age || age < 18) {
      return res.send("Age is required or it must be above 18")
    }

    if (!password) {
      return res.json({
        message: "password is required"
      })
    }


    const newUser = await UserModel.create({
      Name: name,
      Age: age,
      Email: email,
      Password: password
    })


    res.json({
      message: "User created succesfully",
      newUser
    })
  } catch (error) {
    console.log(error);
  }

})


export const LoginUser = (async (req, res) => {
  try {
    // email
    // password

    const { email, password } = req.body;

    console.log(email, password);


    const user = await UserModel.findOne({ Email: email })


    if(!user){
      return res.json({
        message:"User not found with this email"
      })
    }

    if(user.Password !== password){
      return res.json({
        message:"Your Password is incorrect"
      })
    }


    return res.json({
      message:"Login Successfully",
      user
    })



  } catch (error) {
    console.log(error);

  }
})


export const GetUser = (async (req, res) => {
  try {

    const userId = req.params.userId;

    const user = await UserModel.findById(userId)

    if (!user) {
      return res.json({
        message: "User not found"
      })
    }

    return res.json({
      message: "User found successfully",
      user
    })

  } catch (error) {
    console.log(error);

  }
})