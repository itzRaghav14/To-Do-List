module.exports.home = function(req, res){
    return res.end('<h1> A list of Users </h1>');
}

module.exports.profile = function(req, res){
    return res.send('<h1> User Profile</h1>');
}