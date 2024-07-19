import { signIn } from 'next-auth/react'

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

export { handleSignIn }
