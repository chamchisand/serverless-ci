
it('expect something!', async () => {

  const name = 'Nested'
  const handler = require('../handler')
  const payload = await handler.helloworld({ name })

  expect(payload).toBeDefined()
  expect(payload).toContain(name)
});
