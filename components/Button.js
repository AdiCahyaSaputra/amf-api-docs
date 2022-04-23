export default function Button({text, to}) {
  return (
    <a href={to} className="
      inline-block py-2 px-4 rounded-lg text-white
      bg-red-500 mt-6 text-sm md:text-lg
      hover:bg-red-700
    ">
      {text}
    </a>
  )
}