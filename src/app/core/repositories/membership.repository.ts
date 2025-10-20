import { Observable } from "rxjs";
import { IMember, ISaveMember } from "../domain/interfaces/membership/member.interface";

export abstract class MembershipRepository {
    abstract getAllMembers(): Observable<IMember[]>;
    abstract getMemberById(memberId: number): Observable<IMember>;
    abstract postSaveMember(member: ISaveMember): Observable<any>;
}