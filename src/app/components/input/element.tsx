import { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  errorMessage?: string
}

/**
 * @function Input - componente usado para renderizar um input junto da mensagem
 * de erro se houver
 * @param {string} Input.errorMessage - mensagem de erro a ser exiida ao usuário
 * caso haja um erro
 */
export const Input = ({ errorMessage = '', ...rest }: InputProps): JSX.Element => {
  return (
    <>
      <input
        className="mb-3 rounded-sm border-2 border-transparent bg-gray-600/40 p-2 outline-none placeholder:text-gray-300 focus:border-2 focus:border-gray-500"
        {...rest}
      />
      {errorMessage && <span>{errorMessage}</span>}
    </>
  )
}
