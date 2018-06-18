const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')

let win

function createWindow() {
    // Define default dimensions & icon
    win = new BrowserWindow({width: 800, height: 600,
        icon: path.join(__dirname, '../assets/icons/png/whatsapp.png')
    })
    // Load the index.html file
    win.loadURL(url.format ({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))
   // Disable menubar
   win.setMenu(null);
}

app.on('ready', createWindow)