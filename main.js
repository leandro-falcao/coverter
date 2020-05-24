// const electron =  require('electron');

const {app, BrowserWindow } = require('electron');

let win;
function createWindow (){
  win = new BrowserWindow({
    width: 410,
    height: 300,
    webPreferences: {
      nodeIntegration: true
    }
  });
  // aqui chama o index html
  win.loadFile('index.html');
}
app.whenReady().then(createWindow);