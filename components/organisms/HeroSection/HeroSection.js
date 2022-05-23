import styles from './HeroSection.module.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, {Pagination} from 'swiper'
import {publications, SIM} from '@/lib/data'

import Link from 'next/link'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

SwiperCore.use([Pagination])

/**
 * Render the Hero Slider component.
 *
 * @author  WebDevStudios
 * @param  {object}  props The component attributes as props.
 * @return {Element}       The Hero Slider component.
 */

export function HeroSlider({data}) {
  return (
    <>
      {data.map((item) => {
        return (
          <>
            <Swiper
              key={item.id}
              slidesPerView={3}
              spaceBetween={10}
              pagination={{clickable: true, dynamicBullets: true}}
              className={styles.swiper}
            >
              {item.posts.map((post) => {
                return (
                  <SwiperSlide className={styles.swiperSlide} key={post.id}>
                    <div className="flex flex-col items-center justify-center max-w-sm mx-auto">
                      <figure className="bg-transparent relative">
                        <Link href={post.path}>
                          <a>
                            <img
                              className={styles.swiperSlideImg}
                              src={post.imgPath}
                              alt={post.title}
                            />
                          </a>
                        </Link>
                      </figure>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </>
        )
      })}
    </>
  )
}

/**
 * Render the Hero Section component.
 *
 * @author  WebDevStudios
 * @return {Element} The Hero Section component.
 */
function Hero() {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-0">
      <div className="grid grid-cols-1">
        <div className="group relative text-base sm:text-sm">
          <div className="aspect-w-1 aspect-h-1 overflow-hidden bg-gray-900">
            <div className={styles.heroImage}>
              <div className="text-center">
                <p className="text-xl font-semibold text-white capitalize lg:text-3xl">
                  Dedicated to fair, equitable, inclusive, and sustainable
                  growth and development in South Asia, SAWTEE is working
                  towards poverty reduction, food and livelihood security,
                  gender equity, and biodiversity conservation and environmental
                  sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-rows-2 grid-cols-1 gap-y-3 bg-secondary">
        <div className="grid grid-cols-1 mb-5">
          <h3 className=" mt-5 text-xl text-white uppercase font-semibold text-center">
            Publications
          </h3>
          <HeroSlider data={publications} />
        </div>
        <div className="grid grid-cols-1">
          <h3 className="text-xl text-white uppercase font-semibold text-center">
            SAWTEE IN MEDIA
          </h3>
          <HeroSlider data={SIM} />
        </div>
      </div>
    </div>
  )
}

export default Hero
