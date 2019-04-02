import React, { Component } from 'react';
import coffee from './images/cafe.png';
import ItemAmount from './components/itemAmount';

class Item extends Component {
  render() {
    return (
      <div >
        <section id="banner">
          <div class="content">
            <header>
              <h1>Juan Valdez<br />
              premium selection</h1>
              <p>Un buen cafe para tomar en familia</p>
            </header>
            <p>En Juan Valdez siempre buscamos formas para que disfrutes al máximo tu experiencia alrededor de un café. Por eso, tu liofilizado de siempre, ahora viene con una nueva presentación y enriquecido de forma natural con micro-partículas de café tostado y molido que realizan las características de tu bebida favorita elevando tu experiencia a una taza con sabor y aroma más cercano al autentico.</p>
            <ul class="actions">
            {/* <li><input type="submit" value="Comprar!" class="primary" /></li> */}
            <li><ItemAmount/></li>
            </ul>
            
          </div>
          <span class="image object">
            <img src={coffee} alt="" />
          </span>
        </section>

      </div>
    );
  }
}

export default Item;
