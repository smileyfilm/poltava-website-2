import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../context';
import Title from '../components/Title';
// get all unique values
const getUnique = (items, value) =>{
    return [...new Set(items.map(item => item[value]))]
}
export default function RoomFilter({rooms}) {
    const context = useContext(RoomContext);
    const {
        handleChange, heritage, capacity, musicaltalentrating, minMusicalTalentRating, maxMusicalTalentRating, minSize, maxSize, breakfast, pets
    } = context;
    // get unique heritages
let heritageOptions = getUnique(rooms, 'heritage');
// add all

heritageOptions = ['any',...heritageOptions];
//map to jsx
heritageOptions = heritageOptions.map((item,index) =>{
    return (
    <option value={item} key={index}>{item}</option>
    );
});

let people = getUnique(rooms, 'capacity');
people = ['any',...people];
people = people.map((item,index)=>{return <option key={index} value = {item}>{item} </option>
})
    return (
        <section className="filter-container">
            <Title title="filter members"/>
            <form className="filter-form">
                {/*select heritage*/}
            <div className="form-group">
                <label htmlFor="heritage">heritage</label>
            <select name="heritage" id="heritage" value={heritage}className="form-control" onChange={handleChange}> 
            {heritageOptions} 
            </select>
            </div>
                {/*end select heritage*/}
                   {/*guests */}
            <div className="form-group">
                <label htmlFor="capacity">Instruments</label>
            <select name="capacity" id="capacity" value={capacity}className="form-control" onChange={handleChange}> 
            {people} 
            </select>
            </div>
                {/*end guests*/}
                {/* room musicaltalentrating*/}
                <div className = "form-group">
                <label htmlFor="musicaltalentrating">
                    Musical Talent Minimum: 
                    <br></br>
                    {musicaltalentrating}/10
                </label>
                <input type = "range" name="musicaltalentrating" min= {minMusicalTalentRating} max={maxMusicalTalentRating} id="musicaltalentrating" value={musicaltalentrating} onChange={handleChange} className="form-control" />
                </div>
                {/*end of room musicaltalentrating */}

                {/* size */ }
                <div className = "form-group">
                <label htmlFor="size">Age</label>
                <div className="size-inputs">
                <input type="number" 
                name = "minSize" 
                id = "size" 
                value={minSize} 
                onChange={handleChange} className="size-input"
                />

                <input type="number" 
                name = "maxSize" 
                id = "size" 
                value={maxSize} 
                onChange={handleChange} className="size-input"/>
                </div>
            </div>
            {/* end of size */}
            {/* extras */}
            <div className="form-group">
            <div className="single-extra">
            <input type="checkbox" name="breakfast"
            id="breakfast" checked={breakfast} onChange={handleChange}
            />
            <label  htmlFor="breakfast"> Good-looking?</label>
            </div>
            <div className="single-extra">
            <input type="checkbox" name="pets"
            id="pets" checked={pets} onChange={handleChange}
            />
            <label  htmlFor="pets"> University?</label>
            </div>
            </div>
            {/* end of extras */}
        </form>
    </section>
    );
}