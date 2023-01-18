import { ImLocation } from "react-icons/im"

export default function Card(props) {
  return (
    <div className="card--item">
      <img className="card--img" src={props.item.imageUrl}></img>
      <div className="card--content">
        <div className="card--location--section">
          <ImLocation color="#F55A5A"/>
          <p className="card--location">{props.item.location.toUpperCase()} </p>
          <a className="card--mapsUrl" href={props.item.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1 className="card--title">{props.item.title}</h1>
        <div className="card--date">
          <span>{props.item.startDate}</span>
          <span> - {props.item.endDate}</span>
        </div>
        <p className="card--description">{props.item.description}</p>
      </div>
    </div>
  )
}