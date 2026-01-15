export interface IUser {
    UserId: number;
    UserName: string;
    Email: string;
    Avatar: null;
    IsActive: boolean;
    Roles: number[];
    CreatedDate: Date;
}

export interface ISaveUser {
    UserName: string;
    Email: string;
    Password: null;
}

export interface IUserLogin {
    Email: string;
    Password: string;
}
