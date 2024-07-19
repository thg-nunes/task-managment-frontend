import * as yup from 'yup'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { renderToast } from '@utils/toast'

/**
 * @async
 * @function handleSignIn - função responsável por fazer a chamada para a rota com
 * a config de autenticação via next-auth
 * @param {{ email: string; password: string }} handleSignIn.data - dados de email/password do usuário
 * para fazer a autenticação
 * @param handleSignIn.push - função do hook useRouter do next/navigation
 */
const handleSignIn = async (
  data: { email: string; password: string },
  push: (href: string) => void
) => {
  const response = await signIn('credentials', { redirect: false }, { ...data })

  if (response && response.error) {
    renderToast('error', response.error)
  }

  if (response?.ok && response.status === 200) {
    push('/home')
  }
}

/**
 * @function useSignInForm - função responsável por conter a config de validação do formulário de login
 */
const useSignInForm = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Forneça um e-mail válido')
      .required('E-mail é obrigatório')
      .transform((value) => value || ''),
    password: yup
      .string()
      .required('A senha é obrigatória')
      .transform((value) => value || ''),
  })

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  return { control, handleSubmit }
}

export { handleSignIn, useSignInForm }
