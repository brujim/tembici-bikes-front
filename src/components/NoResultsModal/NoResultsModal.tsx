import Image from 'next/image'
import { PrimaryButton } from '../PrimaryButton/PrimaryButton'

type NoResultsModalProps = {
  setter: () => void
}

export const NoResultsModal = ({ setter }: NoResultsModalProps) => {
  return (
    <div className="bg-iron/70 w-[100vw] h-[100vh]">

      <div className="w-[100%] h-[50%] bg-pearl absolute bottom-20 px-6 py-6 flex flex-col justify-center text-center">

        <div className="flex flex-row justify-center ">
          <Image
            src="/images/modal/no-results.png"
            alt="lupa com erro"
            width={120}
            height={120}
          />
        </div>
        
        <h3 className="font-main text-[18px] font-bold">
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
    </div>
  )
}
