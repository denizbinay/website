import type { ResolvedTag } from '@/types'
import { getPosts } from '@/util/posts'

export const sortTags = (t1: ResolvedTag, t2: ResolvedTag) =>
  t1.tag.localeCompare(t2.tag)

export const resolveTags = (rawTags: string[]): ResolvedTag[] => {
  const resolvedTags = [...new Set(rawTags)].map((t) => {
    return {
      tag: t,
      icon: 'tabler--tag' as const
    }
  })

  resolvedTags.sort(sortTags)

  return resolvedTags
}

export const generateTags = async (): Promise<ResolvedTag[]> => {
  const allTags = (await getPosts()).flatMap((p) => p.data.tags)

  return resolveTags([...new Set(allTags)])
}

export const getTagUsage = async (tag: string): Promise<number> =>
  (await getPosts(tag)).length
