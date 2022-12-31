import Styles from './Styles/CardHeaderStyle.module.scss'

export default function CardHeader() {
  return (
    <>
      <h1 className={Styles.title}>Garcel Code</h1>
      <img
        src="/images/profile.webp"
        alt="profile_pic"
        width="128px"
        height="128px"
        className={Styles.img}
      />
      <p className={`${Styles.textDescription} italic`}>
        Front-End Web Developer
      </p>
      <p className={`${Styles.textDescription} mb-3`}>
        Currently working at <b>ezaudita</b>
      </p>
    </>
  )
}
