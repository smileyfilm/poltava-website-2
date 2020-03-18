

import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from '../components/StyledHero';

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg
    };
  }
  static contextType = RoomContext;

  // componentDidMount() {
  //   console.log(this.props);
  // }
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h3> no such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;
    const [mainImg,...defaultImg] = images;
    return (
        <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
            <Banner title={`${name}`}>
                <Link to='/members' className='btn-primary'>
                    back to members
                </Link>
            </Banner>
        </StyledHero>
        <section className="single-room">
            <div className="single-room-info">
                <article className="desc">
                    <h3>biography</h3>
                    <p>{description}</p>
                </article>
                <article className="info">
                    <h3>info</h3>
                    <h6>musical talent rating: {price}/10</h6>
                    <h6>age: {size} years old</h6>
                    <h6>
                        Instrument: {" "}
                        {`${capacity}`}
                    </h6>
                    <h6>{breakfast?"Good-looking":"Not good-looking"}</h6>
                </article>
            </div>
        </section>
        <section className="room-extras">
            <h6>Additional Talents</h6>
            <ul className="extras">
                {extras.map((item,index) => {
                    return <li key={index}>- {item}</li>;
                })}
            </ul>
        </section>
        </>
    );
}
}






















/*
import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg
    };
  }
  static contextType = RoomContext;

  // componentDidMount() {
  //   console.log(this.props);
  // }
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return <div className="error">
          <h3> no such room could be found...</h3> 
            <Link to='/rooms' className="btn-primary">
                back to rooms
            </Link>
      </div>
    }
    return <div> hello from single room page{room.name}</div>;
}
}
*/