import FolderExample from "./FolderExample"
import FilesExample from "./FilesExample"
import Image from "next/image"

export default function FileExplorer({isBefore}) {
  return (
    <>
      <div className="w-full">
        <div className="py-2 px-4 flex space-x-2 bg-red-500 rounded-t-lg">
          <div className="w-2 h-2 inline-block bg-white rounded-full"></div>
          <div className="w-2 h-2 inline-block bg-white rounded-full"></div>
          <div className="w-2 h-2 inline-block bg-white rounded-full"></div>
        </div>
        
        <div className="p-4 bg-white shadow-lg rounded-b-lg">
          <div>
            { isBefore ? (
              <FolderExample folderName="C:/desktop/Downloads">
                <FilesExample path="/file-text.svg" fileName="some-document.docx" />
                <FilesExample path="/film.svg" fileName="some-movie.mp4" />
                <FilesExample path="/music.svg" fileName="some-music.mp3" />
                <FilesExample path="/file-text.svg" fileName="some-document-2.docx" />
                <FilesExample path="/film.svg" fileName="some-video.3gp" />
                <FilesExample path="/music.svg" fileName="some-music-2.mp3" />
              </FolderExample>
              
            ) : (
              <FolderExample folderName="C:/desktop/Downloads">
                <FolderExample folderName="document-downloads">
                  <FilesExample path="/file-text.svg" fileName="some-document.docx" />
                  <FilesExample path="/file-text.svg" fileName="some-document-2.docx" />
                </FolderExample>
                <FolderExample folderName="movie-downloads">
                  <FilesExample path="/film.svg" fileName="some-movie.mp4" />
                  <FilesExample path="/film.svg" fileName="some-video.3gp" />
                </FolderExample>
                <FolderExample folderName="music-downloads">
                  <FilesExample path="/music.svg" fileName="some-music.mp3" />
                  <FilesExample path="/music.svg" fileName="some-music-2.mp3" />
                </FolderExample>
              </FolderExample>
              
            ) }
          </div>
        </div>
        
      </div>
    </>
  )
}