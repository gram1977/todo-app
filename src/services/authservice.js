class AuthService {
    authenticateUser(username, password) {
        // Hardcoded user validation
        if ( username === 'aman.greval@gmail.com' && password === 'password123' ) {
            return { success: true, message: 'Login successful' };
        } else {
            return { success: false, message: 'Invalid Credentials' };
        }
    }

    logoutUser() {
        return { success: true, message: 'Logout successful' };
    }
}

export default new AuthService();