import React from 'react';
import {Link} from 'react-router-dom';
import defaultImg from "../images/poltavabandphoto.jpg";
import PropTypes from "prop-types";
export default function Member({member}) {
    const{name,slug,images,musicalTalentRating} = member;
    return (
    <article className="member">
        <div className = "img-container">
            <img src={images[0] || defaultImg} alt="a member preview" />
        <Link to={`/Members/${slug}`}
        className="btn-primary member-link">About This Member</Link>
        </div> 
        <p className="member-info">{name}</p>
    </article>
    );
}  

Member.propTypes = {
    member:PropTypes.shape({
       name:PropTypes.string.isRequired,
       slug:PropTypes.string.isRequired,
       images:PropTypes.arrayOf(PropTypes.string).isRequired,
       musicalTalentRating:PropTypes.number.isRequired,
    })
}