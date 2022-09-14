import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type SignUpModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class SignUpModel {
  readonly id: string;
  readonly firstname?: string | null;
  readonly lastname?: string | null;
  readonly emailaddress?: string | null;
  readonly password?: string | null;
  readonly istermsandcondtionaccepted?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<SignUpModel, SignUpModelMetaData>);
  static copyOf(source: SignUpModel, mutator: (draft: MutableModel<SignUpModel, SignUpModelMetaData>) => MutableModel<SignUpModel, SignUpModelMetaData> | void): SignUpModel;
}