const AWS = require("aws-sdk");
exports.handler = async (event) => {
  const codebuild = new AWS.CodeBuild();
  const params = { projectName: "HelloYogaBuildProject" };
  const request = await codebuild.startBuild(params).promise();
};
