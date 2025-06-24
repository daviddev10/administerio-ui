import { Observable } from "rxjs";
import { IMember } from "../domain/interfaces/membership/member.interface";

export abstract class MembershipRepository {
    abstract getAllMembers(): Observable<IMember[]>;
    abstract getMemberById(memberId: number): Observable<IMember>;
    abstract saveMember(member: IMember): Observable<any>;
}