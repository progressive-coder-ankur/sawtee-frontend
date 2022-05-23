import styles from './CustomSlider.module.css'
import React, {useState, useEffect} from 'react'
// import Link from 'next/dist/client/link'
import cn from 'classnames'
import {usePalette} from 'react-palette'
import {useSwipeable} from 'react-swipeable'
import {HiArrowNarrowLeft, HiArrowNarrowRight} from 'react-icons/hi'
import {BsDot} from 'react-icons/bs'
// import PropTypes from 'prop-types'

/**
 * Render the Custom Slider component.
 *
 * @author Ankur
 * @param  {object}  props        The component attributes as props.
 * @param  {object}  props.slides Data for Slides
 * @return {Element}              The Custom Slider component.
 */
export default function CustomSlider({slides}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeImageLink, setActiveImageLink] = useState(slides[0].imgPath)
  const [paused, setPaused] = useState(false)
  const {data} = usePalette(activeImageLink)
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = slides.length - 1
    } else if (newIndex > slides.length - 1) {
      newIndex = 0
    }
    setActiveIndex(newIndex)
    setActiveImageLink(slides[newIndex].imgPath)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused && activeIndex < slides.length - 1) {
        updateIndex(activeIndex + 1)
      } else if (!paused && activeIndex === slides.length - 1) {
        updateIndex(0)
      }
    }, 3000)

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  })

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1)
  })

  const Hex = `${data.darkMuted}`

  return (
    <div
      {...handlers}
      className={cn(styles.container)}
      style={{backgroundColor: Hex}}
    >
      <div
        className={styles.wrapper}
        onMouseEnter={() => {
          setPaused(true)
        }}
        onMouseLeave={() => {
          setPaused(false)
        }}
      >
        <div
          className={styles.inner}
          style={{transform: `translateX(-${activeIndex * 100}%)`}}
        >
          <Slide
            slides={slides}
            width="100%"
            updateIndex={updateIndex}
            activeIndex={activeIndex}
          />
        </div>
      </div>
      <div className={styles.indicators}>
        <button
          className="absolute top-2/4 left-0"
          onClick={() => {
            if (activeIndex <= 0) {
              updateIndex(slides.length - 1)
            } else if (activeIndex <= slides.length - 1) {
              updateIndex(activeIndex - 1)
            }
          }}
        >
          <HiArrowNarrowLeft className="w-10 h-10 text-gray-100" />
        </button>
        <button
          className="absolute top-2/4 right-0"
          onClick={() => {
            if (activeIndex === slides.length - 1) {
              updateIndex(0)
            } else {
              updateIndex(activeIndex + 1)
            }
          }}
        >
          <HiArrowNarrowRight className="w-10 h-10 text-gray-100" />
        </button>
      </div>

      <ul className=" pagination flex justify-center items-center md:gap-4 mt-4">
        {slides?.map((slide, i) => {
          return (
            <li
              key={i}
              className={`${i === activeIndex ? 'active' : 'text-gray-300'}`}
            >
              <span
                className="cursor-pointer shadow-lg"
                onClick={() => {
                  updateIndex(i)
                }}
              >
                <BsDot className="h-10 w-10 aspect-1 rounded-full bg-gray-900 bg-opacity-30" />
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const Slide = ({slides, width, updateIndex, activeIndex}) => {
  return (
    <>
      {slides?.map((slide, i) => {
        return (
          <div key={i} className={styles.sliderItem} width={width}>
            <img
              className={styles.image}
              src={slide.imgPath}
              alt={slide.title}
            />
            <div className={styles.content}>
              <p className={styles.title}>{slide.title}</p>
              <p className={styles.subtitle}>{slide.subtitle}</p>
            </div>
            <div className={cn(styles.navigation)}>
              <ul className={styles.list}>
                {slides?.map((slide, i) => {
                  return (
                    <li
                      key={i}
                      className={`${
                        i === activeIndex ? styles.active : styles.listItem
                      }`}
                    >
                      <span
                        className="trigger cursor-pointer"
                        onClick={() => {
                          updateIndex(i)
                        }}
                      >
                        {slide.title}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        )
      })}
    </>
  )
}
