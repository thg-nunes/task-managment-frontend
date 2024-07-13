'use client'
import * as yup from 'yup'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

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
 * @function SignInForm -
 * @param {} SignInForm. -
 */
export const SignInForm = (): JSX.Element => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function handleSignIn(data: { email: string; password: string }) {
    console.log(data)
  }

  return (
    <form className="grid h-max grid-rows-3 gap-3" onSubmit={handleSubmit(handleSignIn)}>
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
      <Button type="submit">Entrar</Button>
    </form>
  )
}
