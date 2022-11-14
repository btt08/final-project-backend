const checkResultLength = (result, res) => {
  result.results.length > 0
    ? res.json(result).status(200).end()
    : res.json({ error: 'No existen resultados' }).status(404).end();
}

const getOptions = (page = 1, sort = [['model', 'asc']]) => {
  return {
    projection: { _id: 0, __v: 0, cat: 0 },
    populate: {
      path: 'brand',
      select: { _id: 0, __v: 0 }
    },
    sort: sort,
    limit: 8,
    page,
    customLabels: { docs: 'results' }
  };
}

module.exports = {
  checkResultLength,
  getOptions
};