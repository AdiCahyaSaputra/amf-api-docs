import Head from "next/head"
import Image from "next/image"

import styles from '../styles/Home.module.css'
import Header from "../components/Header"
import Tagline from "../components/Tagline"
import Button from "../components/Button"
import Preview from "../components/Preview"
import CardFeature from "../components/CardFeature"

export default function Home() {
  return (
    <>
      <Head>
        <title>AMF - Home</title>
      </Head>
      <div className="relative">
        <div className="h-1 bg-red-500 shadow-lg shadow-red-400/30 absolute top-0 inset-x-0"></div>
        <div className="p-4 md:p-8">
          <div className="flex justify-center md:justify-start">
            <Header />
          </div>
          
          <div className="grid grid-cols-12">
            <div className="col-span-12 mt-16 text-center md:text-left md:col-span-6">
              <Tagline />
              <Button text="Get Started" to="https://github.com/AdiCahyaSaputra/auto-manage-files"/>
            </div>
            <div className="col-span-12 md:col-span-6 mt-16 md:mt-0">
              <Preview />
            </div>
          </div>
          
          <div className="grid grid-cols-12 mt-16 gap-4">
            <div className="col-span-12 md:col-span-4 text-center md:text-left">
              <CardFeature title="Small Size">
                Under <span className="text-red-500">1mb</span> you can save your time to organize a files and easy to find a files when it's an emergency
              </CardFeature>
              
            </div>
            <div className="col-span-12 md:col-span-4 text-center md:text-left">
              <CardFeature title="Customizeable">
                You can create your own rules by accesing <span className="text-red-500">config.json</span>
                {''} see the docs for more details
              </CardFeature>
            </div>
            <div className="col-span-12 md:col-span-4 text-center md:text-left">
              <CardFeature title="Easy To Use">
                Just copy your <span className="text-red-500">path</span> you want to organize
                and auto-manage-files can do the rest!
              </CardFeature>
            </div>
            
          </div>
          
          <div>
            <h1 className="mt-16 text-xl text-red-500 text-shadow shadow-red-500/30 font-bold text-center">Tech Stack</h1>
            <div className="flex justify-center space-x-2 mt-4">
              <div className="inline-block w-[42] h-[27] px-4 pt-2 rounded-lg bg-green-800 ">
                <Image src="/node.svg" width={42} height={27} />
              </div>
              <div className="inline-block w-[42] h-[27] px-4 pt-2 rounded-lg bg-black flex justify-center items-center ">
                <Image src="/terminal.svg" width={20} height={20} />
              </div>
            </div>
          </div>
          
          <div className="mt-24 text-center">
            <a href="https://github.com/AdiCahyaSaputra" className="hover:text-red-700 uppercase text-lg text-red-500 font-bold inline-block">Adi Cahya Saputra</a>
            <p className="uppercase font-bold text-xs text-gray-500">{'>_<'}</p>
          </div>
          
        </div>
        <div className="h-1 bg-red-500 shadow-lg shadow-red-400/30 absolute bottom-0 inset-x-0"></div>
      </div>
    </>
  )
}
