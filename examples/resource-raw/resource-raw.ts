import * as statement from '../../lib';

// doc-start
new statement.S3() //
  .allow()
  .allActions()
  .on(
    'arn:aws:s3:::example-bucket', //
    'arn:aws:s3:::another-bucket'
  );
