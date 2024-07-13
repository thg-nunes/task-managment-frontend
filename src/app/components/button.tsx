import { twMerge } from 'tailwind-merge'
import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  btnStyle?: 'primary' | 'secondary'
}

/**
 * @namespace BUTTON_STYLES - objeto contendo as duas possíveis seguencias de classes
 * para aplicar estilo ao botao
 * @property {string} BUTTON_STYLES.primary - botao com a cor de fundo violeta
 * @property {string} BUTTON_STYLES.secondary - botao com a cor de fundo zinc
 */
const BUTTON_STYLES = {
  primary:
    'h-max max-w-80 rounded-sm bg-violet-500 hover:bg-violet-500/90 px-2 py-3 text-lg font-semibold transition-all duration-150',
  secondary:
    'h-max max-w-80 rounded-sm bg-zinc-500 hover:bg-zinc-500/90 px-2 py-3 text-lg font-semibold transition-all duration-150',
}

/**
 * @function Button - componente usado para renderizar um botão com estilos pré definidos
 * @param {{ 'primary' | 'secondary' }} Button.btnStyle - prop responsável por definir o estilo
 * do botão a ser usado
 */
export const Button = ({
  btnStyle = 'primary',
  className,
  children,
  ...rest
}: ButtonProps): JSX.Element => {
  return (
    <button className={twMerge(BUTTON_STYLES[btnStyle], className)} {...rest}>
      {children}
    </button>
  )
}
