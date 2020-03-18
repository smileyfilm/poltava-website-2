

import React, { Component } from "react";
import defaultBcg from "../images/MattFacebook1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { MemberContext } from "../context";
import StyledHero from '../components/StyledHero';

export default class SingleMember extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg
    };
  }
  static contextType = MemberContext;

  // componentDidMount() {
  //   console.log(this.props);
  // }
  render() {
    const { getMember } = this.context;
    const member = getMember(this.state.slug);

    if (!member) {
      return (
        <div className="error">
          <h3> no such member could be found...</h3>
          <Link to="/members" className="btn-primary">
            back to members
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      instrument,
      size,
      musicalTalentRating,
      additionaltalents,
      goodlooking,
      university,
      images
    } = member;
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
        <section className="single-member">
            <div className="single-member-info">
                <article className="desc">
                    <h3>biography</h3>
                    <p>{description}</p>
                </article>
                <article className="info">
                    <h3>info</h3>
                    <h6>musical talent rating: {musicalTalentRating}/10</h6>
                    <h6>age: {size} years old</h6>
                    <h6>
                        Instrument: {" "}
                        {`${instrument}`}
                    </h6>
                    <h6>{goodlooking?"Good-looking":"Not good-looking"}</h6>
                </article>
            </div>
        </section>
        <section className="member-additionaltalents">
            <h6>Additional Talents</h6>
            <ul className="additionaltalents">
                {additionaltalents.map((item,index) => {
                    return <li key={index}>- {item}</li>;
                })}
            </ul>
        </section>
        </>
    );
}
}















