import styled from 'styled-components'

export default function AppTitle(props) {

    const {title = 'Box Office', description = 'Search for movies or actors'} = props
  return (
    <TitleWrapper>
      <h1>{title}</h1>
      <p>{description}</p>
    </TitleWrapper>
  )
}


const TitleWrapper = styled.div`
  text-align: center;
  margin: 0 0 40px;
  h1 {
    color: ${({ theme }) => theme.mainColors.magenta};
    letter-spacing: 10px;
    text-transform: uppercase;
    margin: 0 0 10px;
  }
  p {
    color: ${({ theme }) => theme.mainColors.darkgray};
    margin: 0;
  }
`;