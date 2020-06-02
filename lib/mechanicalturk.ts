import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service mechanicalturk
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmechanicalturk.html
 */
export class Mechanicalturk extends PolicyStatement {
    public servicePrefix = 'mechanicalturk';
    public actions : Actions = { "AcceptQualificationRequest": { "url": "https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_AcceptQualificationRequestOperation.html", "description": "The AcceptQualificationRequest operation grants a Worker's request for a Qualification", "accessLevel": "Write" }, "ApproveAssignment": { "url": "https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ApproveAssignmentOperation.html", "description": "The ApproveAssignment operation approves the results of a completed assignment", "accessLevel": "Write" }, "AssociateQualificationWithWorker": { "url": "https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_AssociateQualificationWithWorkerOperation.html", "description": "The AssociateQualificationWithWorker operation gives a Worker a Qualification", "accessLevel": "Write" }, "CreateAdditionalAssignmentsForHIT": { "url": "https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_CreateAdditionalAssignmentsForHITOperation.html", "description": "The CreateAdditionalAssignmentsForHIT operation increases the maximum number of assignments of an existing HIT", "accessLevel": "Write" }, "CreateHIT": { "url": "https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_CreateHITOperation.html", "description": "The CreateHIT operation creates a new HIT (Human Intelligence Task)", "accessLevel": "Write" }, "CreateHITType": { "url": "https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_CreateHITTypeOperation.html", "description": "The CreateHITType operation creates a new HIT type", "accessLevel": "Write" }, "CreateHITWithHITType": { "url": "https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_CreateHITWithHITTypeOperation.html", "description": "The CreateHITWithHITType operation creates a new Human Intelligence Task (HIT) using an existing HITTypeID generated by the CreateHITType operation", "accessLevel": "Write" }, "CreateQualificationType": { "url": "https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_CreateQualificationTypeOperation.html", "description": "The CreateQualificationType operation creates a new Qualification type, which is represented by a QualificationType data structure", "accessLevel": "Write" }, "CreateWorkerBlock": { "url": "https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_CreateWorkerBlockOperation.html", "description": "The CreateWorkerBlock operation allows you to prevent a Worker from working on your HITs", "accessLevel": "Write" }, "DeleteHIT": { "url": "https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_DeleteHITOperation.html", "description": "The DeleteHIT operation disposes of a HIT that is no longer needed", "accessLevel": "Write" }, "DeleteQualificationType": { "url": "https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_DeleteQualificationTypeOperation.html", "description": "The DeleteQualificationType disposes a Qualification type and disposes any HIT types that are associated with the Qualification type", "accessLevel": "Write" }, "DeleteWorkerBlock": { "url": "https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_DeleteWorkerBlockOperation.html", "description": "The DeleteWorkerBlock operation allows you to reinstate a blocked Worker to work on your HITs", "accessLevel": "Write" }, "DisassociateQualificationFromWorker": { "url": "https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_DisassociateQualificationFromWorkerOperation.html", "description": "The DisassociateQualificationFromWorker revokes a previously granted Qualification from a user", "accessLevel": "Write" }, "GetAccountBalance": { "url": "https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_GetAccountBalanceOperation.html", "description": "The GetAccountBalance operation retrieves the amount of money in your Amazon Mechanical Turk account", "accessLevel": "Read" }, "GetAssignment": { "url": "https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_GetAssignmentOperation.html", "description": "The GetAssignment retrieves an assignment with an AssignmentStatus value of Submitted, Approved, or Rejected, using the assignment's ID", "accessLevel": "Read" }, "GetFileUploadURL": { "url": "https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_GetFileUploadURLOperation.html", "description": "The GetFileUploadURL operation generates and returns a temporary URL", "accessLevel": "Read" }, "GetHIT": { "url": "https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_GetHITOperation.html", "description": "The GetHIT operation retrieves the details of the specified HIT", "accessLevel": "Read" }, "GetQualificationScore": { "url": "https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_GetQualificationScoreOperation.html", "description": "The GetQualificationScore operation returns the value of a Worker's Qualification for a given Qualification type", "accessLevel": "Read" }, "GetQualificationType": { "url": "https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_GetQualificationTypeOperation.html", "description": "The GetQualificationType operation retrieves information about a Qualification type using its ID", "accessLevel": "Read" }, "ListAssignmentsForHIT": { "url": "https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ListAssignmentsForHITOperation.html", "description": "The ListAssignmentsForHIT operation retrieves completed assignments for a HIT", "accessLevel": "List" }, "ListBonusPayments": { "url": "https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ListBonusPaymentsOperation.html", "description": "The ListBonusPayments operation retrieves the amounts of bonuses you have paid to Workers for a given HIT or assignment", "accessLevel": "List" }, "ListHITs": { "url": "https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ListHITsOperation.html", "description": "The ListHITs operation returns all of a Requester's HITs", "accessLevel": "List" }, "ListHITsForQualificationType": { "url": "https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ListHITsForQualificationTypeOperation.html", "description": "The ListHITsForQualificationType operation returns the HITs that use the given QualififcationType for a QualificationRequirement", "accessLevel": "List" }, "ListQualificationRequests": { "url": "https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ListQualificationRequestsOperation.html", "description": "The ListQualificationRequests operation retrieves requests for Qualifications of a particular Qualification type", "accessLevel": "List" }, "ListQualificationTypes": { "url": "https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ListQualificationTypesOperation.html", "description": "The ListQualificationTypes operation searches for Qualification types using the specified search query, and returns a list of Qualification types", "accessLevel": "List" }, "ListReviewPolicyResultsForHIT": { "url": "https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ListReviewPolicyResultsForHITOperation.html", "description": "The ListReviewPolicyResultsForHIT operation retrieves the computed results and the actions taken in the course of executing your Review Policies during a CreateHIT operation", "accessLevel": "List" }, "ListReviewableHITs": { "url": "https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ListReviewableHITsOperation.html", "description": "The ListReviewableHITs operation returns all of a Requester's HITs that have not been approved or rejected", "accessLevel": "List" }, "ListWorkerBlocks": { "url": "https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ListWorkerBlocksOperation.html", "description": "The ListWorkersBlocks operation retrieves a list of Workers who are blocked from working on your HITs", "accessLevel": "List" }, "ListWorkersWithQualificationType": { "url": "https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ListWorkersWithQualificationTypeOperation.html", "description": "The ListWorkersWithQualificationType operation returns all of the Workers with a given Qualification type", "accessLevel": "List" }, "NotifyWorkers": { "url": "https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_NotifyWorkersOperation.html", "description": "The NotifyWorkers operation sends an email to one or more Workers that you specify with the Worker ID", "accessLevel": "Write" }, "RejectAssignment": { "url": "https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_RejectAssignmentOperation.html", "description": "The RejectAssignment operation rejects the results of a completed assignment", "accessLevel": "Write" }, "RejectQualificationRequest": { "url": "https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_RejectQualificationRequestOperation.html", "description": "The RejectQualificationRequest operation rejects a user's request for a Qualification", "accessLevel": "Write" }, "SendBonus": { "url": "https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_SendBonusOperation.html", "description": "The SendBonus operation issues a payment of money from your account to a Worker", "accessLevel": "Write" }, "SendTestEventNotification": { "url": "https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_SendTestEventNotificationOperation.html", "description": "The SendTestEventNotification operation causes Amazon Mechanical Turk to send a notification message as if a HIT event occurred, according to the provided notification specification", "accessLevel": "Write" }, "UpdateExpirationForHIT": { "url": "https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_UpdateExpirationForHITOperation.html", "description": "The UpdateExpirationForHIT operation allows you extend the expiration time of a HIT beyond is current expiration or expire a HIT immediately", "accessLevel": "Write" }, "UpdateHITReviewStatus": { "url": "https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_UpdateHITReviewStatusOperation.html", "description": "The UpdateHITReviewStatus operation toggles the status of a HIT", "accessLevel": "Write" }, "UpdateHITTypeOfHIT": { "url": "https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_UpdateHITTypeOfHITOperation.html", "description": "The UpdateHITTypeOfHIT operation allows you to change the HITType properties of a HIT", "accessLevel": "Write" }, "UpdateNotificationSettings": { "url": "https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_UpdateNotificationSettingsOperation.html", "description": "The UpdateNotificationSettings operation creates, updates, disables or re-enables notifications for a HIT type", "accessLevel": "Write" }, "UpdateQualificationType": { "url": "https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_UpdateQualificationTypeOperation.html", "description": "The UpdateQualificationType operation modifies the attributes of an existing Qualification type, which is represented by a QualificationType data structure", "accessLevel": "Write" } };

