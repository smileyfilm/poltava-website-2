import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import { readFileSync } from 'fs';
import MemberContainer from '../components/MemberContainer';
const Members = () => { 
    return (
    <>
    <Hero hero="membersHero">
        <Banner title="Band Members">
            
            <Link to='/' className='btn-primary'>
                Return Home
            </Link>


        </Banner>
    </Hero>
    <MemberContainer/>
    </>
    );   
};

export default Members;