export interface MemberDescription {
  summary: string;
}

export interface MembersItemModel {
  photoUrl: string;
  name: string;
  status: string;
  description: MemberDescription;
}
