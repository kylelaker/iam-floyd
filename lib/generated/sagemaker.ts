import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [sagemaker](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsagemaker.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Sagemaker extends PolicyStatement {
  public servicePrefix = 'sagemaker';

  /**
   * Statement provider for service [sagemaker](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsagemaker.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate a lineage entity (artifact, context, action, experiment, experiment-trial-component) to each other
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_AddAssociation.html
   */
  public toAddAssociation() {
    return this.to('AddAssociation');
  }

  /**
   * Grants permission to add or overwrite one or more tags for the specified Amazon SageMaker resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_AddTags.html
   */
  public toAddTags() {
    return this.to('AddTags');
  }

  /**
   * Grants permission to associate a trial component with a trial
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_AssociateTrialComponent.html
   */
  public toAssociateTrialComponent() {
    return this.to('AssociateTrialComponent');
  }

  /**
   * Grants permission to describe one or more ModelPackages
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_BatchDescribeModelPackage.html
   */
  public toBatchDescribeModelPackage() {
    return this.to('BatchDescribeModelPackage');
  }

  /**
   * Grants permission to retrieve metrics associated with SageMaker Resources such as Training Jobs. This API is not publicly exposed at this point, however admins can control this action
   *
   * Access Level: Read
   */
  public toBatchGetMetrics() {
    return this.to('BatchGetMetrics');
  }

  /**
   * Grants permission to get a batch of records from one or more feature groups
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_BatchGetRecord.html
   */
  public toBatchGetRecord() {
    return this.to('BatchGetRecord');
  }

  /**
   * Grants permission to publish metrics associated with a SageMaker Resource such as a Training Job. This API is not publicly exposed at this point, however admins can control this action
   *
   * Access Level: Write
   */
  public toBatchPutMetrics() {
    return this.to('BatchPutMetrics');
  }

  /**
   * Grants permission to create an action
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateAction.html
   */
  public toCreateAction() {
    return this.to('CreateAction');
  }

  /**
   * Grants permission to create an algorithm
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateAlgorithm.html
   */
  public toCreateAlgorithm() {
    return this.to('CreateAlgorithm');
  }

  /**
   * Grants permission to create an App for a SageMaker Studio UserProfile
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifInstanceTypes()
   * - .ifImageArns()
   * - .ifImageVersionArns()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateApp.html
   */
  public toCreateApp() {
    return this.to('CreateApp');
  }

  /**
   * Grants permission to create an AppImageConfig
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateAppImageConfig.html
   */
  public toCreateAppImageConfig() {
    return this.to('CreateAppImageConfig');
  }

  /**
   * Grants permission to create an artifact
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateArtifact.html
   */
  public toCreateArtifact() {
    return this.to('CreateArtifact');
  }

  /**
   * Grants permission to create an AutoML job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifInterContainerTrafficEncryption()
   * - .ifOutputKmsKey()
   * - .ifVolumeKmsKey()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateAutoMLJob.html
   */
  public toCreateAutoMLJob() {
    return this.to('CreateAutoMLJob');
  }

  /**
   * Grants permission to create a CodeRepository
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateCodeRepository.html
   */
  public toCreateCodeRepository() {
    return this.to('CreateCodeRepository');
  }

  /**
   * Grants permission to create a compilation job
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateCompilationJob.html
   */
  public toCreateCompilationJob() {
    return this.to('CreateCompilationJob');
  }

  /**
   * Grants permission to create a context
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateContext.html
   */
  public toCreateContext() {
    return this.to('CreateContext');
  }

  /**
   * Grants permission to create a data quality job definition
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifInstanceTypes()
   * - .ifInterContainerTrafficEncryption()
   * - .ifMaxRuntimeInSeconds()
   * - .ifNetworkIsolation()
   * - .ifOutputKmsKey()
   * - .ifVolumeKmsKey()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateDataQualityJobDefinition.html
   */
  public toCreateDataQualityJobDefinition() {
    return this.to('CreateDataQualityJobDefinition');
  }

  /**
   * Grants permission to create a device fleet
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateDeviceFleet.html
   */
  public toCreateDeviceFleet() {
    return this.to('CreateDeviceFleet');
  }

  /**
   * Grants permission to create a Domain for SageMaker Studio
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifAppNetworkAccessType()
   * - .ifInstanceTypes()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   * - .ifDomainSharingOutputKmsKey()
   * - .ifVolumeKmsKey()
   * - .ifImageArns()
   * - .ifImageVersionArns()
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateDomain.html
   */
  public toCreateDomain() {
    return this.to('CreateDomain');
  }

  /**
   * Grants permission to create an edge packaging job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEdgePackagingJob.html
   */
  public toCreateEdgePackagingJob() {
    return this.to('CreateEdgePackagingJob');
  }

  /**
   * Grants permission to create an endpoint using the endpoint configuration specified in the request
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEndpoint.html
   */
  public toCreateEndpoint() {
    return this.to('CreateEndpoint');
  }

  /**
   * Grants permission to create an endpoint configuration that can be deployed using Amazon SageMaker hosting services
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifAcceleratorTypes()
   * - .ifInstanceTypes()
   * - .ifModelArn()
   * - .ifVolumeKmsKey()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEndpointConfig.html
   */
  public toCreateEndpointConfig() {
    return this.to('CreateEndpointConfig');
  }

  /**
   * Grants permission to create an experiment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateExperiment.html
   */
  public toCreateExperiment() {
    return this.to('CreateExperiment');
  }

  /**
   * Grants permission to create a feature group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifFeatureGroupOnlineStoreKmsKey()
   * - .ifFeatureGroupOfflineStoreKmsKey()
   * - .ifFeatureGroupOfflineStoreS3Uri()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateFeatureGroup.html
   */
  public toCreateFeatureGroup() {
    return this.to('CreateFeatureGroup');
  }

  /**
   * Grants permission to create a flow definition, which defines settings for a human workflow
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifWorkteamArn()
   * - .ifWorkteamType()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateFlowDefinition.html
   */
  public toCreateFlowDefinition() {
    return this.to('CreateFlowDefinition');
  }

  /**
   * Grants permission to define the settings you will use for the human review workflow user interface
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateHumanTaskUi.html
   */
  public toCreateHumanTaskUi() {
    return this.to('CreateHumanTaskUi');
  }

  /**
   * Grants permission to create a hyper parameter tuning job that can be deployed using Amazon SageMaker
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifFileSystemAccessMode()
   * - .ifFileSystemDirectoryPath()
   * - .ifFileSystemId()
   * - .ifFileSystemType()
   * - .ifInstanceTypes()
   * - .ifInterContainerTrafficEncryption()
   * - .ifMaxRuntimeInSeconds()
   * - .ifNetworkIsolation()
   * - .ifOutputKmsKey()
   * - .ifVolumeKmsKey()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateHyperParameterTuningJob.html
   */
  public toCreateHyperParameterTuningJob() {
    return this.to('CreateHyperParameterTuningJob');
  }

  /**
   * Grants permission to create a SageMaker Image
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateImage.html
   */
  public toCreateImage() {
    return this.to('CreateImage');
  }

  /**
   * Grants permission to create a SageMaker ImageVersion
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateImageVersion.html
   */
  public toCreateImageVersion() {
    return this.to('CreateImageVersion');
  }

  /**
   * Grants permission to create an inference recommendations job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateInferenceRecommendationsJob.html
   */
  public toCreateInferenceRecommendationsJob() {
    return this.to('CreateInferenceRecommendationsJob');
  }

  /**
   * Grants permission to start a labeling job. A labeling job takes unlabeled data in and produces labeled data as output, which can be used for training SageMaker models
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifWorkteamArn()
   * - .ifWorkteamType()
   * - .ifVolumeKmsKey()
   * - .ifOutputKmsKey()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateLabelingJob.html
   */
  public toCreateLabelingJob() {
    return this.to('CreateLabelingJob');
  }

  /**
   * Grants permission to create a lineage group policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateLineageGroupPolicy.html
   */
  public toCreateLineageGroupPolicy() {
    return this.to('CreateLineageGroupPolicy');
  }

  /**
   * Grants permission to create a model in Amazon SageMaker. In the request, you specify a name for the model and describe one or more containers
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifNetworkIsolation()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateModel.html
   */
  public toCreateModel() {
    return this.to('CreateModel');
  }

  /**
   * Grants permission to create a model bias job definition
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifInstanceTypes()
   * - .ifInterContainerTrafficEncryption()
   * - .ifMaxRuntimeInSeconds()
   * - .ifNetworkIsolation()
   * - .ifOutputKmsKey()
   * - .ifVolumeKmsKey()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateModelBiasJobDefinition.html
   */
  public toCreateModelBiasJobDefinition() {
    return this.to('CreateModelBiasJobDefinition');
  }

  /**
   * Grants permission to create a model explainability job definition
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifInstanceTypes()
   * - .ifInterContainerTrafficEncryption()
   * - .ifMaxRuntimeInSeconds()
   * - .ifNetworkIsolation()
   * - .ifOutputKmsKey()
   * - .ifVolumeKmsKey()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateModelExplainabilityJobDefinition.html
   */
  public toCreateModelExplainabilityJobDefinition() {
    return this.to('CreateModelExplainabilityJobDefinition');
  }

  /**
   * Grants permission to create a ModelPackage
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifModelApprovalStatus()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateModelPackage.html
   */
  public toCreateModelPackage() {
    return this.to('CreateModelPackage');
  }

  /**
   * Grants permission to create a ModelPackageGroup
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateModelPackageGroup.html
   */
  public toCreateModelPackageGroup() {
    return this.to('CreateModelPackageGroup');
  }

  /**
   * Grants permission to create a model quality job definition
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifInstanceTypes()
   * - .ifInterContainerTrafficEncryption()
   * - .ifMaxRuntimeInSeconds()
   * - .ifNetworkIsolation()
   * - .ifOutputKmsKey()
   * - .ifVolumeKmsKey()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateModelQualityJobDefinition.html
   */
  public toCreateModelQualityJobDefinition() {
    return this.to('CreateModelQualityJobDefinition');
  }

  /**
   * Grants permission to create a monitoring schedule
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifInstanceTypes()
   * - .ifInterContainerTrafficEncryption()
   * - .ifMaxRuntimeInSeconds()
   * - .ifNetworkIsolation()
   * - .ifOutputKmsKey()
   * - .ifVolumeKmsKey()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateMonitoringSchedule.html
   */
  public toCreateMonitoringSchedule() {
    return this.to('CreateMonitoringSchedule');
  }

  /**
   * Grants permission to create an Amazon SageMaker notebook instance. A notebook instance is an Amazon EC2 instance running on a Jupyter Notebook
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifAcceleratorTypes()
   * - .ifDirectInternetAccess()
   * - .ifInstanceTypes()
   * - .ifRootAccess()
   * - .ifVolumeKmsKey()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateNotebookInstance.html
   */
  public toCreateNotebookInstance() {
    return this.to('CreateNotebookInstance');
  }

  /**
   * Grants permission to create a notebook instance lifecycle configuration that can be deployed using Amazon SageMaker
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateNotebookInstanceLifecycleConfig.html
   */
  public toCreateNotebookInstanceLifecycleConfig() {
    return this.to('CreateNotebookInstanceLifecycleConfig');
  }

  /**
   * Grants permission to create a pipeline
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreatePipeline.html
   */
  public toCreatePipeline() {
    return this.to('CreatePipeline');
  }

  /**
   * Grants permission to return a URL that you can use from your browser to connect to the Domain as a specified UserProfile when AuthMode is 'IAM'
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsSourceIp()
   * - .ifAwsSourceVpc()
   * - .ifAwsSourceVpce()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreatePresignedDomainUrl.html
   */
  public toCreatePresignedDomainUrl() {
    return this.to('CreatePresignedDomainUrl');
  }

  /**
   * Grants permission to create a URL that you can use from your browser to connect to the Notebook Instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreatePresignedNotebookInstanceUrl.html
   */
  public toCreatePresignedNotebookInstanceUrl() {
    return this.to('CreatePresignedNotebookInstanceUrl');
  }

  /**
   * Grants permission to start a processing job. After processing completes, Amazon SageMaker saves the resulting artifacts and other optional output to an Amazon S3 location that you specify
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifInstanceTypes()
   * - .ifMaxRuntimeInSeconds()
   * - .ifNetworkIsolation()
   * - .ifOutputKmsKey()
   * - .ifVolumeKmsKey()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   * - .ifInterContainerTrafficEncryption()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateProcessingJob.html
   */
  public toCreateProcessingJob() {
    return this.to('CreateProcessingJob');
  }

  /**
   * Grants permission to create a Project
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateProject.html
   */
  public toCreateProject() {
    return this.to('CreateProject');
  }

  /**
   * Grants permission to create a Studio Lifecycle Configuration that can be deployed using Amazon SageMaker
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateStudioLifecycleConfig.html
   */
  public toCreateStudioLifecycleConfig() {
    return this.to('CreateStudioLifecycleConfig');
  }

  /**
   * Grants permission to start a model training job. After training completes, Amazon SageMaker saves the resulting model artifacts and other optional output to an Amazon S3 location that you specify
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifFileSystemAccessMode()
   * - .ifFileSystemDirectoryPath()
   * - .ifFileSystemId()
   * - .ifFileSystemType()
   * - .ifInstanceTypes()
   * - .ifInterContainerTrafficEncryption()
   * - .ifMaxRuntimeInSeconds()
   * - .ifNetworkIsolation()
   * - .ifOutputKmsKey()
   * - .ifVolumeKmsKey()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateTrainingJob.html
   */
  public toCreateTrainingJob() {
    return this.to('CreateTrainingJob');
  }

  /**
   * Grants permission to start a transform job. After the results are obtained, Amazon SageMaker saves them to an Amazon S3 location that you specify
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifInstanceTypes()
   * - .ifModelArn()
   * - .ifOutputKmsKey()
   * - .ifVolumeKmsKey()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateTransformJob.html
   */
  public toCreateTransformJob() {
    return this.to('CreateTransformJob');
  }

  /**
   * Grants permission to create a trial
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateTrial.html
   */
  public toCreateTrial() {
    return this.to('CreateTrial');
  }

  /**
   * Grants permission to create a trial component
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateTrialComponent.html
   */
  public toCreateTrialComponent() {
    return this.to('CreateTrialComponent');
  }

  /**
   * Grants permission to create a UserProfile for a SageMaker Studio Domain
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifVpcSecurityGroupIds()
   * - .ifInstanceTypes()
   * - .ifDomainSharingOutputKmsKey()
   * - .ifImageArns()
   * - .ifImageVersionArns()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateUserProfile.html
   */
  public toCreateUserProfile() {
    return this.to('CreateUserProfile');
  }

  /**
   * Grants permission to create a workforce
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateWorkforce.html
   */
  public toCreateWorkforce() {
    return this.to('CreateWorkforce');
  }

  /**
   * Grants permission to create a workteam
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateWorkteam.html
   */
  public toCreateWorkteam() {
    return this.to('CreateWorkteam');
  }

  /**
   * Grants permission to delete an action
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteAction.html
   */
  public toDeleteAction() {
    return this.to('DeleteAction');
  }

  /**
   * Grants permission to delete an algorithm
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteAlgorithm.html
   */
  public toDeleteAlgorithm() {
    return this.to('DeleteAlgorithm');
  }

  /**
   * Grants permission to delete an App
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteApp.html
   */
  public toDeleteApp() {
    return this.to('DeleteApp');
  }

  /**
   * Grants permission to delete an AppImageConfig
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteAppImageConfig.html
   */
  public toDeleteAppImageConfig() {
    return this.to('DeleteAppImageConfig');
  }

  /**
   * Grants permission to delete an artifact
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteArtifact.html
   */
  public toDeleteArtifact() {
    return this.to('DeleteArtifact');
  }

  /**
   * Grants permission to delete the association from a lineage entity (artifact, context, action, experiment, experiment-trial-component) to another
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteAssociation.html
   */
  public toDeleteAssociation() {
    return this.to('DeleteAssociation');
  }

  /**
   * Grants permission to delete a CodeRepository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteCodeRepository.html
   */
  public toDeleteCodeRepository() {
    return this.to('DeleteCodeRepository');
  }

  /**
   * Grants permission to delete a context
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteContext.html
   */
  public toDeleteContext() {
    return this.to('DeleteContext');
  }

  /**
   * Grants permission to delete the data quality job definition created using the CreateDataQualityJobDefinition API
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteDataQualityJobDefinition.html
   */
  public toDeleteDataQualityJobDefinition() {
    return this.to('DeleteDataQualityJobDefinition');
  }

  /**
   * Grants permission to delete a device fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteDeviceFleet.html
   */
  public toDeleteDeviceFleet() {
    return this.to('DeleteDeviceFleet');
  }

  /**
   * Grants permission to delete a Domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteDomain.html
   */
  public toDeleteDomain() {
    return this.to('DeleteDomain');
  }

  /**
   * Grants permission to delete an endpoint. Amazon SageMaker frees up all the resources that were deployed when the endpoint was created
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteEndpoint.html
   */
  public toDeleteEndpoint() {
    return this.to('DeleteEndpoint');
  }

  /**
   * Grants permission to delete the endpoint configuration created using the CreateEndpointConfig API. The DeleteEndpointConfig API deletes only the specified configuration. It does not delete any endpoints created using the configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteEndpointConfig.html
   */
  public toDeleteEndpointConfig() {
    return this.to('DeleteEndpointConfig');
  }

  /**
   * Grants permission to delete an experiment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteExperiment.html
   */
  public toDeleteExperiment() {
    return this.to('DeleteExperiment');
  }

  /**
   * Grants permission to delete a feature group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteFeatureGroup.html
   */
  public toDeleteFeatureGroup() {
    return this.to('DeleteFeatureGroup');
  }

  /**
   * Grants permission to delete the specified flow definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteFlowDefinition.html
   */
  public toDeleteFlowDefinition() {
    return this.to('DeleteFlowDefinition');
  }

  /**
   * Grants permission to delete a specified human loop
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteHumanLoop.html
   */
  public toDeleteHumanLoop() {
    return this.to('DeleteHumanLoop');
  }

  /**
   * Grants permission to delete the specified human task user interface (worker task template)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteHumanTaskUi.html
   */
  public toDeleteHumanTaskUi() {
    return this.to('DeleteHumanTaskUi');
  }

  /**
   * Grants permission to delete a SageMaker Image
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteImage.html
   */
  public toDeleteImage() {
    return this.to('DeleteImage');
  }

  /**
   * Grants permission to delete a SageMaker ImageVersion
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteImageVersion.html
   */
  public toDeleteImageVersion() {
    return this.to('DeleteImageVersion');
  }

  /**
   * Grants permission to delete a lineage group policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteLineageGroupPolicy.html
   */
  public toDeleteLineageGroupPolicy() {
    return this.to('DeleteLineageGroupPolicy');
  }

  /**
   * Grants permission to delete a model created using the CreateModel API. The DeleteModel API deletes only the model entry in Amazon SageMaker that you created by calling the CreateModel API. It does not delete model artifacts, inference code, or the IAM role that you specified when creating the model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteModel.html
   */
  public toDeleteModel() {
    return this.to('DeleteModel');
  }

  /**
   * Grants permission to delete the model bias job definition created using the CreateModelBiasJobDefinition API
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteModelBiasJobDefinition.html
   */
  public toDeleteModelBiasJobDefinition() {
    return this.to('DeleteModelBiasJobDefinition');
  }

  /**
   * Grants permission to delete the model explainability job definition created using the CreateModelExplainabilityJobDefinition API
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteModelExplainabilityJobDefinition.html
   */
  public toDeleteModelExplainabilityJobDefinition() {
    return this.to('DeleteModelExplainabilityJobDefinition');
  }

  /**
   * Grants permission to delete a ModelPackage
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteModelPackage.html
   */
  public toDeleteModelPackage() {
    return this.to('DeleteModelPackage');
  }

  /**
   * Grants permission to delete a ModelPackageGroup
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteModelPackageGroup.html
   */
  public toDeleteModelPackageGroup() {
    return this.to('DeleteModelPackageGroup');
  }

  /**
   * Grants permission to delete a ModelPackageGroup policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteModelPackageGroupPolicy.html
   */
  public toDeleteModelPackageGroupPolicy() {
    return this.to('DeleteModelPackageGroupPolicy');
  }

  /**
   * Grants permission to delete the model quality job definition created using the CreateModelQualityJobDefinition API
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteModelQualityJobDefinition.html
   */
  public toDeleteModelQualityJobDefinition() {
    return this.to('DeleteModelQualityJobDefinition');
  }

  /**
   * Grants permission to delete a monitoring schedule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteMonitoringSchedule.html
   */
  public toDeleteMonitoringSchedule() {
    return this.to('DeleteMonitoringSchedule');
  }

  /**
   * Grants permission to delete a Amazon SageMaker notebook instance. Before you can delete a notebook instance, you must call the StopNotebookInstance API
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteNotebookInstance.html
   */
  public toDeleteNotebookInstance() {
    return this.to('DeleteNotebookInstance');
  }

  /**
   * Grants permission to delete a notebook instance lifecycle configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteNotebookInstanceLifecycleConfig.html
   */
  public toDeleteNotebookInstanceLifecycleConfig() {
    return this.to('DeleteNotebookInstanceLifecycleConfig');
  }

  /**
   * Grants permission to delete a pipeline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeletePipeline.html
   */
  public toDeletePipeline() {
    return this.to('DeletePipeline');
  }

  /**
   * Grants permission to delete a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteProject.html
   */
  public toDeleteProject() {
    return this.to('DeleteProject');
  }

  /**
   * Grants permission to delete a record from a feature group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteRecord.html
   */
  public toDeleteRecord() {
    return this.to('DeleteRecord');
  }

  /**
   * Grants permission to delete a Studio Lifecycle Configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteStudioLifecycleConfig.html
   */
  public toDeleteStudioLifecycleConfig() {
    return this.to('DeleteStudioLifecycleConfig');
  }

  /**
   * Grants permission to delete the specified set of tags from an Amazon SageMaker resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteTags.html
   */
  public toDeleteTags() {
    return this.to('DeleteTags');
  }

  /**
   * Grants permission to delete a trial
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteTrial.html
   */
  public toDeleteTrial() {
    return this.to('DeleteTrial');
  }

  /**
   * Grants permission to delete a trial component
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteTrialComponent.html
   */
  public toDeleteTrialComponent() {
    return this.to('DeleteTrialComponent');
  }

  /**
   * Grants permission to delete a UserProfile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteUserProfile.html
   */
  public toDeleteUserProfile() {
    return this.to('DeleteUserProfile');
  }

  /**
   * Grants permission to delete a workforce
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteWorkforce.html
   */
  public toDeleteWorkforce() {
    return this.to('DeleteWorkforce');
  }

  /**
   * Grants permission to delete a workteam
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteWorkteam.html
   */
  public toDeleteWorkteam() {
    return this.to('DeleteWorkteam');
  }

  /**
   * Grants permission to deregister a set of devices
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeregisterDevices.html
   */
  public toDeregisterDevices() {
    return this.to('DeregisterDevices');
  }

  /**
   * Grants permission to get information about an action
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeAction.html
   */
  public toDescribeAction() {
    return this.to('DescribeAction');
  }

  /**
   * Grants permission to describe an algorithm
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeAlgorithm.html
   */
  public toDescribeAlgorithm() {
    return this.to('DescribeAlgorithm');
  }

  /**
   * Grants permission to describe an App
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeApp.html
   */
  public toDescribeApp() {
    return this.to('DescribeApp');
  }

  /**
   * Grants permission to describe an AppImageConfig
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeAppImageConfig.html
   */
  public toDescribeAppImageConfig() {
    return this.to('DescribeAppImageConfig');
  }

  /**
   * Grants permission to get information about an artifact
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeArtifact.html
   */
  public toDescribeArtifact() {
    return this.to('DescribeArtifact');
  }

  /**
   * Grants permission to describe an AutoML job that was created via the CreateAutoMLJob API
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeAutoMLJob.html
   */
  public toDescribeAutoMLJob() {
    return this.to('DescribeAutoMLJob');
  }

  /**
   * Grants permission to describe a CodeRepository
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeCodeRepository.html
   */
  public toDescribeCodeRepository() {
    return this.to('DescribeCodeRepository');
  }

  /**
   * Grants permission to return information about a compilation job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeCompilationJob.html
   */
  public toDescribeCompilationJob() {
    return this.to('DescribeCompilationJob');
  }

  /**
   * Grants permission to get information about a context
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeContext.html
   */
  public toDescribeContext() {
    return this.to('DescribeContext');
  }

  /**
   * Grants permission to return information about a data quality job definition
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeDataQualityJobDefinition.html
   */
  public toDescribeDataQualityJobDefinition() {
    return this.to('DescribeDataQualityJobDefinition');
  }

  /**
   * Grants permission to access information about a device
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeDevice.html
   */
  public toDescribeDevice() {
    return this.to('DescribeDevice');
  }

  /**
   * Grants permission to access information about a device fleet
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeDeviceFleet.html
   */
  public toDescribeDeviceFleet() {
    return this.to('DescribeDeviceFleet');
  }

  /**
   * Grants permission to describe a Domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeDomain.html
   */
  public toDescribeDomain() {
    return this.to('DescribeDomain');
  }

  /**
   * Grants permission to access information about an edge packaging job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeEdgePackagingJob.html
   */
  public toDescribeEdgePackagingJob() {
    return this.to('DescribeEdgePackagingJob');
  }

  /**
   * Grants permission to return the description of an endpoint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeEndpoint.html
   */
  public toDescribeEndpoint() {
    return this.to('DescribeEndpoint');
  }

  /**
   * Grants permission to return the description of an endpoint configuration, which was created using the CreateEndpointConfig API
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeEndpointConfig.html
   */
  public toDescribeEndpointConfig() {
    return this.to('DescribeEndpointConfig');
  }

  /**
   * Grants permission to return information about an experiment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeExperiment.html
   */
  public toDescribeExperiment() {
    return this.to('DescribeExperiment');
  }

  /**
   * Grants permission to return information about a feature group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeFeatureGroup.html
   */
  public toDescribeFeatureGroup() {
    return this.to('DescribeFeatureGroup');
  }

  /**
   * Grants permission to return information about the specified flow definition
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeFlowDefinition.html
   */
  public toDescribeFlowDefinition() {
    return this.to('DescribeFlowDefinition');
  }

  /**
   * Grants permission to return information about the specified human loop
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeHumanLoop.html
   */
  public toDescribeHumanLoop() {
    return this.to('DescribeHumanLoop');
  }

  /**
   * Grants permission to return detailed information about the specified human review workflow user interface
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeHumanTaskUi.html
   */
  public toDescribeHumanTaskUi() {
    return this.to('DescribeHumanTaskUi');
  }

  /**
   * Grants permission to describe a hyper parameter tuning job that was created via the CreateHyperParameterTuningJob API
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeHyperParameterTuningJob.html
   */
  public toDescribeHyperParameterTuningJob() {
    return this.to('DescribeHyperParameterTuningJob');
  }

  /**
   * Grants permission to return information about a SageMaker Image
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeImage.html
   */
  public toDescribeImage() {
    return this.to('DescribeImage');
  }

  /**
   * Grants permission to return information about a SageMaker ImageVersion
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeImageVersion.html
   */
  public toDescribeImageVersion() {
    return this.to('DescribeImageVersion');
  }

  /**
   * Grants permission to get information about an inference recommendations job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeInferenceRecommendationsJob.html
   */
  public toDescribeInferenceRecommendationsJob() {
    return this.to('DescribeInferenceRecommendationsJob');
  }

  /**
   * Grants permission to return information about a labeling job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeLabelingJob.html
   */
  public toDescribeLabelingJob() {
    return this.to('DescribeLabelingJob');
  }

  /**
   * Grants permission to describe a lineage group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeLineageGroup.html
   */
  public toDescribeLineageGroup() {
    return this.to('DescribeLineageGroup');
  }

  /**
   * Grants permission to describe a model that you created using the CreateModel API
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeModel.html
   */
  public toDescribeModel() {
    return this.to('DescribeModel');
  }

  /**
   * Grants permission to return information about a model bias job definition
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeModelBiasJobDefinition.html
   */
  public toDescribeModelBiasJobDefinition() {
    return this.to('DescribeModelBiasJobDefinition');
  }

  /**
   * Grants permission to return information about a model explainability job definition
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeModelExplainabilityJobDefinition.html
   */
  public toDescribeModelExplainabilityJobDefinition() {
    return this.to('DescribeModelExplainabilityJobDefinition');
  }

  /**
   * Grants permission to describe a ModelPackage
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeModelPackage.html
   */
  public toDescribeModelPackage() {
    return this.to('DescribeModelPackage');
  }

  /**
   * Grants permission to describe a ModelPackageGroup
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeModelPackageGroup.html
   */
  public toDescribeModelPackageGroup() {
    return this.to('DescribeModelPackageGroup');
  }

  /**
   * Grants permission to return information about a model quality job definition
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeModelQualityJobDefinition.html
   */
  public toDescribeModelQualityJobDefinition() {
    return this.to('DescribeModelQualityJobDefinition');
  }

  /**
   * Grants permission to return information about a monitoring schedule
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeMonitoringSchedule.html
   */
  public toDescribeMonitoringSchedule() {
    return this.to('DescribeMonitoringSchedule');
  }

  /**
   * Grants permission to return information about a notebook instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeNotebookInstance.html
   */
  public toDescribeNotebookInstance() {
    return this.to('DescribeNotebookInstance');
  }

  /**
   * Grants permission to describe a notebook instance lifecycle configuration that was created via the CreateNotebookInstanceLifecycleConfig API
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeNotebookInstanceLifecycleConfig.html
   */
  public toDescribeNotebookInstanceLifecycleConfig() {
    return this.to('DescribeNotebookInstanceLifecycleConfig');
  }

  /**
   * Grants permission to get information about a pipeline
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribePipeline.html
   */
  public toDescribePipeline() {
    return this.to('DescribePipeline');
  }

  /**
   * Grants permission to get the pipeline definition for a pipeline execution
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribePipelineDefinitionForExecution.html
   */
  public toDescribePipelineDefinitionForExecution() {
    return this.to('DescribePipelineDefinitionForExecution');
  }

  /**
   * Grants permission to get information about a pipeline execution
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribePipelineExecution.html
   */
  public toDescribePipelineExecution() {
    return this.to('DescribePipelineExecution');
  }

  /**
   * Grants permission to return information about a processing job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeProcessingJob.html
   */
  public toDescribeProcessingJob() {
    return this.to('DescribeProcessingJob');
  }

  /**
   * Grants permission to describe a project
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeProject.html
   */
  public toDescribeProject() {
    return this.to('DescribeProject');
  }

  /**
   * Grants permission to describe a Studio Lifecycle Configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeStudioLifecycleConfig.html
   */
  public toDescribeStudioLifecycleConfig() {
    return this.to('DescribeStudioLifecycleConfig');
  }

  /**
   * Grants permission to return information about a subscribed workteam
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeSubscribedWorkteam.html
   */
  public toDescribeSubscribedWorkteam() {
    return this.to('DescribeSubscribedWorkteam');
  }

  /**
   * Grants permission to return information about a training job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeTrainingJob.html
   */
  public toDescribeTrainingJob() {
    return this.to('DescribeTrainingJob');
  }

  /**
   * Grants permission to return information about a transform job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeTransformJob.html
   */
  public toDescribeTransformJob() {
    return this.to('DescribeTransformJob');
  }

  /**
   * Grants permission to return information about a trial
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeTrial.html
   */
  public toDescribeTrial() {
    return this.to('DescribeTrial');
  }

  /**
   * Grants permission to return information about a trial component
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeTrialComponent.html
   */
  public toDescribeTrialComponent() {
    return this.to('DescribeTrialComponent');
  }

  /**
   * Grants permission to describe a UserProfile
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeUserProfile.html
   */
  public toDescribeUserProfile() {
    return this.to('DescribeUserProfile');
  }

  /**
   * Grants permission to return information about a workforce
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeWorkforce.html
   */
  public toDescribeWorkforce() {
    return this.to('DescribeWorkforce');
  }

  /**
   * Grants permission to return information about a workteam
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeWorkteam.html
   */
  public toDescribeWorkteam() {
    return this.to('DescribeWorkteam');
  }

  /**
   * Grants permission to disable a SageMaker Service Catalog Portfolio
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DisableSagemakerServicecatalogPortfolio.html
   */
  public toDisableSagemakerServicecatalogPortfolio() {
    return this.to('DisableSagemakerServicecatalogPortfolio');
  }

  /**
   * Grants permission to disassociate a trial component from a trial
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DisassociateTrialComponent.html
   */
  public toDisassociateTrialComponent() {
    return this.to('DisassociateTrialComponent');
  }

  /**
   * Grants permission to enable a SageMaker Service Catalog Portfolio
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_EnableSagemakerServicecatalogPortfolio.html
   */
  public toEnableSagemakerServicecatalogPortfolio() {
    return this.to('EnableSagemakerServicecatalogPortfolio');
  }

  /**
   * Grants permission to access a summary of the devices in a device fleet
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_GetDeviceFleetReport.html
   */
  public toGetDeviceFleetReport() {
    return this.to('GetDeviceFleetReport');
  }

  /**
   * Grants permission to get device registration. After you deploy a model onto edge devices this api is used to get current device registration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_GetDeviceRegistration.html
   */
  public toGetDeviceRegistration() {
    return this.to('GetDeviceRegistration');
  }

  /**
   * Grants permission to retreive a lineage group policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_GetLineageGroupPolicy.html
   */
  public toGetLineageGroupPolicy() {
    return this.to('GetLineageGroupPolicy');
  }

  /**
   * Grants permission to get a ModelPackageGroup policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_GetModelPackageGroupPolicy.html
   */
  public toGetModelPackageGroupPolicy() {
    return this.to('GetModelPackageGroupPolicy');
  }

  /**
   * Grants permission to get a record from a feature group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_GetRecord.html
   */
  public toGetRecord() {
    return this.to('GetRecord');
  }

  /**
   * Grants permission to get a SageMaker Service Catalog Portfolio
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_GetSagemakerServicecatalogPortfolioStatus.html
   */
  public toGetSagemakerServicecatalogPortfolioStatus() {
    return this.to('GetSagemakerServicecatalogPortfolioStatus');
  }

  /**
   * Grants permission to get search suggestions when provided with a keyword
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_GetSearchSuggestions.html
   */
  public toGetSearchSuggestions() {
    return this.to('GetSearchSuggestions');
  }

  /**
   * Grants permission to invoke an endpoint. After you deploy a model into production using Amazon SageMaker hosting services, your client applications use this API to get inferences from the model hosted at the specified endpoint
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifTargetModel()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_InvokeEndpoint.html
   */
  public toInvokeEndpoint() {
    return this.to('InvokeEndpoint');
  }

  /**
   * Grants permission to get inferences from the hosted model at the specified endpoint in an asynchronous manner
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_InvokeEndpointAsync.html
   */
  public toInvokeEndpointAsync() {
    return this.to('InvokeEndpointAsync');
  }

  /**
   * Grants permission to list actions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListActions.html
   */
  public toListActions() {
    return this.to('ListActions');
  }

  /**
   * Grants permission to list Algorithms
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListAlgorithms.html
   */
  public toListAlgorithms() {
    return this.to('ListAlgorithms');
  }

  /**
   * Grants permission to list the AppImageConfigs in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListAppImageConfigs.html
   */
  public toListAppImageConfigs() {
    return this.to('ListAppImageConfigs');
  }

  /**
   * Grants permission to list the Apps in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListApps.html
   */
  public toListApps() {
    return this.to('ListApps');
  }

  /**
   * Grants permission to list artifacts
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListArtifacts.html
   */
  public toListArtifacts() {
    return this.to('ListArtifacts');
  }

  /**
   * Grants permission to list associations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListAssociations.html
   */
  public toListAssociations() {
    return this.to('ListAssociations');
  }

  /**
   * Grants permission to list AutoML jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListAutoMLJobs.html
   */
  public toListAutoMLJobs() {
    return this.to('ListAutoMLJobs');
  }

  /**
   * Grants permission to lists candidates for an AutoML job
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListCandidatesForAutoMLJob.html
   */
  public toListCandidatesForAutoMLJob() {
    return this.to('ListCandidatesForAutoMLJob');
  }

  /**
   * Grants permission to list code repositories
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListCodeRepositories.html
   */
  public toListCodeRepositories() {
    return this.to('ListCodeRepositories');
  }

  /**
   * Grants permission to list compilation jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListCompilationJobs.html
   */
  public toListCompilationJobs() {
    return this.to('ListCompilationJobs');
  }

  /**
   * Grants permission to list contexts
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListContexts.html
   */
  public toListContexts() {
    return this.to('ListContexts');
  }

  /**
   * Grants permission to list data quality job definitions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListDataQualityJobDefinitions.html
   */
  public toListDataQualityJobDefinitions() {
    return this.to('ListDataQualityJobDefinitions');
  }

  /**
   * Grants permission to list device fleets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListDeviceFleets.html
   */
  public toListDeviceFleets() {
    return this.to('ListDeviceFleets');
  }

  /**
   * Grants permission to list devices
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListDevices.html
   */
  public toListDevices() {
    return this.to('ListDevices');
  }

  /**
   * Grants permission to list the Domains in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListDomains.html
   */
  public toListDomains() {
    return this.to('ListDomains');
  }

  /**
   * Grants permission to list edge packaging jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListEdgePackagingJobs.html
   */
  public toListEdgePackagingJobs() {
    return this.to('ListEdgePackagingJobs');
  }

  /**
   * Grants permission to list endpoint configurations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListEndpointConfigs.html
   */
  public toListEndpointConfigs() {
    return this.to('ListEndpointConfigs');
  }

  /**
   * Grants permission to list endpoints
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListEndpoints.html
   */
  public toListEndpoints() {
    return this.to('ListEndpoints');
  }

  /**
   * Grants permission to list experiments
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListExperiments.html
   */
  public toListExperiments() {
    return this.to('ListExperiments');
  }

  /**
   * Grants permission to list feature groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListFeatureGroups.html
   */
  public toListFeatureGroups() {
    return this.to('ListFeatureGroups');
  }

  /**
   * Grants permission to return summary information about flow definitions, given the specified parameters
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListFlowDefinitions.html
   */
  public toListFlowDefinitions() {
    return this.to('ListFlowDefinitions');
  }

  /**
   * Grants permission to return summary information about human loops, given the specified parameters
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListHumanLoops.html
   */
  public toListHumanLoops() {
    return this.to('ListHumanLoops');
  }

  /**
   * Grants permission to return summary information about human review workflow user interfaces, given the specified parameters
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListHumanTaskUis.html
   */
  public toListHumanTaskUis() {
    return this.to('ListHumanTaskUis');
  }

  /**
   * Grants permission to list hyper parameter tuning jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListHyperParameterTuningJobs.html
   */
  public toListHyperParameterTuningJobs() {
    return this.to('ListHyperParameterTuningJobs');
  }

  /**
   * Grants permission to list ImageVersions that belong to a SageMaker Image
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListImageVersions.html
   */
  public toListImageVersions() {
    return this.to('ListImageVersions');
  }

  /**
   * Grants permission to list SageMaker Images in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListImages.html
   */
  public toListImages() {
    return this.to('ListImages');
  }

  /**
   * Grants permission to list inference recommendations jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListInferenceRecommendationsJobs.html
   */
  public toListInferenceRecommendationsJobs() {
    return this.to('ListInferenceRecommendationsJobs');
  }

  /**
   * Grants permission to list labeling jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListLabelingJobs.html
   */
  public toListLabelingJobs() {
    return this.to('ListLabelingJobs');
  }

  /**
   * Grants permission to list labeling jobs for workteam
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListLabelingJobs.html
   */
  public toListLabelingJobsForWorkteam() {
    return this.to('ListLabelingJobsForWorkteam');
  }

  /**
   * Grants permission to list lineage groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListLineageGroups.html
   */
  public toListLineageGroups() {
    return this.to('ListLineageGroups');
  }

  /**
   * Grants permission to list model bias job definitions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListModelBiasJobDefinitions.html
   */
  public toListModelBiasJobDefinitions() {
    return this.to('ListModelBiasJobDefinitions');
  }

  /**
   * Grants permission to list model explainability job definitions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListModelExplainabilityJobDefinitions.html
   */
  public toListModelExplainabilityJobDefinitions() {
    return this.to('ListModelExplainabilityJobDefinitions');
  }

  /**
   * Grants permission to list model metadata for inference recommendations jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListModelMetadata.html
   */
  public toListModelMetadata() {
    return this.to('ListModelMetadata');
  }

  /**
   * Grants permission to list ModelPackageGroups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListModelPackageGroups.html
   */
  public toListModelPackageGroups() {
    return this.to('ListModelPackageGroups');
  }

  /**
   * Grants permission to list ModelPackages
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListModelPackages.html
   */
  public toListModelPackages() {
    return this.to('ListModelPackages');
  }

  /**
   * Grants permission to list model quality job definitions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListModelQualityJobDefinitions.html
   */
  public toListModelQualityJobDefinitions() {
    return this.to('ListModelQualityJobDefinitions');
  }

  /**
   * Grants permission to list the models created with the CreateModel API
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListModels.html
   */
  public toListModels() {
    return this.to('ListModels');
  }

  /**
   * Grants permission to list monitoring executions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListMonitoringExecutions.html
   */
  public toListMonitoringExecutions() {
    return this.to('ListMonitoringExecutions');
  }

  /**
   * Grants permission to list monitoring schedules
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListMonitoringSchedules.html
   */
  public toListMonitoringSchedules() {
    return this.to('ListMonitoringSchedules');
  }

  /**
   * Grants permission to list the notebook instance lifecycle configurations that can be deployed using Amazon SageMaker
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListNotebookInstanceLifecycleConfigs.html
   */
  public toListNotebookInstanceLifecycleConfigs() {
    return this.to('ListNotebookInstanceLifecycleConfigs');
  }

  /**
   * Grants permission to list the Amazon SageMaker notebook instances in the requester's account in an AWS Region
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListNotebookInstances.html
   */
  public toListNotebookInstances() {
    return this.to('ListNotebookInstances');
  }

  /**
   * Grants permission to list steps for a pipeline execution
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListPipelineExecutionSteps.html
   */
  public toListPipelineExecutionSteps() {
    return this.to('ListPipelineExecutionSteps');
  }

  /**
   * Grants permission to list executions for a pipeline
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListPipelineExecutions.html
   */
  public toListPipelineExecutions() {
    return this.to('ListPipelineExecutions');
  }

  /**
   * Grants permission to list parameters for a pipeline execution
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListPipelineParametersForExecution.html
   */
  public toListPipelineParametersForExecution() {
    return this.to('ListPipelineParametersForExecution');
  }

  /**
   * Grants permission to list pipelines
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListPipelines.html
   */
  public toListPipelines() {
    return this.to('ListPipelines');
  }

  /**
   * Grants permission to list processing jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListProcessingJobs.html
   */
  public toListProcessingJobs() {
    return this.to('ListProcessingJobs');
  }

  /**
   * Grants permission to list Projects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListProjects.html
   */
  public toListProjects() {
    return this.to('ListProjects');
  }

  /**
   * Grants permission to list the Studio Lifecycle Configurations that can be deployed using Amazon SageMaker
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListStudioLifecycleConfigs.html
   */
  public toListStudioLifecycleConfigs() {
    return this.to('ListStudioLifecycleConfigs');
  }

  /**
   * Grants permission to list subscribed workteams
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListSubscribedWorkteams.html
   */
  public toListSubscribedWorkteams() {
    return this.to('ListSubscribedWorkteams');
  }

  /**
   * Grants permission to list the tag set associated with the specified resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListTags.html
   */
  public toListTags() {
    return this.to('ListTags');
  }

  /**
   * Grants permission to list training jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListTrainingJobs.html
   */
  public toListTrainingJobs() {
    return this.to('ListTrainingJobs');
  }

  /**
   * Grants permission to list training jobs for a hyper parameter tuning job
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ ListTrainingJobsForHyperParameterTuningJob.html
   */
  public toListTrainingJobsForHyperParameterTuningJob() {
    return this.to('ListTrainingJobsForHyperParameterTuningJob');
  }

  /**
   * Grants permission to list transform jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListTransformJobs.html
   */
  public toListTransformJobs() {
    return this.to('ListTransformJobs');
  }

  /**
   * Grants permission to list trial components
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListTrialComponents.html
   */
  public toListTrialComponents() {
    return this.to('ListTrialComponents');
  }

  /**
   * Grants permission to list trials
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListTrials.html
   */
  public toListTrials() {
    return this.to('ListTrials');
  }

  /**
   * Grants permission to list the UserProfiles in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListUserProfiles.html
   */
  public toListUserProfiles() {
    return this.to('ListUserProfiles');
  }

  /**
   * Grants permission to list workforces
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListWorkforces.html
   */
  public toListWorkforces() {
    return this.to('ListWorkforces');
  }

  /**
   * Grants permission to list workteams
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListWorkteams.html
   */
  public toListWorkteams() {
    return this.to('ListWorkteams');
  }

  /**
   * Grants permission to put a lineage group policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_PutLineageGroupPolicy.html
   */
  public toPutLineageGroupPolicy() {
    return this.to('PutLineageGroupPolicy');
  }

  /**
   * Grants permission to put a ModelPackageGroup policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_PutModelPackageGroupPolicy.html
   */
  public toPutModelPackageGroupPolicy() {
    return this.to('PutModelPackageGroupPolicy');
  }

  /**
   * Grants permission to put a record to a feature group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_PutRecord.html
   */
  public toPutRecord() {
    return this.to('PutRecord');
  }

  /**
   * Grants permission to explore the lineage graph
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_QueryLineage.html
   */
  public toQueryLineage() {
    return this.to('QueryLineage');
  }

  /**
   * Grants permission to register a set of devices
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_RegisterDevices.html
   */
  public toRegisterDevices() {
    return this.to('RegisterDevices');
  }

  /**
   * Grants permission to render a UI template used for a human annotation task
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_RenderUiTemplate.html
   */
  public toRenderUiTemplate() {
    return this.to('RenderUiTemplate');
  }

  /**
   * Grants permission to retry a pipeline execution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_RetryPipelineExecution.html
   */
  public toRetryPipelineExecution() {
    return this.to('RetryPipelineExecution');
  }

  /**
   * Grants permission to search for SageMaker objects
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_Search.html
   */
  public toSearch() {
    return this.to('Search');
  }

  /**
   * Grants permission to publish heartbeat data from devices. After you deploy a model onto edge devices this api is used to report device status
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_SendHeartbeat.html
   */
  public toSendHeartbeat() {
    return this.to('SendHeartbeat');
  }

  /**
   * Grants permission to fail a pending callback step
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_SendPipelineExecutionStepFailure.html
   */
  public toSendPipelineExecutionStepFailure() {
    return this.to('SendPipelineExecutionStepFailure');
  }

  /**
   * Grants permission to succeed a pending callback step
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_SendPipelineExecutionStepSuccess.html
   */
  public toSendPipelineExecutionStepSuccess() {
    return this.to('SendPipelineExecutionStepSuccess');
  }

  /**
   * Grants permission to start a human loop
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_StartHumanLoop.html
   */
  public toStartHumanLoop() {
    return this.to('StartHumanLoop');
  }

  /**
   * Grants permission to start a monitoring schedule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_StartMonitoringSchedule.html
   */
  public toStartMonitoringSchedule() {
    return this.to('StartMonitoringSchedule');
  }

  /**
   * Grants permission to start a notebook instance. This launches an EC2 instance with the latest version of the libraries and attaches your EBS volume
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_StartNotebookInstance.html
   */
  public toStartNotebookInstance() {
    return this.to('StartNotebookInstance');
  }

  /**
   * Grants permission to start a pipeline execution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_StartPipelineExecution.html
   */
  public toStartPipelineExecution() {
    return this.to('StartPipelineExecution');
  }

  /**
   * Grants permission to stop a running AutoML job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopAutoMLJob.html
   */
  public toStopAutoMLJob() {
    return this.to('StopAutoMLJob');
  }

  /**
   * Grants permission to stop a compilation job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopCompilationJob.html
   */
  public toStopCompilationJob() {
    return this.to('StopCompilationJob');
  }

  /**
   * Grants permission to stop an edge packaging job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopEdgePackagingJob.html
   */
  public toStopEdgePackagingJob() {
    return this.to('StopEdgePackagingJob');
  }

  /**
   * Grants permission to stop a specified human loop
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopHumanLoop.html
   */
  public toStopHumanLoop() {
    return this.to('StopHumanLoop');
  }

  /**
   * Grants permission to stop a running hyper parameter tuning job create via the CreateHyperParameterTuningJob
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopHyperParameterTuningJob.html
   */
  public toStopHyperParameterTuningJob() {
    return this.to('StopHyperParameterTuningJob');
  }

  /**
   * Grants permission to stop an inference recommendations job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopInferenceRecommendationsJob.html
   */
  public toStopInferenceRecommendationsJob() {
    return this.to('StopInferenceRecommendationsJob');
  }

  /**
   * Grants permission to stop a labeling job. Any labels already generated will be exported before stopping
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopLabelingJob.html
   */
  public toStopLabelingJob() {
    return this.to('StopLabelingJob');
  }

  /**
   * Grants permission to stop a monitoring schedule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopMonitoringSchedule.html
   */
  public toStopMonitoringSchedule() {
    return this.to('StopMonitoringSchedule');
  }

  /**
   * Grants permission to stop a notebook instance. This terminates the EC2 instance. Before terminating the instance, Amazon SageMaker disconnects the EBS volume from it. Amazon SageMaker preserves the EBS volume
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopNotebookInstance.html
   */
  public toStopNotebookInstance() {
    return this.to('StopNotebookInstance');
  }

  /**
   * Grants permission to stop a pipeline execution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopPipelineExecution.html
   */
  public toStopPipelineExecution() {
    return this.to('StopPipelineExecution');
  }

  /**
   * Grants permission to stop a processing job. To stop a job, Amazon SageMaker sends the algorithm the SIGTERM signal, which delays job termination for 120 seconds
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopProcessingJob.html
   */
  public toStopProcessingJob() {
    return this.to('StopProcessingJob');
  }

  /**
   * Grants permission to stop a training job. To stop a job, Amazon SageMaker sends the algorithm the SIGTERM signal, which delays job termination for 120 seconds
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopTrainingJob.html
   */
  public toStopTrainingJob() {
    return this.to('StopTrainingJob');
  }

  /**
   * Grants permission to stop a transform job. When Amazon SageMaker receives a StopTransformJob request, the status of the job changes to Stopping. After Amazon SageMaker stops the job, the status is set to Stopped
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopTransformJob.html
   */
  public toStopTransformJob() {
    return this.to('StopTransformJob');
  }

  /**
   * Grants permission to update an action
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateAction.html
   */
  public toUpdateAction() {
    return this.to('UpdateAction');
  }

  /**
   * Grants permission to update an AppImageConfig
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateAppImageConfig.html
   */
  public toUpdateAppImageConfig() {
    return this.to('UpdateAppImageConfig');
  }

  /**
   * Grants permission to update an artifact
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateArtifact.html
   */
  public toUpdateArtifact() {
    return this.to('UpdateArtifact');
  }

  /**
   * Grants permission to update a CodeRepository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateCodeRepository.html
   */
  public toUpdateCodeRepository() {
    return this.to('UpdateCodeRepository');
  }

  /**
   * Grants permission to update a context
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateContext.html
   */
  public toUpdateContext() {
    return this.to('UpdateContext');
  }

  /**
   * Grants permission to update a device fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateDeviceFleet.html
   */
  public toUpdateDeviceFleet() {
    return this.to('UpdateDeviceFleet');
  }

  /**
   * Grants permission to update a set of devices
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateDevices.html
   */
  public toUpdateDevices() {
    return this.to('UpdateDevices');
  }

  /**
   * Grants permission to update a Domain
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifVpcSecurityGroupIds()
   * - .ifInstanceTypes()
   * - .ifDomainSharingOutputKmsKey()
   * - .ifImageArns()
   * - .ifImageVersionArns()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateDomain.html
   */
  public toUpdateDomain() {
    return this.to('UpdateDomain');
  }

  /**
   * Grants permission to update an endpoint to use the endpoint configuration specified in the request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateEndpoint.html
   */
  public toUpdateEndpoint() {
    return this.to('UpdateEndpoint');
  }

  /**
   * Grants permission to update variant weight, capacity, or both of one or more variants associated with an endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateEndpointWeightsAndCapacities.html
   */
  public toUpdateEndpointWeightsAndCapacities() {
    return this.to('UpdateEndpointWeightsAndCapacities');
  }

  /**
   * Grants permission to update an experiment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateExperiment.html
   */
  public toUpdateExperiment() {
    return this.to('UpdateExperiment');
  }

  /**
   * Grants permission to update the properties of a SageMaker Image
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateImage.html
   */
  public toUpdateImage() {
    return this.to('UpdateImage');
  }

  /**
   * Grants permission to update a ModelPackage
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifModelApprovalStatus()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateModelPackage.html
   */
  public toUpdateModelPackage() {
    return this.to('UpdateModelPackage');
  }

  /**
   * Grants permission to update a monitoring schedule
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifInstanceTypes()
   * - .ifMaxRuntimeInSeconds()
   * - .ifNetworkIsolation()
   * - .ifOutputKmsKey()
   * - .ifVolumeKmsKey()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   * - .ifInterContainerTrafficEncryption()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateMonitoringSchedule.html
   */
  public toUpdateMonitoringSchedule() {
    return this.to('UpdateMonitoringSchedule');
  }

  /**
   * Grants permission to update a notebook instance. Notebook instance updates include upgrading or downgrading the EC2 instance used for your notebook instance to accommodate changes in your workload requirements. You can also update the VPC security groups
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAcceleratorTypes()
   * - .ifInstanceTypes()
   * - .ifRootAccess()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateNotebookInstance.html
   */
  public toUpdateNotebookInstance() {
    return this.to('UpdateNotebookInstance');
  }

  /**
   * Grants permission to updates a notebook instance lifecycle configuration created with the CreateNotebookInstanceLifecycleConfig API
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ UpdateNotebookInstanceLifecycleConfig.html
   */
  public toUpdateNotebookInstanceLifecycleConfig() {
    return this.to('UpdateNotebookInstanceLifecycleConfig');
  }

  /**
   * Grants permission to update a pipeline
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdatePipeline.html
   */
  public toUpdatePipeline() {
    return this.to('UpdatePipeline');
  }

  /**
   * Grants permission to update a pipeline execution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdatePipelineExecution.html
   */
  public toUpdatePipelineExecution() {
    return this.to('UpdatePipelineExecution');
  }

  /**
   * Grants permission to update a Project
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateProject.html
   */
  public toUpdateProject() {
    return this.to('UpdateProject');
  }

  /**
   * Grants permission to update a training job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceTypes()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateTrainingJob.html
   */
  public toUpdateTrainingJob() {
    return this.to('UpdateTrainingJob');
  }

  /**
   * Grants permission to update a trial
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateTrial.html
   */
  public toUpdateTrial() {
    return this.to('UpdateTrial');
  }

  /**
   * Grants permission to update a trial component
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateTrialComponent.html
   */
  public toUpdateTrialComponent() {
    return this.to('UpdateTrialComponent');
  }

  /**
   * Grants permission to update a UserProfile
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceTypes()
   * - .ifVpcSecurityGroupIds()
   * - .ifInstanceTypes()
   * - .ifDomainSharingOutputKmsKey()
   * - .ifImageArns()
   * - .ifImageVersionArns()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateUserProfile.html
   */
  public toUpdateUserProfile() {
    return this.to('UpdateUserProfile');
  }

  /**
   * Grants permission to update a workforce
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateWorkforce.html
   */
  public toUpdateWorkforce() {
    return this.to('UpdateWorkforce');
  }

  /**
   * Grants permission to update a workteam
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateWorkteam.html
   */
  public toUpdateWorkteam() {
    return this.to('UpdateWorkteam');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AddAssociation',
      'AssociateTrialComponent',
      'BatchPutMetrics',
      'CreateAction',
      'CreateAlgorithm',
      'CreateApp',
      'CreateAppImageConfig',
      'CreateArtifact',
      'CreateAutoMLJob',
      'CreateCodeRepository',
      'CreateCompilationJob',
      'CreateContext',
      'CreateDataQualityJobDefinition',
      'CreateDeviceFleet',
      'CreateDomain',
      'CreateEdgePackagingJob',
      'CreateEndpoint',
      'CreateEndpointConfig',
      'CreateExperiment',
      'CreateFeatureGroup',
      'CreateFlowDefinition',
      'CreateHumanTaskUi',
      'CreateHyperParameterTuningJob',
      'CreateImage',
      'CreateImageVersion',
      'CreateInferenceRecommendationsJob',
      'CreateLabelingJob',
      'CreateLineageGroupPolicy',
      'CreateModel',
      'CreateModelBiasJobDefinition',
      'CreateModelExplainabilityJobDefinition',
      'CreateModelPackage',
      'CreateModelPackageGroup',
      'CreateModelQualityJobDefinition',
      'CreateMonitoringSchedule',
      'CreateNotebookInstance',
      'CreateNotebookInstanceLifecycleConfig',
      'CreatePipeline',
      'CreatePresignedDomainUrl',
      'CreatePresignedNotebookInstanceUrl',
      'CreateProcessingJob',
      'CreateProject',
      'CreateStudioLifecycleConfig',
      'CreateTrainingJob',
      'CreateTransformJob',
      'CreateTrial',
      'CreateTrialComponent',
      'CreateUserProfile',
      'CreateWorkforce',
      'CreateWorkteam',
      'DeleteAction',
      'DeleteAlgorithm',
      'DeleteApp',
      'DeleteAppImageConfig',
      'DeleteArtifact',
      'DeleteAssociation',
      'DeleteCodeRepository',
      'DeleteContext',
      'DeleteDataQualityJobDefinition',
      'DeleteDeviceFleet',
      'DeleteDomain',
      'DeleteEndpoint',
      'DeleteEndpointConfig',
      'DeleteExperiment',
      'DeleteFeatureGroup',
      'DeleteFlowDefinition',
      'DeleteHumanLoop',
      'DeleteHumanTaskUi',
      'DeleteImage',
      'DeleteImageVersion',
      'DeleteLineageGroupPolicy',
      'DeleteModel',
      'DeleteModelBiasJobDefinition',
      'DeleteModelExplainabilityJobDefinition',
      'DeleteModelPackage',
      'DeleteModelPackageGroup',
      'DeleteModelPackageGroupPolicy',
      'DeleteModelQualityJobDefinition',
      'DeleteMonitoringSchedule',
      'DeleteNotebookInstance',
      'DeleteNotebookInstanceLifecycleConfig',
      'DeletePipeline',
      'DeleteProject',
      'DeleteRecord',
      'DeleteStudioLifecycleConfig',
      'DeleteTrial',
      'DeleteTrialComponent',
      'DeleteUserProfile',
      'DeleteWorkforce',
      'DeleteWorkteam',
      'DeregisterDevices',
      'DisableSagemakerServicecatalogPortfolio',
      'DisassociateTrialComponent',
      'EnableSagemakerServicecatalogPortfolio',
      'PutLineageGroupPolicy',
      'PutModelPackageGroupPolicy',
      'PutRecord',
      'RegisterDevices',
      'RetryPipelineExecution',
      'SendHeartbeat',
      'SendPipelineExecutionStepFailure',
      'SendPipelineExecutionStepSuccess',
      'StartHumanLoop',
      'StartMonitoringSchedule',
      'StartNotebookInstance',
      'StartPipelineExecution',
      'StopAutoMLJob',
      'StopCompilationJob',
      'StopEdgePackagingJob',
      'StopHumanLoop',
      'StopHyperParameterTuningJob',
      'StopInferenceRecommendationsJob',
      'StopLabelingJob',
      'StopMonitoringSchedule',
      'StopNotebookInstance',
      'StopPipelineExecution',
      'StopProcessingJob',
      'StopTrainingJob',
      'StopTransformJob',
      'UpdateAction',
      'UpdateAppImageConfig',
      'UpdateArtifact',
      'UpdateCodeRepository',
      'UpdateContext',
      'UpdateDeviceFleet',
      'UpdateDevices',
      'UpdateDomain',
      'UpdateEndpoint',
      'UpdateEndpointWeightsAndCapacities',
      'UpdateExperiment',
      'UpdateImage',
      'UpdateModelPackage',
      'UpdateMonitoringSchedule',
      'UpdateNotebookInstance',
      'UpdateNotebookInstanceLifecycleConfig',
      'UpdatePipeline',
      'UpdatePipelineExecution',
      'UpdateProject',
      'UpdateTrainingJob',
      'UpdateTrial',
      'UpdateTrialComponent',
      'UpdateUserProfile',
      'UpdateWorkforce',
      'UpdateWorkteam'
    ],
    Tagging: [
      'AddTags',
      'DeleteTags'
    ],
    Read: [
      'BatchDescribeModelPackage',
      'BatchGetMetrics',
      'BatchGetRecord',
      'DescribeAction',
      'DescribeAlgorithm',
      'DescribeApp',
      'DescribeAppImageConfig',
      'DescribeArtifact',
      'DescribeAutoMLJob',
      'DescribeCodeRepository',
      'DescribeCompilationJob',
      'DescribeContext',
      'DescribeDataQualityJobDefinition',
      'DescribeDevice',
      'DescribeDeviceFleet',
      'DescribeDomain',
      'DescribeEdgePackagingJob',
      'DescribeEndpoint',
      'DescribeEndpointConfig',
      'DescribeExperiment',
      'DescribeFeatureGroup',
      'DescribeFlowDefinition',
      'DescribeHumanLoop',
      'DescribeHumanTaskUi',
      'DescribeHyperParameterTuningJob',
      'DescribeImage',
      'DescribeImageVersion',
      'DescribeInferenceRecommendationsJob',
      'DescribeLabelingJob',
      'DescribeLineageGroup',
      'DescribeModel',
      'DescribeModelBiasJobDefinition',
      'DescribeModelExplainabilityJobDefinition',
      'DescribeModelPackage',
      'DescribeModelPackageGroup',
      'DescribeModelQualityJobDefinition',
      'DescribeMonitoringSchedule',
      'DescribeNotebookInstance',
      'DescribeNotebookInstanceLifecycleConfig',
      'DescribePipeline',
      'DescribePipelineDefinitionForExecution',
      'DescribePipelineExecution',
      'DescribeProcessingJob',
      'DescribeProject',
      'DescribeStudioLifecycleConfig',
      'DescribeSubscribedWorkteam',
      'DescribeTrainingJob',
      'DescribeTransformJob',
      'DescribeTrial',
      'DescribeTrialComponent',
      'DescribeUserProfile',
      'DescribeWorkforce',
      'DescribeWorkteam',
      'GetDeviceFleetReport',
      'GetDeviceRegistration',
      'GetLineageGroupPolicy',
      'GetModelPackageGroupPolicy',
      'GetRecord',
      'GetSagemakerServicecatalogPortfolioStatus',
      'GetSearchSuggestions',
      'InvokeEndpoint',
      'InvokeEndpointAsync',
      'RenderUiTemplate',
      'Search'
    ],
    List: [
      'ListActions',
      'ListAlgorithms',
      'ListAppImageConfigs',
      'ListApps',
      'ListArtifacts',
      'ListAssociations',
      'ListAutoMLJobs',
      'ListCandidatesForAutoMLJob',
      'ListCodeRepositories',
      'ListCompilationJobs',
      'ListContexts',
      'ListDataQualityJobDefinitions',
      'ListDeviceFleets',
      'ListDevices',
      'ListDomains',
      'ListEdgePackagingJobs',
      'ListEndpointConfigs',
      'ListEndpoints',
      'ListExperiments',
      'ListFeatureGroups',
      'ListFlowDefinitions',
      'ListHumanLoops',
      'ListHumanTaskUis',
      'ListHyperParameterTuningJobs',
      'ListImageVersions',
      'ListImages',
      'ListInferenceRecommendationsJobs',
      'ListLabelingJobs',
      'ListLabelingJobsForWorkteam',
      'ListLineageGroups',
      'ListModelBiasJobDefinitions',
      'ListModelExplainabilityJobDefinitions',
      'ListModelMetadata',
      'ListModelPackageGroups',
      'ListModelPackages',
      'ListModelQualityJobDefinitions',
      'ListModels',
      'ListMonitoringExecutions',
      'ListMonitoringSchedules',
      'ListNotebookInstanceLifecycleConfigs',
      'ListNotebookInstances',
      'ListPipelineExecutionSteps',
      'ListPipelineExecutions',
      'ListPipelineParametersForExecution',
      'ListPipelines',
      'ListProcessingJobs',
      'ListProjects',
      'ListStudioLifecycleConfigs',
      'ListSubscribedWorkteams',
      'ListTags',
      'ListTrainingJobs',
      'ListTrainingJobsForHyperParameterTuningJob',
      'ListTransformJobs',
      'ListTrialComponents',
      'ListTrials',
      'ListUserProfiles',
      'ListWorkforces',
      'ListWorkteams',
      'QueryLineage'
    ]
  };

  /**
   * Adds a resource of type device to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/neo-edge-devices.html
   *
   * @param deviceFleetName - Identifier for the deviceFleetName.
   * @param deviceName - Identifier for the deviceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onDevice(deviceFleetName: string, deviceName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:device-fleet/${ deviceFleetName }/device/${ deviceName }`);
  }

  /**
   * Adds a resource of type device-fleet to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/edge-device-fleet.html
   *
   * @param deviceFleetName - Identifier for the deviceFleetName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onDeviceFleet(deviceFleetName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:device-fleet/${ deviceFleetName }`);
  }

  /**
   * Adds a resource of type edge-packaging-job to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/edge-packaging-job.html
   *
   * @param edgePackagingJobName - Identifier for the edgePackagingJobName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onEdgePackagingJob(edgePackagingJobName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:edge-packaging-job/${ edgePackagingJobName }`);
  }

  /**
   * Adds a resource of type human-loop to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-start-human-loop.html
   *
   * @param humanLoopName - Identifier for the humanLoopName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onHumanLoop(humanLoopName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:human-loop/${ humanLoopName }`);
  }

  /**
   * Adds a resource of type flow-definition to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-create-flow-definition.html
   *
   * @param flowDefinitionName - Identifier for the flowDefinitionName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onFlowDefinition(flowDefinitionName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:flow-definition/${ flowDefinitionName }`);
  }

  /**
   * Adds a resource of type human-task-ui to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-instructions-overview.html
   *
   * @param humanTaskUiName - Identifier for the humanTaskUiName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onHumanTaskUi(humanTaskUiName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:human-task-ui/${ humanTaskUiName }`);
  }

  /**
   * Adds a resource of type inference-recommendations-job to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/inference-recommendations-job
   *
   * @param inferenceRecommendationsJobName - Identifier for the inferenceRecommendationsJobName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onInferenceRecommendationsJob(inferenceRecommendationsJobName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:inference-recommendations-job/${ inferenceRecommendationsJobName }`);
  }

  /**
   * Adds a resource of type labeling-job to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/sms.html
   *
   * @param labelingJobName - Identifier for the labelingJobName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onLabelingJob(labelingJobName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:labeling-job/${ labelingJobName }`);
  }

  /**
   * Adds a resource of type workteam to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-management.html
   *
   * @param workteamName - Identifier for the workteamName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onWorkteam(workteamName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:workteam/${ workteamName }`);
  }

  /**
   * Adds a resource of type workforce to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-management.html
   *
   * @param workforceName - Identifier for the workforceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onWorkforce(workforceName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:workforce/${ workforceName }`);
  }

  /**
   * Adds a resource of type domain to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/studio-entity-status.html
   *
   * @param domainId - Identifier for the domainId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onDomain(domainId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:domain/${ domainId }`);
  }

  /**
   * Adds a resource of type user-profile to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/studio-entity-status.html
   *
   * @param domainId - Identifier for the domainId.
   * @param userProfileName - Identifier for the userProfileName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onUserProfile(domainId: string, userProfileName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:user-profile/${ domainId }/${ userProfileName }`);
  }

  /**
   * Adds a resource of type app to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/studio-entity-status.html
   *
   * @param domainId - Identifier for the domainId.
   * @param userProfileName - Identifier for the userProfileName.
   * @param appType - Identifier for the appType.
   * @param appName - Identifier for the appName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onApp(domainId: string, userProfileName: string, appType: string, appName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:app/${ domainId }/${ userProfileName }/${ appType }/${ appName }`);
  }

  /**
   * Adds a resource of type app-image-config to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/studio-byoi-sdk-create-image.html
   *
   * @param appImageConfigName - Identifier for the appImageConfigName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onAppImageConfig(appImageConfigName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:app-image-config/${ appImageConfigName }`);
  }

  /**
   * Adds a resource of type studio-lifecycle-config to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/studio-lcc.html
   *
   * @param studioLifecycleConfigName - Identifier for the studioLifecycleConfigName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onStudioLifecycleConfig(studioLifecycleConfigName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:studio-lifecycle-config/${ studioLifecycleConfigName }`);
  }

  /**
   * Adds a resource of type notebook-instance to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/nbi.html
   *
   * @param notebookInstanceName - Identifier for the notebookInstanceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onNotebookInstance(notebookInstanceName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:notebook-instance/${ notebookInstanceName }`);
  }

  /**
   * Adds a resource of type notebook-instance-lifecycle-config to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html
   *
   * @param notebookInstanceLifecycleConfigName - Identifier for the notebookInstanceLifecycleConfigName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onNotebookInstanceLifecycleConfig(notebookInstanceLifecycleConfigName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:notebook-instance-lifecycle-config/${ notebookInstanceLifecycleConfigName }`);
  }

  /**
   * Adds a resource of type code-repository to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html
   *
   * @param codeRepositoryName - Identifier for the codeRepositoryName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onCodeRepository(codeRepositoryName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:code-repository/${ codeRepositoryName }`);
  }

  /**
   * Adds a resource of type image to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/studio-byoi.html
   *
   * @param imageName - Identifier for the imageName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onImage(imageName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:image/${ imageName }`);
  }

  /**
   * Adds a resource of type image-version to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/studio-byoi.html
   *
   * @param imageName - Identifier for the imageName.
   * @param version - Identifier for the version.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onImageVersion(imageName: string, version: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:image-version/${ imageName }/${ version }`);
  }

  /**
   * Adds a resource of type algorithm to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/algorithms-choose.html
   *
   * @param algorithmName - Identifier for the algorithmName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onAlgorithm(algorithmName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:algorithm/${ algorithmName }`);
  }

  /**
   * Adds a resource of type training-job to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works-training.html
   *
   * @param trainingJobName - Identifier for the trainingJobName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onTrainingJob(trainingJobName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:training-job/${ trainingJobName }`);
  }

  /**
   * Adds a resource of type processing-job to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/processing-job.html
   *
   * @param processingJobName - Identifier for the processingJobName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onProcessingJob(processingJobName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:processing-job/${ processingJobName }`);
  }

  /**
   * Adds a resource of type hyper-parameter-tuning-job to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-how-it-works.html
   *
   * @param hyperParameterTuningJobName - Identifier for the hyperParameterTuningJobName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onHyperParameterTuningJob(hyperParameterTuningJobName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:hyper-parameter-tuning-job/${ hyperParameterTuningJobName }`);
  }

  /**
   * Adds a resource of type project to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-projects-whatis.html
   *
   * @param projectName - Identifier for the projectName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onProject(projectName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:project/${ projectName }`);
  }

  /**
   * Adds a resource of type model-package to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ModelPackage.html
   *
   * @param modelPackageName - Identifier for the modelPackageName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onModelPackage(modelPackageName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:model-package/${ modelPackageName }`);
  }

  /**
   * Adds a resource of type model-package-group to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/model-registry-model-group.html
   *
   * @param modelPackageGroupName - Identifier for the modelPackageGroupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onModelPackageGroup(modelPackageGroupName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:model-package-group/${ modelPackageGroupName }`);
  }

  /**
   * Adds a resource of type model to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/realtime-endpoints.html
   *
   * @param modelName - Identifier for the modelName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onModel(modelName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:model/${ modelName }`);
  }

  /**
   * Adds a resource of type endpoint-config to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/realtime-endpoints.html
   *
   * @param endpointConfigName - Identifier for the endpointConfigName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onEndpointConfig(endpointConfigName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:endpoint-config/${ endpointConfigName }`);
  }

  /**
   * Adds a resource of type endpoint to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/realtime-endpoints.html
   *
   * @param endpointName - Identifier for the endpointName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onEndpoint(endpointName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:endpoint/${ endpointName }`);
  }

  /**
   * Adds a resource of type transform-job to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_TransformJob.html.html
   *
   * @param transformJobName - Identifier for the transformJobName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onTransformJob(transformJobName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:transform-job/${ transformJobName }`);
  }

  /**
   * Adds a resource of type compilation-job to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CompilationJobSummary.html
   *
   * @param compilationJobName - Identifier for the compilationJobName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onCompilationJob(compilationJobName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:compilation-job/${ compilationJobName }`);
  }

  /**
   * Adds a resource of type automl-job to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-automate-model-development.html
   *
   * @param autoMLJobJobName - Identifier for the autoMLJobJobName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onAutomlJob(autoMLJobJobName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:automl-job/${ autoMLJobJobName }`);
  }

  /**
   * Adds a resource of type monitoring-schedule to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-scheduling.html
   *
   * @param monitoringScheduleName - Identifier for the monitoringScheduleName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onMonitoringSchedule(monitoringScheduleName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:monitoring-schedule/${ monitoringScheduleName }`);
  }

  /**
   * Adds a resource of type data-quality-job-definition to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-data-quality.html
   *
   * @param dataQualityJobDefinitionName - Identifier for the dataQualityJobDefinitionName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onDataQualityJobDefinition(dataQualityJobDefinitionName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:data-quality-job-definition/${ dataQualityJobDefinitionName }`);
  }

  /**
   * Adds a resource of type model-quality-job-definition to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-model-quality.html
   *
   * @param modelQualityJobDefinitionName - Identifier for the modelQualityJobDefinitionName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onModelQualityJobDefinition(modelQualityJobDefinitionName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:model-quality-job-definition/${ modelQualityJobDefinitionName }`);
  }

  /**
   * Adds a resource of type model-bias-job-definition to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-detect-post-training-bias.html
   *
   * @param modelBiasJobDefinitionName - Identifier for the modelBiasJobDefinitionName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onModelBiasJobDefinition(modelBiasJobDefinitionName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:model-bias-job-definition/${ modelBiasJobDefinitionName }`);
  }

  /**
   * Adds a resource of type model-explainability-job-definition to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-model-explainability.html
   *
   * @param modelExplainabilityJobDefinitionName - Identifier for the modelExplainabilityJobDefinitionName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onModelExplainabilityJobDefinition(modelExplainabilityJobDefinitionName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:model-explainability-job-definition/${ modelExplainabilityJobDefinitionName }`);
  }

  /**
   * Adds a resource of type experiment to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Experiment.html
   *
   * @param experimentName - Identifier for the experimentName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onExperiment(experimentName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:experiment/${ experimentName }`);
  }

  /**
   * Adds a resource of type experiment-trial to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Trial.html
   *
   * @param trialName - Identifier for the trialName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onExperimentTrial(trialName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:experiment-trial/${ trialName }`);
  }

  /**
   * Adds a resource of type experiment-trial-component to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_TrialComponent.html
   *
   * @param trialComponentName - Identifier for the trialComponentName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onExperimentTrialComponent(trialComponentName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:experiment-trial-component/${ trialComponentName }`);
  }

  /**
   * Adds a resource of type feature-group to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/feature-store.html
   *
   * @param featureGroupName - Identifier for the featureGroupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onFeatureGroup(featureGroupName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:feature-group/${ featureGroupName }`);
  }

  /**
   * Adds a resource of type pipeline to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Pipeline.html
   *
   * @param pipelineName - Identifier for the pipelineName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onPipeline(pipelineName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:pipeline/${ pipelineName }`);
  }

  /**
   * Adds a resource of type pipeline-execution to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_PipelineExecution.html
   *
   * @param pipelineName - Identifier for the pipelineName.
   * @param randomString - Identifier for the randomString.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onPipelineExecution(pipelineName: string, randomString: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:pipeline/${ pipelineName }/execution/${ randomString }`);
  }

  /**
   * Adds a resource of type artifact to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ArtifactSummary.html
   *
   * @param hashOfArtifactSource - Identifier for the hashOfArtifactSource.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onArtifact(hashOfArtifactSource: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:artifact/${ hashOfArtifactSource }`);
  }

  /**
   * Adds a resource of type context to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ContextSummary.html
   *
   * @param contextName - Identifier for the contextName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onContext(contextName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:context/${ contextName }`);
  }

  /**
   * Adds a resource of type action to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ActionSummary.html
   *
   * @param actionName - Identifier for the actionName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onAction(actionName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:action/${ actionName }`);
  }

  /**
   * Adds a resource of type lineage-group to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_LineageGroupSummary.html
   *
   * @param lineageGroupName - Identifier for the lineageGroupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onLineageGroup(lineageGroupName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:sagemaker:${ region || '*' }:${ account || '*' }:lineage-group/${ lineageGroupName }`);
  }

  /**
   * Filters access by the list of all accelerator types associated with the resource in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateEndpointConfig()
   * - .toCreateNotebookInstance()
   * - .toUpdateNotebookInstance()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAcceleratorTypes(value: string | string[], operator?: Operator | string) {
    return this.if(`AcceleratorTypes`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the app network access type associated with the resource in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateDomain()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAppNetworkAccessType(value: string | string[], operator?: Operator | string) {
    return this.if(`AppNetworkAccessType`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the direct internet access associated with the resource in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateNotebookInstance()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDirectInternetAccess(value: string | string[], operator?: Operator | string) {
    return this.if(`DirectInternetAccess`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the Domain sharing output KMS key associated with the resource in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateDomain()
   * - .toCreateUserProfile()
   * - .toUpdateDomain()
   * - .toUpdateUserProfile()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifDomainSharingOutputKmsKey(value: string | string[], operator?: Operator | string) {
    return this.if(`DomainSharingOutputKmsKey`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the offline store kms key associated with the feature group resource in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateFeatureGroup()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifFeatureGroupOfflineStoreKmsKey(value: string | string[], operator?: Operator | string) {
    return this.if(`FeatureGroupOfflineStoreKmsKey`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the offline store s3 uri associated with the feature group resource in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateFeatureGroup()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFeatureGroupOfflineStoreS3Uri(value: string | string[], operator?: Operator | string) {
    return this.if(`FeatureGroupOfflineStoreS3Uri`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the online store kms key associated with the feature group resource in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateFeatureGroup()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifFeatureGroupOnlineStoreKmsKey(value: string | string[], operator?: Operator | string) {
    return this.if(`FeatureGroupOnlineStoreKmsKey`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by a file system access mode associated with the resource in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateHyperParameterTuningJob()
   * - .toCreateTrainingJob()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFileSystemAccessMode(value: string | string[], operator?: Operator | string) {
    return this.if(`FileSystemAccessMode`, value, operator || 'StringLike');
  }

  /**
   * Filters access by a file system directory path associated with the resource in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateHyperParameterTuningJob()
   * - .toCreateTrainingJob()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFileSystemDirectoryPath(value: string | string[], operator?: Operator | string) {
    return this.if(`FileSystemDirectoryPath`, value, operator || 'StringLike');
  }

  /**
   * Filters access by a file system ID associated with the resource in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateHyperParameterTuningJob()
   * - .toCreateTrainingJob()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFileSystemId(value: string | string[], operator?: Operator | string) {
    return this.if(`FileSystemId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by a file system type associated with the resource in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateHyperParameterTuningJob()
   * - .toCreateTrainingJob()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFileSystemType(value: string | string[], operator?: Operator | string) {
    return this.if(`FileSystemType`, value, operator || 'StringLike');
  }

  /**
   * Filters access by a key that is present in the request the user makes to the SageMaker service. This key is deprecated. It has been replaced by sagemaker:VolumeKmsKey
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifHomeEfsFileSystemKmsKey(value: string | string[], operator?: Operator | string) {
    return this.if(`HomeEfsFileSystemKmsKey`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the list of all image arns associated with the resource in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateApp()
   * - .toCreateDomain()
   * - .toCreateUserProfile()
   * - .toUpdateDomain()
   * - .toUpdateUserProfile()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifImageArns(value: string | string[], operator?: Operator | string) {
    return this.if(`ImageArns`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the list of all image version arns associated with the resource in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateApp()
   * - .toCreateDomain()
   * - .toCreateUserProfile()
   * - .toUpdateDomain()
   * - .toUpdateUserProfile()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifImageVersionArns(value: string | string[], operator?: Operator | string) {
    return this.if(`ImageVersionArns`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the list of all instance types associated with the resource in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateApp()
   * - .toCreateDataQualityJobDefinition()
   * - .toCreateDomain()
   * - .toCreateEndpointConfig()
   * - .toCreateHyperParameterTuningJob()
   * - .toCreateModelBiasJobDefinition()
   * - .toCreateModelExplainabilityJobDefinition()
   * - .toCreateModelQualityJobDefinition()
   * - .toCreateMonitoringSchedule()
   * - .toCreateNotebookInstance()
   * - .toCreateProcessingJob()
   * - .toCreateTrainingJob()
   * - .toCreateTransformJob()
   * - .toCreateUserProfile()
   * - .toUpdateDomain()
   * - .toUpdateMonitoringSchedule()
   * - .toUpdateNotebookInstance()
   * - .toUpdateTrainingJob()
   * - .toUpdateUserProfile()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifInstanceTypes(value: string | string[], operator?: Operator | string) {
    return this.if(`InstanceTypes`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the inter container traffic encryption associated with the resource in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateAutoMLJob()
   * - .toCreateDataQualityJobDefinition()
   * - .toCreateHyperParameterTuningJob()
   * - .toCreateModelBiasJobDefinition()
   * - .toCreateModelExplainabilityJobDefinition()
   * - .toCreateModelQualityJobDefinition()
   * - .toCreateMonitoringSchedule()
   * - .toCreateProcessingJob()
   * - .toCreateTrainingJob()
   * - .toUpdateMonitoringSchedule()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifInterContainerTrafficEncryption(value?: boolean) {
    return this.if(`InterContainerTrafficEncryption`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the max runtime in seconds associated with the resource in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateDataQualityJobDefinition()
   * - .toCreateHyperParameterTuningJob()
   * - .toCreateModelBiasJobDefinition()
   * - .toCreateModelExplainabilityJobDefinition()
   * - .toCreateModelQualityJobDefinition()
   * - .toCreateMonitoringSchedule()
   * - .toCreateProcessingJob()
   * - .toCreateTrainingJob()
   * - .toUpdateMonitoringSchedule()
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifMaxRuntimeInSeconds(value: number | number[], operator?: Operator | string) {
    return this.if(`MaxRuntimeInSeconds`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by the model approval status with the model-package in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateModelPackage()
   * - .toUpdateModelPackage()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifModelApprovalStatus(value: string | string[], operator?: Operator | string) {
    return this.if(`ModelApprovalStatus`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the model arn associated with the resource in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateEndpointConfig()
   * - .toCreateTransformJob()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifModelArn(value: string | string[], operator?: Operator | string) {
    return this.if(`ModelArn`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the network isolation associated with the resource in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateDataQualityJobDefinition()
   * - .toCreateHyperParameterTuningJob()
   * - .toCreateModel()
   * - .toCreateModelBiasJobDefinition()
   * - .toCreateModelExplainabilityJobDefinition()
   * - .toCreateModelQualityJobDefinition()
   * - .toCreateMonitoringSchedule()
   * - .toCreateProcessingJob()
   * - .toCreateTrainingJob()
   * - .toUpdateMonitoringSchedule()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifNetworkIsolation(value?: boolean) {
    return this.if(`NetworkIsolation`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the output kms key associated with the resource in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateAutoMLJob()
   * - .toCreateDataQualityJobDefinition()
   * - .toCreateHyperParameterTuningJob()
   * - .toCreateLabelingJob()
   * - .toCreateModelBiasJobDefinition()
   * - .toCreateModelExplainabilityJobDefinition()
   * - .toCreateModelQualityJobDefinition()
   * - .toCreateMonitoringSchedule()
   * - .toCreateProcessingJob()
   * - .toCreateTrainingJob()
   * - .toCreateTransformJob()
   * - .toUpdateMonitoringSchedule()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifOutputKmsKey(value: string | string[], operator?: Operator | string) {
    return this.if(`OutputKmsKey`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the preface string for a tag key and value pair attached to a resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTagExists(value: string | string[], operator?: Operator | string) {
    return this.if(`ResourceTag/`, value, operator || 'StringLike');
  }

  /**
   * Filters access by a tag key and value pair
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to resource types:
   * - device
   * - device-fleet
   * - edge-packaging-job
   * - flow-definition
   * - human-task-ui
   * - inference-recommendations-job
   * - labeling-job
   * - workteam
   * - workforce
   * - domain
   * - user-profile
   * - app
   * - app-image-config
   * - studio-lifecycle-config
   * - notebook-instance
   * - code-repository
   * - image
   * - algorithm
   * - training-job
   * - processing-job
   * - hyper-parameter-tuning-job
   * - project
   * - model-package
   * - model-package-group
   * - model
   * - endpoint-config
   * - endpoint
   * - transform-job
   * - automl-job
   * - monitoring-schedule
   * - data-quality-job-definition
   * - model-quality-job-definition
   * - model-bias-job-definition
   * - model-explainability-job-definition
   * - experiment
   * - experiment-trial
   * - experiment-trial-component
   * - feature-group
   * - pipeline
   * - artifact
   * - context
   * - action
   * - lineage-group
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the root access associated with the resource in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateNotebookInstance()
   * - .toUpdateNotebookInstance()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRootAccess(value: string | string[], operator?: Operator | string) {
    return this.if(`RootAccess`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the target model associated with the Multi-Model Endpoint in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toInvokeEndpoint()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTargetModel(value: string | string[], operator?: Operator | string) {
    return this.if(`TargetModel`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the volume kms key associated with the resource in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateAutoMLJob()
   * - .toCreateDataQualityJobDefinition()
   * - .toCreateDomain()
   * - .toCreateEndpointConfig()
   * - .toCreateHyperParameterTuningJob()
   * - .toCreateLabelingJob()
   * - .toCreateModelBiasJobDefinition()
   * - .toCreateModelExplainabilityJobDefinition()
   * - .toCreateModelQualityJobDefinition()
   * - .toCreateMonitoringSchedule()
   * - .toCreateNotebookInstance()
   * - .toCreateProcessingJob()
   * - .toCreateTrainingJob()
   * - .toCreateTransformJob()
   * - .toUpdateMonitoringSchedule()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifVolumeKmsKey(value: string | string[], operator?: Operator | string) {
    return this.if(`VolumeKmsKey`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the list of all VPC security group ids associated with the resource in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateAutoMLJob()
   * - .toCreateDataQualityJobDefinition()
   * - .toCreateDomain()
   * - .toCreateHyperParameterTuningJob()
   * - .toCreateModel()
   * - .toCreateModelBiasJobDefinition()
   * - .toCreateModelExplainabilityJobDefinition()
   * - .toCreateModelQualityJobDefinition()
   * - .toCreateMonitoringSchedule()
   * - .toCreateNotebookInstance()
   * - .toCreateProcessingJob()
   * - .toCreateTrainingJob()
   * - .toCreateUserProfile()
   * - .toUpdateDomain()
   * - .toUpdateMonitoringSchedule()
   * - .toUpdateUserProfile()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifVpcSecurityGroupIds(value: string | string[], operator?: Operator | string) {
    return this.if(`VpcSecurityGroupIds`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the list of all VPC subnets associated with the resource in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateAutoMLJob()
   * - .toCreateDataQualityJobDefinition()
   * - .toCreateDomain()
   * - .toCreateHyperParameterTuningJob()
   * - .toCreateModel()
   * - .toCreateModelBiasJobDefinition()
   * - .toCreateModelExplainabilityJobDefinition()
   * - .toCreateModelQualityJobDefinition()
   * - .toCreateMonitoringSchedule()
   * - .toCreateNotebookInstance()
   * - .toCreateProcessingJob()
   * - .toCreateTrainingJob()
   * - .toUpdateMonitoringSchedule()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifVpcSubnets(value: string | string[], operator?: Operator | string) {
    return this.if(`VpcSubnets`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the workteam arn associated to the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateFlowDefinition()
   * - .toCreateLabelingJob()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifWorkteamArn(value: string | string[], operator?: Operator | string) {
    return this.if(`WorkteamArn`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the workteam type associated to the request. This can be public-crowd, private-crowd or vendor-crowd
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateFlowDefinition()
   * - .toCreateLabelingJob()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifWorkteamType(value: string | string[], operator?: Operator | string) {
    return this.if(`WorkteamType`, value, operator || 'StringLike');
  }
}
