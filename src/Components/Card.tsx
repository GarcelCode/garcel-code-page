import { useState } from 'react'
import Contact from '../Views/ContactView'
import Knowledge from '../Views/SkillsView'
import CardButton from './CardButton'
import CardHeader from './CardHeader'
import Styles from './Styles/CardStyle.module.scss'

export default function Card() {
  const [knowledgeVisible, setKnowledgeVisible] = useState(false)
  const [contactVisible, setContactVisible] = useState(false)

  const cardContainerStyles = (
    knowledgeVisible: boolean,
    contactVisible: boolean
  ) => {
    if (knowledgeVisible) {
      return Styles.knowledgeCardContainer
    } else if (contactVisible) {
      return Styles.contactCardContainer
    }

    return ''
  }

  return (
    <div className={Styles.mainContainer}>
      <div
        className={`${Styles.cardContainer} ${cardContainerStyles(
          knowledgeVisible,
          contactVisible
        )}`}
      >
        <CardHeader />

        <hr />

        <section className={Styles.buttonContainer}>
          <CardButton
            text="Skills"
            visible={knowledgeVisible}
            action={() => {
              setKnowledgeVisible(!knowledgeVisible)
              setContactVisible(false)
            }}
          />
          <CardButton
            text="Contact"
            visible={contactVisible}
            action={() => {
              setContactVisible(!contactVisible)
              setKnowledgeVisible(false)
            }}
          />
        </section>

        {knowledgeVisible && <Knowledge />}
        {contactVisible && <Contact />}
      </div>
      <footer className={Styles.footer}>GarcelCode 2022</footer>
    </div>
  )
}
