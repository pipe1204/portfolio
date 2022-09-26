import "../assets/styles/main.styles.css"
import { rightCategories } from '../data/categories'
import { listOfCategories } from "../assets/utils/Functions"
import gif from "../assets/images/motivation.gif"


const RightColumn: React.FC = () => {

  return (
    <div className="right--column">
        <h5 className="categories--title">ME</h5>
        {listOfCategories(rightCategories)}
    </div>
  )
}

export default RightColumn