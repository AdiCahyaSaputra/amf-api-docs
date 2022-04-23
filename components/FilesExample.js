import Image from "next/image"

export default function FilesExample({path, fileName}) {
  return (
    <h4 className="text-xs p-1 flex text-gray-500 font-mono">
      <div className="w-[14px] h-[14px] mr-2">
        <Image src={path} width={14} height={14} />
      </div>
      {fileName}
    </h4>
  )
}