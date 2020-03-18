import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import { readFileSync } from 'fs';
import RoomContainer from '../components/RoomContainer';
const Members = () => { 
    return (
    <>
    <Hero hero="roomsHero">
        <Banner title="Band Members">
            
            <Link to='/' className='btn-primary'>
                Return Home
            </Link>


        </Banner>
    </Hero>
    <RoomContainer/>
    </>
    );   
};

export default Members;