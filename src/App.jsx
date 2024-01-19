import Random from "./components/Random"
import Tag from "./components/Tag"
export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative items-center">
      <h1 className=" bg-white rounded-lg w-11/12 text-center mt-[40px] px-10   font-bold py-2 md:text-4xl text-2xl">Random GIF</h1>
      <div className="flex flex-col w-full items-center mt-10">
        <Random/>
        <Tag/>
      </div>

    
    </div>
  )
}
