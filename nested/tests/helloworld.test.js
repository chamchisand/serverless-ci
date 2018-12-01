
it('expect HelloWorld', async () => {

  const name = 'HelloWorld'
  const handler = require('../handler')
  const payload = await handler.helloworld({ name })

  expect(payload).toBeDefined()
  expect(payload).toContain(name)
});
