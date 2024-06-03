import Image from 'next/image'
import { PrimaryButton } from '../PrimaryButton/PrimaryButton'
import { BaseModal } from '../BaseModal/BaseModal'

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


}

export const BikesStationModal = ({ bikeStation }: BikesStationModalProps) => {
  return (

    <BaseModal
      useLogo={true} 
      size={70}   
    >

    <div className="flex flex-col justify-center mt-16">

      <h3 className="font-main text-[20px] font-bold leading-6 font-semibold text-ironwhite	">
        {bikeStation.title}
      </h3>
      <p className="font-main font-normal text-[16px] leading-4 text-gray">
        {bikeStation.address}
      </p>

      <div className="flex flex-row justify-between items-center bg-pearlgray p-4 mb-6 rounded-2xl">
        <p className='font-bold text-[16px] leading-5 max-w-[50%]'>Período da retirada</p>
        <div className='flex flex-col w-[50%]'>
          <p>{bikeStation.dayOfWeek}</p>
          <p>{bikeStation.time}</p>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center bg-pearlgray p-4 mb-6 rounded-2xl">
        <div className='flex flex-rox w-[50%]'> 
        <Image
          src="/images/button/electric.svg"
          alt="bike eletrica"
          width={24}
          height={24}
        />
        <p className='font-medium text-[14px] leading-4 max-w-[50%] ml-2'>Retirada de Bike elétrica</p>

        </div>
        
        <div className='flex flex-col '>
          <p>{bikeStation.dayOfWeek}</p>
          <p>{bikeStation.time}</p>
        </div>
      </div>


      <PrimaryButton
        handle={() => {}}
        text='Entendi'
      />
    </div>
    
    </BaseModal>
  )
}
