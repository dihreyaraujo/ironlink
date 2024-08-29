import React from 'react';
import '../style/homesection.css';
import ImgHome from '../imagens/homeSection.png'
import '../style/header.css';
import Logo from '../imagens/logoFelipe.png';
import Insta from '../imagens/instagram.png';
import Whats from '../imagens/whatsapp.png';
import Call from '../imagens/call.png';
import Bronze from '../imagens/bronze.png';
import Prata from '../imagens/prata.png';
import Ouro from '../imagens/ouro.png';

//comment

class SectionHome extends React.Component {

  state = {
    page: 'Home'
  }

  selectPage = ({ target }) => {
    this.setState({ page: target.innerText })
  }

  header = () => {
    return (
      <div className="main-header fadeIn">
        <div className="imgLogo">
          <img className="imgHeader" src={Logo} onClick={ () => { this.setState({ page: 'Home' }) } }/>
        </div>
        <div className="navbar">
          <p onClick={ (e) => this.selectPage(e) }>Sobre</p>
          <p onClick={ (e) => this.selectPage(e) }>Cursos</p>
          <p onClick={ (e) => this.selectPage(e) }>Contato</p>
          <p onClick={ (e) => this.selectPage(e) }>Promoções</p>
        </div>
      </div>
    )
  }

  sectionHome = () => {
    return (
      <div className='container-section-home fadeIn'>
        <div className='left-section'>
          <div>
            <p className='titulo-section'>EXPLORAR</p>
            <p className='titulo-section'>INOVAR</p>
          </div>
          <button className='buttonHome'>INSCREVA-SE</button>
        </div>
        <div>
          <img className='imgHome' src={ ImgHome }/>
        </div>
      </div>
    )
  }

  sectionSobre = () => {
    return (
      <div className='container-sobre fadeIn'>
        <h1 className='habout'>Resumo</h1>
        <p className='pabout'>
        <strong>IronLink Soluções e Treinamentos</strong> é uma empresa especializada em oferecer soluções e treinamentos voltados para o desenvolvimento profissional e a melhoria de processos na área da soldagem. Com uma abordagem focada em inovação e eficiência, a IronLink proporciona cursos e capacitações em áreas especializadas de nivel básico ao avançado sobre os métodos de soldagem, novas tecnologias, recursos e informações para evolução e crescimento profissional, além de fornecer treinamentos e consultorias para otimização de processos voltados para garantir a segurança e saúde do colaborador diante a atividade. Seu objetivo é capacitar indivíduos para enfrentar desafios do mercado com maior competência e agilidade.

        </p>
      </div>
    )
  }

