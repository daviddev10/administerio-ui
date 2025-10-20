import { firstValueFrom } from "rxjs";
import { MembershipService } from "../../../infrastructure/services/membership.service";
import { IMember, ISaveMember } from "../../domain/interfaces/membership/member.interface";

export class MembershipUseCase {

    private membershipService: MembershipService;

    constructor(service: MembershipService) {
        this.membershipService = service;
    }

    public getMemberSaveData(data: any): ISaveMember {
        const memberData: ISaveMember = { //Todo: Completar los campos nulos
            MemberName: data.MemberName,
            BirthDate: data.BirthDate,
            CI: data.CI,
            Gender: data.Gender,
            CivilStatus: data.CivilStatus,
            CurrentAddress: data.CurrentAddress,
            PhoneNumber: data.PhoneNumber,
            Email: null,
            Ocuppation: null,
            IsBaptized: true, //Todo: Completar
            Observation: null,
        }

        return memberData;
    }

    public async onSaveMember(member: ISaveMember): Promise<IMember> {
        const savedMember = await firstValueFrom(this.membershipService.postSaveMember(member));
        return savedMember;
    }

    public async onUpdateMember(member: ISaveMember, memberId: number): Promise<IMember> {
        const savedMember = await firstValueFrom(this.membershipService.postSaveMember(member));
        return savedMember;
    }

    public async getMemberById(memberId: number): Promise<IMember> {
        const memberData = await firstValueFrom(this.membershipService.getMemberById(memberId));
        return memberData;
    }

    public async onDeleteMember(memberId: number) {
        const deletedMember = await firstValueFrom(this.membershipService.deleteMember(memberId));
        return deletedMember;
    }

    public async onSaveMemberPhoto(photo: File, memberId: number) {
        const savedPhoto = await firstValueFrom(this.membershipService.postUpdatePhoto(photo, memberId));
        return savedPhoto;
    }
}