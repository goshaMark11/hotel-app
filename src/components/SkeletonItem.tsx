import { FC } from 'react';
import ContentLoader from 'react-content-loader';

type Props = {
  width: number
  height: number
};

export const SkeletonItem: FC<Props> = ({ width, height }) => {
  return (
    <ContentLoader
      speed={2}
      width={width}
      height={height}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="0" ry="0" width={width} height={height} />
    </ContentLoader>
  );
};