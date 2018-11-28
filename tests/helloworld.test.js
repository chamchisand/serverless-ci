const AWS = require('aws-sdk')
const lambda = new AWS.Lambda()

// const lambda = new AWS.Lambda({
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_KEY,
//   region: process.env.AWS_REGION
// });

it('expect Jack Doe', async () => {

  const name = 'Jack Doe'

  const payload = await lambda.invoke({
    FunctionName: 'serverless-ci-dev-helloworld',
    Payload: JSON.stringify({ name })
  }).promise().then(resp => resp.Payload)

  expect(payload).toBeDefined()
  expect(payload).toContain(name)
});
