export interface IMember {
    CreatedDate: Date;
    MemberId: number;
    MemberName: string;
    BirthDate: Date;
    CI: string;
    Gender: number;
    CivilStatus: number;
    CurrentAddress: string;
    PhoneNumber: string;
    Email: string;
    Ocuppation: string;
    IsBaptized: boolean;
    MemberStatus: number;
    Observation: null;
    PhotoUrl: null;
}
export interface ISaveMember {
    MemberName: string;
    BirthDate: Date;
    CI: string;
    Gender: string;
    CivilStatus: number;
    CurrentAddress: string;
    PhoneNumber: string;
    Email: null;
    Ocuppation: string;
    IsBaptized: boolean;
    Observation: string;
}
