import { css } from '@emotion/react'
import { Button } from 'antd'
import React, { FC, useState } from 'react'
import { tagToPromt, getAllTags } from './tags'
import browser from 'webextension-polyfill'

const App: FC = () => {
  const [copyText, setCopyText] = useState<string>('Copy Tags!!')

  const handleCopyTags = async () => {
    const category = await browser.storage.local.get('category')

    const promt = tagToPromt(getAllTags(), category.category)
    if (navigator.clipboard) {
      navigator.clipboard.writeText(promt)
      setCopyText('Copied!!')
    } else {
      alert('対応していません。\n' + promt)
    }
  }

  return (
    <Button css={ButtonStyle} onClick={handleCopyTags}>
      <h3>{copyText}</h3>
    </Button>
  )
}

const ButtonStyle = css`
  margin-bottom: 14px;
`

export default App
