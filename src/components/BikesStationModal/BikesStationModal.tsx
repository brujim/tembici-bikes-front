import Image from 'next/image'
import { PrimaryButton } from '../PrimaryButton/PrimaryButton'
import { BaseModal } from '../BaseModal/BaseModal'
import { BikeStationPrice } from './components/BikeStationPrice'
import React, { useState } from 'react'
const Reveal = require('react-reveal/Reveal')
const Base = require('react-reveal/Zoom')

type BikesStationModalProps = {
  bikeStation: BikeStationProps
  close: () => void
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

export const BikesStationModal = ({
  bikeStation,
  close
}: BikesStationModalProps) => {
  const [toast, setToast] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(bikeStation.address)
    setToast(true)
    setTimeout(() => {
      setToast(false)
    }, 2000)
  }

  return (
    <Reveal>
      <BaseModal useLogo={true} size={85} bottom={0} close={close}>
        <div className="flex flex-col justify-center mt-6">
          <h3 className="font-main text-[20px] leading-6 font-semibold text-ironwhite	">
            {bikeStation.title}
          </h3>

          <div className="flex flex-row justify-between items-center text-center mb-5 mt-2 relative">
            {toast && (
              <Base>
                <div className="absolute top-10 right-[38%] bg-cooper text-pearl font-semibold px-4 py-2 rounded-full text-[12px]">
                  Copiado!
                </div>
              </Base>
            )}
            <div
              onClick={handleCopy}
              className="cursor-pointer flex items-center justify-between"
            >
              <p className="font-main font-normal text-[16px] leading-4 text-gray text-start max-w-[90%]">
                {bikeStation.address}
              </p>
              <button>
                <Image
                  src="/images/button/copy.svg"
                  alt="Copiar endereço"
                  width={22}
                  height={22}
                />
              </button>
            </div>
          </div>

          <div className="flex flex-row justify-between items-center bg-pearlgray p-4 mb-6 rounded-2xl">
            <p className="font-semibold text-[16px] leading-5 max-w-[35%]">
              Período da retirada
            </p>
            <div className="flex flex-col px-10">
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

          <div className="flex flex-col mb-3">
            <p className="font-main font-semibold text-[16px] leading-5 text-ironwhite">
              Veja o valor de retirada da
              <span className="font-main font-bold text-[16px] leading-5 text-ironwhite">
                {' '}
                bike {bikeStation.type === 'electric'
                  ? 'comum'
                  : 'elétrica'}{' '}
              </span>
              nessa estação, para os mesmos filtros
            </p>
          </div>

          <BikeStationPrice
            type={bikeStation.type === 'electric' ? 'mech' : 'electric'}
            mech={bikeStation.mech}
            electric={bikeStation.electric}
            tariff={bikeStation.tariff}
          />

          <PrimaryButton handle={close} text="Entendi" />
        </div>
      </BaseModal>
    </Reveal>
  )
}
