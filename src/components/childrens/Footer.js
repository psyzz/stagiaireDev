import React from 'react';
import {FaFacebook} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';





const Footer = () => {
    return (
        <div>
            <footer>
                <div className='icones'>
                    <FaFacebook/>
                    <FaTwitter/>
                    <FaYoutube/>
                    <FaInstagram/>
                </div>
                <div className='listeFooter'>
                    <div>
                        <ul>
                            <li>Audiodéscription</li>
                            <li>Relations investisseurs</li>
                            <li>Informations légales</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Centre d'aide</li>
                            <li>Recrutement</li>
                            <li>Préferences de Cookies</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Cartes Cadeaux</li>
                            <li>Conditions d'utilisation</li>
                            <li>Mentions légales</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Cartes Cadeaux</li>
                            <li>Conditions d'utilisation</li>
                            <li>Mentions légales</li>
                        </ul>
                    </div>
                </div>
                <p>© 2022-2022 VidDev</p>
            </footer>
        </div>
    );
};

export default Footer;
