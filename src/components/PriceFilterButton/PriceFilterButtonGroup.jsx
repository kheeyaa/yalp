import styled from 'styled-components';
import { PriceFilterButton } from './PriceFilterButton';
import { useState } from 'react';

const ButtonGroup = styled.ul`
  & > button {
    border: 1px solid black;
    border-right: none;
  }
  & > button:first-child {
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
  }
  & > button:last-child {
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    border-right: 1px solid black;
  }
  & > button:hover {
    background-color: #c7c5c5;
  }
`;

export function PriceFilterButtonGroup() {
  const [$, set$] = useState(false);
  const [$$, set$$] = useState(false);
  const [$$$, set$$$] = useState(false);
  const [$$$$, set$$$$] = useState(false);
  const buttonArr = new Array(4).fill([$, $$, $$$, $$$$]);

  const toggle$ = () => set$(!$);
  const toggle$$ = () => set$$(!$$);
  const toggle$$$ = () => set$$$(!$$$);
  const toggle$$$$ = () => set$$$$(!$$$$);

  const toggleState = () => {};
  console.log(buttonArr, toggle$);
  return (
    <ButtonGroup>
      <PriceFilterButton onClick={toggle$} isSelect={$} aria-checked={$}>
        {/* {'$'.repeat(i + 1)} */} $
      </PriceFilterButton>
      <PriceFilterButton onClick={toggle$$} isSelect={$$} aria-checked={$$}>
        $$
      </PriceFilterButton>
      <PriceFilterButton onClick={toggle$$$} isSelect={$$$} aria-checked={$$$}>
        $$$
      </PriceFilterButton>
      <PriceFilterButton onClick={toggle$$$$} isSelect={$$$$} aria-checked={$$$$}>
        $$$$
      </PriceFilterButton>
    </ButtonGroup>
  );
}
