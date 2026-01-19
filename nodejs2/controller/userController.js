import User from "../model/userModel.js"

export const getAllUser = async (req, res) => {
    try {

        const akshsy = await User.find()

        return res.json({
            message: "All users are found",
            akshsy
        })

    } catch (error) {
        console.log(error);
    }
}

export const updateUser = async (req, res) => {
    try {

        const user = await User.findById(req.user.id);

        const { name, email } = req.body;

        user.name = name;
        user.email = email

        user.save();

        return res.json({
            message: "user updated successfully",
            user
        })


    } catch (error) {
        console.log(error);

    }
}


export const deleteUser = async (req, res) => {
    try {

        const userId = req.user.id

        //    const deletedUser = await User.findByIdAndDelete(userId);

        const user = await User.findById(userId);

        if (!user) {
            return res.json({
                success: false,
                message: "User Not found"
            })
        }

        const deletedUser = await user.deleteOne()


        if (!deletedUser) {
            return res.json({
                success: false,
                message: "User Not deleted"
            })
        }

        return res.json({
            success: true,
            message: "User Deleted !"
        })


    } catch (error) {
        console.log(error);
    }
}