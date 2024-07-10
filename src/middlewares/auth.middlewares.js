import jwt from "jsonwebtoken"
import { asyncHandler } from "../utils/asyncHandler.js"
import { apiError } from "../utils/apiError.js"
import { User } from "../models/user.models.js"

export const verifyJWT = asyncHandler(async(req, res, next) => {
    try {
        const token = req.cookies?.accessToken ||  req.header("Authorization").replace("Bearer ", "")

        if(!token){
            throw new apiError(400, "Unauthorized Access");
        }

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        const user = await User.findById(decodedToken?._id).select("-password -refreshToken");

        req.user = user;
        next();
    } catch (error) {
        if(error instanceof jwt.JsonWebTokenError){
            throw new apiError(401, "JWT Error : ", error.message);
        } else {
            throw new apiError(401, error?.message || "Invalid Token");
        }
    }
})

export { verifyJWT }