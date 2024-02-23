import AuthService from '../services/authService';

class AuthenticateUser {
    constructor(private authService: AuthService) {}

    async execute(username: string, password: string): Promise<boolean> {
        return this.authService.login(username, password);
    }
}

export default AuthenticateUser;
