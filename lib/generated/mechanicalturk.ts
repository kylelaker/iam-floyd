import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [mechanicalturk](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmechanicalturk.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Mechanicalturk extends PolicyStatement {
  public servicePrefix = 'mechanicalturk';

  /**
   * Statement provider for service [mechanicalturk](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmechanicalturk.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * The AcceptQualificationRequest operation grants a Worker's request for a Qualification
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_AcceptQualificationRequestOperation.html
   */
  public toAcceptQualificationRequest() {
    this.to('mechanicalturk:AcceptQualificationRequest');
    return this;
  }

  /**
   * The ApproveAssignment operation approves the results of a completed assignment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ApproveAssignmentOperation.html
   */
  public toApproveAssignment() {
    this.to('mechanicalturk:ApproveAssignment');
    return this;
  }

  /**
   * The AssociateQualificationWithWorker operation gives a Worker a Qualification
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_AssociateQualificationWithWorkerOperation.html
   */
  public toAssociateQualificationWithWorker() {
    this.to('mechanicalturk:AssociateQualificationWithWorker');
    return this;
  }

  /**
   * The CreateAdditionalAssignmentsForHIT operation increases the maximum number of assignments of an existing HIT
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_CreateAdditionalAssignmentsForHITOperation.html
   */
  public toCreateAdditionalAssignmentsForHIT() {
    this.to('mechanicalturk:CreateAdditionalAssignmentsForHIT');
    return this;
  }

  /**
   * The CreateHIT operation creates a new HIT (Human Intelligence Task)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_CreateHITOperation.html
   */
  public toCreateHIT() {
    this.to('mechanicalturk:CreateHIT');
    return this;
  }

  /**
   * The CreateHITType operation creates a new HIT type
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_CreateHITTypeOperation.html
   */
  public toCreateHITType() {
    this.to('mechanicalturk:CreateHITType');
    return this;
  }

  /**
   * The CreateHITWithHITType operation creates a new Human Intelligence Task (HIT) using an existing HITTypeID generated by the CreateHITType operation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_CreateHITWithHITTypeOperation.html
   */
  public toCreateHITWithHITType() {
    this.to('mechanicalturk:CreateHITWithHITType');
    return this;
  }

  /**
   * The CreateQualificationType operation creates a new Qualification type, which is represented by a QualificationType data structure
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_CreateQualificationTypeOperation.html
   */
  public toCreateQualificationType() {
    this.to('mechanicalturk:CreateQualificationType');
    return this;
  }

  /**
   * The CreateWorkerBlock operation allows you to prevent a Worker from working on your HITs
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_CreateWorkerBlockOperation.html
   */
  public toCreateWorkerBlock() {
    this.to('mechanicalturk:CreateWorkerBlock');
    return this;
  }

  /**
   * The DeleteHIT operation disposes of a HIT that is no longer needed
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_DeleteHITOperation.html
   */
  public toDeleteHIT() {
    this.to('mechanicalturk:DeleteHIT');
    return this;
  }

  /**
   * The DeleteQualificationType disposes a Qualification type and disposes any HIT types that are associated with the Qualification type
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_DeleteQualificationTypeOperation.html
   */
  public toDeleteQualificationType() {
    this.to('mechanicalturk:DeleteQualificationType');
    return this;
  }

  /**
   * The DeleteWorkerBlock operation allows you to reinstate a blocked Worker to work on your HITs
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_DeleteWorkerBlockOperation.html
   */
  public toDeleteWorkerBlock() {
    this.to('mechanicalturk:DeleteWorkerBlock');
    return this;
  }

  /**
   * The DisassociateQualificationFromWorker revokes a previously granted Qualification from a user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_DisassociateQualificationFromWorkerOperation.html
   */
  public toDisassociateQualificationFromWorker() {
    this.to('mechanicalturk:DisassociateQualificationFromWorker');
    return this;
  }

  /**
   * The GetAccountBalance operation retrieves the amount of money in your Amazon Mechanical Turk account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_GetAccountBalanceOperation.html
   */
  public toGetAccountBalance() {
    this.to('mechanicalturk:GetAccountBalance');
    return this;
  }

  /**
   * The GetAssignment retrieves an assignment with an AssignmentStatus value of Submitted, Approved, or Rejected, using the assignment's ID
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_GetAssignmentOperation.html
   */
  public toGetAssignment() {
    this.to('mechanicalturk:GetAssignment');
    return this;
  }

  /**
   * The GetFileUploadURL operation generates and returns a temporary URL
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_GetFileUploadURLOperation.html
   */
  public toGetFileUploadURL() {
    this.to('mechanicalturk:GetFileUploadURL');
    return this;
  }

  /**
   * The GetHIT operation retrieves the details of the specified HIT
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_GetHITOperation.html
   */
  public toGetHIT() {
    this.to('mechanicalturk:GetHIT');
    return this;
  }

  /**
   * The GetQualificationScore operation returns the value of a Worker's Qualification for a given Qualification type
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_GetQualificationScoreOperation.html
   */
  public toGetQualificationScore() {
    this.to('mechanicalturk:GetQualificationScore');
    return this;
  }

  /**
   * The GetQualificationType operation retrieves information about a Qualification type using its ID
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_GetQualificationTypeOperation.html
   */
  public toGetQualificationType() {
    this.to('mechanicalturk:GetQualificationType');
    return this;
  }

  /**
   * The ListAssignmentsForHIT operation retrieves completed assignments for a HIT
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ListAssignmentsForHITOperation.html
   */
  public toListAssignmentsForHIT() {
    this.to('mechanicalturk:ListAssignmentsForHIT');
    return this;
  }

  /**
   * The ListBonusPayments operation retrieves the amounts of bonuses you have paid to Workers for a given HIT or assignment
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ListBonusPaymentsOperation.html
   */
  public toListBonusPayments() {
    this.to('mechanicalturk:ListBonusPayments');
    return this;
  }

  /**
   * The ListHITs operation returns all of a Requester's HITs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ListHITsOperation.html
   */
  public toListHITs() {
    this.to('mechanicalturk:ListHITs');
    return this;
  }

  /**
   * The ListHITsForQualificationType operation returns the HITs that use the given QualififcationType for a QualificationRequirement
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ListHITsForQualificationTypeOperation.html
   */
  public toListHITsForQualificationType() {
    this.to('mechanicalturk:ListHITsForQualificationType');
    return this;
  }

  /**
   * The ListQualificationRequests operation retrieves requests for Qualifications of a particular Qualification type
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ListQualificationRequestsOperation.html
   */
  public toListQualificationRequests() {
    this.to('mechanicalturk:ListQualificationRequests');
    return this;
  }

  /**
   * The ListQualificationTypes operation searches for Qualification types using the specified search query, and returns a list of Qualification types
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ListQualificationTypesOperation.html
   */
  public toListQualificationTypes() {
    this.to('mechanicalturk:ListQualificationTypes');
    return this;
  }

  /**
   * The ListReviewPolicyResultsForHIT operation retrieves the computed results and the actions taken in the course of executing your Review Policies during a CreateHIT operation
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ListReviewPolicyResultsForHITOperation.html
   */
  public toListReviewPolicyResultsForHIT() {
    this.to('mechanicalturk:ListReviewPolicyResultsForHIT');
    return this;
  }

  /**
   * The ListReviewableHITs operation returns all of a Requester's HITs that have not been approved or rejected
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ListReviewableHITsOperation.html
   */
  public toListReviewableHITs() {
    this.to('mechanicalturk:ListReviewableHITs');
    return this;
  }

  /**
   * The ListWorkersBlocks operation retrieves a list of Workers who are blocked from working on your HITs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ListWorkerBlocksOperation.html
   */
  public toListWorkerBlocks() {
    this.to('mechanicalturk:ListWorkerBlocks');
    return this;
  }

  /**
   * The ListWorkersWithQualificationType operation returns all of the Workers with a given Qualification type
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ListWorkersWithQualificationTypeOperation.html
   */
  public toListWorkersWithQualificationType() {
    this.to('mechanicalturk:ListWorkersWithQualificationType');
    return this;
  }

  /**
   * The NotifyWorkers operation sends an email to one or more Workers that you specify with the Worker ID
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_NotifyWorkersOperation.html
   */
  public toNotifyWorkers() {
    this.to('mechanicalturk:NotifyWorkers');
    return this;
  }

  /**
   * The RejectAssignment operation rejects the results of a completed assignment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_RejectAssignmentOperation.html
   */
  public toRejectAssignment() {
    this.to('mechanicalturk:RejectAssignment');
    return this;
  }

  /**
   * The RejectQualificationRequest operation rejects a user's request for a Qualification
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_RejectQualificationRequestOperation.html
   */
  public toRejectQualificationRequest() {
    this.to('mechanicalturk:RejectQualificationRequest');
    return this;
  }

  /**
   * The SendBonus operation issues a payment of money from your account to a Worker
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_SendBonusOperation.html
   */
  public toSendBonus() {
    this.to('mechanicalturk:SendBonus');
    return this;
  }

  /**
   * The SendTestEventNotification operation causes Amazon Mechanical Turk to send a notification message as if a HIT event occurred, according to the provided notification specification
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_SendTestEventNotificationOperation.html
   */
  public toSendTestEventNotification() {
    this.to('mechanicalturk:SendTestEventNotification');
    return this;
  }

  /**
   * The UpdateExpirationForHIT operation allows you extend the expiration time of a HIT beyond is current expiration or expire a HIT immediately
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_UpdateExpirationForHITOperation.html
   */
  public toUpdateExpirationForHIT() {
    this.to('mechanicalturk:UpdateExpirationForHIT');
    return this;
  }

  /**
   * The UpdateHITReviewStatus operation toggles the status of a HIT
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_UpdateHITReviewStatusOperation.html
   */
  public toUpdateHITReviewStatus() {
    this.to('mechanicalturk:UpdateHITReviewStatus');
    return this;
  }

  /**
   * The UpdateHITTypeOfHIT operation allows you to change the HITType properties of a HIT
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_UpdateHITTypeOfHITOperation.html
   */
  public toUpdateHITTypeOfHIT() {
    this.to('mechanicalturk:UpdateHITTypeOfHIT');
    return this;
  }

  /**
   * The UpdateNotificationSettings operation creates, updates, disables or re-enables notifications for a HIT type
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_UpdateNotificationSettingsOperation.html
   */
  public toUpdateNotificationSettings() {
    this.to('mechanicalturk:UpdateNotificationSettings');
    return this;
  }

  /**
   * The UpdateQualificationType operation modifies the attributes of an existing Qualification type, which is represented by a QualificationType data structure
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_UpdateQualificationTypeOperation.html
   */
  public toUpdateQualificationType() {
    this.to('mechanicalturk:UpdateQualificationType');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AcceptQualificationRequest",
      "ApproveAssignment",
      "AssociateQualificationWithWorker",
      "CreateAdditionalAssignmentsForHIT",
      "CreateHIT",
      "CreateHITType",
      "CreateHITWithHITType",
      "CreateQualificationType",
      "CreateWorkerBlock",
      "DeleteHIT",
      "DeleteQualificationType",
      "DeleteWorkerBlock",
      "DisassociateQualificationFromWorker",
      "NotifyWorkers",
      "RejectAssignment",
      "RejectQualificationRequest",
      "SendBonus",
      "SendTestEventNotification",
      "UpdateExpirationForHIT",
      "UpdateHITReviewStatus",
      "UpdateHITTypeOfHIT",
      "UpdateNotificationSettings",
      "UpdateQualificationType"
    ],
    "Read": [
      "GetAccountBalance",
      "GetAssignment",
      "GetFileUploadURL",
      "GetHIT",
      "GetQualificationScore",
      "GetQualificationType"
    ],
    "List": [
      "ListAssignmentsForHIT",
      "ListBonusPayments",
      "ListHITs",
      "ListHITsForQualificationType",
      "ListQualificationRequests",
      "ListQualificationTypes",
      "ListReviewPolicyResultsForHIT",
      "ListReviewableHITs",
      "ListWorkerBlocks",
      "ListWorkersWithQualificationType"
    ]
  };
}

