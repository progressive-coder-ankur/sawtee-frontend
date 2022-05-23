import PropTypes from 'prop-types'
import styles from './Sidebar.module.css'
import {TwitterFollowButton, TwitterTimelineEmbed} from 'react-twitter-embed'

/**
 * Reder the Featured events component
 *
 * @param  {object}  props        The component attributes for props.
 * @param  {object}  props.events Events data.Element
 * @return {Element}              The Featured events Component.
 */
function FeaturedEvents({events}) {
  if (!events || !events.length) {
    return null
  }

  return (
    <>
      <ul>
        {events.map((event, index) => {
          return (
            <li key={index} className="flex items-center my-6 space-x-2">
              <a href="#" className={styles.imgWrapper}>
                <img
                  alt={event.title}
                  src={event.imgPath}
                  className={styles.featuredEventsImg}
                />
              </a>
              <div className="flex flex-col">
                <span className=" text-sm text-gray-900 font-semibold ml-2">
                  {event.title}
                </span>
                <span className="text-xs text-gray-400  ml-2">
                  {event.date}
                </span>
              </div>
            </li>
          )
        })}
      </ul>

      <div className="p-4 w-full md:w-1/2 mx-auto">
        <button
          type="button"
          className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        >
          View all
        </button>
      </div>
    </>
  )
}

FeaturedEvents.proptypes = {
  events: PropTypes.arrayOf(PropTypes.object)
}

/**
 * Reder the Sawtee in media component
 *
 * @param  {object}  props        The component attributes for props.
 * @param  {object}  props.events Events data.Element
 * @return {Element}              The Sawtee in media Component.
 */
function SawteeInMedia({events}) {
  if (!events || !events.length) {
    return null
  }
  return (
    <>
      <ul className="divide-y divide-gray-200">
        {events.map((event) => {
          return (
            <li key={event.id}>
              <a className="block hover:bg-gray-50">
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-900 font-semibold">
                      {event.title}
                    </p>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex text-xs items-center text-md font-light text-gray-500 ">
                        {event.date}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          )
        })}
      </ul>
      <div className="p-4 w-full md:w-1/2 mx-auto">
        <button
          type="button"
          className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        >
          View all
        </button>
      </div>
    </>
  )
}

SawteeInMedia.proptypes = {
  events: PropTypes.arrayOf(PropTypes.object)
}

/**
 * Reder the Sidebar component
 *
 * @param  {object}  props        The component attributes for props.
 * @param  {object}  props.events Events data.Element
 * @return {Element}              The Sidebar component.
 */
export default function Sidebar({events}) {
  return (
    <>
      {!!events?.length && (
        <div className="grid grid-rows-1">
          <div className="shadow-lg rounded-2xl p-4 bg-white w-full">
            <p className="font-bold text-md md:text-2xl text-center text-black">
              Featured Events
            </p>
            <FeaturedEvents events={events} />
          </div>
        </div>
      )}

      {!!events?.length && (
        <div className=" grid grid-rows-1">
          <div className="shadow-lg rounded-2xl p-4 bg-white w-full">
            <p className="font-bold text-center text-md md:text-2xl text-black">
              Sawtee in Media
            </p>
            <SawteeInMedia events={events} />
          </div>
        </div>
      )}

      <div className=" grid grid-rows-1">
        <div className="shadow-lg rounded-2xl p-4 bg-white w-full">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="sawteenp"
            options={{height: 600}}
          />
          <div className="flex justify-center items-center">
            <TwitterFollowButton screenName={'sawteenp'} />
          </div>
        </div>
      </div>
    </>
  )
}
