import React from "react";
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from "react-router-dom";
import Contact from '../components/Contact';
import onHomeMembers from '../components/FeaturedMembers';
import {FaPhone, FaMailBulk, FaSpotify, FaYoutube}from 'react-icons/fa';

//yo yo
export default function Home() {
    return (
        <>
        <Hero>
            <Banner title="Poltava" subtitle="The best band in the world. Definitely.">
                <Link to='/members' className="btn-primary">
                Members
                </Link> 
            </Banner>
        </Hero>
        <Contact/>
        <onHomeMembers/>
        </>
    );
} 