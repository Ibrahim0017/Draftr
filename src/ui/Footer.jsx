import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* Left Side */}
          <div className="space-y-10">
            <div className="flex items-center gap-3 text-white text-2xl font-semibold">
              <div className="w-6 h-6 bg-gradient-to-tr from-purple-500 to-indigo-500 rounded-sm"></div>
              Draftr
            </div>

            <div>
              <p className="mb-4">Follow us on:</p>

              <div className="flex items-center gap-6 text-xl text-gray-300">

                <FaFacebookF className="cursor-pointer hover:text-white transition" />

                <span className="h-6 w-[1px] bg-gray-700"></span>

                <FaXTwitter className="cursor-pointer hover:text-white transition" />

                <span className="h-6 w-[1px] bg-gray-700"></span>

                <FaInstagram className="cursor-pointer hover:text-white transition" />

                <span className="h-6 w-[1px] bg-gray-700"></span>

                <FaLinkedinIn className="cursor-pointer hover:text-white transition" />

                <span className="h-6 w-[1px] bg-gray-700"></span>

                <FaYoutube className="cursor-pointer hover:text-white transition" />

              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Quick Links</h3>

            <ul className="space-y-3">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Features</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
              <li className="hover:text-white cursor-pointer">Download</li>
            </ul>
          </div>

          {/* All Pages */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">All Pages</h3>

            <ul className="space-y-3">
              <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                Power-Ups
                <span className="text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">
                  New
                </span>
              </li>

              <li className="hover:text-white cursor-pointer">About us</li>
              <li className="hover:text-white cursor-pointer">Contact us</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Waitlist</li>
              <li className="hover:text-white cursor-pointer">Changelog</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">404</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-16 pt-6 text-center text-sm">
          Designed by <span className="text-white">Webestica</span>, Powered by{" "}
          <span className="text-white">Framer</span>
        </div>

      </div>
    </footer>
  );
}