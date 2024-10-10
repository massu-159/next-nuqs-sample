import { searchParamsCache } from "./searchParams"

export function Results() {
  const maxResults = searchParamsCache.get("maxResults")
  return <span>{maxResults} 件の結果を表示</span>
}
