import React, {Component} from 'react';
import Title from './Title';
import {FaPhone, FaMailBulk, FaSpotify, FaYoutube, FaMusic} from 'react-icons/fa';
import Loading from "./Loading";

export default class Contact extends Component {
state={
    discover: [
        {
            icon:<FaPhone/>,
            title:"Contact us by phone!",
            info: "+6421 183 3461"
        },
        {
            icon:<FaMailBulk/>,
            title:"Contact us by email!",
            info: "matthewarmstrong@hotmail.co.nz"
        },
        {
            icon:<FaSpotify/>,
            title:"Listen to us on Spotify!",
            info: "Click here to jump to our spotify!",
            href: "https://open.spotify.com/artist/4skaOvSqmHHWXV3oq1Hnz9"
        },
        {
            icon:<FaYoutube/>,
            title:"Watch and listen to us on YouTube!",
            info: "Click here to jump to our songs on YouTube!",
            href: "https://www.youtube.com/watch?v=ew4kZAsEgMY&list=OLAK5uy_ngg9GtInXKu_gJS0pcB1FDRBDtAsLP6G0&index=6&t=0s"
        },
        {
            icon: <FaMusic/>,
            title: "Listen to us on Apple Music!",
            info: "Click here to jump to us on Apple Music!",
            href: "https://music.apple.com/us/artist/poltava/1468841170"
        }
    ]
};
    render() {
        return (
            <section className="services">
                <Title title="Discover" />
              
                <div className="services-center">
                    {this.state.discover.map((item, index) => {
                        return (
                        <article key={index} className="service">
                           <span>{item.icon}</span> 
                           <h6>{item.title}</h6>
                           <a href={item.href} target="_blank">{item.info}</a>
                        </article>
                        );
                    })}
                
                </div>
                        
            </section>
        );
    }


}