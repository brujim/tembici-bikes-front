import Image from 'next/image'

export const TargetButton = () => {
  return (
    <div className="w-[56px] h-[56px] bg-pearl rounded-full flex justify-center items-center shadow-lg">
      <Image
        src="/images/button/target.png"
        alt="centro"
        width={24}
        height={24}
      />
    </div>
  )
}
