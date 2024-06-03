import { Navbar } from "flowbite-react";
import MainButton from './button/MainButton';

import falahrafiLogo from '../assets/falahrafi-logo-design-light-icon.svg';
import falahrafiText from '../assets/falahrafi-logo-design-light-text.svg';

import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export default function AppNavbar() {

  return (
    <Navbar className="mx-12 bg-transparent bg-gradient-to-b from-falahrafi-dark/90 via-falahrafi-dark/90 to-falahrafi-dark/0 py-7 z-10 relative">
      <Navbar.Brand href="https://flowbite-react.com">
        <img src={falahrafiLogo} className="mr-4 h-9 sm:h-12" alt="Falahrafi Logo" />
        <span className="self-center whitespace-nowrap">
          <img src={falahrafiText} className="h-4 sm:h-5" alt="Falahrafi Text" />
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <MainButton link="/" text="Hire Me" icon={faEnvelope} rounded="rounded-full" />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="font-display font-medium">
        <Navbar.Link href="#" className="text-white md:hover:text-falahrafi-green-light text-base transition-all ease-in-out duration-500">About</Navbar.Link>
        <Navbar.Link href="#" className="text-white md:hover:text-falahrafi-green-light text-base transition-all ease-in-out duration-500">Portfolio</Navbar.Link>
        <Navbar.Link href="#" className="text-white md:hover:text-falahrafi-green-light text-base transition-all ease-in-out duration-500">Certificates</Navbar.Link>
        <Navbar.Link href="#" className="text-white md:hover:text-falahrafi-green-light text-base transition-all ease-in-out duration-500">Testimonials</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
