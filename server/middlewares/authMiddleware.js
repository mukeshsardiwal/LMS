import { clerkClient } from '@clerk/express';

// Middleware to protect educator routes
export const protectEducator = async (req, res, next) => {
    try {
        const { userId } = req.auth;

        // Fetch user data from Clerk
        const response = await clerkClient.users.getUser(userId);

        // Check if the user has the educator role
        if (response.publicMetadata.role !== "educator") {
            return res.status(401).json({ success: false, message: "Unauthorized Access" });
        }

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        console.error("Error in protectEducator middleware:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}
