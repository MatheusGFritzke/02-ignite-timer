import { ButtonContainer, ButtonVariant } from './Button.styles'

interface ButtonProps {
  variant?: ButtonVariant
}

export function Buttton({ variant = 'primary' }: ButtonProps) {
  return <ButtonContainer variant={variant}> Enviar </ButtonContainer>
}
