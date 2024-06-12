import Image from 'next/image'
import { useState } from 'react'

type BaseModalProps = {
  children?: JSX.Element
  useLogo?: boolean
  size?: number // percentage
  bottom?: number
  close?: () => void
}

export const BaseModal = ({
  children,
  useLogo,
  size = 50,
  bottom = 10,
  close
}: BaseModalProps) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    isOpen && (
      <div className="bg-iron/70 w-[100vw] h-[100vh]">
        <div
          className={`w-[100%] bg-pearl absolute px-6 py-6 overflow-y-scroll`}
          style={{
            minHeight: size + '%',
            bottom: bottom + '%'
          }}
        >
          <div className="flex flex-row justify-between items-center">
            <Image
              src="/images/filter/itau.png"
              alt="primeiros passos"
              width={75}
              height={38}
              className={useLogo ? '' : 'invisible'}
            />

            <button className="flex items-center" onClick={close}>
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
