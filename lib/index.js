var app = require('app');
var BrowserWindow = require('browser-window');
var path = require('path');

var mainWindow = null;

app.on('ready', function () {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    frame: false,
    resizable: true,
    title: 'Nachos Settings',
    type: 'desktop',
    'web-preferences': {
      'web-security': false
    }
  });

  mainWindow.loadUrl('file://' + path.join(app.getAppPath(), './client/index.html'));

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
});

app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});