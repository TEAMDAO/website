import styled from 'styled-components';
import HexagonTag from 'components/HexagonTag';
import { H3 } from 'components/Typo';
import imgNum1 from 'public/assets/number1-stroke.png';
import imgNum2 from 'public/assets/number2-stroke.png';
import imgNum3 from 'public/assets/number3-stroke.png';
import BlurredCircle from 'components/BlurredCircle';
import Image from 'components/Image';

const Container = styled.div`
  position: relative;
  max-width: 80%;
  margin: auto;
  min-height: 593px;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 96px;
  min-height: 435px;
  align-items: center;
  transform: translateX(144px);
`;

const NumberContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
`;

const RecruimentProcessSection = () => (
  <Container>
    <H3 style={{ width: 562 }}>Automated and scalable recruitment process</H3>
    <div style={{ position: 'relative', marginTop: 36 }}>
      <NumberContainer>
        <div>
          <Image src={imgNum1} alt="number-1" />
        </div>
        <div style={{ marginLeft: 173 }}>
          <Image src={imgNum2} alt="number-2" />
        </div>
        <div style={{ marginLeft: 100 }}>
          <Image src={imgNum3} alt="number-3" />
        </div>
      </NumberContainer>
      <TagContainer>
        <HexagonTag>Iniciate / Recruit</HexagonTag>
        <HexagonTag>Gamified Training</HexagonTag>
        <HexagonTag>Scholar</HexagonTag>
      </TagContainer>
    </div>
    <BlurredCircle left="94vw" top={100} />
  </Container>
);

export default RecruimentProcessSection;
