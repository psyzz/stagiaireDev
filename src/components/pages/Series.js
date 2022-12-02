import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../childrens/Header';
import Footer from '../childrens/Footer';
import { Carousel } from 'react-responsive-carousel';
import {FaStar} from 'react-icons/fa';

//Creation et utilisation de axios pour boucler sur LAPI//

const Series = () => {
    const[series,setSeries] = useState([]);
    
    useEffect(()=>{
        axios.get('https://api.tvmaze.com/shows').then((apiSeries)=>setSeries(apiSeries.data)).catch((e)=> console.error(e));
    }, [])
    console.log(series)
    return (
        <div>
            <Header/>
            <main>
                <section id='seriesContainer'>
                        {series.map((serie)=> 
                        <div className='serieDiv'>
                           <article className='serieArticle'>
                                <h2 className='serieName'>{serie.name}</h2>
                            <Carousel className='pageSerie'
                             showIndicators={false}
                             showStatus={false}>
                                <img src={serie.image.medium} alt="" />
                                <div className="modalSummary">
                                    <p dangerouslySetInnerHTML={{ __html: serie.summary }} />
                                    <p><FaStar/> {serie.rating.average}</p>
                                </div>    
                            </Carousel>                                                     
                            </article>
                        </div>     
                        )}
                </section>             
            </main>
            <Footer/>
        </div>
    );
};

export default Series;