import { useState } from 'react'
import { OnboardingMap } from '../OnboardingMap'
import usePosition from '../../../../stores/usePosition'

export const OnboardingWithoutPosition = () => {
  const [option, setOption] = useState<number | null>(null)
  const [nextStep, setNextStep] = useState(false)
  const position = usePosition((state) => state.setPosition)

  return (
    <>
      {!nextStep ? (
        <div className="flex flex-col pt-32 font-main px-8 justify-between h-[100vh] pb-10">
          <div className="flex flex-col gap-2">
            <h3 className="text-[24px] font-semibold text-iron">
              Onde você vai pedalar?
            </h3>
            <p className="text-[18px] text-stone">
              Precisamos saber a localidade para mostrar as opções
            </p>
            <div className="text-[18px] text-stone flex flex-col gap-3 mt-4">
              <div
                className={`border-[1px] ${option === 1 ? 'border-cooper' : 'border-steel'} py-4 px-6 flex items-center gap-4 rounded-2xl`}
                onClick={() => {
                  position({
                    latitude: -22.970722,
                    longitude: -43.182365
                  })
                  setOption(1)
                }}
              >
                <div
                  className={`h-[16px] w-[16px] ${option === 1 ? 'border-cooper border-4' : 'border-steel border-2'} rounded-full flex items-center justify-center`}
                ></div>
                <p>Rio de Janeiro</p>
              </div>
              <div
                className={`border-[1px] ${option === 2 ? 'border-cooper' : 'border-steel'} py-4 px-6 flex items-center gap-4 rounded-2xl`}
                onClick={() => {
                  position({
                    latitude: -23.556831106,
                    longitude: -46.653830718
                  })
                  setOption(2)
                }}
              >
                <div
                  className={`h-[16px] w-[16px] ${option === 2 ? 'border-cooper border-4' : 'border-steel border-2'} rounded-full flex items-center justify-center`}
                ></div>
                <p>São Paulo</p>
              </div>
              <div className="border-[1px] border-steel py-4 px-6 flex items-center gap-4 rounded-2xl bg-silver">
                <div className="h-[16px] w-[16px] border-2 border-steel rounded-full flex items-center justify-center"></div>
                <p>Curitiba</p>
              </div>
              <div className="border-[1px] border-steel py-4 px-6 flex items-center gap-4 rounded-2xl bg-silver">
                <div className="h-[16px] w-[16px] border-2 border-steel rounded-full flex items-center justify-center"></div>
                <p>Salvador</p>
              </div>
            </div>
          </div>
          <button
            className={`${option !== null ? 'bg-cooper' : 'bg-steel'} w-[100%] py-3 text-pearl font-main font-semibold rounded-full mt-4`}
            onClick={() => {
              if (option !== null) {
                setNextStep(true)
              }
            }}
          >
            Continuar
          </button>
        </div>
      ) : (
        <OnboardingMap />
      )}
    </>
  )
}
