import './MainHeader.scss'
import arrowBackIcon from '../../assets/icons/arrow_back-24px.svg'
import editIcon from '../../assets/icons/edit-24px.svg'
import { Link } from "react-router-dom";

const MainHeader = (props) => {
  return (
    <>
        <div className='main__div main__header-div'>
        <div className='header__icon-and-heading'>
            <Link to='/' className='header__link'>
                <img className='header__arrow-icon' src={arrowBackIcon}></img>
            </Link>
            <h1>{props.headerTitle}</h1>
        </div>
        <div className='header__edit-div'>
            <img className='header__edit-icon' src={editIcon}></img>
            <p className='header__edit-p'>Edit</p>
        </div>
      </div>
    </>
  )
}

export default MainHeader
