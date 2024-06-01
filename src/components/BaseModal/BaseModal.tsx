import Image from 'next/image'
import { PrimaryButton } from '../PrimaryButton/PrimaryButton'
import { useState } from 'react'
import { children } from 'cheerio/lib/api/traversing'

type BaseModalProps = {
	children: JSX.Element
	useLogo: boolean
  size?: number // percentage
}

export const BaseModal = ({children, useLogo, size = 50}: BaseModalProps) => {

	const [isOpen, setIsOpen] = useState(true)

	const handleOpenModal = () => {
    setIsOpen(true)
  };

  const handleCloseModal = () => {
		setIsOpen(false)
  };

  console.log(size)
  return (
		isOpen && (
			<div className="bg-iron/70 w-[100vw] h-[100vh]">
      <div className={`w-[100%] bg-pearl absolute bottom-20 px-6 py-6`}
        style={{
          height: size+"%"
        }}
      >
        <div className="flex flex-row justify-between items-center" >

          <Image
            src="/images/filter/itau.png"
            alt="primeiros passos"
            width={75}
            height={38}
						className= {useLogo ? "" : "invisible" }
          />

          <button
            className="flex items-center"
            onClick={handleCloseModal}
          >
            <Image
              src="/images/filter/x.png"
              alt="fechar"
              width={32}
              height={32}
            />
            
          </button> 
      
        </div>

				{children}

       
      </div>
    </div>
		)

  )
}
