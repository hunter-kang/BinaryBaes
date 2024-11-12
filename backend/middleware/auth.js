const ensureAuthenticated = (req, res, next) => {
    const auth = req.headers['authorization'];
    console.log("Authorization header:", auth); // Log the header to check if the token is being sent

    if (!auth) {
        return res.status(403).json({ message: "Unauthorized, JWT token is required" });
    }

    try {
        const token = auth.split(' ')[1]; // Extract token from "Bearer <token>"
        console.log("Extracted token:", token); // Log the extracted token

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded JWT:", decoded); // Log the decoded JWT payload
        req.user = decoded;
        next();
    } catch (err) {
        console.error("JWT Verification failed:", err); // Log any verification errors
        return res.status(403).json({ message: "Unauthorized, JWT token is wrong or expired" });
    }
};

export { ensureAuthenticated };