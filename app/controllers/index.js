module.exports.home = function (req, res, next) {
    res.send('{"Message":Welcome to DressStore application}');
}

module.exports.prd = function (req, res, next) {
    res.send("Welcome Products");
}