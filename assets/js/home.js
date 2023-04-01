// Notifying that the script is running
console.log('The script is running');

// Framework used -> jQuery

// deleting tasks
$('#delete-btn').click(function(event){
    event.preventDefault();
    let deleteTaskForm = $('#delete-task-form');

    $.ajax({
        type : 'POST',
        url : '/delete-task',
        data : deleteTaskForm.serialize(),
        success : function(data){
            // removing the deleted tasks from DOM
            let task = data.task;
            if(typeof(task) == 'string'){
                $(`#${task}`).remove();
            } else{
                for(let id of task){
                    $(`#${id}`).remove();
                }
            }
        },
        error : function(){
            console.log(`Error : ${error.responseText}`);
        }
    });
});
