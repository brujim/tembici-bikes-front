import { useRouter } from 'next/router'

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
  const router = useRouter()

  function onSuccess() {
    localStorage.setItem('getgeo', 'true')
    localStorage.setItem('onboarding', 'first')
    router.push('/')
  }

  function onFailure() {
    localStorage.setItem('getgeo', 'false')
    localStorage.setItem('onboarding', 'first')
    router.push('/')
  }

  return (
    <div 
      style={{
        justifyContent: activeStep === 1 ? 'end' : ''
      }}
      className={`w-[100vw] bg-pearl h-[90px] text-[16px] font-semibold text-cooper flex justify-between items-center px-5 `}>
      {activeStep !== 1 && <p onClick={previousButton}>Voltar</p>}
      <p
        onClick={() => {
          navigator.geolocation.getCurrentPosition(onSuccess, onFailure)
        }}
      >
        Pular
      </p>
    </div>
  )
}
