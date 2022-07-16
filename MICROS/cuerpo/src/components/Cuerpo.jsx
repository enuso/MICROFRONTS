import React from 'react'
import './Cuerpo_css.css';
import imagen from '../../assets/bicicleta.png';
import gif from '../../assets/pedalea2.gif';
import chat from '../../assets/chat.png';
import cardMontaña from '../../assets/mountain_card.jpg';
import cardRuta from '../../assets/road_card.jpg';
import cardFixie from '../../assets/fixie_card.jpg';
const Cuerpo = () => {
  return (
    <>
      <div className='con_main'>
{/* -------------------------------------------------------------------------------------------------------------- */}
        <div className="cover" style={{ backgroundImage: `url(${gif})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center' }}>
        <div className='aconcawa' >
            <div className="text_information_cover animate__animated animate__bounceInLeft" >
                <h1>El acero de nuestras bicicletas no tiene rival.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nostrum quas similique cupiditate ratione commodi quibusdam ad nobis a? Ut dicta quidem reiciendis perferendis accusamus exercitationem neque, quos voluptate quasi.
                    
                    </p>
                <div className="buttons_cover">
                    <input type="button" id="hola" class="btn_header_information"value="Saber más"/>
                </div>
            </div>
            {/* <div className="imagen_promocional_cover animate__animated animate__backInUp">
                <img id="img_cover" src={gif} alt=""/>
            </div> */}
        </div>
        
        </div>
        
{/* -------------------------------------------------------------------------------------------------------------- */}
        {/* <hr className='separacion'/> */}
{/* -------------------------------------------------------------------------------------------------------------- */}
        
           
           <div className='contenedor_cards'>
           <h1 className='cards_tile'>DESCUBRE DE LO QUE SON CAPACES NUESTROS INGENIEROS.</h1>
            <div className='container_cards'>
              <div className='card_productos'>
                <img src={cardMontaña} alt='bicicletaMontaña'/>
                <h4>Haxorus mountain</h4>
                <p>
                 Son bicicletas pequeñas, livianas y resistentes,
                 especialmente construidas para parques de salto.</p>
                 <input type='button' value='Saber más...'></input>
              </div>

              <div className='card_productos'>
                <img src={cardRuta} alt='bicicletaRuta'/>
                <h4>Haxorus road</h4>
                <p>Están caracterizadas por poseer varios platos y ruedas bastante finas,
                 además de una postura más radical.</p>
                 <input type='button' value='Saber más...'></input>
              </div>

              <div className='card_productos'>
                <img src={cardFixie} alt='bicicletaFixie'/>
                <h4>Haxorus Urban</h4>
                <p>Las bicicletas fixie, son bicis de una marcha, por lo que se debe avanzar y
                 frenar con el uso de los pedales.</p>
                <input type='button' value='Saber más...'></input>
              </div>
            </div>
            </div>
            
{/* -------------------------------------------------------------------------------------------------------------- */}
      <div className='container_chat'>
      
      <div className="text_information_chat animate__animated animate__bounceInLeft" >
                
                <div className="buttons_cover">
                <div class="form">
  <div class="title">Taller</div>
  <div class="subtitle">Vamos a comprobar como esta tu bici!</div>
  <div class="input-container ic1">
    <input id="firstname" class="input" type="text" placeholder=" " />
    <div class="cut"></div>
    <label for="firstname" class="placeholder">Usuario</label>
  </div>
  <div class="input-container ic2">
    <input id="lastname" class="input" type="text" placeholder=" " />
    <div class="cut"></div>
    <label for="lastname" class="placeholder">Teléfono</label>
  </div>
  <div class="input-container ic2">
    <input id="email" class="input" type="text" placeholder=" " />
    <div class="cut cut-short"></div>
    <label for="email" class="placeholder">Email</label>
  </div>
  <button type="text" class="submit">Iniciar</button>
</div>
                </div>
            </div>
            <div className="imagen_promocional_chat">
                <img id="img_chat" src={chat} alt=""/>
            </div>
      </div>
{/* -------------------------------------------------------------------------------------------------------------- */}
        </div>    
        </>
  )
}

export default Cuerpo