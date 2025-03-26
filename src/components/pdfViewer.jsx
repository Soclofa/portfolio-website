import React, { useState } from "react";
import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

const PDFViewer = () => {
  const [loading, setLoading] = useState(true);

  // PDF path
  const pdfPath = "pdfs/resume.pdf";

  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <div className="mb-6">
        <Typography variant="h2" color="blue-gray" className="mb-2">
          My Resume
        </Typography>
        <Typography color="blue-gray" className="font-normal opacity-75">
          View or download my professional experience and qualifications
        </Typography>
      </div>

      <Card className="overflow-hidden mb-6 shadow-lg">
        <CardBody className="p-0">
          {loading && (
            <div className="flex justify-center items-center h-16">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            </div>
          )}

          <iframe
            src={pdfPath}
            width="100%"
            height="800px"
            title="Resume"
            className="border-0"
            onLoad={() => setLoading(false)}
            style={{
              display: loading ? "none" : "block",
              backgroundColor: "#f8fafc",
            }}
          />
        </CardBody>
      </Card>

      <div className="flex justify-center">
        <Button
          size="lg"
          className="flex items-center gap-2 normal-case shadow-md"
          color="blue"
        >
          <ArrowDownTrayIcon className="h-5 w-5" />
          <a
            href={pdfPath}
            download="Avi_Soclof_Resume.pdf"
            className="text-white"
          >
            Download Resume
          </a>
        </Button>
      </div>
    </div>
  );
};

export default PDFViewer;
