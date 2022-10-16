import { LoadingOutlined } from '@ant-design/icons'
import { css } from '@emotion/react'
import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import browser from 'webextension-polyfill'
import DanbooruTags from './danbooruTags'

export const Popup: React.VFC = () => {
  const handleClick = () => {
    browser.tabs.create({ url: 'https://danbooru.donmai.us' })
  }

  const [currentUrl, setCurrentUrl] = useState<string | undefined>('')
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(false)
    getCurrentUrl()
    setLoading(true)
  }, [])

  const getCurrentUrl = () => {
    browser.tabs
      .query({ currentWindow: true, active: true })
      .then((tabs) => {
        setCurrentUrl(tabs[0].url)
      })
      .catch(() => {
        setCurrentUrl('No Found')
      })
  }

  return (
    <div css={BoxStyle}>
      <Button css={ButtonStyle} onClick={handleClick}>
        Go TO Danbooru
      </Button>
      <div>
        <p>Now URL: {loading ? currentUrl : <LoadingOutlined />}</p>
        {currentUrl ? <DanbooruTags url={currentUrl} /> : <p>No Found</p>}
      </div>
    </div>
  )
}

const BoxStyle = css`
  width: 500px;
  height: 500px;
`

const ButtonStyle = css``
