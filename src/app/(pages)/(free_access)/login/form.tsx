'use client'
import { useRouter } from 'next/navigation'
import { Controller } from 'react-hook-form'

import { handleSignIn, useSignInForm } from '@hooks/pages/login'

import { Button } from '@components/button'
import { Input, Label, RootInput } from '@components/input'

/**
 * @function SignInForm - componente responável por conter o formulário de login
 */
export const SignInForm = (): JSX.Element => {
  const { push } = useRouter()
  const { control, handleSubmit } = useSignInForm()

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
