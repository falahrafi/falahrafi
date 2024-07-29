import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

import MainButton from '../button/MainButton';

import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope as fasEnvelope } from '@fortawesome/free-solid-svg-icons';

import falahrafiLogo from '../../assets/falahrafi-logo-design-light-icon.svg'
import falahrafiText from '../../assets/falahrafi-logo-design-light-text.svg'

const navigation = [
  { name: 'About', href: '/#about', current: false },
  { name: 'Portfolio', href: '/#portfolio', current: false },
  { name: 'Certificates', href: '/#certificate', current: false },
  { name: 'Testimonials', href: '/#testimonial', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MainNavbar() {
  return (
    <Disclosure as="nav" className="sticky top-0 z-10 py-4 bg-transparent bg-gradient-to-b from-falahrafi-dark via-falahrafi-dark/90 to-falahrafi-dark/0 backdrop-blur">
      <div className="mx-auto px-2 sm:px-6 lg:px-16">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              {/* <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" /> */}
              <div className="hamburger-menu group-data-[open]:hamburger-menu-open"></div>
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img src={falahrafiLogo} className="mr-4 h-10 sm:h-12" alt="Falahrafi Logo" />
              <span className="self-center whitespace-nowrap">
                <img src={falahrafiText} className=" h-4 sm:h-5" alt="Falahrafi Text" />
              </span>
            </div>
            <div className="hidden w-full lg:ml-6 lg:mt-1 lg:block">
              <div className="flex justify-center space-x-4 text-center">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? '' : 'text-white hover:bg-gradient-to-r from-falahrafi-green/30 to-falahrafi-green/5 hover:border border-falahrafi-green hover:text-white',
                      'rounded-full px-4 py-2 text-base font-display font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 sm:pr-0">
            <div className='md:hidden'>
              <MainButton link="/" icon={fasEnvelope} iconColor="text-white" rounded="rounded-full" textSize="text-md" padding="px-5 py-3" />
            </div>
            <div className='hidden md:block'>
              <MainButton link="/" text="Hire Me" icon={faEnvelope} rounded="rounded-full" />
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="absolute lg:hidden left-8 mt-2 p-[2px] bg-gradient-to-r from-falahrafi-green-dark to-falahrafi-green-light rounded-lg transition-all ease-in-out duration-300">
        <div className="space-y-1 p-3 bg-black/75 rounded-lg">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? '' : 'text-white hover:bg-black/40 hover:text-white',
                'block rounded-md px-5 py-3 text-lg font-medium font-display',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
