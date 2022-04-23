import { useState } from "react"
import FileExplorer from "./FileExplorer"

export default function Preview() {
  const [before, setBefore] = useState(true);
  
  return (
    <>
      <div className="flex justify-center md:justify-start">
      {before ? (
        <>
          <a className="text-lg p-2 text-red-500 text-shadow shadow-red-500/30 font-semibold">Before</a>
          <a onClick={() => setBefore(false)} className="ml-2 p-2 text-lg text-red-200">After</a>
        </>
      ) : (
        <>
          <a onClick={() => setBefore(true)} className="text-lg p-2 text-red-400">Before</a>
          <a className="ml-2 text-lg p-2 text-red-500 text-shadow shadow-red-500/30 font-semibold">After</a>
        </>
      )}
        
      </div>
      <div className="mt-4">
        <FileExplorer isBefore={before} />
      </div>
    </>
  )
}