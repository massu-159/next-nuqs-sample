import ServerDemo from "../_components/server-demo"
import { SearchParams } from "../_types/searchParams"
import { searchParamsCache } from "./searchParams"

const ServerPage = ({ searchParams }: { searchParams: SearchParams }) => {
  const { q: query } = searchParamsCache.parse(searchParams)
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <ServerDemo query={query} />
    </div>
  )
}

export default ServerPage