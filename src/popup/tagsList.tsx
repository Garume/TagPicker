import React, { FC, useEffect, useState } from 'react'
import { Tag } from '../contents/type'
import browser from 'webextension-polyfill'
import { LoadingOutlined } from '@ant-design/icons'
import Tags2table from './tags2table'

const TagsList: FC = () => {
  const [Tags, setTags] = useState<Tag[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const getTagsValue = async () => {
    const tags = await browser.storage.local.get('tags')
    setTags(tags.tags)
  }

  useEffect(() => {
    setLoading(false)
    getTagsValue()
    setLoading(true)
  }, [])

  return <div>{loading ? <Tags2table tags={Tags} /> : <LoadingOutlined />}</div>
}

export default TagsList
