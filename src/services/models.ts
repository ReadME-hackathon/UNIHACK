export interface Group {
  description: string;
  leader_id: string;
  member_count: number;
  members: string[];
  name: string;
}

export interface SpaceRequest {
  from_id: string;
  target_group_id: string;
  timestamp: number;
  to_id: string;
  type: "INVITE_TO_JOIN" | "REQUEST_TO_JOIN";
}

export interface UserFeatures {
  name: string;
  data: any;
}

export interface SpaceUser {
  features: UserFeatures[];
  name: string;
  user_id: string;
}

export interface SpaceData {
  created_at: string;
  created_by: string;
  features: any[];
  max_size: number;
  min_size: number;
  name: string;
}

export interface Space {
  space: SpaceData;
  subcollections: {
    groups: Group[];
    requests: SpaceRequest[];
    users: SpaceUser[];
  };
}
