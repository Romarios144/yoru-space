import './Icon.scss'
import classNames from 'classnames'
import { Icon as MinistaIcon } from 'minista'

const Icon = (props) => {
  const {
    className,
    name,
    hasFill = false,
    ariaLabel,
    width = 24,   // Объявляем width со значением по умолчанию
    height = 24,  // Объявляем height со значением по умолчанию
  } = props

  return (
    <span
      className={classNames(className, 'icon')}
      aria-label={ariaLabel}
    >
      <MinistaIcon
        iconId={name}
        width={width}
        height={height}
        fill={hasFill ? 'currentColor' : 'none'}
        stroke={hasFill ? 'none' : 'currentColor'}
      />
    </span>
  )
}

export default Icon