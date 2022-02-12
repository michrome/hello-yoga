Created CloudFormation stack:

```
aws cloudformation create-stack --stack-name hello-yoga --template-body file://cloudformation.json --tags 'Key=project,Value=hello-yoga' --region=us-east-1
```

https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-viewercertificate.html#cfn-cloudfront-distribution-viewercertificate-acmcertificatearn

CloudFront only supports ACM certificates in the US East (N. Virginia) Region (us-east-1).
Also the bucket URL is hard-coded to us-east-1.