  sectionCursos = () => {
    return (
      <div className='container-geral-curso fadeIn'>
        <h1 className='cursoh'>Cursos</h1>
        <div className='container-cursos'>
          <div className='container-curso'>
            <h2 className='text-white cursoh h2p'>Eletrodo Revestido</h2>
            <p className='text-white h2p'>O eletrodo revestido é um tipo de eletrodo amplamente utilizado em processos de soldagem elétrica, especialmente na soldagem de arco elétrico com eletrodo revestido (SMAW, na sigla em inglês). Consiste em uma haste metálica revestida por um material que, ao ser aquecido durante a soldagem, libera gases e cria uma camada protetora sobre o arco e o metal de solda. Este revestimento serve para estabilizar o arco, proteger a solda contra contaminação atmosférica e melhorar a qualidade da soldagem. O eletrodo revestido é valorizado pela sua versatilidade, facilidade de uso e capacidade de realizar soldagens em diferentes posições e tipos de metais.</p>
            <div className='bottom-curso'>
              <div className='module'>
                <h3 className='text-white cursoh'>Módulos</h3>
                <ul className='text-white'>
                  <li>Início</li>
                  <li>Metrologia</li>
                  <li>Teóricas/Práticas</li>
                  <li>Desenho Técnico</li>
                  <li>Conclusão</li>
                </ul>
              </div>
              <div>
                <h3 className='text-white cursoh'>Preço</h3>
                <p className='text-white'>R$200,00</p>
              </div>
            </div>
          </div>
          <div className='container-curso'>
            <h2 className='text-white cursoh h2p'>TIG</h2>
            <p className='text-white h2p'>O processo de soldagem TIG, ou Tungsten Inert Gas (também conhecido como GTAW - Gas Tungsten Arc Welding), é uma técnica de soldagem que utiliza um eletrodo de tungstênio não consumível para criar um arco elétrico entre o eletrodo e o material a ser soldado. Durante o processo, um gás inerte, como argônio ou hélio, é usado para proteger a área de soldagem da contaminação atmosférica. O TIG é conhecido por sua alta qualidade de soldagem e precisão, sendo ideal para trabalhar com metais finos e materiais que requerem um acabamento limpo e detalhado. É amplamente utilizado em indústrias que exigem soldas de alta integridade, como na aeronáutica, automotiva e de fabricação de equipamentos.</p>
            <div className='bottom-curso'>
              <div className='module'>
                <h3 className='text-white cursoh'>Módulos</h3>
                <ul className='text-white'>
                  <li>Início</li>
                  <li>Metrologia</li>
                  <li>Teóricas/Práticas</li>
                  <li>Desenho Técnico</li>
                  <li>Conclusão</li>
                </ul>
              </div>
              <div>
                <h3 className='text-white cursoh'>Preço</h3>
                <p className='text-white'>R$200,00</p>
              </div>
            </div>
          </div>
          <div className='container-curso'>
            <h2 className='text-white cursoh h2p'>MIG/MAG</h2>
            <p className='text-white h2p'>O processo de soldagem MIG/MAG, ou Metal Inert Gas/Metal Active Gas (também conhecido como GMAW - Gas Metal Arc Welding), é uma técnica popular de soldagem por arco elétrico que utiliza um fio de eletrodo consumível e um gás de proteção para criar a solda. Na soldagem MIG, é usado um gás inerte, como argônio ou uma mistura de argônio e dióxido de carbono, para proteger a área de soldagem. Já na soldagem MAG, utiliza-se um gás ativo, como o dióxido de carbono puro ou uma mistura de CO₂ e argônio. O processo é valorizado por sua alta taxa de deposição de metal e velocidade, permitindo soldagens contínuas e eficientes em uma variedade de materiais e posições.</p>
            <div className='bottom-curso'>
              <div className='module'>
                <h3 className='text-white cursoh'>Módulos</h3>
                <ul className='text-white'>
                  <li>Início</li>
                  <li>Metrologia</li>
                  <li>Teóricas/Práticas</li>
                  <li>Desenho Técnico</li>
                  <li>Conclusão</li>
                </ul>
              </div>
              <div>
                <h3 className='text-white cursoh'>Preço</h3>
                <p className='text-white'>R$200,00</p>
              </div>
            </div>
          </div>
          <div className='container-curso'>
            <h2 className='text-white cursoh h2p'>Arame Tubular</h2>
            <p className='text-white h2p'>O arame tubular é um tipo de eletrodo usado na soldagem que consiste em um tubo metálico preenchido com um fluxo de solda. Ao contrário dos eletrodos sólidos, que são feitos de um único metal, o arame tubular tem um revestimento interno que, ao ser aquecido durante a soldagem, libera fluxos e gases que ajudam a proteger a área de soldagem da contaminação atmosférica. Esse processo, conhecido como soldagem por arco com arame tubular, é amplamente utilizado para aplicações que requerem alta produtividade e resistência. O arame tubular é particularmente eficiente em soldagens de grandes estruturas e em condições de trabalho difíceis, oferecendo boas propriedades de penetração e acabamento.</p>
            <div className='bottom-curso'>
              <div className='module'>
                <h3 className='text-white cursoh'>Módulos</h3>
                <ul className='text-white'>
                  <li>Início</li>
                  <li>Metrologia</li>
                  <li>Teóricas/Práticas</li>
                  <li>Desenho Técnico</li>
                  <li>Conclusão</li>
                </ul>
              </div>
              <div>
                <h3 className='text-white cursoh'>Preço</h3>
                <p className='text-white'>R$200,00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  sectionContato = () => {
    return(
      <div className='container-social fadeIn'>
          <div className='socialmedia'>
            <img src={Insta} />
            <p>@IronLink</p>
          </div>
          <div className='socialmedia'>
            <img src={Whats} />
            <p>(24)99953-5353</p>
          </div>
          <div className='socialmedia'>
            <img src={Call} />
            <p>(24)3334-9888</p>
          </div>
        </div>
    )
  }

  sectionPromo = () => {
    return(
      <div className='container-promo fadeIn'>
          <div className='container-medalha'>
            <img className='medalha' src={Bronze} />
            <h3 className='medalhah3'>Pacote Bronze</h3>
            <p>Eletrodo revestido: R$1.500,00 - 5% = R$1.425,00</p>
            <p>Arame tubular: R$2.000,00 – 5% = R$1.900,00</p>

            <p>Total: R$3.325,00 (valor individual)</p>
            <p>-VALOR PARA 10 PESSOAS  R$33.250,00 - 10% = R$ 29.925,00</p>
            <p>-VALOR PARA 20 PESSOAS  R$66.500,00 - 25% = R$49.875,00</p>
            <button className='buttonHome'>COMPRAR</button>
          </div>
          <div className='container-medalha'>
            <img className='medalha' src={Prata} />
            <h3 className='medalhah3'>Pacote Prata</h3>
            <p>Eletrodo Revestido: R$1.500,00 - 10% = R$1.350,00</p>
            <p>TIG: R$2.500,00 - 10% = R$2.250,00</p>
            <p>MIG/MAG -2.000,00 - 10% = R$1.800,00</p>

            <p>Total: R$5.400,00 (valor individual)</p>
            <p>-VALOR PARA 10 PESSOAS R$54.000,00 - 10% = R$ 48.600,00</p>
            <p>-VALOR PARA 20 PESSOAS R$108.000,00 - 25% = R$81.000,00</p>
            <button className='buttonHome'>COMPRAR</button>
          </div>
          <div className='container-medalha'>
            <img className='medalha' src={Ouro} />
            <h3 className='medalhah3'>Pacote Ouro</h3>
            <p>Tig 5G: R$2.500,00 - 20% = R$2.000,00</p>
            <p>Mig/mag 3G: R$2.000,00 - 20% = R$1.600,00</p>
            <p>Eletrodo revestido 4G: R$1.500,00 - 20% = R$1.200,00</p>
            <p>Arame tubular 3G: R$2.000,00 - 20% = R$1.600,00</p>

            <p>Total = R$6.400,00 (valor individual)</p>

            <p>-VALOR PARA 10 PESSOAS R$64.000 - 10% = R$57.600,00</p>
            <p>-VALOR PARA 20 PESSOAS R$128.000,00 - 25% = 96.000,00</p>
            <button className='buttonHome'>COMPRAR</button>
          </div>
        </div>
    )
  }

  render() {
    const { page } = this.state
    return(
      <div>
        { this.header() }
        { page === 'Home' && this.sectionHome() }
        { page === 'Sobre' && this.sectionSobre() }
        { page === 'Cursos' && this.sectionCursos() }
        { page === 'Contato' && this.sectionContato() }
        { page === 'Promoções' && this.sectionPromo() }
      </div>
    )
  }
}

export default SectionHome