import { Link } from "react-router-dom";
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const links = [
    [
      "About us",
      "Our Team",
    ],
    [
      "FAQs",
      "Contact us",
    ],
    [
      "Privacy Policy",
      "Terms and Conditions",
    ]
  ];
  
  return (
    <footer className="flex flex-col items-center max-w-screen-lg mt-10">
      <h2 className="font-bold text-3xl mb-10">GroupSpace</h2>
      <div className="flex justify-between gap-8">
        {links.map((pair) => (
          <div className="flex flex-col w-36 p-2">
          <ul>
              {pair.map((link) => (
                <li className="mb-1">
                  <Link to="/" className="font-medium hover:underline">
                    {link}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        ))}
      </div>

      <div className="flex justify-between mb-4">
          <Link to="/" className="p-3">
            <FaFacebook className="h-20 w-7" />
          </Link>
          <Link to="/" className="p-3">
            <FaInstagram className="h-20 w-7" />
          </Link>
          <Link to="/" className="p-3">
            <FaLinkedin className="h-20 w-7" />
          </Link>
          <Link to="/" className="p-3">
            <FaEnvelope className="h-20 w-7" />
          </Link>
        </div>
    </footer>
  )
}

export default Footer;