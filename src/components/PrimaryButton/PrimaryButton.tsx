import Image from 'next/image'

type PrimaryButtonProps = {
  handle: () => void
	text:string
}

export const PrimaryButton = ({ handle, text }: PrimaryButtonProps) => {
  return (
		<button
			className="bg-cooper w-[100%] py-4 text-pearl font-main font-semibold rounded-full mt-6"
			onClick={handle}
		>
			{text}
		</button> 
  )
}
