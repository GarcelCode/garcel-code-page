import { contactList } from '../Data/ContactList'
import styles from './ContactViewStyle.module.scss'

export default function Contact() {
  return (
    <article className={styles.contactCardContainer}>
      <h2 className={styles.socialMediaText}>You can find me here! :D</h2>
      <article>
        {contactList.map((el) => (
          <a
            key={el.id}
            href={el.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialMediaContainer}
          >
            <div className={styles.socialMediaIcon}>{el.icon}</div>
            <p className={styles.socialMediaName}>{el.name}</p>
          </a>
        ))}
      </article>
    </article>
  )
}
