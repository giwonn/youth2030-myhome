class Location {
  year?: number;
  num?: number;
  address?: string;
  nearBySubway?: string;
}

class SupplyCount {
  total?: number;
  public?: number;
  private?: number;
}

class NoticeDate {
  public?: string;
  private?: string;
}

class ConstructionPlan {
  noticeDate = new NoticeDate();
  moveInDate?: string;
}

export class SupplyPlan {
  location = new Location();
  supplyCount = new SupplyCount();
  constructionPlan = new ConstructionPlan();
  architects?: string;
}