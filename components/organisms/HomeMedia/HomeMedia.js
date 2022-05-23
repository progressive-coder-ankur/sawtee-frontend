import PropTypes from 'prop-types'
import Container from '@/components/atoms/Container'
// import styles from './HomeMedia.module.css'
import React from 'react'
import Link from 'next/link'

// eslint-disable-next-line jsdoc/require-returns
/**
 * @author Ankur
 * @param  {object}  props        The component attributes as props.
 * @param  {object}  props.events Events List
 * @return {Element}              Media component render.
 */
function Media({events}) {
  if (!events || !events.length) {
    return null
  }

  return (
    <>
      <div className="overflow-hidden shadow-lg rounded-lg w-full cursor-pointer m-auto">
        <Link href={events[0].path}>
          <a href="#" className="w-full block h-full">
            <img
              alt="blog photo"
              src={events[0].imgPath}
              className="max-h-40 w-full object-cover"
            />
            <div className="bg-white dark:bg-gray-800 w-full p-4">
              <p className="text-indigo-500 text-md font-medium">
                Sawtee in Media
              </p>
              <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                {events[0].title}
              </p>
              <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                The new supercar is here, 543 cv and 140 000$. This is best
                racing GT about 7 years on...
              </p>
            </div>
          </a>
        </Link>
      </div>
    </>
  )
}

Media.proptypes = {
  events: PropTypes.arrayOf(PropTypes.object)
}

/**
 * @author Ankur
 * @param  {object}  props       The component attributes as props.
 * @param  {object}  props.lists Events List
 * @return {Element}             Offset Media component.
 */
function OffsetMedia({lists}) {
  if (!lists || !lists.length) {
    return null
  }

  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2 ">
        {lists.map((event) => {
          return (
            <div key={event.id} className="flex bg-gray-200 rounded-lg p-4 m-2">
              <div
                className="bg-gray-400 rounded-lg"
                style={{
                  backgroundImage: `url(${event.imgPath})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
                }}
              />
              <div className="flex flex-col items-start ml-4 ">
                <h4 className="text-sm font-semibold line-clamp-2">
                  {event.title}
                </h4>
                {/* <p className="text-sm">Some text about the thing that goes over a few lines.</p> */}
                <Link href={event.path}>
                  <a className="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase">
                    View
                  </a>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

OffsetMedia.proptypes = {
  lists: PropTypes.arrayOf(PropTypes.object)
}

/**
 * @author Ankur
 * @param  {object}  props        The component attributes as props.
 * @param  {object}  props.events The events data for media component
 * @param  {object}  props.lists  The lists data for offset media component
 * @return {Element}              Home media main component.
 */
export default function HomeMedia({events, lists}) {
  return (
    <>
      <Container paddingBtm={true} paddingTop={true}>
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Policy
              <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-purple-400" />
                <span className="relative inline-block text-indigo-500">
                  Outreach
                </span>
              </span>
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-homeMedia gap-10 items-center">
          <Media events={events} />
          <OffsetMedia lists={lists} />
        </div>
      </Container>
    </>
  )
}

HomeMedia.proptypes = {
  events: PropTypes.arrayOf(PropTypes.object),
  offsetEvents: PropTypes.arrayOf(PropTypes.object)
}
