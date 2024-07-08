chrome.alarms.onAlarm.addListener(function(alarm) {
  chrome.notifications.create('', {
    title: 'Task Reminder',
    message: alarm.name,
    iconUrl: 'icons/icon128.png',
    type: 'basic'
  });
});
