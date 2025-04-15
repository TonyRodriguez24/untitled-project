import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="grid grid-cols-4 max-w-3/4 mx-auto p-10 ">
        {/* Contact Info */}
        <div className="flex flex-col items-center">
          <h3 className="text-center">Connect With Us</h3>
          <ul>
            <li>
              Phone:{" "}
              <a href="tel:516-735-0685">
                <ion-icon name="call" />
                516-735-0685
              </a>
            </li>
            <li>
              Email:{" "}
              <a href="mailto:contact@jpmandsons.com">
                <ion-icon name="mail" />
                contact@JPMandSons.com
              </a>
            </li>
            <li>
              <ion-icon name="navigate-circle" />
              Address: 150 Spring Lane, Levittown, NY
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-center">Follow Us</h3>
          <div>
            <a
              href="https://www.facebook.com/JPMSonsCorp/"
              target="_blank"
              rel="noopener noreferrer">
              <ion-icon name="logo-facebook" />
            </a>
            <a
              href="https://www.tiktok.com/@jpmandsons"
              target="_blank"
              rel="noopener noreferrer">
              <ion-icon name="logo-tiktok" />
            </a>
            <a
              href="https://www.instagram.com/jpmandsonscorp/"
              target="_blank"
              rel="noopener noreferrer">
              <ion-icon name="logo-instagram" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-center">Quick Links</h3>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h3 className="text-center">Ready to Build?</h3>
          <p className="px-4">
            Let’s bring your ideas to life! Contact us for a free consultation
            today and discover how JPM and Sons can help.
          </p>
        </div>
      </div>
    </footer>
  );
}
