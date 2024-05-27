type HeadingBarProps = {
  activeStep: number
  previousButton: () => void
  skipButton: () => void
}

export const HeadingBar = ({
  previousButton,
  skipButton,
  activeStep
}: HeadingBarProps) => {
  return (
    <div className="w-[100vw] bg-pearl h-[90px] text-[16px] font-semibold text-cooper flex justify-between items-center px-5">
      <p onClick={skipButton}>Pular </p>
      {activeStep !== 1 && <p onClick={previousButton}>Voltar</p>}
    </div>
  )
}
