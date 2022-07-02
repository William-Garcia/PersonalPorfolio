import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Hello world, I'm William Garcia and I am a third year student at UNC Chapel Hill studying computer science.
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/William-Garcia'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;