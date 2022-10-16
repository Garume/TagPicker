import 'antd/dist/antd.css'
import { createRoot } from 'react-dom/client'
import React from 'react'
import { getAllTags } from './tags'
import App from './app'
import browser from 'webextension-polyfill'
import { MessageType } from './type'

const tagListNodes = document.querySelector('.categorized-tag-list')
const app = document.createElement('div')

app.id = 'react-root'

tagListNodes?.prepend(app)

const container = document.getElementById('react-root')
const root = createRoot(container!)

console.log(getAllTags())

// no use
browser.runtime.sendMessage({
  values: {
    tags: getAllTags(),
  },
} as MessageType)

browser.storage.local.set({ tags: getAllTags() })

root.render(<App />)
