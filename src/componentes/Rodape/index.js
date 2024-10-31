import { FaGithubSquare, FaInstagram } from "react-icons/fa";

import './rodape.css'

const Rodape = () => {
    return (<footer className="footer">
       <section>
       <ul>
            <li>
                <a href="https://github.com/Matheus-santos7" target="_blank">
                    <FaGithubSquare size={50} color="#ffff" />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/theus_m7" target="_blank">
                    <FaInstagram size={50} color="#ffff" />
                </a>
            </li>
        </ul>
       </section>
       <section>
       <img src="/imagens/banner.jpg" alt="" />
       </section>
       <section>
        <p>
            Desenvolvido por Matheus Santos.
        </p>
       </section>
    </footer>)
}

export default Rodape