    /**
     * The AcceptQualificationRequest operation grants a Worker's request for a Qualification
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_AcceptQualificationRequestOperation.html
     */
    public acceptQualificationRequest () {
        this.add('mechanicalturk:AcceptQualificationRequest');
        return this;
    }

    /**
     * The ApproveAssignment operation approves the results of a completed assignment
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ApproveAssignmentOperation.html
     */
    public approveAssignment () {
        this.add('mechanicalturk:ApproveAssignment');
        return this;
    }

    /**
     * The AssociateQualificationWithWorker operation gives a Worker a Qualification
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_AssociateQualificationWithWorkerOperation.html
     */
    public associateQualificationWithWorker () {
        this.add('mechanicalturk:AssociateQualificationWithWorker');
        return this;
    }

    /**
     * The CreateAdditionalAssignmentsForHIT operation increases the maximum number of assignments of an existing HIT
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_CreateAdditionalAssignmentsForHITOperation.html
     */
    public createAdditionalAssignmentsForHIT () {
        this.add('mechanicalturk:CreateAdditionalAssignmentsForHIT');
        return this;
    }

    /**
     * The CreateHIT operation creates a new HIT (Human Intelligence Task)
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_CreateHITOperation.html
     */
    public createHIT () {
        this.add('mechanicalturk:CreateHIT');
        return this;
    }

