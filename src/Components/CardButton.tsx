import { ICardButtonProps } from '../Types/ICardButtonProps'
import Styles from './Styles/CardButtonStyle.module.scss'

export default function CardButton({
  text,
  action,
  visible,
}: ICardButtonProps) {
  const buttonStyles = (visible: boolean) => {
    if (visible) {
      return Styles.buttonSelected
    }
    return null
  }
  return (
    <button
      onClick={action}
      className={`${Styles.button} ${buttonStyles(visible)}`}
    >
      {text}
    </button>
  )
}
