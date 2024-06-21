import Image from 'next/image'
import { useEffect, useState } from 'react'

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
  const [bgDimensions, setBgDimensions] = useState({ width: '100%', height: '100vh' });


  useEffect(() => {
    const handleResize = () => {
      setBgDimensions({
        width: `${window.innerWidth}px`,
        height: `${window.innerHeight}px`
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Chama o handleResize inicialmente para definir as dimensões corretas

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    isOpen && (
      <div  className="bg-iron/70" style={{ width: bgDimensions.width, height: bgDimensions.height }}>
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
