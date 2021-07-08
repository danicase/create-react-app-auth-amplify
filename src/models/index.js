// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Schedule, Program, ProgramCampaign, Campaign, Category, Brand } = initSchema(schema);

export {
  Schedule,
  Program,
  ProgramCampaign,
  Campaign,
  Category,
  Brand
};