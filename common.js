function updateClockAndDate() {
  const now = new Date();
  document.getElementById('clock').textContent = now.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', second: '2-digit'});
  document.getElementById('date').textContent = now.toLocaleDateString([], {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});
}

function addTask(taskInput, taskTime, taskPriority, callback) {
  const task = {
    id: Date.now(),
    text: taskInput,
    time: new Date(taskTime).getTime(),
    priority: taskPriority
  };

  chrome.storage.sync.get({tasks: []}, function(data) {
    const tasks = data.tasks;
    tasks.push(task);
    chrome.storage.sync.set({tasks: tasks}, function() {
      if (callback) callback();
      scheduleNotification(task);
    });
  });
}

function displayTasks(taskListElement) {
  chrome.storage.sync.get({tasks: []}, function(data) {
    taskListElement.innerHTML = '';
    data.tasks.forEach(task => {
      const li = document.createElement('li');
      li.className = 'task';
      li.innerHTML = `
        ${task.text} at ${new Date(task.time).toLocaleString()} (Priority: ${task.priority})
        <button class="delete-btn" data-id="${task.id}" aria-label="Delete task">X</button>
      `;
      taskListElement.appendChild(li);
    });
    document.querySelectorAll('.delete-btn').forEach(button => {
      button.addEventListener('click', function() {
        const taskId = parseInt(this.getAttribute('data-id'));
        deleteTask(taskId, function() {
          displayTasks(taskListElement);
        });
      });
    });
  });
}

function deleteTask(taskId, callback) {
  chrome.storage.sync.get({tasks: []}, function(data) {
    const tasks = data.tasks.filter(task => task.id !== taskId);
    chrome.storage.sync.set({tasks: tasks}, function() {
      if (callback) callback();
      chrome.alarms.clear(taskId.toString());
    });
  });
}

function scheduleNotification(task) {
  chrome.alarms.create(task.id.toString(), {when: task.time});
}
