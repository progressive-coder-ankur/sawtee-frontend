import React, {Fragment} from 'react'
import isLinkActive from '@/functions/isLinkActive'
import cn from 'classnames'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {Popover, Transition} from '@headlessui/react'
import {ChevronDownIcon} from '@heroicons/react/solid'
import PropTypes from 'prop-types'
import styles from './Navbar.module.css'

const data = {
  experts: [
    {
      id: 'prp',
      name: 'Posh Raj Panday',
      designation: 'Chairman',
      imgSrc: '/images/PRP.jpg'
    },
    {
      id: 'ps',
      name: 'Puspa Sharma',
      designation: 'Executive Director',
      imgSrc: '/images/puspa_sharma.jpg'
    },
    {
      id: 'pk',
      name: 'Paras Kharel',
      designation: 'Research Director',
      imgSrc: '/images/paras foto.jpg'
    }
  ]
}

/**
 * Render the NavigationMenu component.
 *
 * Recursively displays a menu and its children.
 *
 * @author WebDevStudios
 * @param  {object}  props      NavigationMenu props.
 * @param  {Array}   props.menu Array of menu items.
 * @return {Element}            The NavigationMenu component.
 */
function Navigation({menu}) {
  const {asPath} = useRouter()

  if (!menu || !menu?.length) {
    return null
  }

  return (
    <>
      <Popover.Group className="hidden lg:ml-auto lg:block lg:self-stretch">
        <div className="h-full flex space-x-8">
          {menu.map((item) => {
            const children =
              item.children && item.children.length > 0 ? item.children : ''

            // Check for session-specific menu items.
            if (item.label === 'Know Us') {
              return (
                <Popover key={item.label} className="flex">
                  {({open}) => (
                    <>
                      <div className="relative flex">
                        <Popover.Button
                          className={cn(
                            open
                              ? 'border-indigo-600 text-indigo-600'
                              : 'border-transparent text-primary hover:text-gray-800',
                            'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px'
                          )}
                        >
                          <Link href={item.path}>
                            <a
                              target={item.target ? item.target : '_self'}
                              className={cn(
                                isLinkActive(asPath, item.path) && styles.active
                              )}
                            >
                              <span>{item.label}</span>
                            </a>
                          </Link>

                          {children && children?.length && (
                            <ChevronDownIcon
                              className={cn(
                                open
                                  ? 'text-indigo-600 rotate-180'
                                  : 'text-gray-400',
                                'ml-2 h-5 w-5 group-hover:text-gray-500'
                              )}
                              aria-hidden="true"
                            />
                          )}
                        </Popover.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Popover.Panel
                          static={true}
                          className="absolute z-10 top-full inset-x-0 text-sm text-gray-500"
                        >
                          <div className={styles.megamenu}>
                            <div className="max-w-7xl mx-auto px-8">
                              <div className="grid grid-cols-megamenu gap-y-10 gap-x-8 py-16">
                                <div className="col-start-2 grid grid-cols-1 gap-x-8">
                                  <div className="group relative text-base sm:text-sm">
                                    <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden group-hover:opacity-75 border-2 border-gray-400">
                                      <div className={styles.bgImage}>
                                        <div className="text-center">
                                          <p className="text-sm font-semibold text-gray-900 capitalize lg:text-md">
                                            South Asia Watch on Trade, Economics
                                            and Environment (SAWTEE) was
                                            launched in 1994 as a loose regional
                                            network of non-governmental
                                            organizations (NGOs) from five South
                                            Asian countries: Bangladesh, India,
                                            Nepal, Pakistan and Sri Lanka.
                                            Taking into consideration the
                                            emerging need for fair, effective
                                            and meaningful integration of South
                                            Asian countries into the regional as
                                            well as global economies, the major
                                            motto of this regional initiative
                                            has been “GLOBALIZATION YES, BUT
                                            WITH SAFETY NETS”
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {!!children && !!children.length && (
                                  <div className="row-start-1 grid grid-cols-1 gap-y-8 gap-x-8 text-sm">
                                    {children.map((item) => {
                                      return (
                                        <div key={item.label}>
                                          <Link href={item.path}>
                                            <a
                                              target={
                                                item.target
                                                  ? item.target
                                                  : '_self'
                                              }
                                              className={cn(
                                                isLinkActive(
                                                  asPath,
                                                  item.path
                                                ) && styles.active
                                              )}
                                            >
                                              <p
                                                id={`${item.label}-heading`}
                                                className="font-medium text-white uppercase"
                                              >
                                                {item.label}
                                              </p>
                                            </a>
                                          </Link>
                                        </div>
                                      )
                                    })}
                                  </div>
                                )}
                                <div className="relative w-full max-h-60 p-4 overflow-hidden bg-white shadow-lg rounded-xl dark:bg-gray-800">
                                  <p className="mb-6 text-xl text-center font-medium text-gray-600 dark:text-white">
                                    Our Experts
                                  </p>
                                  <div className="grid grid-cols-3 gap-4">
                                    {data.experts.map((experts) => (
                                      <div
                                        key={experts.id}
                                        className="flex flex-col items-center"
                                      >
                                        <div className="relative">
                                          <a
                                            href="javascript:void(0)"
                                            className="relative block"
                                          >
                                            <img
                                              alt={experts.name}
                                              src={experts.imgSrc}
                                              className="object-cover w-10 h-10 mx-auto rounded-full "
                                            />
                                          </a>
                                        </div>
                                        <span className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                                          {experts.name}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              )
            } else if (item.label === 'Our Work') {
              return (
                <Popover key={item.id} className="flex">
                  {({open}) => (
                    <>
                      <div className="relative flex">
                        <Popover.Button
                          className={cn(
                            open
                              ? 'border-indigo-600 text-indigo-600'
                              : 'border-transparent text-primary hover:text-gray-800',
                            'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px'
                          )}
                        >
                          <Link href={item.path}>
                            <a
                              target={item.target ? item.target : '_self'}
                              className={cn(
                                isLinkActive(asPath, item.path) && styles.active
                              )}
                            >
                              <span>{item.label}</span>
                            </a>
                          </Link>
                          {children && children?.length && (
                            <ChevronDownIcon
                              className={cn(
                                open
                                  ? 'text-indigo-600 rotate-180'
                                  : 'text-gray-400',
                                'ml-2 h-5 w-5 group-hover:text-gray-500'
                              )}
                              aria-hidden="true"
                            />
                          )}
                        </Popover.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Popover.Panel className="absolute z-10 w-screen top-full max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-md">
                          {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                          <div
                            className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
                            aria-hidden="true"
                          />

                          <div className="bg-white p-4 rounded-lg">
                            <Navigation menu={children} />
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              )
            } else {
              return (
                <Popover key={item.id} className="flex">
                  {({open}) => (
                    <>
                      <div className="relative flex">
                        <Popover.Button
                          key={item.label}
                          className={cn(
                            open
                              ? 'border-indigo-600 text-indigo-600'
                              : 'border-transparent text-primary hover:text-gray-800',
                            'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px'
                          )}
                        >
                          <Link href={item.path}>
                            <a
                              target={item.target ? item.target : '_self'}
                              className={cn(
                                isLinkActive(asPath, item.path) && styles.active
                              )}
                            >
                              <span>{item.label}</span>
                            </a>
                          </Link>
                          {children && children?.length && (
                            <ChevronDownIcon
                              className={cn(
                                open
                                  ? 'text-indigo-600 rotate-180'
                                  : 'text-gray-400',
                                'ml-2 h-5 w-5 group-hover:text-gray-500'
                              )}
                              aria-hidden="true"
                            />
                          )}
                        </Popover.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel
                          static={true}
                          className={cn(
                            children.length > 2 && children.length % 2 == 0
                              ? 'max-w-4xl'
                              : 'max-w-md',
                            'absolute z-10 w-screen top-full px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0'
                          )}
                        >
                          {!!children && !!children.length && (
                            <div className="overflow-hidden rounded-lg shadow-lg">
                              <div
                                className={cn(
                                  children.length == 2
                                    ? 'grid-cols-2'
                                    : children.length % 2 == 0
                                    ? 'grid-cols-4'
                                    : 'grid-cols-3',
                                  'relative grid gap-8 bg-primary p-7'
                                )}
                              >
                                {children.map((item) => {
                                  return (
                                    <Link key={item.label} href={item.path}>
                                      <a className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg text-white hover:bg-gray-300 hover:text-gray-900 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                                        <div className="ml-4">
                                          <p className="text-sm font-medium">
                                            {item.label}
                                          </p>
                                        </div>
                                      </a>
                                    </Link>
                                  )
                                })}
                              </div>
                            </div>
                          )}
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              )
            }
          })}
        </div>
      </Popover.Group>
    </>
  )
}

Navigation.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object)
}

/**
 * Render the Navigation component.
 *
 * @author                           WebDevStudios
 * @param  {object}  props           Navigation props.
 * @param  {Array}   props.menu      Array of menu items.
 * @param  {string}  props.className Optional classname for the element.
 * @return {Element}                 The Navigation component.
 */
export default function Navbar({menu, className}) {
  return (
    <>
      {!!menu?.length && (
        <nav aria-label="Top" className={cn(styles.navigation, className)}>
          <div className="h-10 flex items-center">
            <Navigation menu={menu} />
          </div>
        </nav>
      )}
    </>
  )
}

Navigation.propTypes = {
  className: PropTypes.string,
  menu: PropTypes.arrayOf(PropTypes.object)
}
