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
        handleChange, heritage, instrument, musicalTalentRating, minmusicalTalentRating, maxmusicalTalentRating, minAge, maxAge, goodlooking, university
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

let people = getUnique(rooms, 'instrument');
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
                <label htmlFor="instrument">Instruments</label>
            <select name="instrument" id="instrument" value={instrument}className="form-control" onChange={handleChange}> 
            {people} 
            </select>
            </div>
                {/*end guests*/}
                {/* room musicalTalentRating*/}
                <div className = "form-group">
                <label htmlFor="musicalTalentRating">
                    Musical Talent Minimum: 
                    <br></br>
                    {musicalTalentRating}/10
                </label>
                <input type = "range" name="musicalTalentRating" min= {minmusicalTalentRating} max={maxmusicalTalentRating} id="musicalTalentRating" value={musicalTalentRating} onChange={handleChange} className="form-control" />
                </div>
                {/*end of room musicalTalentRating */}

                {/* age */ }
                <div className = "form-group">
                <label htmlFor="age">Age</label>
                <div className="size-inputs">
                <input type="number" 
                name = "minAge" 
                id = "age" 
                value={minAge} 
                onChange={handleChange} className="size-input"
                />

                <input type="number" 
                name = "maxAge" 
                id = "age" 
                value={maxAge} 
                onChange={handleChange} className="size-input"/>
                </div>
            </div>
            {/* end of age */}
            {/* extras */}
            <div className="form-group">
            <div className="single-extra">
            <input type="checkbox" name="goodlooking"
            id="goodlooking" checked={goodlooking} onChange={handleChange}
            />
            <label  htmlFor="goodlooking"> Good-looking?</label>
            </div>
            <div className="single-extra">
            <input type="checkbox" name="university"
            id="university" checked={university} onChange={handleChange}
            />
            <label  htmlFor="university"> University?</label>
            </div>
            </div>
            {/* end of extras */}
        </form>
    </section>
    );
}