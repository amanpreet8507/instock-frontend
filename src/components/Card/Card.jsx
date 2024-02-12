import "./Card.scss";

const Card = (props) => {
  return (
    <div className="PageCard">{props.children}</div>
  )
}

export default Card
