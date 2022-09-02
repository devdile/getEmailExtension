// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { SignUpModel } = initSchema(schema);

export {
  SignUpModel
};