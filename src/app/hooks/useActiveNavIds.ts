import { useMemo } from 'react'

function getActiveNavIds({
  items,
  pathname,
}: { items: any[]; pathname: string }): number[] {
  const path = pathname.replace(/\.html$/, '')
  const activeIds: any[] = []
  for (const item of items) {
    if (item.link && path.startsWith(item.match || item.link)) activeIds.push(item.id)
    else if (item.items) {
      const activeChildItems = getActiveNavIds({ items: item.items, pathname })
      if (activeChildItems.length > 0) activeIds.push(item.id)
    }
  }
  return activeIds
}

export function useActiveNavIds({
  items,
  pathname,
}: { items: any[]; pathname: string }): number[] {
  return useMemo(() => getActiveNavIds({ items, pathname }), [items, pathname])
}
