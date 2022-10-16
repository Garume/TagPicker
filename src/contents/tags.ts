import { initialTag, Tag, TagType } from './type'

const generalTagNodes = document.getElementsByClassName('tag-type-0')
const artistsTagNodes = document.getElementsByClassName('tag-type-1')
const copyrightsTagNodes = document.getElementsByClassName('tag-type-3')
const charactersTagNodes = document.getElementsByClassName('tag-type-4')
const metaTagNodes = document.getElementsByClassName('tag-type-5')

const getTags = (
  type: TagType,
  categoryTagNodes: HTMLCollectionOf<Element>
): Tag[] => {
  const tags: Tag[] = []
  for (let index = 0; index < categoryTagNodes.length; index++) {
    const tagNodes = categoryTagNodes[index].children
    const tag: Tag = initialTag(type)
    for (let index = 0; index < tagNodes.length; index++) {
      const nodes = tagNodes[index]
      const className = nodes.className

      if (className == 'wiki-link') {
        tag.wiki_link = nodes.getAttribute('href')
      }
      if (className == 'search-tag') {
        tag.tag_link = nodes.getAttribute('href')
        tag.tag = nodes.textContent
      }
      if (className == 'post-count') {
        tag.count = nodes.getAttribute('title')
      }
    }
    tags.push(tag)
  }
  return tags
}

export const getAllTags = () => {
  const generalTags: Tag[] = getTags('General', generalTagNodes)
  const artistsTags: Tag[] = getTags('Artists', artistsTagNodes)
  const copyrightsTags: Tag[] = getTags('Copyrights', copyrightsTagNodes)
  const charactersTags: Tag[] = getTags('Characters', charactersTagNodes)
  const metaTags: Tag[] = getTags('Meta', metaTagNodes)

  const allTags = generalTags.concat(
    artistsTags,
    copyrightsTags,
    charactersTags,
    metaTags
  )

  return allTags
}

export const tagToPromt = (tags: Tag[], includes: TagType[]) => {
  const promtsList = tags
    .filter((tag) => includes.includes(tag.type))
    .map((tag) => {
      return tag.tag
    })
  const promts = promtsList.join(',')
  return promts
}
