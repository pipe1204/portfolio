import '../assets/styles/pages.css'
import { LeftColumn, RightColumn, TopMain, MainColumn } from "../components"
import { fundicesLinks } from "../data/portfolioLinks"

const Fundices = ({mode}) => {

  return (
    <div className={mode ? 'dark__main' : 'main--div'}>
      <LeftColumn />
      <div className='mid--column'>
        <TopMain />
        <MainColumn 
          mode={mode}
          title="Fundices"
          description="A personal project and one close to my heart, a fun game I built for my son how is 5 years old and loves to play. It allows users to roll 10 dices at the same time and freeze numbers. You have 10 attempts to get all the 10 numbers on the same number. I worked on the front end of the application using ReactJS, JavaScript, CSS and a few libraries. "
          skills={["React", "JavaScript", "HTML", "CSS"]}
          portfolioLinks={fundicesLinks}
        />
      </div>
      <RightColumn />
    </div>
  )
}

export default Fundices