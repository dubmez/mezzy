import React from "react";

import {Form} from '../components/form';
import {Hero} from '../components/hero';
import logo from '../logo.svg';
import changeimg from "../images/change.jpg";
import riverimg from "../images/river-mountain.jpg";
import { WhyNL } from "../components/whynl";
import { Intro } from "../components/intro";

export const Splash =() => {
    return (

    <div className="content-container">
        <Hero/>
        <Intro/>
        <WhyNL/>

    </div>
   
)};