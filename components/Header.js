import Image from "next/image"
import { useState } from 'react'

export default function Header() {
  const [ active, setActive ] = useState(false);
  
  return (
    <div onClick={ () => {
        active ? setActive(false) : setActive(true)
      }
    } className="p-4 flex items-center w-max bg-black rounded-full">
      
      <Image src="/github.svg" alt="gh"
      width={24} height={24}/>
      
      { active ?
        <a id="gh-link" href="https://github.com/AdiCahyaSaputra/auto-manage-files"
        className="text-sm px-2
        rounded-r-lg text-white font-semibold
        hover:font-light">
          Check On GitHub
        </a>
        :
        ''
      }
      
    </div>
  )
}