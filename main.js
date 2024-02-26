const { app, BrowserWindow } = require('electron');

function createWindow() {
    // 创建浏览器窗口
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    win.loadFile('index.html');
}


app.whenReady().then(() => {
    createWindow();
});
