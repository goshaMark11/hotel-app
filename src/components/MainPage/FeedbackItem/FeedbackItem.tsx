import { FC } from 'react';
import styled from 'styled-components';

const MainView = styled.div`
  display: flex;
  gap: 3px;
`

const StarIcon = styled.img`
  display: flex;
  width: 17px;
  height: 17px;
`

type Props = {
  stars: 0 | 1 | 2 | 3 | 4 | 5
};

export const FeedbackItem: FC<Props> = ({ stars }) => {
  return (
    <MainView>
      {new Array(5).fill(0).map((_, i) => i < stars ? <StarIcon key={i} src='/icons/star-full.svg' alt='star' /> : <StarIcon key={i} src='/icons/star-empty.svg' alt='star' />)}
    </MainView>
  );
};