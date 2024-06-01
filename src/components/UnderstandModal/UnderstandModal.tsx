import Image from 'next/image'
import { PrimaryButton } from '../PrimaryButton/PrimaryButton'
import { BaseModal } from '../BaseModal/BaseModal'

type UnderstandModalProps = {
  setter: () => void
}

export const UnderstandModal = ({ setter }: UnderstandModalProps) => {
  return (
    <BaseModal>
      <div>

        <h3 className="font-main text-[18px] font-bold">
          Entenda as tarifas de retirada
        </h3>
        <p className="font-main mt-3 leading-5  mb-6">
          As cores e os ícone no mapa representam o valor da taxa de retirada
        </p>

        <div className="flex flex-row items-center mb-2">
          <Image
            src="/images/tariff/no-tariff.svg"
            alt="primeiros passos"
            width={75}
            height={38}
          /> 
          <p className=""> Sem tarifa</p>
        </div>

        <div className="flex flex-row items-center mb-2">
          <Image
            src="/images/tariff/low-tariff.svg"
            alt="primeiros passos"
            width={75}
            height={38}
          /> 
          <p className=""> Tarifa baixa</p>
        </div>

        <div className="flex flex-row items-center mb-2">
          <Image
            src="/images/tariff/median-tariff.svg"
            alt="primeiros passos"
            width={75}
            height={38}
          /> 
          <p className=""> Tarifa média</p>
        </div>

        <div className="flex flex-row items-center mb-2">
          <Image
            src="/images/tariff/high-tariff.svg"
            alt="primeiros passos"
            width={75}
            height={38}
          /> 
          <p className=""> Tarifa alta</p>
        </div>

        <PrimaryButton
          handle={() => {}}
          text='Selecionar filtros'
        />

      </div>

</BaseModal>


  )
}
