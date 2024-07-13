import { LabelHTMLAttributes } from 'react'

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  text: string
  htmlFor: string
}

/**
 * @function Label - componente usado como label de um input
 * @param {string} Label.text - texto que a label deve renderizar
 * @param {string} Label.htmlFor - id do elemento a qual a label deve ser atrelada
 */
export const Label = ({ text, htmlFor, ...rest }: LabelProps): JSX.Element => {
  return (
    <label htmlFor={htmlFor} {...rest}>
      {text}
    </label>
  )
}
