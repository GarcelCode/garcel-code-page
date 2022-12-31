import { skillsList, learningList } from '../Data/SkillsList'
import styles from './Styles/SkillsViewStyle.module.scss'

export default function Knowledge() {
  return (
    <article className={styles.skillsCardContainer}>
      <p className={styles.skillsText}>I have experience using</p>
      <>
        <ul className={styles.skillsIconsContainer}>
          {skillsList.map((el) => (
            <li key={el.id} className={styles.skillsIcon}>
              {el.icon}
            </li>
          ))}
        </ul>
      </>
      <p className={styles.skillsText}>Learning</p>
      <>
        <ul className={styles.skillsIconsContainer}>
          {learningList.map((el) => (
            <li key={el.id} className={styles.skillsIcon}>
              {el.icon}
            </li>
          ))}
        </ul>
      </>
    </article>
  )
}
