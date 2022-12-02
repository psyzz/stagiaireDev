import React,{useState} from 'react';
import Footer from '../childrens/Footer';
import Header from '../childrens/Header';

const Films = () => {
    let [movies, setMovies] = useState (
        [
            {film : "Interstellar",img:"https://images2.alphacoders.com/605/605933.jpg", resume :"Dans un proche futur, la Terre est devenue hostile pour l'homme. Les tempêtes de sable sont fréquentes et il n'y a plus que le maïs qui peut être cultivé, en raison d'un sol trop aride. Cooper est un pilote, recyclé en agriculteur, qui vit avec son fils et sa fille dans la ferme familiale. Lorsqu'une force qu'il ne peut expliquer lui indique les coordonnées d'une division secrète de la NASA, il est alors embarqué dans une expédition pour sauver l'humanité."},
            {film : "Inception",img:"https://images7.alphacoders.com/833/thumb-1920-833508.jpg",resume : "Dom Cobb est un voleur expérimenté dans l'art périlleux de `l'extraction' : sa spécialité consiste à s'approprier les secrets les plus précieux d'un individu, enfouis au plus profond de son subconscient, pendant qu'il rêve et que son esprit est particulièrement vulnérable. Très recherché pour ses talents dans l'univers trouble de l'espionnage industriel, Cobb est aussi devenu un fugitif traqué dans le monde entier. Cependant, une ultime mission pourrait lui permettre de retrouver sa vie d'avant."},
            {film : "Batman",img:"http://m.gettywallpapers.com/wp-content/uploads/2021/10/The-Batman-4k-Wallpaper.jpg",resume : "Dans sa deuxième année de lutte contre le crime, le milliardaire et justicier masqué Batman explore la corruption qui sévit à Gotham et notamment comment elle pourrait être liée à sa propre famille, les Wayne, à qui il doit toute sa fortune. En parallèle, il enquête sur les meurtres d'un tueur en série qui se fait connaître sous le nom de Sphinx et sème des énigmes cruelles sur son passage."},
            {film : "Gladtiator",img:"https://images7.alphacoders.com/674/674296.jpg",resume : "Le général romain Maximus est le plus fidèle soutien de l'empereur Marc Aurèle, qu'il a conduit de victoire en victoire. Jaloux du prestige de Maximus, et plus encore de l'amour que lui voue l'empereur, le fils de Marc Aurèle, Commode, s'arroge brutalement le pouvoir, puis ordonne l'arrestation du général et son exécution. Maximus échappe à ses assassins, mais ne peut empêcher le massacre de sa famille. Capturé par un marchand d'esclaves, il devient gladiateur et prépare sa vengeance."},
            {film : "300",img:"https://images4.alphacoders.com/102/thumb-1920-102036.jpg",resume : "En 485 avant notre ère, Xerxès succède à Darius Ier sur le trône de l'empire perse. Rapidement, les grandes cités grecques comprennent qu'une nouvelle guerre s'annonce. Athènes, Thèbes, Corinthe et Délos se rallient à Sparte qui dispose de la meilleure armée. En 480, le roi spartiate Léonidas est nommé commandant en chef de cette union militaire de la dernière chance. Lorsque la flotte perse rallie les fantassins de Xerxès, les troupes grecques prennent peur."},
        ]);
    return (
        <div>
            <Header/>
            <main>
            <section id='filmContainer'>

                {/* Boucle sur le json movies */}
                
                        {movies.map((movie)=> 
                        <div>
                            <article className='filmArticles'>
                                <h2 className='filmName'>{movie.film}</h2>
                                <img src={movie.img} alt="" />
                                <p className='filmSummary'>{movie.resume}</p>
                            </article>
                        </div>     

                        )}
                </section>
            </main>
            <Footer/>
            
        </div>
    );
};

export default Films;