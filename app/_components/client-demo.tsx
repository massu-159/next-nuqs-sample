"use client"

import { useQueryState } from "nuqs"

const ClientDemo = () => {
  const [name, setName] = useQueryState("name")
  return (
    <>
      <input value={name || ""} onChange={e => setName(e.target.value)} className="text-black" />
      <button onClick={() => setName(null)}>Clear</button>
      <p>Hello, {name || "anonymous visitor"}!</p>
    </>
  )
}

export default ClientDemo