import React from 'react';
import '../style/homesection.css';
import ImgHome from '../imagens/homeSection.png'

class SectionHome extends React.Component {
  render() {
    return(
      <div className='container-section-home'>
        <div className='left-section'>
          <div>
            <p className='titulo-section'>EXPLORAR</p>
            <p className='titulo-section'>INOVAR</p>
          </div>
          <button className='buttonHome'>INSCREVA-SE</button>
        </div>
        <div>
          <img className='imgHome' src={ ImgHome } />
        </div>
      </div>
    )
  }
}

export default SectionHome