const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-[1920px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & description */}
          <div className="col-span-1">
            <img src="/path/to/your-logo.svg" alt="Company Logo" className="h-10 mb-4" />
            <p className="text-sm text-white">
              Bridging education and industry demands. Join us on the path to growth and success.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-white hover:text-white">About Us</a></li>
              <li><a href="/courses" className="text-white hover:text-white">Courses</a></li>
              <li><a href="/university-progression" className="text-white hover:text-white">University Progression</a></li>
              <li><a href="/alumni" className="text-white hover:text-white">Alumni</a></li>
            </ul>
          </div>

          {/* Policies & Info */}
          <div>
            <h3 className="font-semibold mb-4">Policies & Info</h3>
            <ul className="space-y-2">
              <li><a href="/terms-&-conditions" className="text-white hover:text-white">Terms & Conditions</a></li>
              <li><a href="/privacy-policy" className="text-white hover:text-white">Privacy Policy</a></li>
              <li><a href="/policies-&-procedures" className="text-white hover:text-white">Policies & Procedures</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <p className="text-white text-sm">
              123 Your Street,<br />
              Your City, Country<br />
              Phone: +94 123 456 789<br />
              Email: <a href="mailto:info@yourdomain.com" className="hover:text-white">info@yourdomain.com</a>
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-white"><span className="sr-only">Facebook</span> {/** */}</a>
              <a href="#" className="text-white hover:text-white"><span className="sr-only">LinkedIn</span> {/* Insert icon */}</a>
              <a href="#" className="text-white hover:text-white"><span className="sr-only">Instagram</span> {/* Insert icon */}</a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-white">
          &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
