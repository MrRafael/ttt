import { AuthService } from './auth/auth.service';
export declare class AppController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        access_token: string;
        refresh_token: string;
        role: import("./enums/role.enum").Role[];
        email: string;
    }>;
    refresh(req: any): Promise<{
        access_token: string;
        refresh_token: string;
        role: import("./enums/role.enum").Role[];
        email: string;
    }>;
    verify(req: any): Promise<{
        isValid: any;
    }>;
}
