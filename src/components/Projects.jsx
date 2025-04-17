import React, { useState } from "react";

export const Projects = () => {
  const [activeTab, setActiveTab] = useState("settings"); // Set initial active tab to "settings" to match your image

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <h1 className="font-bold leading-snug tracking-tight text-slate-800 mx-auto mt-4 mb-8 w-full text-2xl lg:max-w-3xl lg:text-5xl">
        {" "}
        Projects
      </h1>

      <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full p-2">
        <div className="w-full">
          {/* Tabs */}
          <ul className="relative flex flex-wrap list-none border-b border-gray-200">
            <li className="z-30 flex-auto text-center">
              <button
                className={`flex items-center justify-center w-full px-4 py-3 text-sm font-medium transition-colors border-b-2 cursor-pointer ${
                  activeTab === "dashboard"
                    ? "border-blue-500 text-blue-500"
                    : "border-transparent text-gray-600 hover:text-gray-800"
                }`}
                onClick={() => handleTabClick("dashboard")}
                role="tab"
                aria-selected={activeTab === "dashboard"}
                aria-controls="dashboard"
              >
                Task Manager
              </button>
            </li>
            <li className="z-30 flex-auto text-center">
              <button
                className={`flex items-center justify-center w-full px-4 py-3 text-sm font-medium transition-colors border-b-2 cursor-pointer ${
                  activeTab === "profile"
                    ? "border-blue-500 text-blue-500"
                    : "border-transparent text-gray-600 hover:text-gray-800"
                }`}
                onClick={() => handleTabClick("profile")}
                role="tab"
                aria-selected={activeTab === "profile"}
                aria-controls="profile"
              >
                Library Billing System
              </button>
            </li>
            <li className="z-30 flex-auto text-center">
              <button
                className={`flex items-center justify-center w-full px-4 py-3 text-sm font-medium transition-colors border-b-2 cursor-pointer ${
                  activeTab === "settings"
                    ? "border-blue-500 text-blue-500"
                    : "border-transparent text-gray-600 hover:text-gray-800"
                }`}
                onClick={() => handleTabClick("settings")}
                role="tab"
                aria-selected={activeTab === "settings"}
                aria-controls="settings"
              >
                3D Graphics Engine and Ray Tracer
              </button>
            </li>
          </ul>

          {/* Tab Content */}
          <div className="p-4">
            <div
              id="dashboard"
              role="tabpanel"
              className={activeTab !== "dashboard" ? "hidden" : ""}
            >
              {/* Image Container */}
              <div className="w-auto h-auto bg-gray-100 rounded-lg mb-4 overflow-hidden">
                <img
                  src="/images/task.png"
                  alt="Task Manager Screenshot"
                  className="w-full h-full object-cover"
                />
              </div>

              <h5 class="mb-2 text-slate-800 text-xl font-semibold">
                Task Manager
              </h5>

              <p className="text-gray-600 mb-6">
                Developed a sophisticated Windows-based task management system
                leveraging C#/.NET and WPF/XAML. The application features a
                robust three-tier architecture separating data, business logic,
                and presentation concerns. Dual interfaces with role-based
                access controls accommodate different needs for administrators
                and engineers. The system includes comprehensive project
                management capabilities including task creation, milestone
                tracking, engineer assignment, and dependency management. Data
                handling integrates XML storage with LINQ processing, while
                visualization is enhanced through Gantt charts. An intelligent
                automated scheduling system optimizes project timelines based on
                resource availability and task dependencies.
              </p>

              {/* Button/Link */}
              <div className="mt-4 text-center">
                <a
                  href="https://github.com/elihawk97/dotNet5784_5586_8915"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View Project Code
                </a>
              </div>
            </div>

            <div
              id="profile"
              role="tabpanel"
              className={activeTab !== "profile" ? "hidden" : ""}
            >
              {/* Image Container */}
              <div className="w-auto h-auto bg-gray-100 rounded-lg mb-4 overflow-hidden">
                <img
                  src="/images/library.png"
                  alt="Library Billing System Dashboard"
                />
              </div>

              <h5 class="mb-2 text-slate-800 text-xl font-semibold">
                Library Billing System
              </h5>

              <p className="text-gray-600 mb-6">
                Designed and implemented a comprehensive database management
                system for tracking library financial operations and resource
                management. Architecture includes a PostgreSQL relational
                database schema with over 15 tables managing 2M+ records across
                subscriptions, penalties, employee wages, assets, and
                procurement processes. Query performance was optimized through
                strategic PostgreSQL indexing, reducing execution time by up to
                90% for critical financial operations. The system features
                automated backup/restore procedures using pg_dump and pg_restore
                tools alongside SQL constraints that enforce business rules.
                Advanced analytical capabilities were developed through PL/pgSQL
                stored procedures, parameterized queries, and materialized views
                to simplify complex reporting needs. Data visualization
                components combine SQL analytical functions with charting
                libraries to effectively analyze financial trends. Database
                schema merging was accomplished using Python migration scripts
                and PostgreSQL schema manipulation. Technologies utilized
                include PostgreSQL, SQL, PL/pgSQL, Python (with psycopg2 and
                Faker libraries), and various visualization tools.
              </p>

              {/* Button/Link */}
              <div className="mt-4 text-center">
                <a
                  href="https://github.com/Soclofa/Databases_5785_8915_5246"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View Project Code
                </a>
              </div>
            </div>

            <div
              id="settings"
              role="tabpanel"
              className={activeTab !== "settings" ? "hidden" : ""}
            >
              {/* Image Container */}
              <div className="w-full h-85 bg-gray-100 rounded-lg mb-4 overflow-hidden">
                <img
                  src="/images/3D.png"
                  alt="3D Graphics Engine Rendering"
                  className="w-full h-full object-cover"
                />
              </div>

              <h5 class="mb-2 text-slate-800 text-xl font-semibold">
                3D Graphics Engine & Ray Tracer
              </h5>
              <p className="text-gray-600 mb-6">
                Developed a high-performance 3D graphics engine in Java with an
                advanced rendering pipeline utilizing ray tracing techniques.
                The engine features comprehensive camera controls alongside a
                sophisticated lighting system supporting ambient, directional,
                point, and spot lights with realistic attenuation and shadow
                casting capabilities. Core geometric components include spheres,
                triangles, planes, and tubes, all supporting complex material
                properties such as reflections and refraction. Performance
                optimization includes multi-threading, adaptive super-sampling,
                and anti-aliasing for enhanced visual quality. The architecture
                follows software engineering best practices with
                interface-driven development, composition over inheritance,
                dependency injection, and thorough validation through extensive
                JUnit testing.
              </p>

              {/* Button/Link */}
              <div className="mt-4 text-center">
                <a
                  href="https://github.com/gabifeld/ISE5784_1497_8915"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View Project Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
