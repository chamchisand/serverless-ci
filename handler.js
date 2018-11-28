exports.helloworld = async (event) => {
  const { name } = event

  return `hello world ${name}`
}
