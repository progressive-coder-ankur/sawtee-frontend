import {Swiper, SwiperSlide} from 'swiper/react'
import Link from 'next/link'
import styles from './PublicationCategorySlider.module.css'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import SwiperCore, {Navigation} from 'swiper'

// install Swiper modules
SwiperCore.use([Navigation])

/**
 * Render the PublicationcCategorySlider component.
 *
 * @author  WebDevStudios
 * @param  {object}  props      The component attributes as props.
 * @param  {object}  props.data Publication data
 * @return {Element}            The Publication Category Slider component.
 */
export default function PublicationCategorySlider({data}) {
  return (
    <>
      <div className="grid grid-cols-1 gap-y-10">
        {!!data?.length && (
          <>
            {data.map((item, index) => {
              return (
                <>
                  <div key={index} className="flex m-8">
                    <Link href={item.path}>
                      <a className="text-xl text-gray-900 uppercase font-bold">
                        {item.label}
                      </a>
                    </Link>
                  </div>
                  <Swiper
                    key={index}
                    slidesPerView={3}
                    spaceBetween={10}
                    navigation={true}
                    className={styles.swiper}
                  >
                    {item.posts.map((post, index) => {
                      return (
                        <SwiperSlide className={styles.swiperSlide} key={index}>
                          <div className="flex flex-col relative items-center justify-center max-w-sm mx-auto">
                            <figure className="bg-transparent">
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
                            <div className="w-48 -mt-10 absolute bottom-0 overflow-hidden bg-white rounded-lg shadow-lg">
                              <h3 className="py-2 font-bold tracking-wide text-center text-sm text-gray-800 uppercase">
                                {post.title}
                              </h3>
                            </div>
                          </div>
                        </SwiperSlide>
                      )
                    })}
                  </Swiper>
                </>
              )
            })}
          </>
        )}
      </div>
    </>
  )
}
