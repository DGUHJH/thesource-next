import { PopularContainer } from 'components/Container/Popular';
import { BrowserView, MobileView } from 'react-device-detect';
import * as Styled from 'styles/styled';

const Main = () => {
  return (
    <Styled.Root>
      <BrowserView>
        <Pc />
      </BrowserView>
      <MobileView>
        <Mobile />
      </MobileView>
    </Styled.Root>
  );
};

const Pc = () => {
  return (
    <div>
      <PopularContainer />
    </div>
  );
};

const Mobile = () => {
  return <div>2</div>;
};

export default Main;
