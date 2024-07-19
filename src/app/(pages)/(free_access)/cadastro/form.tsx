'use client'
import { useRouter } from 'next/navigation'
import { Controller } from 'react-hook-form'

import { useRegister, useSignUpForm } from '@hooks/pages/cadastro'

import { Button } from '@components/button'
import { Input, Label, RootInput } from '@components/input'

/**
 * @function SignUpForm - componente responável por conter o formulário de cadastro
 */
export const SignUpForm = (): JSX.Element => {
  const { back, push } = useRouter()
  const { control, handleSubmit } = useSignUpForm()
  const { loading, handleRegister } = useRegister(push)

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
