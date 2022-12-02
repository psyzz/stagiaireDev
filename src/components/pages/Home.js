import React, { useState } from 'react';
import Footer from '../childrens/Footer';
import Header from '../childrens/Header';
import logo from '../../assets/img/logo.png';
import Slider from '../childrens/Slider';
import SliderSeries from '../childrens/SliderSerie';






const Home = () => {
    const [hidden, setHidden] = useState(true);
    return (
        <div>
            <Header/>
            <main>
                <article id='newsHome'>
                    <div className='texteHome overlayTexteHome'>
                        <div className='logoHome'>
                            <img className='logo' src={logo} alt=""/>
                            <h2 className='h2Film'>FILM</h2>
                        </div>
                        <div className='filmHome'>
                            <h2>Black Panther Wakanda Forever</h2>
                        </div>
                        <div className='resumeFilm'>
                            <p>La reine Ramonda, Shuri, M'Baku, Okoye et la Dora Milaje se battent pour protéger leur nation des puissances mondiales intervenantes à la suite de la mort du roi T'Challa. Alors que les Wakandans s'efforcent d'embrasser leur prochain chapitre, les héros doivent s'unir à Nakia et Everett Ross pour forger une nouvelle voie pour leur royaume bien-aimé.</p>
                        </div>
                        <a onClick={() => setHidden(s => !s)}>Bande Annonce</a>
                    </div>
                    {!hidden ? <div className='bandeA'>
                        <iframe width="1268" height="713" src="https://www.youtube.com/embed/afDNAILz6Tw" title="BLACK PANTHER 2 : WAKANDA FOREVER Bande Annonce VF (2022)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div> : null}     
                </article>
                <section id='movie'>
                    <h2 className='h2Films'>Top des films</h2>
                    <Slider/>
                </section>
                <section id='serie'>
                    <h2 className='h2Series'>Top des series</h2>
                    <SliderSeries/>
                </section>
            </main>
           <Footer/>
        </div>
    );
};

export default Home;