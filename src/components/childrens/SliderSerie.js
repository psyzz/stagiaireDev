import React,{useState} from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const SliderSeries = () => {
        const series = [
            {name:'Breaking Bad',image:'https://maximumwallhd.com/wp-content/uploads/2016/07/fonds-ecran-breaking-bad-01.jpg',episodes:'62'},
            {name:'Prison Break',image:'https://images6.alphacoders.com/469/thumb-1920-469280.jpg',episodes:'90'},
            {name:'Games Of Thrones',image:'https://maximumwallhd.com/wp-content/uploads/2016/08/fonds-ecran-game-of-thrones-13.jpg',episodes:'73'},
            {name:'Stranger Things',image:'https://images8.alphacoders.com/882/thumb-1920-882634.jpg',episodes:'34'},
            {name:'Le Seigneur Des Anneaux',image:'https://www.madmoizelle.com/wp-content/uploads/2022/01/the-rings-of-power.jpeg',episodes:'8'},
            {name:'Banshee',image:'https://s1.1zoom.me/big7/959/Painting_Art_Banshee_443203.jpg',episodes:'38'},
            
        ]
    return (
        <Carousel
        showIndicators={false}
        showStatus={false}
        >
            {series.map((serie) =>(
                <div className='homeMovies'>
                    <img className='imgMovies' src={serie.image} alt="" />
                    <div className="overlay">
                        <h2 className="overlayTitle">{serie.name}</h2>
                        <p className="overlayResume">Nombres d'épisodes {serie.episodes}</p>
                    </div>
                </div>

            )
            )}
        </Carousel>
    );
};

export default SliderSeries;