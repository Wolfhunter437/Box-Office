import {SearchCard, SearchImgWrapper} from '../Common/SearchCard'

export default function ActorCard({ name, image, gender, country, birthday, deathday }) {
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image} alt={name} />
      </SearchImgWrapper>
      <h1>{name} {Boolean(gender) && `(${gender})`}</h1>
      <p>{country ? `comes from ${country}` : `No country known`}</p>
      {Boolean(birthday) && <p>Born: {birthday}</p>}
      <p>{deathday ? `Died ${deathday}` : 'Alive'}</p>
    </SearchCard>
  )
}
