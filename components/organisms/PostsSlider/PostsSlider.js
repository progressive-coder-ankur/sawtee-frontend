import styles from './PostsSlider.module.css'
import Container from '@/components/atoms/Container'
import {Swiper, SwiperSlide} from 'swiper/react'
import Link from 'next/link'

import 'swiper/css'

/**
 * Render the PostsSlider component.
 *
 * @author WebDevStudios
 * @param  {object}  props      The component attributes as props.
 * @param  {object}  props.data The data as props.
 * @return {Element}            The PostsSlider Component.
 */

export default function PostsSlider({data}) {
  {
    !!data?.length && (
      <>
        {data.map((item, index) => {
          return (
            <>
              <Container paddingBtm={false} paddingTop={false}>
                <div key={index} className="flex">
                  <Link href={item.path}>
                    <a className="text-xl text-white uppercase font-semibold">
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
                        <div className="flex flex-col items-center justify-center max-w-sm mx-auto">
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
                          <div className="w-48 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg">
                            <h3 className="py-2 font-bold tracking-wide text-center text-sm text-gray-800 uppercase">
                              {post.title}
                            </h3>
                          </div>
                        </div>
                      </SwiperSlide>
                    )
                  })}
                </Swiper>
              </Container>
            </>
          )
        })}
      </>
    )
  }
}
