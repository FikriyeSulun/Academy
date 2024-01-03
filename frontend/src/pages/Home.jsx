import React from 'react';

import Section1 from "../components/Container/Section1";
import Section2 from "../components/Container/Section2";
import Section3 from "../components/Container/Section3";
import Section4 from "../components/Container/Section4";
import Section5 from "../components/Container/Section5";
import SectionCourses from '../components/Container/SectionCourses';

export default function Container() {

  return (
    <>
      <Section1 />
      <SectionCourses />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </>
  )
}