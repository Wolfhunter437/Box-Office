export default function Cast({ cast }) {
  return (
    <div>
      {cast.map(({ person, character, voice}) => (<div key={person.id}>

        <div>
            <img src={person.image ? person.image.medium : "/imgNotFound.png"} alt="" />
        </div>
        <div>{person.name} | {character.name} {voice ? '| Voiceover' : ''}</div>
      </div>))}
    </div>
  )
}
