import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [greengrass](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotgreengrass.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Greengrass extends PolicyStatement {
  public servicePrefix = 'greengrass';

  /**
   * Statement provider for service [greengrass](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotgreengrass.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate a role with a group. The role's permissions must allow Greengrass core Lambda functions and connectors to perform actions in other AWS services
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/associateroletogroup-put.html
   */
  public toAssociateRoleToGroup() {
    return this.to('AssociateRoleToGroup');
  }

  /**
   * Grants permission to associate a role with your account. AWS IoT Greengrass uses this role to access your Lambda functions and AWS IoT resources
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/associateserviceroletoaccount-put.html
   */
  public toAssociateServiceRoleToAccount() {
    return this.to('AssociateServiceRoleToAccount');
  }

  /**
   * Grants permission to create a connector definition
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createconnectordefinition-post.html
   */
  public toCreateConnectorDefinition() {
    return this.to('CreateConnectorDefinition');
  }

  /**
   * Grants permission to create a version of an existing connector definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createconnectordefinitionversion-post.html
   */
  public toCreateConnectorDefinitionVersion() {
    return this.to('CreateConnectorDefinitionVersion');
  }

  /**
   * Grants permission to create a core definition
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createcoredefinition-post.html
   */
  public toCreateCoreDefinition() {
    return this.to('CreateCoreDefinition');
  }

  /**
   * Grants permission to create a version of an existing core definition. Greengrass groups must each contain exactly one Greengrass core
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createcoredefinitionversion-post.html
   */
  public toCreateCoreDefinitionVersion() {
    return this.to('CreateCoreDefinitionVersion');
  }

  /**
   * Grants permission to create a deployment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createdeployment-post.html
   */
  public toCreateDeployment() {
    return this.to('CreateDeployment');
  }

  /**
   * Grants permission to create a device definition
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createdevicedefinition-post.html
   */
  public toCreateDeviceDefinition() {
    return this.to('CreateDeviceDefinition');
  }

  /**
   * Grants permission to create a version of an existing device definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createdevicedefinitionversion-post.html
   */
  public toCreateDeviceDefinitionVersion() {
    return this.to('CreateDeviceDefinitionVersion');
  }

  /**
   * Grants permission to create a Lambda function definition to be used in a group that contains a list of Lambda functions and their configurations
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createfunctiondefinition-post.html
   */
  public toCreateFunctionDefinition() {
    return this.to('CreateFunctionDefinition');
  }

  /**
   * Grants permission to create a version of an existing Lambda function definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createfunctiondefinitionversion-post.html
   */
  public toCreateFunctionDefinitionVersion() {
    return this.to('CreateFunctionDefinitionVersion');
  }

  /**
   * Grants permission to create a group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/creategroup-post.html
   */
  public toCreateGroup() {
    return this.to('CreateGroup');
  }

  /**
   * Grants permission to create a CA for the group, or rotate the existing CA
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/creategroupcertificateauthority-post.html
   */
  public toCreateGroupCertificateAuthority() {
    return this.to('CreateGroupCertificateAuthority');
  }

  /**
   * Grants permission to create a version of a group that has already been defined
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/creategroupversion-post.html
   */
  public toCreateGroupVersion() {
    return this.to('CreateGroupVersion');
  }

  /**
   * Grants permission to create a logger definition
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createloggerdefinition-post.html
   */
  public toCreateLoggerDefinition() {
    return this.to('CreateLoggerDefinition');
  }

  /**
   * Grants permission to create a version of an existing logger definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createloggerdefinitionversion-post.html
   */
  public toCreateLoggerDefinitionVersion() {
    return this.to('CreateLoggerDefinitionVersion');
  }

  /**
   * Grants permission to create a resource definition that contains a list of resources to be used in a group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createresourcedefinition-post.html
   */
  public toCreateResourceDefinition() {
    return this.to('CreateResourceDefinition');
  }

  /**
   * Grants permission to create a version of an existing resource definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createresourcedefinitionversion-post.html
   */
  public toCreateResourceDefinitionVersion() {
    return this.to('CreateResourceDefinitionVersion');
  }

  /**
   * Grants permission to create an AWS IoT job that will trigger your Greengrass cores to update the software they are running
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createsoftwareupdatejob-post.html
   */
  public toCreateSoftwareUpdateJob() {
    return this.to('CreateSoftwareUpdateJob');
  }

  /**
   * Grants permission to create a subscription definition
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createsubscriptiondefinition-post.html
   */
  public toCreateSubscriptionDefinition() {
    return this.to('CreateSubscriptionDefinition');
  }

  /**
   * Grants permission to create a version of an existing subscription definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createsubscriptiondefinitionversion-post.html
   */
  public toCreateSubscriptionDefinitionVersion() {
    return this.to('CreateSubscriptionDefinitionVersion');
  }

  /**
   * Grants permission to delete a connector definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/deleteconnectordefinition-delete.html
   */
  public toDeleteConnectorDefinition() {
    return this.to('DeleteConnectorDefinition');
  }

  /**
   * Grants permission to delete a core definition. Deleting a definition that is currently in use in a deployment affects future deployments
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/deletecoredefinition-delete.html
   */
  public toDeleteCoreDefinition() {
    return this.to('DeleteCoreDefinition');
  }

  /**
   * Grants permission to delete a device definition. Deleting a definition that is currently in use in a deployment affects future deployments
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/deletedevicedefinition-delete.html
   */
  public toDeleteDeviceDefinition() {
    return this.to('DeleteDeviceDefinition');
  }

  /**
   * Grants permission to delete a Lambda function definition. Deleting a definition that is currently in use in a deployment affects future deployments
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/deletefunctiondefinition-delete.html
   */
  public toDeleteFunctionDefinition() {
    return this.to('DeleteFunctionDefinition');
  }

  /**
   * Grants permission to delete a group that is not currently in use in a deployment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/deletegroup-delete.html
   */
  public toDeleteGroup() {
    return this.to('DeleteGroup');
  }

  /**
   * Grants permission to delete a logger definition. Deleting a definition that is currently in use in a deployment affects future deployments
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/deleteloggerdefinition-delete.html
   */
  public toDeleteLoggerDefinition() {
    return this.to('DeleteLoggerDefinition');
  }

  /**
   * Grants permission to delete a resource definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/deleteresourcedefinition-delete.html
   */
  public toDeleteResourceDefinition() {
    return this.to('DeleteResourceDefinition');
  }

  /**
   * Grants permission to delete a subscription definition. Deleting a definition that is currently in use in a deployment affects future deployments
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/deletesubscriptiondefinition-delete.html
   */
  public toDeleteSubscriptionDefinition() {
    return this.to('DeleteSubscriptionDefinition');
  }

  /**
   * Grants permission to disassociate the role from a group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/disassociaterolefromgroup-delete.html
   */
  public toDisassociateRoleFromGroup() {
    return this.to('DisassociateRoleFromGroup');
  }

  /**
   * Grants permission to disassociate the service role from an account. Without a service role, deployments will not work
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/disassociateservicerolefromaccount-delete.html
   */
  public toDisassociateServiceRoleFromAccount() {
    return this.to('DisassociateServiceRoleFromAccount');
  }

  /**
   * Grants permission to retrieve information required to connect to a Greengrass core
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/developerguide/gg-discover-api.html
   */
  public toDiscover() {
    return this.to('Discover');
  }

  /**
   * Grants permission to retrieve the role associated with a group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getassociatedrole-get.html
   */
  public toGetAssociatedRole() {
    return this.to('GetAssociatedRole');
  }

  /**
   * Grants permission to return the status of a bulk deployment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getbulkdeploymentstatus-get.html
   */
  public toGetBulkDeploymentStatus() {
    return this.to('GetBulkDeploymentStatus');
  }

  /**
   * Grants permission to retrieve the connectivity information for a core
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getconnectivityinfo-get.html
   */
  public toGetConnectivityInfo() {
    return this.to('GetConnectivityInfo');
  }

  /**
   * Grants permission to retrieve information about a connector definition
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getconnectordefinition-get.html
   */
  public toGetConnectorDefinition() {
    return this.to('GetConnectorDefinition');
  }

  /**
   * Grants permission to retrieve information about a connector definition version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getconnectordefinitionversion-get.html
   */
  public toGetConnectorDefinitionVersion() {
    return this.to('GetConnectorDefinitionVersion');
  }

  /**
   * Grants permission to retrieve information about a core definition
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getcoredefinition-get.html
   */
  public toGetCoreDefinition() {
    return this.to('GetCoreDefinition');
  }

  /**
   * Grants permission to retrieve information about a core definition version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getcoredefinitionversion-get.html
   */
  public toGetCoreDefinitionVersion() {
    return this.to('GetCoreDefinitionVersion');
  }

  /**
   * Grants permission to return the status of a deployment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getdeploymentstatus-get.html
   */
  public toGetDeploymentStatus() {
    return this.to('GetDeploymentStatus');
  }

  /**
   * Grants permission to retrieve information about a device definition
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getdevicedefinition-get.html
   */
  public toGetDeviceDefinition() {
    return this.to('GetDeviceDefinition');
  }

  /**
   * Grants permission to retrieve information about a device definition version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getdevicedefinitionversion-get.html
   */
  public toGetDeviceDefinitionVersion() {
    return this.to('GetDeviceDefinitionVersion');
  }

  /**
   * Grants permission to retrieve information about a Lambda function definition, such as its creation time and latest version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getfunctiondefinition-get.html
   */
  public toGetFunctionDefinition() {
    return this.to('GetFunctionDefinition');
  }

  /**
   * Grants permission to retrieve information about a Lambda function definition version, such as which Lambda functions are included in the version and their configurations
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getfunctiondefinitionversion-get.html
   */
  public toGetFunctionDefinitionVersion() {
    return this.to('GetFunctionDefinitionVersion');
  }

  /**
   * Grants permission to retrieve information about a group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getgroup-get.html
   */
  public toGetGroup() {
    return this.to('GetGroup');
  }

  /**
   * Grants permission to return the public key of the CA associated with a group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getgroupcertificateauthority-get.html
   */
  public toGetGroupCertificateAuthority() {
    return this.to('GetGroupCertificateAuthority');
  }

  /**
   * Grants permission to retrieve the current configuration for the CA used by a group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getgroupcertificateconfiguration-get.html
   */
  public toGetGroupCertificateConfiguration() {
    return this.to('GetGroupCertificateConfiguration');
  }

  /**
   * Grants permission to retrieve information about a group version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getgroupversion-get.html
   */
  public toGetGroupVersion() {
    return this.to('GetGroupVersion');
  }

  /**
   * Grants permission to retrieve information about a logger definition
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getloggerdefinition-get.html
   */
  public toGetLoggerDefinition() {
    return this.to('GetLoggerDefinition');
  }

  /**
   * Grants permission to retrieve information about a logger definition version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getloggerdefinitionversion-get.html
   */
  public toGetLoggerDefinitionVersion() {
    return this.to('GetLoggerDefinitionVersion');
  }

  /**
   * Grants permission to retrieve information about a resource definition, such as its creation time and latest version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getresourcedefinition-get.html
   */
  public toGetResourceDefinition() {
    return this.to('GetResourceDefinition');
  }

  /**
   * Grants permission to retrieve information about a resource definition version, such as which resources are included in the version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getresourcedefinitionversion-get.html
   */
  public toGetResourceDefinitionVersion() {
    return this.to('GetResourceDefinitionVersion');
  }

  /**
   * Grants permission to retrieve the service role that is attached to an account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getserviceroleforaccount-get.html
   */
  public toGetServiceRoleForAccount() {
    return this.to('GetServiceRoleForAccount');
  }

  /**
   * Grants permission to retrieve information about a subscription definition
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getsubscriptiondefinition-get.html
   */
  public toGetSubscriptionDefinition() {
    return this.to('GetSubscriptionDefinition');
  }

  /**
   * Grants permission to retrieve information about a subscription definition version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getsubscriptiondefinitionversion-get.html
   */
  public toGetSubscriptionDefinitionVersion() {
    return this.to('GetSubscriptionDefinitionVersion');
  }

  /**
   * Grants permission to retrieve runtime configuration of a thing
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getthingruntimeconfiguration-get.html
   */
  public toGetThingRuntimeConfiguration() {
    return this.to('GetThingRuntimeConfiguration');
  }

  /**
   * Grants permission to retrieve a paginated list of the deployments that have been started in a bulk deployment operation and their current deployment status
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listbulkdeploymentdetailedreports-get.html
   */
  public toListBulkDeploymentDetailedReports() {
    return this.to('ListBulkDeploymentDetailedReports');
  }

  /**
   * Grants permission to retrieve a list of bulk deployments
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listbulkdeployments-get.html
   */
  public toListBulkDeployments() {
    return this.to('ListBulkDeployments');
  }

  /**
   * Grants permission to list the versions of a connector definition
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listconnectordefinitionversions-get.html
   */
  public toListConnectorDefinitionVersions() {
    return this.to('ListConnectorDefinitionVersions');
  }

  /**
   * Grants permission to retrieve a list of connector definitions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listconnectordefinitions-get.html
   */
  public toListConnectorDefinitions() {
    return this.to('ListConnectorDefinitions');
  }

  /**
   * Grants permission to list the versions of a core definition
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listcoredefinitionversions-get.html
   */
  public toListCoreDefinitionVersions() {
    return this.to('ListCoreDefinitionVersions');
  }

  /**
   * Grants permission to retrieve a list of core definitions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listcoredefinitions-get.html
   */
  public toListCoreDefinitions() {
    return this.to('ListCoreDefinitions');
  }

  /**
   * Grants permission to retrieve a list of all deployments for a group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listdeployments-get.html
   */
  public toListDeployments() {
    return this.to('ListDeployments');
  }

  /**
   * Grants permission to list the versions of a device definition
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listdevicedefinitionversions-get.html
   */
  public toListDeviceDefinitionVersions() {
    return this.to('ListDeviceDefinitionVersions');
  }

  /**
   * Grants permission to retrieve a list of device definitions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listdevicedefinitions-get.html
   */
  public toListDeviceDefinitions() {
    return this.to('ListDeviceDefinitions');
  }

  /**
   * Grants permission to list the versions of a Lambda function definition
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listfunctiondefinitionversions-get.html
   */
  public toListFunctionDefinitionVersions() {
    return this.to('ListFunctionDefinitionVersions');
  }

  /**
   * Grants permission to retrieve a list of Lambda function definitions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listfunctiondefinitions-get.html
   */
  public toListFunctionDefinitions() {
    return this.to('ListFunctionDefinitions');
  }

  /**
   * Grants permission to retrieve a list of current CAs for a group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listgroupcertificateauthorities-get.html
   */
  public toListGroupCertificateAuthorities() {
    return this.to('ListGroupCertificateAuthorities');
  }

  /**
   * Grants permission to list the versions of a group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listgroupversions-get.html
   */
  public toListGroupVersions() {
    return this.to('ListGroupVersions');
  }

  /**
   * Grants permission to retrieve a list of groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listgroups-get.html
   */
  public toListGroups() {
    return this.to('ListGroups');
  }

  /**
   * Grants permission to list the versions of a logger definition
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listloggerdefinitionversions-get.html
   */
  public toListLoggerDefinitionVersions() {
    return this.to('ListLoggerDefinitionVersions');
  }

  /**
   * Grants permission to retrieve a list of logger definitions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listloggerdefinitions-get.html
   */
  public toListLoggerDefinitions() {
    return this.to('ListLoggerDefinitions');
  }

  /**
   * Grants permission to list the versions of a resource definition
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listresourcedefinitionversions-get.html
   */
  public toListResourceDefinitionVersions() {
    return this.to('ListResourceDefinitionVersions');
  }

  /**
   * Grants permission to retrieve a list of resource definitions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listresourcedefinitions-get.html
   */
  public toListResourceDefinitions() {
    return this.to('ListResourceDefinitions');
  }

  /**
   * Grants permission to list the versions of a subscription definition
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listsubscriptiondefinitionversions-get.html
   */
  public toListSubscriptionDefinitionVersions() {
    return this.to('ListSubscriptionDefinitionVersions');
  }

  /**
   * Grants permission to retrieve a list of subscription definitions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listsubscriptiondefinitions-get.html
   */
  public toListSubscriptionDefinitions() {
    return this.to('ListSubscriptionDefinitions');
  }

  /**
   * Grants permission to list the tags for a resource
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listtagsforresource-get.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to reset a group's deployments
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/resetdeployments-post.html
   */
  public toResetDeployments() {
    return this.to('ResetDeployments');
  }

  /**
   * Grants permission to deploy multiple groups in one operation
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/startbulkdeployment-post.html
   */
  public toStartBulkDeployment() {
    return this.to('StartBulkDeployment');
  }

  /**
   * Grants permission to stop the execution of a bulk deployment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/stopbulkdeployment-put.html
   */
  public toStopBulkDeployment() {
    return this.to('StopBulkDeployment');
  }

  /**
   * Grants permission to add tags to a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/tagresource-post.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/untagresource-delete.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update the connectivity information for a Greengrass core. Any devices that belong to the group that has this core will receive this information in order to find the location of the core and connect to it
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/updateconnectivityinfo-put.html
   */
  public toUpdateConnectivityInfo() {
    return this.to('UpdateConnectivityInfo');
  }

  /**
   * Grants permission to update a connector definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/updateconnectordefinition-put.html
   */
  public toUpdateConnectorDefinition() {
    return this.to('UpdateConnectorDefinition');
  }

  /**
   * Grants permission to update a core definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/updatecoredefinition-put.html
   */
  public toUpdateCoreDefinition() {
    return this.to('UpdateCoreDefinition');
  }

  /**
   * Grants permission to update a device definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/updatedevicedefinition-put.html
   */
  public toUpdateDeviceDefinition() {
    return this.to('UpdateDeviceDefinition');
  }

  /**
   * Grants permission to update a Lambda function definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/updatefunctiondefinition-put.html
   */
  public toUpdateFunctionDefinition() {
    return this.to('UpdateFunctionDefinition');
  }

  /**
   * Grants permission to update a group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/updategroup-put.html
   */
  public toUpdateGroup() {
    return this.to('UpdateGroup');
  }

  /**
   * Grants permission to update the certificate expiry time for a group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/updategroupcertificateconfiguration-put.html
   */
  public toUpdateGroupCertificateConfiguration() {
    return this.to('UpdateGroupCertificateConfiguration');
  }

  /**
   * Grants permission to update a logger definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/updateloggerdefinition-put.html
   */
  public toUpdateLoggerDefinition() {
    return this.to('UpdateLoggerDefinition');
  }

  /**
   * Grants permission to update a resource definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/updateresourcedefinition-put.html
   */
  public toUpdateResourceDefinition() {
    return this.to('UpdateResourceDefinition');
  }

  /**
   * Grants permission to update a subscription definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/updatesubscriptiondefinition-put.html
   */
  public toUpdateSubscriptionDefinition() {
    return this.to('UpdateSubscriptionDefinition');
  }

  /**
   * Grants permission to update runtime configuration of a thing
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/updatethingruntimeconfiguration-put.html
   */
  public toUpdateThingRuntimeConfiguration() {
    return this.to('UpdateThingRuntimeConfiguration');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateRoleToGroup',
      'CreateConnectorDefinition',
      'CreateConnectorDefinitionVersion',
      'CreateCoreDefinition',
      'CreateCoreDefinitionVersion',
      'CreateDeployment',
      'CreateDeviceDefinition',
      'CreateDeviceDefinitionVersion',
      'CreateFunctionDefinition',
      'CreateFunctionDefinitionVersion',
      'CreateGroup',
      'CreateGroupCertificateAuthority',
      'CreateGroupVersion',
      'CreateLoggerDefinition',
      'CreateLoggerDefinitionVersion',
      'CreateResourceDefinition',
      'CreateResourceDefinitionVersion',
      'CreateSoftwareUpdateJob',
      'CreateSubscriptionDefinition',
      'CreateSubscriptionDefinitionVersion',
      'DeleteConnectorDefinition',
      'DeleteCoreDefinition',
      'DeleteDeviceDefinition',
      'DeleteFunctionDefinition',
      'DeleteGroup',
      'DeleteLoggerDefinition',
      'DeleteResourceDefinition',
      'DeleteSubscriptionDefinition',
      'DisassociateRoleFromGroup',
      'DisassociateServiceRoleFromAccount',
      'ResetDeployments',
      'StartBulkDeployment',
      'StopBulkDeployment',
      'UpdateConnectivityInfo',
      'UpdateConnectorDefinition',
      'UpdateCoreDefinition',
      'UpdateDeviceDefinition',
      'UpdateFunctionDefinition',
      'UpdateGroup',
      'UpdateGroupCertificateConfiguration',
      'UpdateLoggerDefinition',
      'UpdateResourceDefinition',
      'UpdateSubscriptionDefinition',
      'UpdateThingRuntimeConfiguration'
    ],
    'Permissions management': [
      'AssociateServiceRoleToAccount'
    ],
    Read: [
      'Discover',
      'GetAssociatedRole',
      'GetBulkDeploymentStatus',
      'GetConnectivityInfo',
      'GetConnectorDefinition',
      'GetConnectorDefinitionVersion',
      'GetCoreDefinition',
      'GetCoreDefinitionVersion',
      'GetDeploymentStatus',
      'GetDeviceDefinition',
      'GetDeviceDefinitionVersion',
      'GetFunctionDefinition',
      'GetFunctionDefinitionVersion',
      'GetGroup',
      'GetGroupCertificateAuthority',
      'GetGroupCertificateConfiguration',
      'GetGroupVersion',
      'GetLoggerDefinition',
      'GetLoggerDefinitionVersion',
      'GetResourceDefinition',
      'GetResourceDefinitionVersion',
      'GetServiceRoleForAccount',
      'GetSubscriptionDefinition',
      'GetSubscriptionDefinitionVersion',
      'GetThingRuntimeConfiguration',
      'ListBulkDeploymentDetailedReports',
      'ListTagsForResource'
    ],
    List: [
      'ListBulkDeployments',
      'ListConnectorDefinitionVersions',
      'ListConnectorDefinitions',
      'ListCoreDefinitionVersions',
      'ListCoreDefinitions',
      'ListDeployments',
      'ListDeviceDefinitionVersions',
      'ListDeviceDefinitions',
      'ListFunctionDefinitionVersions',
      'ListFunctionDefinitions',
      'ListGroupCertificateAuthorities',
      'ListGroupVersions',
      'ListGroups',
      'ListLoggerDefinitionVersions',
      'ListLoggerDefinitions',
      'ListResourceDefinitionVersions',
      'ListResourceDefinitions',
      'ListSubscriptionDefinitionVersions',
      'ListSubscriptionDefinitions'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type connectivityInfo to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-connectivityinfo.html
   *
   * @param thingName - Identifier for the thingName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onConnectivityInfo(thingName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:greengrass:${ region || '*' }:${ account || '*' }:/greengrass/things/${ thingName }/connectivityInfo`);
  }

  /**
   * Adds a resource of type certificateAuthority to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/developerguide/gg-sec.html
   *
   * @param groupId - Identifier for the groupId.
   * @param certificateAuthorityId - Identifier for the certificateAuthorityId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onCertificateAuthority(groupId: string, certificateAuthorityId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:greengrass:${ region || '*' }:${ account || '*' }:/greengrass/groups/${ groupId }/certificateauthorities/${ certificateAuthorityId }`);
  }

  /**
   * Adds a resource of type deployment to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-createdeploymentrequest.html
   *
   * @param groupId - Identifier for the groupId.
   * @param deploymentId - Identifier for the deploymentId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onDeployment(groupId: string, deploymentId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:greengrass:${ region || '*' }:${ account || '*' }:/greengrass/groups/${ groupId }/deployments/${ deploymentId }`);
  }

  /**
   * Adds a resource of type bulkDeployment to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/developerguide/bulk-deploy-cli.html
   *
   * @param bulkDeploymentId - Identifier for the bulkDeploymentId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onBulkDeployment(bulkDeploymentId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:greengrass:${ region || '*' }:${ account || '*' }:/greengrass/bulk/deployments/${ bulkDeploymentId }`);
  }

  /**
   * Adds a resource of type group to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-groupinformation.html
   *
   * @param groupId - Identifier for the groupId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onGroup(groupId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:greengrass:${ region || '*' }:${ account || '*' }:/greengrass/groups/${ groupId }`);
  }

  /**
   * Adds a resource of type groupVersion to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-groupversion.html
   *
   * @param groupId - Identifier for the groupId.
   * @param versionId - Identifier for the versionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onGroupVersion(groupId: string, versionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:greengrass:${ region || '*' }:${ account || '*' }:/greengrass/groups/${ groupId }/versions/${ versionId }`);
  }

  /**
   * Adds a resource of type coreDefinition to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-core.html
   *
   * @param coreDefinitionId - Identifier for the coreDefinitionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCoreDefinition(coreDefinitionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:greengrass:${ region || '*' }:${ account || '*' }:/greengrass/definition/cores/${ coreDefinitionId }`);
  }

  /**
   * Adds a resource of type coreDefinitionVersion to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-coredefinitionversion.html
   *
   * @param coreDefinitionId - Identifier for the coreDefinitionId.
   * @param versionId - Identifier for the versionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onCoreDefinitionVersion(coreDefinitionId: string, versionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:greengrass:${ region || '*' }:${ account || '*' }:/greengrass/definition/cores/${ coreDefinitionId }/versions/${ versionId }`);
  }

  /**
   * Adds a resource of type deviceDefinition to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-device.html
   *
   * @param deviceDefinitionId - Identifier for the deviceDefinitionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDeviceDefinition(deviceDefinitionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:greengrass:${ region || '*' }:${ account || '*' }:/greengrass/definition/devices/${ deviceDefinitionId }`);
  }

  /**
   * Adds a resource of type deviceDefinitionVersion to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-devicedefinitionversion.html
   *
   * @param deviceDefinitionId - Identifier for the deviceDefinitionId.
   * @param versionId - Identifier for the versionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onDeviceDefinitionVersion(deviceDefinitionId: string, versionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:greengrass:${ region || '*' }:${ account || '*' }:/greengrass/definition/devices/${ deviceDefinitionId }/versions/${ versionId }`);
  }

  /**
   * Adds a resource of type functionDefinition to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-function.html
   *
   * @param functionDefinitionId - Identifier for the functionDefinitionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFunctionDefinition(functionDefinitionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:greengrass:${ region || '*' }:${ account || '*' }:/greengrass/definition/functions/${ functionDefinitionId }`);
  }

  /**
   * Adds a resource of type functionDefinitionVersion to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-functiondefinitionversion.html
   *
   * @param functionDefinitionId - Identifier for the functionDefinitionId.
   * @param versionId - Identifier for the versionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onFunctionDefinitionVersion(functionDefinitionId: string, versionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:greengrass:${ region || '*' }:${ account || '*' }:/greengrass/definition/functions/${ functionDefinitionId }/versions/${ versionId }`);
  }

  /**
   * Adds a resource of type subscriptionDefinition to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-subscription.html
   *
   * @param subscriptionDefinitionId - Identifier for the subscriptionDefinitionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSubscriptionDefinition(subscriptionDefinitionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:greengrass:${ region || '*' }:${ account || '*' }:/greengrass/definition/subscriptions/${ subscriptionDefinitionId }`);
  }

  /**
   * Adds a resource of type subscriptionDefinitionVersion to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-subscriptiondefinitionversion.html
   *
   * @param subscriptionDefinitionId - Identifier for the subscriptionDefinitionId.
   * @param versionId - Identifier for the versionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onSubscriptionDefinitionVersion(subscriptionDefinitionId: string, versionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:greengrass:${ region || '*' }:${ account || '*' }:/greengrass/definition/subscriptions/${ subscriptionDefinitionId }/versions/${ versionId }`);
  }

  /**
   * Adds a resource of type loggerDefinition to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-logger.html
   *
   * @param loggerDefinitionId - Identifier for the loggerDefinitionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onLoggerDefinition(loggerDefinitionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:greengrass:${ region || '*' }:${ account || '*' }:/greengrass/definition/loggers/${ loggerDefinitionId }`);
  }

  /**
   * Adds a resource of type loggerDefinitionVersion to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-loggerdefinitionversion.html
   *
   * @param loggerDefinitionId - Identifier for the loggerDefinitionId.
   * @param versionId - Identifier for the versionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onLoggerDefinitionVersion(loggerDefinitionId: string, versionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:greengrass:${ region || '*' }:${ account || '*' }:/greengrass/definition/loggers/${ loggerDefinitionId }/versions/${ versionId }`);
  }

  /**
   * Adds a resource of type resourceDefinition to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-resource.html
   *
   * @param resourceDefinitionId - Identifier for the resourceDefinitionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onResourceDefinition(resourceDefinitionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:greengrass:${ region || '*' }:${ account || '*' }:/greengrass/definition/resources/${ resourceDefinitionId }`);
  }

  /**
   * Adds a resource of type resourceDefinitionVersion to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-resourcedefinitionversion.html
   *
   * @param resourceDefinitionId - Identifier for the resourceDefinitionId.
   * @param versionId - Identifier for the versionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onResourceDefinitionVersion(resourceDefinitionId: string, versionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:greengrass:${ region || '*' }:${ account || '*' }:/greengrass/definition/resources/${ resourceDefinitionId }/versions/${ versionId }`);
  }

  /**
   * Adds a resource of type connectorDefinition to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-connector.html
   *
   * @param connectorDefinitionId - Identifier for the connectorDefinitionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onConnectorDefinition(connectorDefinitionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:greengrass:${ region || '*' }:${ account || '*' }:/greengrass/definition/connectors/${ connectorDefinitionId }`);
  }

  /**
   * Adds a resource of type connectorDefinitionVersion to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-connectordefinitionversion.html
   *
   * @param connectorDefinitionId - Identifier for the connectorDefinitionId.
   * @param versionId - Identifier for the versionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onConnectorDefinitionVersion(connectorDefinitionId: string, versionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:greengrass:${ region || '*' }:${ account || '*' }:/greengrass/definition/connectors/${ connectorDefinitionId }/versions/${ versionId }`);
  }

  /**
   * Adds a resource of type thing to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/thing-registry.html
   *
   * @param thingName - Identifier for the thingName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onThing(thingName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:iot:${ region || '*' }:${ account || '*' }:thing/${ thingName }`);
  }

  /**
   * Adds a resource of type thingRuntimeConfig to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/thing-registry.html
   *
   * @param thingName - Identifier for the thingName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onThingRuntimeConfig(thingName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:greengrass:${ region || '*' }:${ account || '*' }:/greengrass/things/${ thingName }/runtimeconfig`);
  }
}
