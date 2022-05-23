// import cn from 'classnames'
import Link from 'next/link'
import PropTypes from 'prop-types'
import PublicationCategorySlider from '../PublicationCategorySlider'
import Sidebar from '../Sidebar'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import SwiperCore, {Navigation} from 'swiper'

// install Swiper modules
SwiperCore.use([Navigation])

const events = [
  {
    id: '1',
    title: 'Awareness workshop on gender dimensions of entrepreneurship',
    imgPath: 'https://sawtee.org/page_gallery/thumb/5423-sept-webinar-2.jpg',
    path: '#',
    date: '2021-09-23'
  },
  {
    id: '2',
    title:
      'Webinar on gender dimensions of trade facilitaion: Evidence from Bangladesh, Bhutan, India and Nepal',
    imgPath: 'https://sawtee.org/page_gallery/thumb/6694gd.jpg',
    path: '#',
    date: '2021-04-21'
  },
  {
    id: '3',
    title: 'Webinar on “LDC Graduation: What’s next for Nepal?”',
    imgPath:
      'https://sawtee.org/page_gallery/thumb/99ldc-graduation---short-flyer.jpg',
    path: '#',
    date: '2021-03-16'
  },
  {
    id: '4',
    title: '‘Towards recovery: Women entrepreneurs coping with the pandemic’',
    imgPath:
      'https://sawtee.org/page_gallery/thumb/54webinar-4-march-women-entrepreneurs.jpg',
    path: '#',
    date: '2021-03-04'
  },
  {
    id: '5',
    title:
      'Awareness workshop on gender dimensions of trade facilitation in Province 1',
    imgPath:
      'https://sawtee.org/page_gallery/thumb/58brt-gender-awareness-program.jpg',
    path: '#',
    date: '2020-12-29'
  },
  {
    id: '6',
    title:
      'An interaction on an exploratory assessment of Sudurpashchim province’s export potential organized in Dhangadi',
    imgPath: 'https://sawtee.org/page_gallery/thumb/26i,age.jpg',
    path: '#',
    date: '2020-12-24'
  }
]

/**
 * Render a publication component header.
 *
 * @param  {object}  props      The component attributes as props.
 * @param  {object}  props.data Publication data.
 * @return {Element}            Publication Main Header Component.
 */
function PublicationMainHeader({data}) {
  if (!data || !data?.length) {
    return null
  }

  return (
    <>
      <div className="px-4 pb-8 mx-auto sm:max-w-full lg:max-w-5xl md:px-24 lg:px-8 hidden sm:block">
        <div className="grid gap-4 row-gap-4 mx-auto p-6 sm:row-gap-6 lg:max-w-screen-2xl sm:grid-cols-2 lg:grid-cols-5 bg-gray-600 rounded-xl mt-8">
          {data.map((item, index) => {
            return (
              <div key={index} className="flex ">
                <div className="flex flex-col justify-center">
                  <Link href={item.path}>
                    <a className="text-md text-white uppercase font-bold">
                      {item.label}
                    </a>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

PublicationMainHeader.prototype = {
  data: PropTypes.arrayOf(PropTypes.object)
}

/**
 * Render Publication main Component
 *
 * @param  {object}  props      The Component attributes as props.
 * @param  {object}  props.data Publication data.
 * @return {Element}            Publication main Component.
 */
export default function PublicationMain({data}) {
  return (
    <section className="w-full relative bg-gray-400">
      <PublicationMainHeader data={data} />
      <div className="p-12 grid md:grid-cols-publicationPage sm:grid-cols-1 gap-y-10 gap-x-10 justify-center items-start">
        <PublicationCategorySlider data={data} />
        <div className="grid grid-cols-1 gap-y-10 sticky top-2.5">
          <Sidebar events={events} />
        </div>
      </div>
    </section>
  )
}
