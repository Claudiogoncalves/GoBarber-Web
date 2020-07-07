import React from 'react';

import { FiPower } from 'react-icons/fi';
import { Container, Header, HeaderContent, Profile } from './styles';
import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => (
  <Container>
    <Header>
      <HeaderContent>
        <img src={logoImg} alt="GoBarber" />

        <Profile>
          <img
            src="https://avatars1.githubusercontent.com/u/16878067?s=400&u=56db29ae1bcea0ddb21cbe9da7da4da64ae8b3ff&v=4"
            alt="Claudio Gonçalves"
          />

          <div>
            <span>Bem-vindo</span>
            <strong>Claudio Gonçalves</strong>
          </div>
        </Profile>

        <button type="button">
          <FiPower />
        </button>
      </HeaderContent>
    </Header>
  </Container>
);

export default Dashboard;
