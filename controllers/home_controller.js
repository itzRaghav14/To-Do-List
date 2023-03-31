const Task = require('../models/list_item');

module.exports.home = function(req, res){
    Task.find({}, function(err, tasks){
        if(err){
            console.log(`Error in fetching tasks : ${err}`);
            return;
        }
        console.log(`The tasks have been fetched`);
        return res.render('home', {
            'title' : 'To Do List',
            'tasksList' : tasks
        });
    });

}

module.exports.createTask = function(req, res){
    Task.create({
        'description' : req.body.description,
        'date' : req.body.date,
        'category' : req.body.category
    }, function(err, newTask){
        if(err){
            console.log(`Error in creating new task : ${err}`);
            return;
        }
        console.log(`Task has been added : ${newTask}`);
        return redirect('back');
    });
}


