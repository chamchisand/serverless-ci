const moment = require('moment')

exports.helloworld = async (event) => {
  const { name } = event
  const m = moment()

  return `hello world from ${name || '???'} at ${m.format('YYYY-MM-DD HH:mm:ss')}`
}
