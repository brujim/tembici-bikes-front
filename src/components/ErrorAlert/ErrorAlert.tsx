import Image from 'next/image'
import { PrimaryButton } from '../PrimaryButton/PrimaryButton'
import { BaseModal } from '../BaseModal/BaseModal'

type ErrorAlertProps = {
  setter: () => void
}

export const ErrorAlert = ({ setter }: ErrorAlertProps) => {
  return (

      <div className="w-[100vw] h-[100vh] bg-pearl px-6 py-6 relative">
        <div>
          <Image
            src="/images/button/button-back.svg"
            alt="voltar"
            width={56}
            height={56}
          />
        </div>
        <div className="flex flex-col w-[100%] mt-10">

          <div className='flex flex-col text-center'>

            <div className="flex flex-col items-center justify-center mb-6">
              <Image
                src="/images/modal/alert-red.png"
                alt="alerta de erro vermelho"
                width={120}
                height={120}
              />

              <h3 className="font-main text-[18px] font-bold leading-5 mt-16">
                Tivemos um problema
              </h3>
              <p className="font-main mt-3 leading-5  mb-6">
                Não conseguimos carregar essa página, por favor tente novamente.
              </p>
            </div>

          </div>
        </div>

        <div className="absolute bottom-6 w-[85%]">
          <PrimaryButton
            handle={() => {}}
            text='Voltar ao início'
          />
        </div>
          
      </div>
    
  )
}
