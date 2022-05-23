// import Swiper core and required modules
import SwiperCore, {A11y, EffectFade, Navigation, Pagination} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import styles from './HomeSlider.module.css'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

SwiperCore.use([Pagination])

/**
 * Render the Home Slider component.
 *
 * @author WebDevStudios
 * @param  {object}  props        The component attributes as props.
 * @param  {object}  props.slides The data for props.
 * @return {Element}              The Header component.
 */
export default function Slider({slides}) {
  return (
    <>
      <Swiper
        className={styles.swiper}
        modules={[Navigation, Pagination, A11y, EffectFade]}
        effect="fade"
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={{clickable: true, dynamicBullets: true}}
      >
        {slides.map((item, index) => {
          return (
            <SwiperSlide className={styles.swiperSlide} key={index}>
              <div
                className={styles.swiperImg}
                style={{backgroundImage: `url(${item.url})`}}
              >
                <div className="md:w-1/2 bg-black opacity-70 rounded-lg">
                  <p className="font-bold md:text-4xl text-2xl uppercase mt-8">
                    {item.title}
                  </p>
                  <p className="md:text-2xl text-xl font-bold">
                    {item.subtitle}
                  </p>
                  <p className="text-sm mb-10 leading-none">
                    {item.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}
