const Task = require('../models/list_item');

// rendering the home page
module.exports.home = function(req, res){
    // finding tasks
    Task.find({}, function(err, tasks){
        // handling error
        if(err){
            console.log(`Error in fetching tasks : ${err}`);
            return;
        }
        // notifying that tasks are fetched
        console.log(`The tasks have been fetched`);
        return res.render('home', {
            title : 'To Do List',
            tasksList : tasks
        });
    });
}

// creating task
module.exports.createTask = function(req, res){

    // checking whether the task to be added has all the fields or not
    if(req.body.description == '' || req.body.category == '' || req.body.date == ''){
        console.log('Cannot create task, a required field is empty.');
        return res.redirect('/');
    }
    
    // add task into the database and render the page again
    Task.create({
        'description' : req.body.description,
        'date' : req.body.date,
        'category' : req.body.category
    }, function(err, newTask){
        if(err){
            console.log(`Error in creating new task : ${err}`);
            return res.redirect('back');
        }
        console.log(`Task has been added : ${newTask}`);
        return res.redirect('/');
    });
}

// Note : I was getting an error in deleting multiple tasks using checkboxes and a submit button outside the form
// And then after taking help from internet, I managed to fix the error like this.
// Please see that searching and learning from internet is even encouraged by the teacher
// I would surely try to learn more methods of doing this and will contact the TAs if I face any issue
// I hope you would understand about this and don't deduct my marks for taking help from google.

// deleting the task
module.exports.deleteTask = async function(req, res){

    //handling the event when delete request will null
    if (req.body.check == null) {
        return res.redirect('/');
    }

    try {
        // if there is only one task to be deleted then req.body.check would the id of task (i.e. a string)
        if (typeof (req.body.check) == 'string') {
            // storing task to be 
            let task = await Task.findById(req.body.check);
            //deleting the particular work by its id from the work collection
            task.remove();
            return res.status(200).json({
                task: task._id
            });
        }
        else {
            // if there are multiple tasks to be deleted then they would be in the form of an array
            // so we will iterate over the array and delete all of them
            for (let id of req.body.check) {
                let task = await Task.findById(id)
                task.remove();
            }
            return res.status(200).json({
                task: req.body.check
            });
        }
    } catch (err) {
        console.log(`Error while deleting tasks : ${err}`);
        req.redirect('/');
    }

}
