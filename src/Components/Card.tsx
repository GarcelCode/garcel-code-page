import { useState } from 'react'
import Contact from '../Views/ContactView'
import Knowledge from '../Views/SkillsView'
import CardButton from './CardButton'
import CardHeader from './CardHeader'

export default function Card() {
  const [knowledgeVisible, setKnowledgeVisible] = useState(false)
  const [contactVisible, setContactVisible] = useState(false)

  return (
    <div className="animate-slideUp text-center">
      <div
        className={`bg-gc-secondary p-5 rounded-md animate-slideUp h-[20.5rem] w-[19rem] sm:max-w-[23rem] duration-500 ease-out ${
          knowledgeVisible ? 'h-[36.8rem] w-[19rem]' : ''
        } ${contactVisible ? 'h-[33.5rem] w-[18rem]' : ''}`}
      >
        <CardHeader />

        <hr />

        <section className="flex justify-around mt-3">
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
      <footer className="mt-3 text-gray-400 text-xs -z-10">
        GarcelCode 2022
      </footer>
    </div>
  )
}
