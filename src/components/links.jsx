// Updated Links component with everything in one row
export const Links = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-left">
      {/* All Links and Contact Information in a Single Row */}
      <div className="flex items-center space-x-6">
        {/* Phone */}
        <div className="flex items-center">
          <img
            src="/images/phone.svg" // Replace with your local phone icon
            alt="Phone"
            className="h-5 w-5 mr-2"
          />
          <a
            href="tel:+972586272403"
            className="text-blue-600 hover:underline text-sm font-semibold"
          >
            +972 058-627-2403
          </a>
        </div>

        {/* Email */}
        <div className="flex items-center">
          <img
            src="/images/email.svg" // Replace with your local email icon
            alt="Email"
            className="h-5 w-5 mr-2"
          />
          <a
            href="mailto:soclofa@gmail.com"
            className="text-blue-600 hover:underline text-sm font-semibold"
          >
            soclofa@gmail.com
          </a>
        </div>

        {/* GitHub */}
        <a
          href="https://github.com/Soclofa/"
          className="text-slate-800 font-semibold text-sm hover:underline flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/github.svg" alt="GitHub" className="h-5 w-5 mr-2" />
          GitHub
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/avi-soclof/"
          className="text-slate-800 font-semibold text-sm hover:underline flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/linkedin.svg"
            alt="LinkedIn"
            className="h-5 w-5 mr-2"
          />
          LinkedIn
        </a>
      </div>
    </div>
  );
};
