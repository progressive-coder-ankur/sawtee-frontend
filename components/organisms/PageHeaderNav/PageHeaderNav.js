import Link from 'next/link'
import PropTypes from 'prop-types'

/**
 * Render a publication component header.
 *
 * @param  {object}  props      The component attributes as props.
 * @param  {object}  props.data Publication data.
 * @return {Element}            Publication Main Header Component.
 */
function PageHeaderNav({data}) {
  if (!data || !data?.length) {
    return null
  }

  return (
    <>
      <div className="px-4 pb-8 max-w-full hidden sm:block sticky top-20 z-40">
        <div className="grid gap-2 row-gap-2 p-6 sm:row-gap-4 md:grid-cols-5 bg-white rounded-xl shadow-lg">
          {data.map((item, index) => {
            return (
              <div key={index} className="flex bg-opacity-70justify-center">
                <Link href={item.path}>
                  <a className="text-sm text-black uppercase font-semibold">
                    {item.label}
                  </a>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

PageHeaderNav.prototype = {
  data: PropTypes.arrayOf(PropTypes.object)
}

export default PageHeaderNav
