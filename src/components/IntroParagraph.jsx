import React from "react";
import { Typography } from "@material-tailwind/react";

export function AboutSection() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-left">
      <Typography variant="h3" color="blue-gray" className="mb-4 text-left">
        Hello & Shalom!
      </Typography>
      <Typography color="blue-gray" className="font-normal text-left">
        Computer Science student at JCT with a passion for turning caffeine into
        code that actually works. I've built Windows apps that make task
        management less painful, 3D graphics engines that don't crash at the
        mention of shadows, and database systems that can handle millions of
        records without breaking a sweat. When I'm not debating the merits of
        interface-driven development or optimizing PostgreSQL queries, I'm using
        my persuasive talents to recruit students who share my enthusiasm for
        tech. Jerusalem-based with Cleveland roots, I bring Midwestern work
        ethic and Middle Eastern innovation to every project. Looking to join a
        team where my code can make an impact and my collection of programming
        jokes will be appreciated.
      </Typography>
    </div>
  );
}
