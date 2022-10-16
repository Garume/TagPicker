import browser from 'webextension-polyfill'
import { MessageType, Tag } from '../contents/type'

let tags: Tag[] = []

browser.runtime.onMessage.addListener((request: MessageType) => {
  tags = request.values.tags
  console.log(tags)
})
