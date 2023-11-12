import * as React from "react";
import { Link } from "gatsby";

const AboutPage = () => {
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
      <h2>About Us</h2>
      <p>
        On anno inkluzive plue, mano glota jes nv. Ia minca finnlando eko, ne
        fiksi konjunkcio iom. Dum ac inter fiksi, duona apuda esperantigita ont
        jo. Far fi fora naza oficiala, iu helpa kunmetita mallongigita tet. Nu
        muo halt' s'joro frikativo. Ot nenia konjunkcio anc, sub apuda kunigi
        ek. Nei irebla nederlando geinstruisto nf, e cent definitive poa. Pera
        reala triangulo no vic. Via ig duuma afganistano. Pli ut danke esperanto
        alternativdemando, ien it usono inkluzive. Tri rekta laŭlonge rolfinaĵo
        ki, des fo alia respondo prapostmorgaŭ. Dio se minus ekkria memmortigo,
        in esk kibi sezononomo. Onia vole seksa for ko. Ti tek plus usono
        intera, ano jene kies komplika ve.
      </p>
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

export default AboutPage;

export const Head = () => <title>About Us</title>;
