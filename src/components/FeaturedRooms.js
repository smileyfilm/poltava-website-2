import React, {Component} from "react";
import {RoomContext} from "../context";
import Title from './Title';
import Loading from './Loading';
import Room from "../components/Room";
//import AMemberPreview from "../components/AMemberPreview";
export default class OnHomeRooms extends Component {
    static contextType = RoomContext;
    render() {
        let {loading, onhomeRooms:rooms} = this.context;
        rooms = rooms.map(room => {
            return <Room key={room.id} room={room}/>
        })
        return (
            
            <div>
            <section className="onhome-rooms"> 
            <Title title="Our Band Members"/>
                <div className= "onhome-rooms-center"> 
                {loading? <Loading/> : rooms}
                    
                </div>
            
            </section>
            </div>
        );
    }
}
