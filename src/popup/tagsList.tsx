import React, { FC, useCallback, useEffect, useState } from 'react'
import { Tag, TagType } from '../contents/type'
import browser from 'webextension-polyfill'
import { LoadingOutlined } from '@ant-design/icons'
import Tags2table from './tags2table'

const TagsList: FC = () => {
  const [tags, setTags] = useState<Tag[]>([])
  const [category, setCategory] = useState<TagType[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const getTagsValue = useCallback(async () => {
    const tags = await browser.storage.local.get('tags')
    setTags(tags.tags)
  }, [setTags])

  const getCategoryValue = useCallback(async () => {
    const category = await browser.storage.local.get('category')
    setCategory(category.category)
  }, [setCategory])

  useEffect(() => {
    setLoading(false)
    getTagsValue()
    getCategoryValue()
    setLoading(true)
  }, [setLoading, getTagsValue, getCategoryValue])

  return (
    <div>
      {loading ? (
        <Tags2table tags={tags} category={category} />
      ) : (
        <LoadingOutlined />
      )}
    </div>
  )
}

export default TagsList
