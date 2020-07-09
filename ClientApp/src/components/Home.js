import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Welcome to U.H. Logistics</h1>

        <div class="row">
        <div class="col s12">
            <h5 class="center">Who We Are</h5>
            <p class="light center"><span class='red-text'>U.H.</span> Logistics LLC is proudly based out of Texas, USA. We are a freight transportation company specializing in LTL freight. Our strongest focus is on our clients and being able to build a strong relationship with them; not to just service one of their transportation needs. We aim to continue to serve them in the highest standard in terms of service, dependability, communication, and overall client satisfaction. We truly understand the value of your cargo, how hard your team works, and how vital it is that every part of your company runs smoothly.</p>
        </div>
      </div>
      </div>


    );
  }
}
