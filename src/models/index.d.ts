import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Schedule {
  readonly id: string;
  readonly startDate?: string;
  readonly EndDate?: string;
  readonly Programs?: (Program | null)[];
  readonly Campaigns?: (Campaign | null)[];
  constructor(init: ModelInit<Schedule>);
  static copyOf(source: Schedule, mutator: (draft: MutableModel<Schedule>) => MutableModel<Schedule> | void): Schedule;
}

export declare class Program {
  readonly id: string;
  readonly name?: string;
  readonly duration?: number;
  readonly startDate?: string;
  readonly slotAvailable?: number;
  readonly scheduleID?: string;
  readonly CampaignsInPrograms?: (ProgramCampaign | null)[];
  constructor(init: ModelInit<Program>);
  static copyOf(source: Program, mutator: (draft: MutableModel<Program>) => MutableModel<Program> | void): Program;
}

export declare class ProgramCampaign {
  readonly id: string;
  readonly program: Program;
  readonly campaign: Campaign;
  constructor(init: ModelInit<ProgramCampaign>);
  static copyOf(source: ProgramCampaign, mutator: (draft: MutableModel<ProgramCampaign>) => MutableModel<ProgramCampaign> | void): ProgramCampaign;
}

export declare class Campaign {
  readonly id: string;
  readonly startDate?: string;
  readonly endDate?: string;
  readonly slotAvailable?: number;
  readonly slotUsed?: number;
  readonly totalSlot?: number;
  readonly brandID?: string;
  readonly Programs?: (ProgramCampaign | null)[];
  readonly scheduleID?: string;
  constructor(init: ModelInit<Campaign>);
  static copyOf(source: Campaign, mutator: (draft: MutableModel<Campaign>) => MutableModel<Campaign> | void): Campaign;
}

export declare class Category {
  readonly id: string;
  readonly Name?: string;
  readonly Brands?: (Brand | null)[];
  constructor(init: ModelInit<Category>);
  static copyOf(source: Category, mutator: (draft: MutableModel<Category>) => MutableModel<Category> | void): Category;
}

export declare class Brand {
  readonly id: string;
  readonly Name?: string;
  readonly categoryID?: string;
  readonly Campaigns?: (Campaign | null)[];
  constructor(init: ModelInit<Brand>);
  static copyOf(source: Brand, mutator: (draft: MutableModel<Brand>) => MutableModel<Brand> | void): Brand;
}