import { Observable } from "rxjs";
import { IMember, ISaveMember } from "../domain/interfaces/membership/member.interface";

export abstract class MembershipRepository {
    abstract getAllMembers(): Observable<IMember[]>;
    abstract getMemberById(memberId: number): Observable<IMember>;
    abstract saveMember(member: ISaveMember): Observable<any>;
}