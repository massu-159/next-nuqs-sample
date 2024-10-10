import { Results } from "../server/results"


const ServerDemo = ({ query }: { query: string }) => {
  return (
    <div>
      <h1>{query}の検索結果</h1>
      <Results />
    </div>
  )
}

export default ServerDemo