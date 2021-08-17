import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';


import { Title, Repositories, Form, Error } from './style';

interface Repository {
  sprites:{
  front_default: string;
  };
  name: string;
  types: Tipo[];
  id: string;
  };

  interface Tipo {
      type: {
        name: string;
    };
  }
const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [Tipo, setType] = useState<Tipo[]>([]);
  const [repositories, setRepotories] = useState<Repository[]>(() => {
    const storageRepository = localStorage.getItem(
      '@GithubExplorer:repositories'
    );
    if(storageRepository){
      return JSON.parse(storageRepository)
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories)
    )
  }, [repositories]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if(!newRepo){
      setInputError("Digite um usuário/Repositório para pesquisar.");
      return;
    }

    try{
      const response = await api.get<Repository>(`${newRepo}`);
      const repository = response.data;

      setRepotories([...repositories, repository]);
      setType(repository.types);
      setNewRepo('');
      setInputError('');

    }catch(err) {
      setInputError("Repositorio não encontrado ou inexistente.");
    }

  }

  return(

    <>
      <Title>Pokédex</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite o nome do pokémon ou ID" />
          <circle></circle>

        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map(repository => (

          <a href={`https://www.pokemon.com/br/pokedex/${repository.id}`}>
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
