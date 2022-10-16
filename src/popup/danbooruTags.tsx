import { Divider } from 'antd'
import React, { VFC } from 'react'
import TagsList from './tagsList'

interface Props {
  url: string
}

const DanbooruTags: VFC<Props> = ({ url }) => {
  const regex = (url: string): boolean => {
    const danbooruUrlPattren = /https:\/\/danbooru.donmai.us\/posts\//
    return !!url.match(danbooruUrlPattren)
  }

  return (
    <>
      <Divider />
      <div>
        {regex(url) ? (
          <TagsList />
        ) : (
          <div>Go to Post Page in Danbooru (Image)</div>
        )}
      </div>
    </>
  )
}

export default DanbooruTags