    /**
     * The CreateHITType operation creates a new HIT type
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_CreateHITTypeOperation.html
     */
    public createHITType () {
        this.add('mechanicalturk:CreateHITType');
        return this;
    }

    /**
     * The CreateHITWithHITType operation creates a new Human Intelligence Task (HIT) using an existing HITTypeID generated by the CreateHITType operation
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_CreateHITWithHITTypeOperation.html
     */
    public createHITWithHITType () {
        this.add('mechanicalturk:CreateHITWithHITType');
        return this;
    }

    /**
     * The CreateQualificationType operation creates a new Qualification type, which is represented by a QualificationType data structure
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_CreateQualificationTypeOperation.html
     */
    public createQualificationType () {
        this.add('mechanicalturk:CreateQualificationType');
        return this;
    }

    /**
     * The CreateWorkerBlock operation allows you to prevent a Worker from working on your HITs
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_CreateWorkerBlockOperation.html
     */
    public createWorkerBlock () {
        this.add('mechanicalturk:CreateWorkerBlock');
        return this;
    }

    /**
     * The DeleteHIT operation disposes of a HIT that is no longer needed
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_DeleteHITOperation.html
     */
    public deleteHIT () {
        this.add('mechanicalturk:DeleteHIT');
        return this;
    }

    /**
     * The DeleteQualificationType disposes a Qualification type and disposes any HIT types that are associated with the Qualification type
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_DeleteQualificationTypeOperation.html
     */
    public deleteQualificationType () {
        this.add('mechanicalturk:DeleteQualificationType');
        return this;
    }

    /**
     * The DeleteWorkerBlock operation allows you to reinstate a blocked Worker to work on your HITs
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_DeleteWorkerBlockOperation.html
     */
    public deleteWorkerBlock () {
        this.add('mechanicalturk:DeleteWorkerBlock');
        return this;
    }

    /**
     * The DisassociateQualificationFromWorker revokes a previously granted Qualification from a user
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_DisassociateQualificationFromWorkerOperation.html
     */
    public disassociateQualificationFromWorker () {
        this.add('mechanicalturk:DisassociateQualificationFromWorker');
        return this;
    }

    /**
     * The GetAccountBalance operation retrieves the amount of money in your Amazon Mechanical Turk account
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_GetAccountBalanceOperation.html
     */
    public getAccountBalance () {
        this.add('mechanicalturk:GetAccountBalance');
        return this;
    }

    /**
     * The GetAssignment retrieves an assignment with an AssignmentStatus value of Submitted, Approved, or Rejected, using the assignment's ID
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_GetAssignmentOperation.html
     */
    public getAssignment () {
        this.add('mechanicalturk:GetAssignment');
        return this;
    }

    /**
     * The GetFileUploadURL operation generates and returns a temporary URL
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_GetFileUploadURLOperation.html
     */
    public getFileUploadURL () {
        this.add('mechanicalturk:GetFileUploadURL');
        return this;
    }

    /**
     * The GetHIT operation retrieves the details of the specified HIT
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_GetHITOperation.html
     */
    public getHIT () {
        this.add('mechanicalturk:GetHIT');
        return this;
    }

    /**
     * The GetQualificationScore operation returns the value of a Worker's Qualification for a given Qualification type
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_GetQualificationScoreOperation.html
     */
    public getQualificationScore () {
        this.add('mechanicalturk:GetQualificationScore');
        return this;
    }

    /**
     * The GetQualificationType operation retrieves information about a Qualification type using its ID
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_GetQualificationTypeOperation.html
     */
    public getQualificationType () {
        this.add('mechanicalturk:GetQualificationType');
        return this;
    }

    /**
     * The ListAssignmentsForHIT operation retrieves completed assignments for a HIT
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ListAssignmentsForHITOperation.html
     */
    public listAssignmentsForHIT () {
        this.add('mechanicalturk:ListAssignmentsForHIT');
        return this;
    }

    /**
     * The ListBonusPayments operation retrieves the amounts of bonuses you have paid to Workers for a given HIT or assignment
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ListBonusPaymentsOperation.html
     */
    public listBonusPayments () {
        this.add('mechanicalturk:ListBonusPayments');
        return this;
    }

    /**
     * The ListHITs operation returns all of a Requester's HITs
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ListHITsOperation.html
     */
    public listHITs () {
        this.add('mechanicalturk:ListHITs');
        return this;
    }

