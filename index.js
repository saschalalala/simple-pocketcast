const electron = require('electron')
const path = require('path')

const {app, BrowserWindow, globalShortcut} = electron

let mainWindow

function registerShortcuts () {
  globalShortcut.register('MediaPlayPause', () => {
    mainWindow.webContents.send('play-pause')
  })
  globalShortcut.register('MediaPreviousTrack', () => {
    mainWindow.webContents.send('backward')
  })
  globalShortcut.register('MediaNextTrack', () => {
    mainWindow.webContents.send('forward')
  })
}

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 780
  })
  mainWindow.loadURL(path.join('file://', __dirname, 'index.html'))
  // mainWindow.openDevTools({ mode: 'bottom' })
}

app.on('ready', () => {
  createWindow()
  registerShortcuts()
})

app.on('will-quit', () => {
  // Unregister all shortcuts.
  // Not sure if this is necessary though
  globalShortcut.unregisterAll()
})
