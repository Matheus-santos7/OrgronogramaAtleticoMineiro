import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
        id: uuidv4(),
        nome: 'Goleiros',
        cor: '#3b3b3b' // Preto
    },
    {
        id: uuidv4(),
        nome: 'Zagueiros',
        cor: '#3b3b3b' // Preto muito escuro
    },
    {
        id: uuidv4(),
        nome: 'Laterais',
        cor: '#3b3b3b' // Preto escuro
    },
    {
        id: uuidv4(),
        nome: 'Meio-campistas',
        cor: '#3b3b3b' // Preto médio
    },
    {
        id: uuidv4(),
        nome: 'Atacantes',
        cor: '#3b3b3b' // Preto claro
    },
]);


const inicial = [
  {
      id: uuidv4(),
      favorito: false,
      nome: 'Gabriel Delfim',
      cargo: 'Goleiro',
      imagem: 'https://atletico.com.br/wp-content/uploads/2023/07/Gabriel-Delfim.png',
      time: times[0].nome
  },
  {
      id: uuidv4(),
      favorito: false,
      nome: 'Everson',
      cargo: 'Goleiro',
      imagem: 'https://atletico.com.br/wp-content/uploads/2023/07/Eversn.png',
      time: times[0].nome
  },
  {
      id: uuidv4(),
      favorito: false,
      nome: 'Matheus Mendes',
      cargo: 'Goleiro',
      imagem: 'https://atletico.com.br/wp-content/uploads/2023/07/Matheus-Mendes.png',
      time: times[0].nome
  },
  {
      id: uuidv4(),
      favorito: false,
      nome: 'Gabriel Átila',
      cargo: 'Goleiro',
      imagem: 'https://atletico.com.br/wp-content/uploads/2023/07/Gabriel-Atila.png',
      time: times[0].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'Lyanco',
    cargo: 'Zagueiro',
    imagem: 'https://atletico.com.br/wp-content/uploads/2024/07/Lyanco_site.png',
    time: times[1].nome
},
{
    id: uuidv4(),
    favorito: false,
    nome: 'Bruno Fuchs',
    cargo: 'Zagueiro',
    imagem: 'https://atletico.com.br/wp-content/uploads/2023/07/Bruno-Fuchs.png',
    time: times[1].nome
},
{
    id: uuidv4(),
    favorito: false,
    nome: 'Lemos',
    cargo: 'Zagueiro',
    imagem: 'https://atletico.com.br/wp-content/uploads/2023/07/Lemos-3.png',
    time: times[1].nome
},
{
    id: uuidv4(),
    favorito: false,
    nome: 'Alonso',
    cargo: 'Zagueiro',
    imagem: 'https://atletico.com.br/wp-content/uploads/2024/07/Alonso_site.png',
    time: times[1].nome
},
{
    id: uuidv4(),
    favorito: false,
    nome: 'Igor Rabello',
    cargo: 'Zagueiro',
    imagem: 'https://atletico.com.br/wp-content/uploads/2023/07/Igor-Rabello-1.png',
    time: times[1].nome
},
{
    id: uuidv4(),
    favorito: false,
    nome: 'Rômulo',
    cargo: 'Zagueiro',
    imagem: 'https://atletico.com.br/wp-content/uploads/2023/07/Romulo.png',
    time: times[1].nome
},
  {
      id: uuidv4(),
      favorito: false,
      nome: 'Guilherme Arana',
      cargo: 'Lateral',
      imagem: 'https://atletico.com.br/wp-content/uploads/2023/07/Arana-2.png',
      time: times[2].nome
  },
  {
      id: uuidv4(),
      favorito: false,
      nome: 'Mariano',
      cargo: 'Lateral',
      imagem: 'https://atletico.com.br/wp-content/uploads/2023/07/Mariano-2.png',
      time: times[2].nome
  },
  {
      id: uuidv4(),
      favorito: false,
      nome: 'Saravia',
      cargo: 'Lateral',
      imagem: 'https://atletico.com.br/wp-content/uploads/2023/07/Saravia-2.png',
      time: times[2].nome
  },
  {
      id: uuidv4(),
      favorito: false,
      nome: 'Rubens',
      cargo: 'Lateral',
      imagem: 'https://atletico.com.br/wp-content/uploads/2023/07/Rubens-1.png',
      time: times[2].nome
  },
  {
    id: uuidv4(),
    favorito: false,
    nome: 'Otávio',
    cargo: 'Meio-campista',
    imagem: 'https://atletico.com.br/wp-content/uploads/2023/07/Otavio-2.png',
    time: times[3].nome
},
{
    id: uuidv4(),
    favorito: false,
    nome: 'Gustavo Scarpa',
    cargo: 'Meio-campista',
    imagem: 'https://atletico.com.br/wp-content/uploads/2023/07/Scarpa.png',
    time: times[3].nome
},
{
    id: uuidv4(),
    favorito: false,
    nome: 'Zaracho',
    cargo: 'Meio-campista',
    imagem: 'https://atletico.com.br/wp-content/uploads/2023/07/Zaracho-2.png',
    time: times[3].nome
},
{
    id: uuidv4(),
    favorito: false,
    nome: 'Igor Gomes',
    cargo: 'Meio-campista',
    imagem: 'https://atletico.com.br/wp-content/uploads/2023/07/Igor-Gomes-2.png',
    time: times[3].nome
},
{
    id: uuidv4(),
    favorito: false,
    nome: 'Fausto Vera',
    cargo: 'Meio-campista',
    imagem: 'https://atletico.com.br/wp-content/uploads/2024/07/Fausto-Vera-site.png',
    time: times[3].nome
},
{
    id: uuidv4(),
    favorito: false,
    nome: 'Bernard',
    cargo: 'Meio-campista',
    imagem: 'https://atletico.com.br/wp-content/uploads/2024/07/Bernard-1.png',
    time: times[3].nome
},
{
    id: uuidv4(),
    favorito: false,
    nome: 'Battaglia',
    cargo: 'Meio-campista',
    imagem: 'https://atletico.com.br/wp-content/uploads/2023/07/Battaglia-2.png',
    time: times[3].nome
},
{
    id: uuidv4(),
    favorito: false,
    nome: 'Alan Franco',
    cargo: 'Meio-campista',
    imagem: 'https://atletico.com.br/wp-content/uploads/2023/07/Franco-2.png',
    time: times[3].nome
},
{
    id: uuidv4(),
    favorito: false,
    nome: 'Paulo Vitor',
    cargo: 'Meio-campista',
    imagem: 'https://atletico.com.br/wp-content/uploads/2023/07/Paulo-Vitor-2.png',
    time: times[3].nome
},
{
    id: uuidv4(),
    favorito: false,
    nome: 'Robert',
    cargo: 'Meio-campista',
    imagem: 'https://atletico.com.br/wp-content/uploads/2024/04/Robert_site.png',
    time: times[3].nome
},
{
  id: uuidv4(),
  favorito: false,
  nome: 'Hulk',
  cargo: 'Atacante',
  imagem: 'https://atletico.com.br/wp-content/uploads/2023/07/Hulk-2.png',
  time: times[4].nome
},
{
  id: uuidv4(),
  favorito: false,
  nome: 'Deyverson',
  cargo: 'Atacante',
  imagem: 'https://atletico.com.br/wp-content/uploads/2024/08/Deyverson_site.png',
  time: times[4].nome
},
{
  id: uuidv4(),
  favorito: false,
  nome: 'Paulinho',
  cargo: 'Atacante',
  imagem: 'https://atletico.com.br/wp-content/uploads/2023/07/Paulinho-2.png',
  time: times[4].nome
},
{
  id: uuidv4(),
  favorito: false,
  nome: 'Vargas',
  cargo: 'Atacante',
  imagem: 'https://atletico.com.br/wp-content/uploads/2023/07/Vargas-2.png',
  time: times[4].nome
},
{
  id: uuidv4(),
  favorito: false,
  nome: 'Alan Kardec',
  cargo: 'Atacante',
  imagem: 'https://atletico.com.br/wp-content/uploads/2023/07/Alan-Kardec.png',
  time: times[4].nome
},
{
  id: uuidv4(),
  favorito: false,
  nome: 'B. Palacios',
  cargo: 'Atacante',
  imagem: 'https://atletico.com.br/wp-content/uploads/2023/07/B.-Palacios.png',
  time: times[4].nome
},
{
  id: uuidv4(),
  favorito: false,
  nome: 'Cadu',
  cargo: 'Atacante',
  imagem: 'https://atletico.com.br/wp-content/uploads/2023/07/Cadu-3.png',
  time: times[4].nome
},
{
  id: uuidv4(),
  favorito: false,
  nome: 'Alisson',
  cargo: 'Atacante',
  imagem: 'https://atletico.com.br/wp-content/uploads/2023/07/Alisson-2.png',
  time: times[4].nome
}
];


  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador(id){
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
    
  }

  function mudarCorTime(cor, id){
    setTimes(times.map(time => {
      if(time.id === id){
        time.cor = cor
      }
      return time
    }))
  }

  function cadatrarTime(novoTime){
    setTimes([...times, {...novoTime, id: uuidv4()}])

  }

  function resolverFavorito(id){
    setColaboradores(colaboradores.map(colaborador => {
      if (colaborador.id === id) colaborador.favorito = !colaborador.favorito
        return colaborador
      }))
  }

  return (
    <div>
      <Banner />
      <Formulario
        cadrastarTime={cadatrarTime}  
        times={times.map(time => time.nome)} 
        aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} 
      />
      <section className="times">
        <h1>Time completo do Atletico Mineiro 2024</h1>
        {times.map((time, indice) =>  
          <Time  
            aoFavoritar={resolverFavorito}
            mudarCor={mudarCorTime} 
            key={indice} 
            time={time} 
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} 
            aoDeletar={deletarColaborador}/>)}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
