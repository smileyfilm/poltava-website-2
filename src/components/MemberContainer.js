import React from 'react';
import MemberFilter from './MemberFilter';
import MemberList from "./MemberList";
import {withMemberConsumer } from "../context";
import Loading from "./Loading";

function MemberContainer({context}) {
const {loading,sortedMembers,members} = context;
if (loading) {
    return <Loading/>;
}

return (
    <> 
        <MemberFilter members={members}/>
        <MemberList members={sortedMembers}/>
    </>
);
}




export default withMemberConsumer(MemberContainer);












/*import React from 'react';
import MemberFilter from './MemberFilter';
import MemberList from './MemberList';
import {MemberConsumer} from '../context';
import Loading from './Loading';
export default function MemberContainer() {
    return (
        <MemberConsumer>

    {value => {
        const {loading,sortedMembers,members} = value
        if (loading) {
            return <Loading/>;
        }

        return (
            <div> 
                Hello from Members Container 
                <MemberFilter members={members}/>
                <MemberList members={sortedMembers}/>
            </div>
        );
    }}
        </MemberConsumer>
        
    );
}*/