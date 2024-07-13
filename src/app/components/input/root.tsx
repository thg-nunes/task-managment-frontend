import { ReactNode } from 'react'

type RootInputProps = {
  children: ReactNode
}

/**
 * @function RootInput - componente responsável por ser o container do input
 * com a mensagem de erro
 * @param {ReactNode} RootInput.children - pode receber qualquer elemento
 * react válido
 */
export const RootInput = ({ children }: RootInputProps): JSX.Element => {
  return <div className="flex max-w-80 flex-col gap-1">{children}</div>
}
