import Image from 'next/image'

type StepBarProps = {
  activeStep: number
  stepButton: any
  getPositionSuccessfull: (state: any) => void
  getPositionFailure: () => void
}

export const StepBar = ({
  activeStep,
  stepButton,
  getPositionSuccessfull,
  getPositionFailure
}: StepBarProps) => {
  return (
    <div className="w-[100vw] h-[88px] bg-pearl shadow-top flex items-center justify-between px-10">
      <div className="flex gap-4">
        <div
          className={`w-[12px] h-[12px] rounded-full ${activeStep === 1 ? 'bg-cooper' : 'bg-silver'}`}
          onClick={() => stepButton(1)}
        />
        <div
          className={`w-[12px] h-[12px] rounded-full ${activeStep === 2 ? 'bg-cooper' : 'bg-silver'}`}
          onClick={() => stepButton(2)}
        />
        <div
          className={`w-[12px] h-[12px] rounded-full ${activeStep === 3 ? 'bg-cooper' : 'bg-silver'}`}
          onClick={() => stepButton(3)}
        />
        <div
          className={`w-[12px] h-[12px] rounded-full ${activeStep === 4 ? 'bg-cooper' : 'bg-silver'}`}
          onClick={() => stepButton(4)}
        />
      </div>
      <Image
        src="/images/onboarding/next-step-btn.png"
        alt="próxima etapa"
        width={56}
        height={56}
        onClick={() => {
          if (activeStep < 4) {
            stepButton((param: number) => param + 1)
          } else {
            navigator.geolocation.getCurrentPosition(
              getPositionSuccessfull,
              getPositionFailure
            )
          }
        }}
      />
    </div>
  )
}
