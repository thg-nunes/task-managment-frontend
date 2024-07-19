/**
 * @async
 * @function fetchByQuery - função usada para fazer requisições para a api via fetch, usada em
 * componentes de servidor e também no servidor do next
 * @param {string} fetchByQuery.operationName - nome da operação graphql a ser executada
 * @param {string} fetchByQuery.query - query no formato graphql a ser enviada ao server
 * @param {unknown} [fetchByQuery.variables] - variáveis a serem enviadas para compor a requisição
 * caso existam
 */
const fetchByQuery = async <T>({
  operationName,
  query,
  variables,
}: {
  operationName: string
  query: string
  variables?: unknown
}) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URI}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ operationName, query, variables }),
  })

  const data = (await response.json()) as T
  return data
}

export { fetchByQuery }
