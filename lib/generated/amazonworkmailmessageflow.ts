import { Actions, PolicyStatement, ResourceTypes } from "../shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service workmailmessageflow
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonworkmailmessageflow.html
 */
export class Workmailmessageflow extends PolicyStatement {
  public servicePrefix = 'workmailmessageflow';
  public actions: Actions = {
    "GetRawMessageContent": {
      "url": "https://docs.aws.amazon.com/workmail/latest/APIReference/API_messageflow_GetRawMessageContent.html",
      "description": "Grants permission to read the content of email messages with the specified message ID",
      "accessLevel": "Read",
      "resourceTypes": {
        "RawMessage": {
          "required": true
        }
      }
    }
  };
  public resourceTypes: ResourceTypes = {
    "RawMessage": {
      "name": "RawMessage",
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/lambda-content.html",
      "arn": "arn:${Partition}:workmailmessageflow:${Region}:${Account}:message/${OrganizationId}/${Context}/${MessageId}",
      "conditionKeys": []
    }
  };

  /**
   * Action provider for service workmailmessageflow
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonworkmailmessageflow.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Grants permission to read the content of email messages with the specified message ID
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_messageflow_GetRawMessageContent.html
   */
  public getRawMessageContent() {
    this.add('workmailmessageflow:GetRawMessageContent');
    return this;
  }

  /**
   * Adds a resource of type RawMessage to the statement
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/lambda-content.html
   *
   * @param organizationId - Identifier for the organizationId.
   * @param context - Identifier for the context.
   * @param messageId - Identifier for the messageId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onRawMessage(organizationId: string, context: string, messageId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:workmailmessageflow:${Region}:${Account}:message/${OrganizationId}/${Context}/${MessageId}';
    arn = arn.replace('${OrganizationId}', organizationId);
    arn = arn.replace('${Context}', context);
    arn = arn.replace('${MessageId}', messageId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
