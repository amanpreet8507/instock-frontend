import './AddressCard.scss'
import arrowBackIcon from '../../assets/icons/arrow_back-24px.svg'
import editIcon from '../../assets/icons/edit-24px.svg'

const AddressCard = () => {
  return (     
    <div className='main__div'>
      <div className='card__address-div'>
        <h4 className='card__title card__title-address'>WAREHOUSE ADDRESS:</h4>
        <p className='card__inner-details'>Address</p>
      </div>
      <div className='card__information-div'>
          <div>
              <h4 className='card__title'>CONTACT NAME:</h4>
              <div className='contact__inforamtion'>
                  <p className='card__inner-details'>Person Name</p>
                  <p className='card__inner-details'>Person position</p>
              </div>
          </div>
          <div>
              <h4 className='card__title'>CONTACT INFORMATION:</h4>
              <div className='contact__inforamtion'>
                  <p className='card__inner-details'>+123 456 7890</p>
                  <p className='card__inner-details'>aman@gmail.com</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default AddressCard
