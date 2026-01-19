import jwt from "jsonwebtoken";


const IsAuthUser = (async (req, res, next)=>{
    try {
        
        const headers = req.headers["authorization"];   

        if(!headers){
            return res.json({
                message:"Unauthorized User"
            })
        }

        const token = headers.split(" ")[1]

        // console.log(token);
        

       const decode = await jwt.verify(token, process.env.JWT_SECRET);

    //    if(!decode){
    //     return res.json({
    //         message:"Your token is either Invalid or expire"
    //     })
    //    }

    //    console.log(decode);

       req.user = decode

       next()
       
        

    } catch (error) {
        console.log(error);
    }
})

export default IsAuthUser