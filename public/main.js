const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');

let mainWindow;
let clipWindow;

function createWindow() {
  mainWindow = new BrowserWindow({width: 900, height: 680});
  clipWindow = new BrowserWindow({width: 1280, height: 720, parent: mainWindow, show: true});


  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  mainWindow.loadURL(isDev ? 'http://localhost:3000/clip' : `file://${path.join(__dirname, '../build/index.html')}`);


  mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
