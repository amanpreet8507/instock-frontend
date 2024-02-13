import './AddressCard.scss'

const AddressCard = ({location}) => {
  //console.log(props.address)
  return (     
    <div className='main__div'>
      <div className='card__address-div'>
        <h4 className='card__title card__title-address'>WAREHOUSE ADDRESS:</h4>
        <p className='card__inner-details'>{location.address}<br/>{location.city},{location.country}</p>
      </div>
      <div className='card__information-div'>
          <div>
              <h4 className='card__title'>CONTACT NAME:</h4>
              <div className='contact__inforamtion'>
                  <p className='card__inner-details'>{location.contact_name}</p>
                  <p className='card__inner-details'>{location.contact_position}</p>
              </div>
          </div>
          <div>
              <h4 className='card__title'>CONTACT INFORMATION:</h4>
              <div className='contact__inforamtion'>
                  <p className='card__inner-details'>{location.contact_phone}</p>
                  <p className='card__inner-details'>{location.contact_email}</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default AddressCard
