import { PiggyBank } from 'lucide-react'
import { FormStep } from './FormStep'
import { StepProgress } from './Progress'

export function SimulationForm() {
  return (
    <>
      <StepProgress currentStep={3} totalSteps={6} />
      <FormStep
        icon={PiggyBank}
        title="Renda Mensal Bruta"
        question="Quanto é depositado na sua conta todo mês? (Somando todos as fontes de renda)?"
        inputProps={{
          type: 'text',
          placeholder: 'ex: 5.000,00',
          prefix: 'R$'
        }}
      />
    </>
  )
}
