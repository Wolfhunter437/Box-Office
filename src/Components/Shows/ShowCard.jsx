import { useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SearchCard, SearchImgWrapper } from '../Common/SearchCard'
import { StarIcon } from '../Common/StarIcon'

export default function ShowCard({ name, image, id, summary, onStarMeClick, isStarred }) {

  const summaryStripped = summary ? summary.split(" ").slice(0, 10).join(" ").replace(/<.+?>/g, "") + '...' : "No description";

  const starBtnRef = useRef()

  const handleStarClick = () => {
    onStarMeClick(id);

    const starBtnE1 = starBtnRef.current

    if (!starBtnE1) return;
    if (isStarred) {
      starBtnE1.classList.remove('animate')
    }
    else {
      starBtnE1.classList.add('animate')
    }
  }

  return (
    <SearchCard>
      <StyleLink to={`/show/${id}`} target="_blank" rel="noreferrer">
        <SearchImgWrapper>
          <img src={image} alt={name} />
        </SearchImgWrapper>
        <h1>{name}</h1>
        <Summary>{summaryStripped}</Summary>
      </StyleLink>
      <ActionSection>
        <StarBtn type="button" onClick={handleStarClick} ref={starBtnRef}  >
          <StarIcon active={isStarred} />
        </StarBtn>
      </ActionSection>
    </SearchCard>
  )
}


const ActionSection = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration-color: #000;
    color: ${({ theme }) => theme.mainColors.magenta};
    &:hover {
      text-decoration-color: none;
      color: ${({ theme }) => theme.mainColors.white};
      transition: 0.4s ease-out;
    }
    &:not(hover){
      transition: 0.3s ease-out;
    }
  }
`;

const StyleLink = styled(Link)`
text-decoration: none;
`;

const Summary = styled.p`
color: ${({ theme }) => theme.mainColors.white};
`;

const StarBtn = styled.button`
  outline: none;
  border: 1px solid ${({ theme }) => theme.mainColors.magenta};
  border-radius: 15px;
  padding: 5px 20px;
  background-color: ${({ theme }) => theme.mainColors.white};
  color: ${({ theme }) => theme.mainColors.magenta};
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.mainColors.magenta};
    color: ${({ theme }) => theme.mainColors.white};
    transition: 0.4s ease-out;
  }
  &:not(hover){
    transition: 0.3s ease-out;
  }

  &.animate {
    ${StarIcon} {
      animation: increase 0.75s ease-in forwards;
      @keyframes increase {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.4) rotate(45deg);
        }
        100% {
          transform: scale(1);
        }
      }
    }
  }
`;