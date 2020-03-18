import React, {Component } from 'react';
import items from './data';
const RoomContext = React.createContext();
// <RoomContext.Provider value={}


class RoomProvider extends Component {
    state={
        rooms:[],
        sortedRooms: [],
        onhomeRooms: [],
        loading:true,
        heritage:'any',
        instrument:'any',
        musicalTalentRating:0,
        minmusicalTalentRating:0,
        maxmusicalTalentRating:0,
        minAge:0,
        maxAge:0,
        goodlooking:false,
        university:false
    };
    //getData{}

componentDidMount(){
    let rooms = this.formatData(items);
    let onhomeRooms = rooms.filter(room => room.onhome === true);
    let minmusicalTalentRating = Math.min(...rooms.map(item => item.musicalTalentRating));
    let maxmusicalTalentRating = Math.max(...rooms.map(item => item.musicalTalentRating));
    let maxAge = Math.max(...rooms.map(item => item.age));

        this.setState ({
        rooms,
        onhomeRooms,
        sortedRooms:rooms, 
        loading:false,
        musicalTalentRating:minmusicalTalentRating,
        maxmusicalTalentRating,
        maxAge
    });
}

formatData(items){
    let tempItems = items.map(item => {
        let id = item.sys.id
        let images = item.fields.images.map(image=> image.fields.file.url);
        
        let room = {...item.fields, images:images, id}
        return room;


    });
    return tempItems
}

getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug===slug)
    return room;
}
handleChange = event => {
    const target = event.target
    const value = target.type === 'checkbox'? target.checked:target.value;
    const name = event.target.name;
    this.setState({[name]:value}, this.filterRooms);
};

filterRooms = () => {
    let {
        rooms,heritage,instrument,musicalTalentRating,minAge,maxAge,goodlooking,university
    } = this.state


// all the rooms

let tempRooms = [...rooms];
//transform value
//instrument = parseInt(instrument)
musicalTalentRating = parseInt(musicalTalentRating)

//filter by heritage
console.log("First heritage");
console.log(heritage);
if (heritage !== 'any') {
    tempRooms = tempRooms.filter(room => room.heritage === heritage);
    console.log("New heritage");
    console.log(heritage);
}
else {heritage = 'any';}

//filter by instrument
console.log("First instrument");
console.log(instrument)
if (instrument !== 'any') {
    tempRooms = tempRooms.filter(room => room.instrument === instrument);
    console.log("New instrument")
    console.log(instrument);
}
else {instrument = 'any';}
//filter by musicalTalentRating
console.log("musicalTalentRating = ", musicalTalentRating);
tempRooms = tempRooms.filter(room => room.musicalTalentRating >= musicalTalentRating);
//filter by age
tempRooms = tempRooms.filter(room => room.age >= minAge && room.age <= maxAge)

//filter by goodlooking

if (goodlooking) {
    tempRooms = tempRooms.filter(room => room.goodlooking === true)
}

//filter by university 

if (university) {
    tempRooms = tempRooms.filter(room => room.university === true)
}

//change state 
this.setState({
    sortedRooms:tempRooms
});

};

    render() {
        return (
        <RoomContext.Provider value={{...this.state, getRoom:this.getRoom,handleChange:this.handleChange }}>
            {this.props.children}
        </RoomContext.Provider>
        
        );
    }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component){
    return function ConsumerWrapper(props){
        return (
        <RoomConsumer>
            {value => <Component {...props} context={value} />}
        </RoomConsumer>
        );
    };
}


export{RoomProvider, RoomConsumer, RoomContext}; 







