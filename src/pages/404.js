import * as React from "react";
import { Link } from "gatsby";

const ErrorPage = () => {
  return (
    <body>
      <header>
        <nav>
          <menu>
            <li>
              <Link className="link" to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="link" to="/cabins">
                Cabins
              </Link>
            </li>
            <li>
              <Link className="link" to="/local">
                Local Attractions
              </Link>
            </li>
            <li>
              <Link className="link" to="/contact">
                Contact Us
              </Link>
            </li>
          </menu>
        </nav>
      </header>
      <h1>New England Camp</h1>
      <h2>Page Not Found</h2>
      <p>This is not the page that you are looking for.</p>
      <footer>
        <ul>
          <li>123 Main St, Smallville, NH 12345</li>
          <li>(123) 456-7891</li>
          <li>
            <a href="mailto:github.unlocking468@passmail.net">info@nec.com</a>
          </li>
        </ul>
      </footer>
    </body>
  );
};

export default ErrorPage;

export const Head = () => <title>Home Page</title>;
