import React from 'react';
import { FiChevronDown, FiCornerRightDown, FiChevronRight } from 'react-icons/fi'
import { GiReceiveMoney } from 'react-icons/gi'

import './styles.css';

export default function Home() {
    return(
        <div className="home-container">

            <div className="header" id="home">
                <a className="hidden" unselectable="on" href="#projeto">
                    Conheça o Projeto
                    <FiChevronDown />
                </a>

                <img src={require('../../assets/logo.png')} alt="Logo Soluções Coletivas" />

                <a className="visible" href="#projeto">
                    Conheça o Projeto
                    <FiChevronDown />
                </a>
            </div>

            <div className="donate-card">
                <h1>
                    <GiReceiveMoney />
                    Parcial arrecadado até o momento
                </h1>

                <div className="progress-bar" ></div>

                <div className="money">
                    <h3>R$ 425,70</h3>

                    <h3>Meta: R$ 45.000,00</h3>
                </div>
                
                <h3 className="contribute">
                    Contribua agora mesmo através dos nossos links
                    <FiCornerRightDown/>
                </h3>

                <div className="contributions">
                    <div className="cards">                
                        <a className="img-link" href="https://app.picpay.com/user/solu.coletivas" target="_blank" rel="noopener noreferrer">
                            <img src={require('../../assets/picpay.png')} alt="QR Code"/>
                        </a>
                        
                        <a className="link" href="https://app.picpay.com/user/solu.coletivas" target="_blank" rel="noopener noreferrer">
                            <h5 className="text-link">
                                <FiChevronRight/>
                                PicPay
                            </h5>
                        </a>
                    </div>

                    <div className="cards">
                        <a className="img-link" href="https://abacashi.com/p/solucoes_coletivas" target="_blank" rel="noopener noreferrer">
                            <img src={require('../../assets/abacashi.png')} alt="QR Code"/>
                        </a>

                        <a className="link" href="https://abacashi.com/p/solucoes_coletivas" target="_blank" rel="noopener noreferrer">
                            <h5 className="text-link">
                                <FiChevronRight/>
                                Abacashi
                            </h5>
                        </a>
                    </div>
                </div>            
            </div>

            <div className="project">
                <h1 id="projeto">O Projeto</h1>

                <div className="description">
                    <h3>Nossa missão é fomentar o debate racial no meio universitário, interligando Associações Atléticas Acadêmicas com líderes de comunidades quilombolas e indígenas, com o intuito de criar conteúdos com esse tema e levar esse debate de forma acessível a sociedade, além de fazer arrecadações que serão convertidas em alimentos e insumos para essas comunidades que necessitam em Goiás.</h3>
                    <img src={require('../../assets/punhos.jpg')} alt="Família Indígena" />
                </div>
            </div>

            <div className="communities">
                <h1>Comunidades</h1>

                <div className="communities-cards">
                    <div className="community">
                        <h3>Quilombo Kalunga</h3>
                        <img src={require('../../assets/family.jpg')} alt="Família Indígena" />
                        <h4>A comunidade Kalunga Vão do Moleque e Vão das Almas se localiza no município de Cavalcante (GO) no nordeste goiano. Os quilombos foram erguidos como acampamento por homens e mulheres que foram escravizados. Detentores de uma cultura própria por meio de Romarias e Sussa mantidas até os dias atuais, são comunidades de baixo desenvolvimento econômico, que sofrem com a precariedade de falta de políticas públicas nas nossas localidades. São mais de 665 famílias precisando da sua solidariedade por meio de alimentos e produtos de higiene pessoal, nesse momento de pandemia. Os guardiões do cerrado contam com seu apoio!</h4>
                        <h5>- Valdinesia, graduanda em Geografia e Jeronilson, graduando em Ciências Sociais e Políticas, ambos na UFG.</h5>
                    </div>

                    <div className="community">
                        <h3>Aldeia Kaluani - Paraíso</h3>
                        <img src={require('../../assets/family.jpg')} alt="Família Indígena" />
                        <h4>A aldeia se localiza na região do Alto Xingu (MT). Composta por 85 indígenas do povo Kuikuro/Kalapalo, falantes da língua karib. Jovens, velhos e crianças estão isolados neste momento. A ameaça chegou na nossa região, estamos tomando todos os cuidados para que o vírus não espalhe, e por isso contamos com a sua colaboração para que nós possamos permanecer na aldeia... Aingo hegei!</h4>
                        <h5>- Kaianaku Kamaiura, mestranda em Direitos Humanos na UFG.</h5>
                    </div>

                    <div className="community">
                        <h3>Comunidade João Borges Vieira</h3>
                        <img src={require('../../assets/family.jpg')} alt="Família Indígena" />
                        <h4>A comunidade quilombola Vargem do Muquém fica localizada no município de Niquelândia (GO). São dezenas de famílias que atualmente estão desempregadas por causa da pandemia. Essas famílias trabalham com turismo cultural, artesanato, educação, feiras rotativas, eventos religiosos, entre outros. Devido ao isolamento social, estão impossibilitados de darem continuidade a suas atividades. Contamos com o apoio de vocês!</h4>
                        <h5>- Domingas.</h5>
                    </div>

                    <div className="community">
                        <h3>Comunidade Vó Rita</h3>
                        <img src={require('../../assets/family.jpg')} alt="Família Indígena" />
                        <h4>A comunidade quilombola Vó Rita está localizada em Trindade (GO). São cerca de 230 famílias que estão distribuídas em alguns bairros da cidade, são eles: Samarah, Bela Vista, Setor Sul e Vila Pai Eterno. A comunidade continua as lutas dos antepassados, pelo direito de acessar as políticias públcias.</h4>
                        <h5>- Marta Quintiliano, graduada e pós-graduanda em Relações Públicas na UFG.</h5>
                    </div>

                    <div className="community">
                        <h3>Movimento Mulheres do Xingu</h3>
                        <img src={require('../../assets/family.jpg')} alt="Família Indígena" />
                        <h4>O território nacional do Xingu fica localizado no norte do Mato Grosso, são 16 etnias que habitam esse território e com a população estimada em 8 mil pessoas. No passado, gripes e doenças como Sarampo, quase dizimaram os povos do Xingu. A atual pandemia, traz essa terrível lembrança para o Xinguano. Mesmo estando em isolamento nas aldeias, a doença infelizmente chegou em umas das aldeis. E por isso, mais do que nunca, precisamos de toda ajuda possível, para que consigamos nos proteger. Conto com apoio de vocês!</h4>
                        <h5>- Alawero Meynako do povo Mehinako.</h5>
                    </div>

                    <div className="community">
                        <h3>Aldeia Sol - Povo Krahô</h3>
                        <img src={require('../../assets/family.jpg')} alt="Família Indígena" />
                        <h4>O Povo Krahô conta com 38 aldeias e cerca de 3 mil indígenas. A maioria das aldeias não tem transporte para a locomoção até a cidade, não possui energia elétrica, não temos acesso à internet. Temos muitas dificuldades nesse momento, estamos precisando de doações para comprarmos o básico para o nosso povo não ir muito a cidade, por causa do vírus. Qualquer ajuda será bem-vinda para nossa comunidade!</h4>
                        <h5>- Letícia Jôkàhkwyj, graduanda em Antropologia Social na UFG.</h5>
                    </div>

                    <div className="community">
                        <h3>Quilombo Jardim Cascata</h3>
                        <img src={require('../../assets/family.jpg')} alt="Família Indígena" />
                        <h4>Situado no município de Aparecida de Goiânia, na Serra das Areias. Somos uma comunidade carente, cerca de 350 famílias, entre crianças, jovens e adultos. O quilombo é registrado na região desde 1989. Muitos moradores perderam o emprego por causa da pandemia. Muitos não podem sair de casa, pois há idosos. Estamos com muita dificuldade, a ajuda de vocês vai dar uma força grande para nós. Ficamos muito felizes!</h4>
                        <h5>- Dona Lúcia, quilombola.</h5>
                    </div>

                    <div className="community">
                        <h3>Associação Quilombola Vargem Grande do Muquem</h3>
                        <img src={require('../../assets/family.jpg')} alt="Família Indígena" />
                        <h4>A Associação está localizada no povoado do Muquém, no norte do estado de Goiás. Apesar de ser uma das mais antigas com cerca de 270 anos, onde servia como refúgio ao povo negro que exercia trabalho nos garimpos de ouro, a comunidade só foi reconhecida como quilombola há aproximadamente 2 anos e possui cerca de 250 famílias cadastradas. A maior preocupação da comunidade é que essas famílias tiram seu maior sustento da Romaria do Muquém, evento religioso que atrai diversas pessoas de todo lugar, gerando renda. E devido a pandemia, não será possível ocorrer. Muitas famílias serão prejudicadas já que dependem dessa renda anual.</h4>
                        <h5>- Cleia.</h5>
                    </div>

                    <div className="community">
                        <h3>Comunidade Quilombola de Pombal</h3>
                        <img src={require('../../assets/family.jpg')} alt="Família Indígena" />
                        <h4>A comunidade Quilombola de Pombal, está localizada no estado de Goiás a 270 km de Goiândia e é formada de agricultores familiares. A economia gira em torno da fabricação de derivados de mandioca, cana e leite, além de hortifrute. Esses produtos são vendidos nas feiras livres e em mercados dos municípios circunvizinhos, só que com o surgimento do covid-19, as feiras livres não estão funcionando e os produtos que geravam renda para as 100 famílias quilombolas, não podem ser vendidos e assim as dificuldades estão cada dia aumentando.</h4>
                        <h5>- Nailde, quilombola.</h5>
                    </div>
                </div>
            </div>

            <div className="distribution">
                <h1>Como faremos a distribuição?</h1>

                <div className="description">
                    <h3>As cestas serão compradas pela nossa equipe e entregues para as lideranças de cada comunidade que já possuem suas formas de organização para distribuição com o cadastro das famílias e estarão encaminhando os relatórios de entrega para nós.</h3>
                    <img src={require('../../assets/distribution.jpg')} alt="Família Indígena" />
                </div>
            </div>

            <div className="accountability">
                <h1>Como será a prestação de contas?</h1>

                <div className="description">
                    <h3>Nossa principal forma de comunicação é pelo instagram @solucoes.coletivas (clique na imagem ao lado para acessá-lo), lá faremos a prestação de contas com todo o dinheiro arrecadado na campanha, além de estarmos trazendo mais detalhes sobre cada comunidade por meio de vídeos, lives e outras publicações.</h3>
                    
                    <a href="https://www.instagram.com/solucoes.coletivas/?hl=pt-br" target="_blank" rel="noopener noreferrer">
                        <img src={require('../../assets/insta.png')} alt="Família Indígena" />
                    </a>
                </div>
            </div>

            <div className="donate-card">
                <h1>
                    <GiReceiveMoney />
                    Parcial arrecadado até o momento
                </h1>

                <div className="progress-bar" ></div>

                <div className="money">
                    <h3>R$ 425,70</h3>

                    <h3>Meta: R$ 45.000,00</h3>
                </div>
                
                <h3 className="contribute">
                    Contribua agora mesmo através dos nossos links
                    <FiCornerRightDown/>
                </h3>

                <div className="contributions">
                    <div className="cards">                
                        <a className="img-link" href="https://app.picpay.com/user/solu.coletivas" target="_blank" rel="noopener noreferrer">
                            <img src={require('../../assets/picpay.png')} alt="QR Code"/>
                        </a>
                        
                        <a className="link" href="https://app.picpay.com/user/solu.coletivas" target="_blank" rel="noopener noreferrer">
                            <h5 className="text-link">
                                <FiChevronRight/>
                                PicPay
                            </h5>
                        </a>
                    </div>

                    <div className="cards">
                        <a className="img-link" href="https://abacashi.com/p/solucoes_coletivas" target="_blank" rel="noopener noreferrer">
                            <img src={require('../../assets/abacashi.png')} alt="QR Code"/>
                        </a>

                        <a className="link" href="https://abacashi.com/p/solucoes_coletivas" target="_blank" rel="noopener noreferrer">
                            <h5 className="text-link">
                                <FiChevronRight/>
                                Abacashi
                            </h5>
                        </a>
                    </div>
                </div>            
            </div>

            <div className="creators">
                <h1>Idealizadores</h1>

                <div className="description">
                    <a href="https://www.instagram.com/solucoes.coletivas/?hl=pt-br" target="_blank" rel="noopener noreferrer">
                        <img src={require('../../assets/mafiosa.png')} alt="Família Indígena" />
                    </a>

                    <a href="https://www.instagram.com/solucoes.coletivas/?hl=pt-br" target="_blank" rel="noopener noreferrer">
                        <img src={require('../../assets/enigma.png')} alt="Família Indígena" />
                    </a>

                    <a href="https://www.instagram.com/solucoes.coletivas/?hl=pt-br" target="_blank" rel="noopener noreferrer">
                        <img src={require('../../assets/magnata.png')} alt="Família Indígena" />
                    </a>
                </div>
            </div>
        </div>
    );
}