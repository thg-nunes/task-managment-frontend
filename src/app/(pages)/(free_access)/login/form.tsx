'use client'
import * as yup from 'yup'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
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

  async function handleSignIn(data: { email: string; password: string }) {
    const response = await signIn('credentials', { redirect: false }, { ...data })
    if (response && response.error) {
      // exibir toast com causa do erro
    }

    if (response?.ok && response.status === 200) {
      // redirecionar para a página home, fazer uma requisição qualquer nessa página para um resolver privado e verificar se vai ser enviado o token e se vai funcionar a verificação de token server
      // para caso de token expirado, refazer a validação no client
    }
    // NO SERVER AO FAZER UMA REQ PRA ROTA PRIVADA, VERIFICAR SE TEM O TOKEN QUE O NEXT-AUTH ENVIA, SE TIVER
    // LIBERA ACESSO, SE NAO BLOQUEIA ACESSO E RETORNA ERRO
  }

  return (
    <form
      className="grid h-max w-1/2 grid-rows-3 gap-3"
      onSubmit={handleSubmit(handleSignIn)}
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
