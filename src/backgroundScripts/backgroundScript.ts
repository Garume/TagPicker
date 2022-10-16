import browser from 'webextension-polyfill'

browser.runtime.onInstalled.addListener(function () {
  // 親階層のメニューを生成
  const parent_menu = browser.contextMenus.create({
    type: 'normal',
    id: 'parent',
    title: '背景色を変えるメニュー',
  })

  //子階層のメニューを親(parent_menu)に追加
  browser.contextMenus.create({
    id: 'red',
    parentId: parent_menu,
    title: '赤色',
  })

  browser.contextMenus.create({
    id: 'blue',
    parentId: parent_menu,
    title: '青色',
  })
})
