import React from 'react';

import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="https://github.com/AlexandreZelante">
          <img
            src="https://avatars1.githubusercontent.com/u/40640392?s=460&u=ff5a56d5c9207f8d22080814dcd074442d9f70e4&v=4"
            alt=""
          />
          <div>
            <strong>BeTheHero</strong>
            <p>Easy peasy highly scalable ReactJS</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="https://github.com/AlexandreZelante">
          <img
            src="https://avatars1.githubusercontent.com/u/40640392?s=460&u=ff5a56d5c9207f8d22080814dcd074442d9f70e4&v=4"
            alt=""
          />
          <div>
            <strong>BeTheHero</strong>
            <p>Easy peasy highly scalable ReactJS</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="https://github.com/AlexandreZelante">
          <img
            src="https://avatars1.githubusercontent.com/u/40640392?s=460&u=ff5a56d5c9207f8d22080814dcd074442d9f70e4&v=4"
            alt=""
          />
          <div>
            <strong>BeTheHero</strong>
            <p>Easy peasy highly scalable ReactJS</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
