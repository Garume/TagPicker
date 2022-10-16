import { css } from '@emotion/react'
import { Button } from 'antd'
import React, { FC, useState } from 'react'
import { tagToPromt, getAllTags } from './tags'

const App: FC = () => {
  const [copyText, setCopyText] = useState<string>('Copy Tags!!')

  const handleCopyTags = () => {
    const promt = tagToPromt(getAllTags(), ['General'])
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
