import React, {Component} from "react";
import {MemberContext} from "../context";
import Title from './Title';
import Loading from './Loading';
import Member from "../components/Member";
//import AMemberPreview from "../components/AMemberPreview";
export default class onHomeMembers extends Component {
    static contextType = MemberContext;
    render() {
        let {loading, onHomeMembers:members} = this.context;
        members = members.map(member => {
            return <Member key={member.id} member={member}/>
        })
        return (
            
            <div>
            <section className="onHome-members"> 
            <Title title="Our Band Members"/>
                <div className= "onHome-members-center"> 
                {loading? <Loading/> : members}
                    
                </div>
            
            </section>
            </div>
        );
    }
}
