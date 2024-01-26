import React, { useEffect, useState } from 'react';

import Section1 from "../components/Container/Section1";
import Section2 from "../components/Container/Section2";
import Section3 from "../components/Container/Section3";
import Section4 from "../components/Container/Section4";
import Section5 from "../components/Container/Section5";
import SectionCourses from '../components/Container/SectionCourses';
import useSession from '../utils/useSession';

export default function Container() {
  
  const session = useSession();
  return (
    <>
      <Section1 />
      {session && (<SectionCourses />) }
      <Section2 />
      <Section3 />
      {!session && (
        <>
          <Section4 />
          <Section5 />
        </>
      )}
    </>
  )
}