import { StepProgress } from './Progress'

export function SimulationForm() {
  return (
    <>
      <StepProgress currentStep={3} totalSteps={6} />
    </>
  )
}
