import { app, BrowserWindow } from 'electron'
import store from './mainStore'
import {createNotificationWindow} from './windows/notification/notification'
let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600})
  mainWindow.loadURL(`file://${__dirname}/index.html`)
  mainWindow.webContents.openDevTools()
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}
app.on('ready', createWindow)
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})

let currentState
store.subscribe(() =>{
  let oldState = currentState;
  currentState = store.getState()
  console.log(currentState)
  if(!oldState){
    createNotificationWindow(currentState.notificationWindow.name)
  }
})