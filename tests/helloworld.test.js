
it('expect Jack Doe', async () => {

  const name = 'Jack Doe'

  const handler = require('../handler')
  const payload = await handler.helloworld({ name })

  // throw new Error('FakeErr')

  expect(payload).toBeDefined()
  expect(payload).toContain(name)
});
