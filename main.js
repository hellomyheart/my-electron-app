const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow()

  win.loadFile('index.html')

  //设置缩略图
  win.setThumbarButtons([
    {
      tooltip: 'button1',
      icon: path.join(__dirname, 'test.png'),
      click() { console.log('button1 clicked') }
    }, {
      tooltip: 'button2',
      icon: path.join(__dirname, 'test2.png'),
      // flags: ['enabled', 'dismissonclick'],
      click() { console.log('button2 clicked.') }
    }
  ])


  // 清除缩略图
  win.setThumbarButtons([])

}



app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})