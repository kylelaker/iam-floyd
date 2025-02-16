import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [sumerian](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsumerian.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Sumerian extends PolicyStatement {
  public servicePrefix = 'sumerian';

  /**
   * Statement provider for service [sumerian](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsumerian.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grant login access to the Sumerian console.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sumerian/latest/userguide/sumerian-permissions.html
   */
  public toLogin() {
    return this.to('Login');
  }

  /**
   * Grant access to view a project release.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sumerian/latest/userguide/sumerian-permissions.html
   */
  public toViewRelease() {
    return this.to('ViewRelease');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'Login'
    ],
    Read: [
      'ViewRelease'
    ]
  };

  /**
   * Adds a resource of type project to the statement
   *
   * @param projectName - Identifier for the projectName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onProject(projectName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sumerian:${ region || '*' }:${ account || '*' }:project:${ projectName }`);
  }
}
