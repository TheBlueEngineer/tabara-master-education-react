import { FC } from 'react';
import * as SC from './breacrumbs.styles';

type BreadcrumbsType = {
  list: { link: string | null; text: string }[];
};

const Breadcrumbs: FC<BreadcrumbsType> = ({ list }) => {
  return (
    <SC.Container>
      {list.map((item, idx) =>
        item.link ? (
          <SC.BreadcrumbWrapper key={idx}>
            <SC.BreadcrumbLink to={item.link}>{item.text}</SC.BreadcrumbLink>
            <span>{'>>'}</span>
          </SC.BreadcrumbWrapper>
        ) : (
          <SC.BreadcrumbText key={idx}>{item.text}</SC.BreadcrumbText>
        )
      )}
    </SC.Container>
  );
};

export default Breadcrumbs;
