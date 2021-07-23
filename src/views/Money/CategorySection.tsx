import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  font-size: 24px;
  border-bottom-right-radius:10px;
  border-bottom-left-radius:10px;
  background: #4e3f61;

  > ul {
    display: flex;

    > li {
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      color: white;
      

      &.selected::after {
        content: '';
        display: block;
        height: 5px;
        background: white;
        position: absolute;
        bottom: 5px;
        width: 50%;
        border-radius: 5px;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
`;
type Props = {
    value: '-' | '+';
    onChange: (value: '-' | '+') => void
}
const CategorySection: React.FC<Props> = (props) => {
    const categoryMap = {'-': '支出', '+': '收入'};
    const [categoryList] = useState<('+' | '-')[]>(['-', '+']);
    const category = props.value;
    return (
        <Wrapper>
            <ul>
                {categoryList.map(c =>
                    <li className={category === c ? 'selected' : ''}
                        onClick={() => {props.onChange(c);}}
                        key={c}
                    >{categoryMap[c]}
                    </li>
                )}
            </ul>
        </Wrapper>
    );
};

export {CategorySection};