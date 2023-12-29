import { Link } from "react-router-dom";

export default function ShowCard({ name, image, id, summary }) {

  const summaryStripped = summary ? summary.split(" ").slice(0, 10).join(" ").replace(/<.+?>/g, "") : "No description";

  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <h1>{name}</h1>
      <p>{summaryStripped}</p>
      <div>
        <Link to="/">Read more</Link>
        <button type="button">Star Me</button>
      </div>
    </div>
  )
}
