import './MainHeader.scss'
import editIcon from '../../assets/icons/edit-24px.svg'

const EditIcon = () => {
  return (
    <div className="header__edit-div">
      <img className="header__edit-icon" src={editIcon}></img>
      <p className="header__edit-p">Edit</p>
    </div>
  );
};

export default EditIcon;
