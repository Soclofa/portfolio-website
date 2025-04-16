import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";

const programmingLanguages = [
  {
    codingLang: "C++",
    logoUrl: "/images/logos/cplusplus.svg",
    description: "Core & Advanced CS Concepts, OOP",
  },
  {
    codingLang: "Python",
    logoUrl: "/images/logos/python.svg",
    description: "Functional Programming, Web Programming, Cybersecurity",
  },
  {
    codingLang: "C#",
    logoUrl: "/images/logos/cSharp.svg",
    description: ".Net Framework",
  },

  {
    codingLang: "Java",
    logoUrl: "/images/logos/java.svg",
    description: "JUnit Testing",
  },
  /*  {
    codingLang: "Mips Assembly Language",
    logoUrl: "/images/logos/python.svg",
    description: "",
  },
  */
];

const webDev = [
  { codingLang: "React", logoUrl: "/images/logos/react.svg", description: "" },
  {
    codingLang: "JavaScript & TypeScript",
    logoUrl: "/images/logos/javaScript.svg",
    description: "",
  },
  { codingLang: "HTML", logoUrl: "/images/logos/html.svg", description: "" },
  {
    codingLang: "CSS/Tailwind",
    logoUrl: "/images/logos/css.svg",
    description: "",
  },
  { codingLang: "Node.js", logoUrl: "/images/logos/node.svg", description: "" },
];

const databases = [
  {
    codingLang: "SQL",
    logoUrl: "/images/logos/sql.svg",
    description: "",
  },
  {
    codingLang: "PostgreSQL",
    logoUrl: "/images/logos/postgres.svg",
    description: "",
  },
];

const awsServices = [
  {
    codingLang: "S3",
    logoUrl: "/images/logos/aws.svg",
    description: "",
  },
  {
    codingLang: "Lambda",
    logoUrl: "/images/logos/lambda.svg",
    description: "",
  },
  {
    codingLang: "DynamoDB",
    logoUrl: "/images/logos/DynamoDB.svg",
    description: "",
  },
];

const versionControl = [
  {
    codingLang: "Unix/Linux",
    logoUrl: "/images/logos/Linux.svg",
    description: "",
  },
  {
    codingLang: "MacOS",
    logoUrl: "/images/logos/macOS.svg",
    description: "",
  },
  {
    codingLang: "Git Version Control",
    logoUrl: "/images/logos/git.svg",
    description: "",
  },
];

export function SkillsCards() {
  const categories = [
    { title: "Programming Languages", items: programmingLanguages },
    { title: "Web Development", items: webDev },
    { title: "Databases", items: databases },
    { title: "AWS Services", items: awsServices },
    { title: "Version Control", items: versionControl },
  ];

  // Split categories into rows
  const firstRow = categories.slice(0, 3); // First 3 items
  const secondRow = categories.slice(3); // Remaining 2 items

  return (
    <div>
      <h1 class="font-bold leading-snug tracking-tight text-slate-800 mx-auto mt-4 mb-8 w-full text-2xl lg:max-w-3xl lg:text-5xl">
        {" "}
        Coding Experience
      </h1>
      <div className="w-full px-4 space-y-16">
        {/* First row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5">
          {firstRow.map(({ title, items }, index) => (
            <CardWithList key={index} title={title} items={items} />
          ))}
        </div>

        {/* Second row, centered */}
        <div className="flex justify-center gap-x-5">
          {secondRow.map(({ title, items }, index) => (
            <CardWithList key={index} title={title} items={items} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CardWithList({ title, items }) {
  return (
    <Card className="w-full max-w-sm mb-6">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-4">
          {title}
        </Typography>
        {/* Scrollable container for the list */}
        <div
          className="divide-y divide-gray-200 max-h-60 overflow-y-auto p-2"
          style={{
            scrollbarWidth: "thin", // For Firefox
            scrollbarColor: "#cbd5e1 #f1f5f9", // Thumb and track colors
          }}
        >
          {items.map(({ codingLang, logoUrl, description }, index) => (
            <div
              key={index}
              className="flex items-center gap-x-3 py-3"
              style={{ textAlign: "left" }}
            >
              {/* Logo */}
              <Avatar size="sm" src={logoUrl} alt={codingLang} />
              {/* Title and Description */}
              <div className="flex flex-col">
                <Typography
                  color="blue-gray"
                  variant="h6"
                  className="text-left"
                >
                  {codingLang}
                </Typography>
                {description && (
                  <Typography
                    variant="small"
                    color="gray"
                    className="text-left"
                  >
                    {description}
                  </Typography>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
