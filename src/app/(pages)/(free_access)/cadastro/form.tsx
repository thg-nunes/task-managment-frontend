'use client'
import * as yup from 'yup'
import { useRouter } from 'next/navigation'
import { useMutation } from '@apollo/client'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { handleSignIn } from '@hooks/pages/login'

import { renderToast } from '@utils/toast'
import { GQL_REGISTER } from '@graphql/mutations/user'

import { Button } from '@components/button'
import { Input, Label, RootInput } from '@components/input'

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

/**
 * @function SignUpForm - componente responável por conter o formulário de cadastro
 */
export const SignUpForm = (): JSX.Element => {
  const { back, push } = useRouter()
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      username: '',
      password: '',
      passwordConfirmation: '',
    },
  })


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

  return (
    <form
      className="grid h-max w-1/2 grid-rows-3 gap-3"
      onSubmit={handleSubmit(handleRegister)}
    >
      <Controller
        name="username"
        control={control}
        render={({ fieldState: { error }, field: { value, onBlur, onChange } }) => (
          <RootInput>
            <Label text="Usuário" htmlFor="username" />
            <Input
              type="text"
              id="username"
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              placeholder="nome de usuário"
              errorMessage={error?.message}
            />
          </RootInput>
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ fieldState: { error }, field: { value, onBlur, onChange } }) => (
          <RootInput>
            <Label text="E-mail" htmlFor="email" />
            <Input
              type="email"
              id="email"
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              placeholder="seu e-mail"
              errorMessage={error?.message}
            />
          </RootInput>
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ fieldState: { error }, field: { value, onBlur, onChange } }) => (
          <RootInput>
            <Label text="Senha" htmlFor="password" />
            <Input
              type="password"
              id="password"
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              placeholder="••••••"
              errorMessage={error?.message}
            />
          </RootInput>
        )}
      />
      <Controller
        name="passwordConfirmation"
        control={control}
        render={({ fieldState: { error }, field: { value, onBlur, onChange } }) => (
          <RootInput>
            <Label text="Confirmação de senha" htmlFor="passwordConfirmation" />
            <Input
              type="password"
              id="passwordConfirmation"
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              placeholder="••••••"
              errorMessage={error?.message}
            />
          </RootInput>
        )}
      />
      <Button type="submit" className="mt-3" disabled={loading} isLoading={loading}>
        Criar conta
      </Button>
      <Button type="button" btnStyle="secondary" className="mt-3" onClick={back}>
        Voltar
      </Button>
    </form>
  )
}
