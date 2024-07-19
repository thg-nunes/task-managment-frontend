'use client'
import * as yup from 'yup'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { handleSignIn } from '@hooks/pages/login'

import { Button } from '@components/button'
import { Input, Label, RootInput } from '@components/input'

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

/**
 * @function SignInForm - componente responável por conter o formulário de login
 */
export const SignInForm = (): JSX.Element => {
  const { push } = useRouter()
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  return (
    <form
      className="grid h-max w-1/2 grid-rows-3 gap-3"
      onSubmit={handleSubmit((data) => handleSignIn(data, push))}
    >
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
              placeholder="e-mail"
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
      <Button type="submit" className="mt-3 flex justify-center">
        Entrar
      </Button>
      <Button type="button" btnStyle="secondary" onClick={() => push('/cadastro')}>
        Cadastro
      </Button>
    </form>
  )
}
