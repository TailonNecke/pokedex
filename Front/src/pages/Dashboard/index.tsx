import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';


import { Title, Repositories, Form } from './style';

interface Repository {
  sprites:{
  front_default: string;
  };
  name: string;
  types: Tipo[];
  };

  interface Tipo {
      type: {
        name: string;
    };
  }
const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepotories] = useState<Repository[]>([]);
  const [Tipo, setType] = useState<Tipo[]>([]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    const response = await api.get<Repository>(`${newRepo}`);
    const repository = response.data;

    setRepotories([...repositories, repository]);
    setType(repository.types);
    setNewRepo('');
  }

  return(

    <>
      <Title>Pokédex</Title>

      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite o nome do pokémon ou ID" />
          <circle></circle>

        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        {repositories.map(repository => (

          <a key={repository.name} href="teste">
          <img src={repository.sprites.front_default} />
            <div>
              <strong>Nome: {repository.name}</strong>

              <p><strong>Tipo: </strong> {repository.types.map(p => (
                <span>| {p.type.name } |</span>
              ))}</p>
            </div>
            <FiChevronRight size={20} />

          </a>
        ))}

      </Repositories>





    </>
  );
};

export default Dashboard;
