import React from 'react';
import Header from '../components/Header';
import SectionHome from '../components/SectionHome';

class Home extends React.Component {
  render() {
    return(
      <div>
        {/* <Header pag="home" styleHome="home" /> */}
        <SectionHome />
        <footer>
          <a href="https://www.instagram.com/digas.oficial/" target='_blank'>
            Desenvolvido por <strong>Dihrey Araujo</strong>
          </a>
        </footer>
      </div>
    )
  }
}

export default Home
