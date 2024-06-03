import { DotLoader } from 'react-spinners'

export const Loading = () => {
  return (
    <div className="h-[100vh] w-[100vw] absolute bg-pearl z-40">
      <div className="flex justify-center items-center h-[100vh]">
        <DotLoader color="#EC7000" />
      </div>
    </div>
  )
}
