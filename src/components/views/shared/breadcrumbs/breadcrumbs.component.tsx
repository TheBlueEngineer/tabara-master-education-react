import { FC } from 'react';
import * as SC from './breacrumbs.styles';

export type BreadcrumbItemType = {
  link: string | null;
  text: string;
};

type BreadcrumbsProps = {
  list: BreadcrumbItemType[];
};

const Breadcrumbs: FC<BreadcrumbsProps> = ({ list }) => {
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
