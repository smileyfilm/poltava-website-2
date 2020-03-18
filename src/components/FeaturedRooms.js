import React, {Component} from "react";
import {MemberContext} from "../context";
import Title from './Title';
import Loading from './Loading';
import Room from "../components/Room";
//import AMemberPreview from "../components/AMemberPreview";
export default class onHomeRooms extends Component {
    static contextType = MemberContext;
    render() {
        let {loading, onHomeRooms:rooms} = this.context;
        rooms = rooms.map(room => {
            return <Room key={room.id} room={room}/>
        })
        return (
            
            <div>
            <section className="onHome-rooms"> 
            <Title title="Our Band Members"/>
                <div className= "onHome-rooms-center"> 
                {loading? <Loading/> : rooms}
                    
                </div>
            
            </section>
            </div>
        );
    }
}
