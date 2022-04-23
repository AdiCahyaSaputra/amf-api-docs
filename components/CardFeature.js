export default function CardFeature({title, children}) {
  return (
    <>
      <div className="p-4 border-t-4 border-red-500 bg-white rounded-b-lg shadow-md">
        <h1 className="text-lg text-red-400 text-shadow shadow-red-400/30 font-semibold">{title}</h1>
        <p className="mt-2 text-gray-500">{children}</p>
      </div>
    </>
  )
}