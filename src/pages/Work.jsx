/**
 * src/pages/Work.jsx
 * Route: /projects
 * The Work page — 4 sections.
 */

import WorkHero from '../components/WorkHero';
import ProjectShowcase from '../components/ProjectShowcase';
import OpenSourceNote from '../components/OpenSourceNote';
import WorkCTA from '../components/WorkCTA';
import './Work.css';

const Work = () => {
  return (
    <>
      <WorkHero />
      <ProjectShowcase />
      <OpenSourceNote />
      <WorkCTA />
    </>
  );
};

export default Work;