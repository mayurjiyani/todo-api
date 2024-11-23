import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

interface AuthRequest extends Request {
    user?: { id: string };
}

interface JwtPayload {
    id: string;
}

export const authenticateToken = (
    req: AuthRequest,
    res: Response,
    next: NextFunction
): any => {
    const token = req.header("Authorization")?.split(" ")[1];

    if (!token) {
        return res
            .status(401)
            .json({ message: "Access Denied: No token provided" });
    }

    try {
        const verified = jwt.verify(
            token,
            process.env.JWT_SECRET || ""
        ) as JwtPayload;
        req.user = { id: verified.id };
        next(); // Call next() to continue processing the request
    } catch (error) {
        res.status(403).json({ message: "Invalid Token" });
    }
};