const checkResultLength = (result, res) => {
  result.length > 0
    ? res.json({ result }).status(200).end()
    : res.json({ error: 'No existen resultados' }).status(404).end();
}

module.exports = {
  checkResultLength
};