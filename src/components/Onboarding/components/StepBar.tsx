import Image from 'next/image'

type StepBarProps = {
  activeStep: number
  nextButton: () => void
  getPositionSuccessfull: (state: any) => void
  getPositionFailure: () => void
}

export const StepBar = ({
  activeStep,
  nextButton,
  getPositionSuccessfull,
  getPositionFailure
}: StepBarProps) => {
  return (
    <div className="w-[100vw] h-[88px] bg-pearl shadow-top flex items-center justify-between px-10">
      <div className="flex gap-4">
        <div
          className={`w-[12px] h-[12px] rounded-full ${activeStep === 1 ? 'bg-cooper' : 'bg-silver'}`}
        />
        <div
          className={`w-[12px] h-[12px] rounded-full ${activeStep === 2 ? 'bg-cooper' : 'bg-silver'}`}
        />
        <div
          className={`w-[12px] h-[12px] rounded-full ${activeStep === 3 ? 'bg-cooper' : 'bg-silver'}`}
        />
        <div
          className={`w-[12px] h-[12px] rounded-full ${activeStep === 4 ? 'bg-cooper' : 'bg-silver'}`}
        />
      </div>
      <Image
        src="/images/onboarding/next-step-btn.png"
        alt="próxima etapa"
        width={56}
        height={56}
        onClick={
          activeStep < 4
            ? nextButton
            : () =>
                navigator.geolocation.getCurrentPosition(
                  getPositionSuccessfull,
                  getPositionFailure
                )
        }
      />
    </div>
  )
}
