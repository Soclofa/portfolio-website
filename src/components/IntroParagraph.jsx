import React from "react";
import { Typography } from "@material-tailwind/react";

export function AboutSection() {
  // Array of programming language logos
  const programmingLogos = [
    { name: "C++", path: "images/cplusplus.svg" },
    { name: "Python", path: "images/python.svg" },
    { name: "Java", path: "images/java.svg" },
    { name: "CSS", path: "images/css.svg" },
    { name: "HTML", path: "images/html.svg" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-left">
      <Typography variant="h2" color="blue-gray" className="mb-4 text-left">
        Hello & Shalom!
      </Typography>
      <Typography color="blue-gray" className="font-normal text-left mb-6">
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

      {/* Programming language logos row - centered */}
      <div className="flex flex-row flex-wrap gap-6 mt-6 justify-center w-full">
        {programmingLogos.map((logo, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={logo.path}
              alt={`${logo.name} logo`}
              className="h-12 w-12 object-contain"
            />
            <span className="text-xs mt-1 text-gray-600">{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
