const notFound = (req, res) => res.status(404).send("the Route does not exist")

module.exports = notFound
