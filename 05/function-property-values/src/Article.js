// @flow
import React from 'react';

type Props = {
  title: string,
  index: number,
  selected: boolean,
  onClick: (index: number) => Function
};

const Article = ({
  title,
  index,
  selected,
  onClick
}: Props) => (
  <a href="#"
    onClick={onClick(index)}
    style={{ fontWeight: selected ? 'bold' : 'normal' }}
  >
    {title}
  </a>
);

export default Article;
