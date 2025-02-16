import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [rds-db](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonrdsiamauthentication.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class RdsDb extends PolicyStatement {
  public servicePrefix = 'rds-db';

  /**
   * Statement provider for service [rds-db](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonrdsiamauthentication.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Allows IAM role or user to connect to RDS database
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.IAMPolicy.html
   */
  public toConnect() {
    return this.to('connect');
  }

  protected accessLevelList: AccessLevelList = {
    'Permissions management': [
      'connect'
    ]
  };

  /**
   * Adds a resource of type db-user to the statement
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.DBAccounts.html
   *
   * @param dbiResourceId - Identifier for the dbiResourceId.
   * @param dbUserName - Identifier for the dbUserName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onDbUser(dbiResourceId: string, dbUserName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:rds-db:${ region || '*' }:${ account || '*' }:dbuser:${ dbiResourceId }/${ dbUserName }`);
  }
}
