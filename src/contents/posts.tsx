import 'antd/dist/antd.css'
import { createRoot } from 'react-dom/client'
import React from 'react'

import { getAllTags, tagToPromt } from './tags'
import { Button } from 'antd'
import { css } from '@emotion/react'
import App from './app'

const tagListNodes = document.querySelector('.categorized-tag-list')
const app = document.createElement('div')

app.id = 'react-root'

tagListNodes?.prepend(app)

const container = document.getElementById('react-root')
const root = createRoot(container!)

root.render(<App />)
