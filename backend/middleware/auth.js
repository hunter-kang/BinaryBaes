import jwt from 'jsonwebtoken';

const ensureAuthenticated = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    console.log("Authorization header:", authHeader);  

    if (!authHeader) {
        return res.status(403).json({ message: "Unauthorized, JWT token is required" });
    }

    const token = authHeader.split(' ')[1];  
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;  
        next();
    } catch (err) {
        console.error("JWT verification error:", err); 
        return res.status(403).json({ message: "Unauthorized, JWT token is wrong or expired" });
    }
}

export { ensureAuthenticated };