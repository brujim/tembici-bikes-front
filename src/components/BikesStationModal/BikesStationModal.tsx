import Image from 'next/image'
import { PrimaryButton } from '../PrimaryButton/PrimaryButton'
import { BaseModal } from '../BaseModal/BaseModal'
import { BikeStationPrice } from './components/BikeStationPrice'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import React, { useState } from 'react';

type BikesStationModalProps = {
  bikeStation: BikeStationProps
}

type BikeStationProps = {
  title: string
  address: string
  time: string
  type: 'mech' | 'electric'
  mech: number
  electric: number
  dayOfWeek: string
  tariff: string
}

export const BikesStationModal = ({ bikeStation }: BikesStationModalProps) => {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    setCopied(true);
    setText(bikeStation.address)
  };

  return (

    <BaseModal
      useLogo={true} 
      size={70}
      bottom={0}
    >

    <div className="flex flex-col justify-center mt-6">

      <h3 className="font-main text-[20px] font-bold leading-6 font-semibold text-ironwhite	">
        {bikeStation.title}
      </h3>

      <div className="flex flex-row justify-between items-center text-center mb-5">
        <p className="font-main font-normal text-[16px] leading-4 text-gray">
          {bikeStation.address}
        </p>
        <CopyToClipboard text={text} onCopy={handleCopy}>
          <button>
            <Image
              src="/images/button/copy.svg"
              alt="Copiar endereço"
              width={16}
              height={16}
            />
          </button>
        </CopyToClipboard>
        
      </div>

      <div className="flex flex-row justify-between items-center bg-pearlgray p-4 mb-6 rounded-2xl">
        <p className='font-bold text-[16px] leading-5 max-w-[50%]'>Período da retirada</p>
        <div className='flex flex-col w-[50%]'>
          <p>{bikeStation.dayOfWeek}</p>
          <p>{bikeStation.time}</p>
        </div>
      </div>

      <BikeStationPrice 
        type={bikeStation.type}
        mech={bikeStation.mech}
        electric={bikeStation.electric}
        tariff={bikeStation.tariff}
      />
        
      <div className='flex flex-col mb-3'>
        <p className="font-main font-semibold text-[16px] leading-5 text-ironwhite">Veja o valor de retirada da 
          <span className="font-main font-bold text-[16px] leading-5 text-ironwhite"> bike {bikeStation.type === 'electric' ? 'comum' : 'elétrica'} </span> 
          nessa estação, para os mesmos filtros</p>
      </div>

      <BikeStationPrice 
        type={bikeStation.type === 'electric' ? 'mech' : 'electric'}
        mech={bikeStation.mech}
        electric={bikeStation.electric}
        tariff={bikeStation.tariff}
      />

      <PrimaryButton
        handle={() => {}}
        text='Entendi'
      />
    </div>
    
    </BaseModal>
  )
}
