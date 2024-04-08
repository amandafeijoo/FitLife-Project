import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  border-radius: 10px;
`;

const NavigationLink = styled.p`
    color: #d8f8e0;
  cursor: pointer;
    font-size: 3em;
    &:hover {
    color: #6690f1;
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }

    @media (max-width: 576px) {
        grid-template-columns: repeat(1, 1fr);
    }

    @media (max-width: 320px) {
        grid-template-columns: repeat(1, 1fr);

    }
`;

function NavigationLinks({ classes, currentClassIndex }) {
  const navigate = useNavigate();
  const prevClass = classes[(currentClassIndex - 1 + classes.length) % classes.length];
  const nextClass = classes[(currentClassIndex + 1) % classes.length];

  return (
    <NavigationContainer>
      <NavigationLink onClick={() => navigate(`/${prevClass}`)}>
        ← {prevClass}
      </NavigationLink>
      <NavigationLink onClick={() => navigate(`/${nextClass}`)}>
        {nextClass} →
      </NavigationLink>
    </NavigationContainer>
  );
}

export default NavigationLinks;