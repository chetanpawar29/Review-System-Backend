import UserModel from "../model/user.js"

export const isadmin =async(req, res, next)=>{
try{
    console.log(req);
    
    const {email}  = req.body;

   const userInfo= await UserModel.findOne({email})

    if(userInfo && userInfo.role == "Admin")
    {
        next();
    }else{

        res.status(403).json({
            message:"access Denied, only admin create"
        })
    }

}catch(error)
{
    console.log(error)
        res.status(500).json({
            message:"error occured"
        })
}

}