import React from 'react';
import {Link} from 'react-router-dom';
import defaultImg from "../images/poltavabandphoto.jpg";
import PropTypes from "prop-types";
export default function Room({room}) {
    const{name,slug,images,musicaltalentrating} = room;
    return (
    <article className="room">
        <div className = "img-container">
            <img src={images[0] || defaultImg} alt="a member preview" />
        <Link to={`/Members/${slug}`}
        className="btn-primary room-link">About This Member</Link>
        </div> 
        <p className="room-info">{name}</p>
    </article>
    );
}  

Room.propTypes = {
    room:PropTypes.shape({
       name:PropTypes.string.isRequired,
       slug:PropTypes.string.isRequired,
       images:PropTypes.arrayOf(PropTypes.string).isRequired,
       musicaltalentrating:PropTypes.number.isRequired,
    })
}