import Image from "next/image"

export default function FolderExample({children, folderName}) {
  return (
    <>
      <div className="mb-2 text-xs p-1 flex text-gray-700 font-semibold">
        <div className="w-[14px] h-[14px] mr-2">
          <Image src="/folder.svg" width={14} height={14} />
        </div>
        {folderName}
      </div>
      <div className="pl-2 mt-2">
        {children}
      </div>
    </>
  )
}