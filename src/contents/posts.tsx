import 'antd/dist/antd.css'
import { createRoot } from 'react-dom/client'
import React from 'react'

import { getAllTags, tagToPromt } from './tags'
import { Button } from 'antd'
import { css } from '@emotion/react'

const tagListNodes = document.querySelector('.categorized-tag-list')
const app = document.createElement('div')

app.id = 'react-root'

tagListNodes?.prepend(app)

const container = document.getElementById('react-root')
const root = createRoot(container!)

console.log(getAllTags())
console.log(tagToPromt(getAllTags(), ['General']))

const handleCopyTags = () => {
  const promt = tagToPromt(getAllTags(), ['General'])
  alert(promt)
}

const ButtonStyle = css`
  margin-bottom: 14px;
`

root.render(
  <Button css={ButtonStyle} onClick={handleCopyTags}>
    <h3>Copy Tags!!</h3>
  </Button>
)
