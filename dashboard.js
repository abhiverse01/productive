document.addEventListener('DOMContentLoaded', function() {
    updateClockAndDate();
    setInterval(updateClockAndDate, 1000);
    displayTasks();
  
    document.getElementById('logo').addEventListener('click', toggleTaskContainer);
    document.getElementById('addTaskButton').addEventListener('click', addTask);
  });
  
  function updateClockAndDate() {
    const now = new Date();
    document.getElementById('clock').textContent = now.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', second: '2-digit'});
    document.getElementById('date').textContent = now.toLocaleDateString([], {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});
  }
  
  function toggleTaskContainer() {
    const taskContainer = document.getElementById('taskContainer');
    taskContainer.style.display = taskContainer.style.display === 'none' ? 'block' : 'none';
  }
  
  function addTask() {
    const taskInput = document.getElementById('taskInput').value;
    const taskTime = document.getElementById('taskTime').value;
  
    const task = {
      id: Date.now(),
      text: taskInput,
      time: new Date(taskTime).getTime()
    };
  
    chrome.storage.sync.get({tasks: []}, function(data) {
      const tasks = data.tasks;
      tasks.push(task);
      chrome.storage.sync.set({tasks: tasks}, function() {
        displayTasks();
        scheduleNotification(task);
      });
    });
  
    document.getElementById('taskInput').value = '';
    document.getElementById('taskTime').value = '';
  }
  
  function displayTasks() {
    chrome.storage.sync.get({tasks: []}, function(data) {
      const taskList = document.getElementById('taskList');
      taskList.innerHTML = '';
      data.tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = 'task';
        li.innerHTML = `
          ${task.text} at ${new Date(task.time).toLocaleString()}
          <button class="delete-btn" data-id="${task.id}">X</button>
        `;
        taskList.appendChild(li);
      });
      document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', function() {
          const taskId = parseInt(this.getAttribute('data-id'));
          deleteTask(taskId);
        });
      });
    });
  }
  
  function deleteTask(taskId) {
    chrome.storage.sync.get({tasks: []}, function(data) {
      const tasks = data.tasks.filter(task => task.id !== taskId);
      chrome.storage.sync.set({tasks: tasks}, function() {
        displayTasks();
        chrome.alarms.clear(taskId.toString());
      });
    });
  }
  
  function scheduleNotification(task) {
    chrome.alarms.create(task.id.toString(), {when: task.time});
  }
  