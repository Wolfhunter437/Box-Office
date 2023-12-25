export default function AppTitle(props) {

    const {title = 'Box Office', description = 'Search for movies or actors'} = props
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}
