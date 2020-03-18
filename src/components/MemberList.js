import React from 'react';
import Member from '../components/Member';
export default function MemberList({members}) {
if(members.length === 0){
    return (
        <div className="empty-search">
            <h3>Unfortunately there are no band members who match your search parameters</h3>
        </div>
    )
}
    return <section className="memberslist">
        <div className="memberslist-center">
            {
                members.map(item => {
                    return <Member key={item.id} member={item}/>;
                })}
        </div>
    </section>
}