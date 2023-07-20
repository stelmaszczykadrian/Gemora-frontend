import jwtDecode from 'jwt-decode';

interface TokenData {
    access_token: string;
    refresh_token: string;
}

export class AuthService {
    public static getUserEmailFromToken(): string | null {
        const tokenString = localStorage.getItem('token');
        console.log('Token z localStorage:', tokenString);

        if (tokenString) {
            try {
                const tokenData: TokenData = JSON.parse(tokenString);
                const decodedAccessToken: any = jwtDecode(tokenData.access_token);
                const userEmail = decodedAccessToken.sub;
                console.log('User email:', userEmail);
                return userEmail;
            } catch (error) {
                console.error('Error decoding token:', error);
            }
        }

        return null;
    }
}