export type MechanicalturkActionsWrite = 'AcceptQualificationRequest' | 'ApproveAssignment' | 'AssociateQualificationWithWorker' | 'CreateAdditionalAssignmentsForHIT' | 'CreateHIT' | 'CreateHITType' | 'CreateHITWithHITType' | 'CreateQualificationType' | 'CreateWorkerBlock' | 'DeleteHIT' | 'DeleteQualificationType' | 'DeleteWorkerBlock' | 'DisassociateQualificationFromWorker' | 'NotifyWorkers' | 'RejectAssignment' | 'RejectQualificationRequest' | 'SendBonus' | 'SendTestEventNotification' | 'UpdateExpirationForHIT' | 'UpdateHITReviewStatus' | 'UpdateHITTypeOfHIT' | 'UpdateNotificationSettings' | 'UpdateQualificationType';
export type MechanicalturkActionsRead = 'GetAccountBalance' | 'GetAssignment' | 'GetFileUploadURL' | 'GetHIT' | 'GetQualificationScore' | 'GetQualificationType';
export type MechanicalturkActionsList = 'ListAssignmentsForHIT' | 'ListBonusPayments' | 'ListHITs' | 'ListHITsForQualificationType' | 'ListQualificationRequests' | 'ListQualificationTypes' | 'ListReviewPolicyResultsForHIT' | 'ListReviewableHITs' | 'ListWorkerBlocks' | 'ListWorkersWithQualificationType';
export type MechanicalturkActions = MechanicalturkActionsWrite | MechanicalturkActionsRead | MechanicalturkActionsList;
