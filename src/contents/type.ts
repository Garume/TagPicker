export type TagType =
  | 'Artists'
  | 'Copyrights'
  | 'Characters'
  | 'General'
  | 'Meta'
  | 'Other'

export interface Tag {
  wiki_link: string | null
  tag_link: string | null
  tag: string | null
  count: string | null
  type: TagType
}

export const initialTag = (type: TagType): Tag => {
  return {
    wiki_link: '',
    tag_link: '',
    tag: '',
    count: '',
    type: type,
  }
}

export interface MessageType {
  values: {
    tags: Tag[]
  }
}
