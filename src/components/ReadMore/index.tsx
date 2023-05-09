import { useState } from 'react';
import { ButtonReadMore, Description } from '../../styles.d';

interface ReadMoreProps {
  text: string;
  maxLength: number;
}

export const ReadMore =({ text, maxLength }: ReadMoreProps) => {
  const [showText, setShowText] = useState(false);

  const toggleText = () => {
    setShowText(!showText);
  };

  return (
    <Description>
      {showText ? text : text.slice(0, maxLength) + ' ...'}
      <ButtonReadMore onClick={toggleText}>{showText ? 'Read Less' : 'Read More'}</ButtonReadMore>
    </Description>
  );
}




