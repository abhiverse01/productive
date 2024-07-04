document.addEventListener('DOMContentLoaded', function() {
    updateClockAndDate();
    setInterval(updateClockAndDate, 1000);
    const taskListElement = document.getElementById('taskList');
    displayTasks(taskListElement);
  
    document.getElementById('logo').addEventListener('click', function() {
      const taskContainer = document.getElementById('taskContainer');
      taskContainer.style.display = taskContainer.style.display === 'none' ? 'block' : 'none';
    });
  
    document.getElementById('addTaskButton').addEventListener('click', function() {
      const taskInput = document.getElementById('taskInput').value;
      const taskTime = document.getElementById('taskTime').value;
      const taskPriority = document.getElementById('prioritySelect').value;
      addTask(taskInput, taskTime, taskPriority, function() {
        displayTasks(taskListElement);
      });
    });
  });
  