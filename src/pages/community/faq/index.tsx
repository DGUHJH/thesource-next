import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import FAQList from 'assets/json/faq.json';
import { BreadCrumbs } from 'components/BreadCrumbs';
import { CommunityMenuContainer } from 'components/Container/CommunityMenu';
import Head from 'next/head';
import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import * as Styled from 'styles/community/faq/styled';

const Main = () => {
  return (
    <Styled.Root>
      <Head>
        <title>디소스/FAQ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
      <BreadCrumbs content={['홈', '커뮤니티', 'FAQ']} type="small" />
      <Styled.BodyContainer>
        <Styled.LeftContainer>
          <CommunityMenuContainer />
        </Styled.LeftContainer>
        <Styled.RightContainer>
          <Styled.TitleTypo>FAQ</Styled.TitleTypo>
          <Styled.Bar />
          {FAQList.map((item, index: number) => (
            <Styled.FAQContainer key={`FAQ_container_${index}`}>
              <Styled.FAQTitleTypo>{item.title}</Styled.FAQTitleTypo>
              <Styled.FAQBodyContainer>
                {item.contents.map((value, index2: number) => (
                  <Accordion key={`FAQ_body_container_${index}_${index2}`}>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Styled.FAQBodyTitleTypo>
                        Q{index2 + 1}. {value.question}
                      </Styled.FAQBodyTitleTypo>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Styled.FAQBodyContentTypo>
                        <Styled.FAQBodyContentTypoPoint>
                          Q. {value.question}
                        </Styled.FAQBodyContentTypoPoint>
                        <br />
                        <Styled.FAQBodyContentTypoPoint>
                          A.
                        </Styled.FAQBodyContentTypoPoint>
                        &nbsp;
                        {value.answer}
                      </Styled.FAQBodyContentTypo>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Styled.FAQBodyContainer>
            </Styled.FAQContainer>
          ))}
        </Styled.RightContainer>
      </Styled.BodyContainer>
    </div>
  );
};

const Mobile = () => {
  return <div></div>;
};

export default Main;
