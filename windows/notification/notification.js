import { app, BrowserWindow } from 'electron'
let notificationWindow


export function createNotificationWindow (name) {
  notificationWindow = new BrowserWindow({width: 500, height: 500, title: name})
  notificationWindow.loadURL(`file://${__dirname}/notification.html`)
  notificationWindow.webContents.openDevTools()
  notificationWindow.on('closed', function () {
    notificationWindow = null
  })
}