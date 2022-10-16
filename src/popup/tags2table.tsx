import { Tag } from '../contents/type'
import React from 'react'
import { QuestionCircleOutlined } from '@ant-design/icons'
import browser from 'webextension-polyfill'
import { css } from '@emotion/react'

interface Props {
  tags: Tag[]
}

const Tags2table: React.VFC<Props> = ({ tags }) => {
  const handleClick = (href: string) => {
    browser.tabs.create({ url: href })
  }

  return (
    <div css={boxStyle}>
      {tags.map((tag: Tag, index: number) => {
        return (
          <div key={index} css={rowStyle}>
            <QuestionCircleOutlined
              onClick={() => handleClick(tag.wiki_link!)}
            />
            <p
              css={textStyle}
              onClick={() => {
                handleClick(tag.tag_link!)
              }}
            >
              {tag.tag}
            </p>
            <p css={textStyle}>{tag.count}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Tags2table

const rowStyle = css`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 150%;
`
const boxStyle = css`
  display: flex;
  flex-direction: column;
`
const textStyle = css`
  margin: 0px;
`
