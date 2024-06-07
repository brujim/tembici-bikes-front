import Image from 'next/image'
import { PrimaryButton } from '../PrimaryButton/PrimaryButton'
import { BaseModal } from '../BaseModal/BaseModal'

type NoResultsModalProps = {
  close: () => void
}

export const NoResultsModal = ({ close }: NoResultsModalProps) => {
  return (

    <BaseModal 
      useLogo={false}    
      close={close}
    >

    <div className="flex flex-col justify-center text-center">

         <div className="flex flex-row justify-center mb-6">
          <Image
            src="/images/modal/no-results.png"
            alt="lupa com erro"
            width={120}
            height={120}
          />
        </div>

        <h3 className="font-main text-[18px] font-bold leading-5	">
        Não encontramos nenhuma estação com o filtro desejado
        </h3>
        <p className="font-main mt-3 leading-5  mb-6">
        Por favor, refaça a escolha dos filtros para ver novos resultados
        </p>

        <PrimaryButton
          handle={() => {}}
          text='Entendi'
        />
    </div>
    
    </BaseModal>
  )
}
