import Image from 'next/image'
import { PrimaryButton } from '../PrimaryButton/PrimaryButton'
import { BaseModal } from '../BaseModal/BaseModal'
import { useRouter } from 'next/router'

type UnderstandModalProps = {
  setter?: () => void
  close: () => void
}

export const UnderstandModal = ({ setter, close }: UnderstandModalProps) => {
  return (
    <BaseModal useLogo={true} close={close} bottom={0} size={65}>
      <div className="flex flex-col bottom-0 pt-8 pb-4">
        <h3 className="font-main text-[18px] font-bold">
          Entenda as tarifas de retirada
        </h3>
        <p className="font-main mt-3 leading-5  mb-6">
          As cores e os ícone no mapa representam o valor da taxa de retirada
        </p>

        <div className="flex flex-row items-center mb-2">
          <Image
            src="/images/tariff/none-tariff.svg"
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

        <PrimaryButton handle={close} text="Entendi" />
      </div>
    </BaseModal>
  )
}