    /**
     * The ListHITsForQualificationType operation returns the HITs that use the given QualififcationType for a QualificationRequirement
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ListHITsForQualificationTypeOperation.html
     */
    public listHITsForQualificationType () {
        this.add('mechanicalturk:ListHITsForQualificationType');
        return this;
    }

    /**
     * The ListQualificationRequests operation retrieves requests for Qualifications of a particular Qualification type
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ListQualificationRequestsOperation.html
     */
    public listQualificationRequests () {
        this.add('mechanicalturk:ListQualificationRequests');
        return this;
    }

    /**
     * The ListQualificationTypes operation searches for Qualification types using the specified search query, and returns a list of Qualification types
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ListQualificationTypesOperation.html
     */
    public listQualificationTypes () {
        this.add('mechanicalturk:ListQualificationTypes');
        return this;
    }

    /**
     * The ListReviewPolicyResultsForHIT operation retrieves the computed results and the actions taken in the course of executing your Review Policies during a CreateHIT operation
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ListReviewPolicyResultsForHITOperation.html
     */
    public listReviewPolicyResultsForHIT () {
        this.add('mechanicalturk:ListReviewPolicyResultsForHIT');
        return this;
    }

    /**
     * The ListReviewableHITs operation returns all of a Requester's HITs that have not been approved or rejected
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ListReviewableHITsOperation.html
     */
    public listReviewableHITs () {
        this.add('mechanicalturk:ListReviewableHITs');
        return this;
    }

    /**
     * The ListWorkersBlocks operation retrieves a list of Workers who are blocked from working on your HITs
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ListWorkerBlocksOperation.html
     */
    public listWorkerBlocks () {
        this.add('mechanicalturk:ListWorkerBlocks');
        return this;
    }

    /**
     * The ListWorkersWithQualificationType operation returns all of the Workers with a given Qualification type
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ListWorkersWithQualificationTypeOperation.html
     */
    public listWorkersWithQualificationType () {
        this.add('mechanicalturk:ListWorkersWithQualificationType');
        return this;
    }

    /**
     * The NotifyWorkers operation sends an email to one or more Workers that you specify with the Worker ID
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_NotifyWorkersOperation.html
     */
    public notifyWorkers () {
        this.add('mechanicalturk:NotifyWorkers');
        return this;
    }

    /**
     * The RejectAssignment operation rejects the results of a completed assignment
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_RejectAssignmentOperation.html
     */
    public rejectAssignment () {
        this.add('mechanicalturk:RejectAssignment');
        return this;
    }

    /**
     * The RejectQualificationRequest operation rejects a user's request for a Qualification
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_RejectQualificationRequestOperation.html
     */
    public rejectQualificationRequest () {
        this.add('mechanicalturk:RejectQualificationRequest');
        return this;
    }

    /**
     * The SendBonus operation issues a payment of money from your account to a Worker
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_SendBonusOperation.html
     */
    public sendBonus () {
        this.add('mechanicalturk:SendBonus');
        return this;
    }

    /**
     * The SendTestEventNotification operation causes Amazon Mechanical Turk to send a notification message as if a HIT event occurred, according to the provided notification specification
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_SendTestEventNotificationOperation.html
     */
    public sendTestEventNotification () {
        this.add('mechanicalturk:SendTestEventNotification');
        return this;
    }

    /**
     * The UpdateExpirationForHIT operation allows you extend the expiration time of a HIT beyond is current expiration or expire a HIT immediately
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_UpdateExpirationForHITOperation.html
     */
    public updateExpirationForHIT () {
        this.add('mechanicalturk:UpdateExpirationForHIT');
        return this;
    }

    /**
     * The UpdateHITReviewStatus operation toggles the status of a HIT
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_UpdateHITReviewStatusOperation.html
     */
    public updateHITReviewStatus () {
        this.add('mechanicalturk:UpdateHITReviewStatus');
        return this;
    }

    /**
     * The UpdateHITTypeOfHIT operation allows you to change the HITType properties of a HIT
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_UpdateHITTypeOfHITOperation.html
     */
    public updateHITTypeOfHIT () {
        this.add('mechanicalturk:UpdateHITTypeOfHIT');
        return this;
    }

    /**
     * The UpdateNotificationSettings operation creates, updates, disables or re-enables notifications for a HIT type
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_UpdateNotificationSettingsOperation.html
     */
    public updateNotificationSettings () {
        this.add('mechanicalturk:UpdateNotificationSettings');
        return this;
    }

    /**
     * The UpdateQualificationType operation modifies the attributes of an existing Qualification type, which is represented by a QualificationType data structure
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_UpdateQualificationTypeOperation.html
     */
    public updateQualificationType () {
        this.add('mechanicalturk:UpdateQualificationType');
        return this;
    }
}
