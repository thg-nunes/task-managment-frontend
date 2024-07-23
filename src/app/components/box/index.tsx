import { IconType } from 'react-icons'

type BoxProps = {
  title: string
  Icon: IconType
  boxData: string
  infoDescription?: string
  iconBg: 'violet' | 'green' | 'cyan' | 'pink'
}

/**
 * @namespace ICON_CONTAINER_SYTLE - contém as possíveis cores que podem ser aplicadas ao
 * background do container do ícone
 * @property {string} ICON_CONTAINER_SYTLE.cyan - sequencia de classes que aplicam estilo
 * ao contaienr do ícone com cor de fundo no tom de ciano
 * @property {string} ICON_CONTAINER_SYTLE.pink - sequencia de classes que aplicam estilo
 * ao contaienr do ícone com cor de fundo no tom de rosa
 * @property {string} ICON_CONTAINER_SYTLE.green - sequencia de classes que aplicam estilo
 * ao contaienr do ícone com cor de fundo no tom de verde
 * @property {string} ICON_CONTAINER_SYTLE.violet - sequencia de classes que aplicam estilo
 * ao contaienr do ícone com cor de fundo no tom de violeta
 */
const ICON_CONTAINER_SYTLE = {
  cyan: 'absolute ml-4 -mt-4 bg-gradient-to-t rounded-xl from-cyan-600 to-cyan-500 p-5',
  pink: 'absolute ml-4 -mt-4 bg-gradient-to-t rounded-xl from-pink-600 to-pink-500 p-5',
  green:
    'absolute ml-4 -mt-4 bg-gradient-to-t rounded-xl from-green-600 to-green-500 p-5',
  violet:
    'absolute ml-4 -mt-4 bg-gradient-to-t rounded-xl from-violet-600 to-violet-500 p-5',
}

/**
 * @function Box -
 * @param {IconType} Box.Icon - qualquer ícone da lib react-icons
 * @param {string} Box.title - título do que esse componente exibe de informação
 * @param {'violet' | 'green' | 'cyan' | 'pink'} Box.iconBg - cor de fundo do ícone exibido
 * @param {string} [Box.infoDescription] - caso queira, pode ser passada uma descrição
 * para complementar com o title
 * @param {string} Box.boxData - valor que o box irá exibir como informação
 */
export const Box = ({
  Icon,
  title,
  iconBg,
  infoDescription = '',
  boxData,
}: BoxProps): JSX.Element => {
  return (
    <div className="relative ml-10 mt-10 grid max-w-96 rounded-md bg-gray-700 p-4">
      <div className={ICON_CONTAINER_SYTLE[iconBg]}>{<Icon />}</div>
      <div className="mb-3 w-max space-y-1 justify-self-end">
        <span className="">{title}</span>
        <h4 className="text-end font-semibold lg:text-2xl">{boxData}</h4>
      </div>
      <span className="mb-3 rounded-full border-t border-white/25" />
      {infoDescription && <p className="text-xs">{infoDescription}</p>}
    </div>
  )
}
