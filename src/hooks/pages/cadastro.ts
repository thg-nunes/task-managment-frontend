import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { useMutation } from '@apollo/client'
import { yupResolver } from '@hookform/resolvers/yup'

import { renderToast } from '@utils/toast'
import { GQL_REGISTER } from '@graphql/mutations/user'

import { handleSignIn } from './login'

/**
 * @function useSignUpForm - função responsável por conter a config de validação do formulário
 * de cadastro
 */
const useSignUpForm = () => {
  const schema = yup.object().shape({
    username: yup.string().trim().required('O nome de usuário é obrigatório'),
    email: yup
      .string()
      .email('Forneça um e-mail válido')
      .required('E-mail é obrigatório')
      .transform((value) => value || ''),
    password: yup
      .string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve conter ao menos 6 caratéries')
      .max(12, 'A senha deve conter no máximo 12 caratéries')
      .transform((value) => value || ''),
    passwordConfirmation: yup
      .string()
      .required('A confirmação de senha senha é obrigatória')
      .test(
        'password',
        'A confirmação de senha está errada',
        (value, { parent }) => value === parent.password
      )
      .transform((value) => value || ''),
  })

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      username: '',
      password: '',
      passwordConfirmation: '',
    },
  })

  return { control, handleSubmit }
}

/**
 * @async
 * @function useRegister - função responsável por fazer o registro do usuário e a chamada para
 * a rota com a config de autenticação via next-auths
 * @param useRegister.push - função do hook useRouter do next/navigation
 */
const useRegister = (push: (href: string) => void) => {
  const [signUp, { loading }] = useMutation(GQL_REGISTER, {
    onError(err) {
      renderToast('error', err.message)
    },
  })

  async function handleRegister(data: {
    email: string
    username: string
    password: string
    passwordConfirmation: string
  }) {
    await signUp({
      variables: {
        registerInput: { email: data.email, password: data.password },
      },
    })

    await handleSignIn({ email: data.email, password: data.password }, push)
  }

  return { loading, handleRegister }
}

export { useSignUpForm, useRegister }
