import './AddressCard.scss'
import arrowBackIcon from '../../assets/icons/arrow_back-24px.svg'
import editIcon from '../../assets/icons/edit-24px.svg'

const AddressCard = () => {
  return (     
    <div className='main__div'>
      <div className='card__address-div'>
        <p className='card__title card__title-address'>WAREHOUSE ADDRESS:</p>
        <p>Address</p>
      </div>
      <div className='card__information-div'>
          <div>
              <p className='card__title'>CONTACT NAME:</p>
              <div className='contact__inforamtion'>
                  <p>Person Name</p>
                  <p>Person position</p>
              </div>
          </div>
          <div>
              <p className='card__title'>CONTACT INFORMATION:</p>
              <div className='contact__inforamtion'>
                  <p>+123 456 7890</p>
                  <p>aman@gmail.com</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default AddressCard
