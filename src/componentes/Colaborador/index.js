import { AiFillHeart } from 'react-icons/ai';
import './colaborador.css'
import { IoMdCloseCircle, IoIosHeartEmpty } from "react-icons/io";

/**
 * Colaborador component renders a card for a collaborator with options to delete and favorite.
 *
 * @param {Object} props - The properties object.
 * @param {Object} props.colaborador - The collaborator object.
 * @param {string} props.colaborador.id - The unique identifier for the collaborator.
 * @param {string} props.colaborador.imagem - The URL of the collaborator's image.
 * @param {string} props.colaborador.nome - The name of the collaborator.
 * @param {string} props.colaborador.cargo - The position or role of the collaborator.
 * @param {boolean} props.colaborador.favorito - Indicates if the collaborator is favorited.
 * @param {string} props.corDeFundo - The background color for the header section.
 * @param {Function} props.aoDeletar - The function to call when the delete button is clicked.
 * @param {Function} props.aoFavoritar - The function to call when the favorite button is clicked.
 *
 * @returns {JSX.Element} The rendered collaborator card component.
 */
const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
    
    function favoritar() {
        aoFavoritar(colaborador.id)
    }
    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }

    return (<div className="colaborador">
        <IoMdCloseCircle 
            size={30} 
            className='deletar' 
            onClick={() => aoDeletar(colaborador.id)}
        />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className='favoritar'>
                {colaborador.favorito 
                ? <AiFillHeart {...propsFavorito} color='#ff0000'/> 
                : <IoIosHeartEmpty {...propsFavorito}/>}
            </div>
        </div>
    </div>)
}   

export default Colaborador