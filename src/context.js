import React, {Component } from 'react';
import items from './data';
const MemberContext = React.createContext();
// <MemberContext.Provider value={}


class MemberProvider extends Component {
    state={
        members:[],
        sortedMembers: [],
        onHomeMembers: [],
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
    let members = this.formatData(items);
    let onHomeMembers = members.filter(member => member.onHome === true);
    let minmusicalTalentRating = Math.min(...members.map(item => item.musicalTalentRating));
    let maxmusicalTalentRating = Math.max(...members.map(item => item.musicalTalentRating));
    let maxAge = Math.max(...members.map(item => item.age));

        this.setState ({
        members,
        onHomeMembers,
        sortedMembers:members, 
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
        
        let member = {...item.fields, images:images, id}
        return member;


    });
    return tempItems
}

getMember = (slug) => {
    let tempMembers = [...this.state.members];
    const member = tempMembers.find(member => member.slug===slug)
    return member;
}
handleChange = event => {
    const target = event.target
    const value = target.type === 'checkbox'? target.checked:target.value;
    const name = event.target.name;
    this.setState({[name]:value}, this.filterMembers);
};

filterMembers = () => {
    let {
        members,heritage,instrument,musicalTalentRating,minAge,maxAge,goodlooking,university
    } = this.state


// all the members

let tempMembers = [...members];
//transform value
//instrument = parseInt(instrument)
musicalTalentRating = parseInt(musicalTalentRating)

//filter by heritage
console.log("First heritage");
console.log(heritage);
if (heritage !== 'any') {
    tempMembers = tempMembers.filter(member => member.heritage === heritage);
    console.log("New heritage");
    console.log(heritage);
}
else {heritage = 'any';}

//filter by instrument
console.log("First instrument");
console.log(instrument)
if (instrument !== 'any') {
    tempMembers = tempMembers.filter(member => member.instrument === instrument);
    console.log("New instrument")
    console.log(instrument);
}
else {instrument = 'any';}
//filter by musicalTalentRating
console.log("musicalTalentRating = ", musicalTalentRating);
tempMembers = tempMembers.filter(member => member.musicalTalentRating >= musicalTalentRating);
//filter by age
tempMembers = tempMembers.filter(member => member.age >= minAge && member.age <= maxAge)

//filter by goodlooking

if (goodlooking) {
    tempMembers = tempMembers.filter(member => member.goodlooking === true)
}

//filter by university 

if (university) {
    tempMembers = tempMembers.filter(member => member.university === true)
}

//change state 
this.setState({
    sortedMembers:tempMembers
});

};

    render() {
        return (
        <MemberContext.Provider value={{...this.state, getMember:this.getMember,handleChange:this.handleChange }}>
            {this.props.children}
        </MemberContext.Provider>
        
        );
    }
}

const MemberConsumer = MemberContext.Consumer;

export function withMemberConsumer(Component){
    return function ConsumerWrapper(props){
        return (
        <MemberConsumer>
            {value => <Component {...props} context={value} />}
        </MemberConsumer>
        );
    };
}


export{MemberProvider, MemberConsumer, MemberContext}; 







