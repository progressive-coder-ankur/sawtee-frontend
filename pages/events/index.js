import Container from '@/components/atoms/Container'
import Layout from '@/components/common/Layout'
import Blocks from '@/components/molecules/Blocks'
import getPagePropTypes from '@/functions/getPagePropTypes'
import getPostTypeStaticProps from '@/functions/wordpress/postTypes/getPostTypeStaticProps'
import Hero from '@/components/organisms/Hero'
import {events} from '@/lib/data'
import Sidebar from '@/components/organisms/Sidebar'
// Define route post type.
const postType = 'page'

/**
 * Render the Publication Page component.
 *
 * @author WebDevStudios
 * @param  {object}  props      The component attributes as props.
 * @param  {object}  props.post Post data from WordPress.
 * @return {Element}            The HomePage component.
 */
export default function About({post}) {
  const {seo, ...postData} = post

  // Display dynamic page data if publication page retrieved from WP.
  if (postData && Object.keys(postData).length > 0) {
    return (
      <>
        <Layout seo={{...seo}}>
          <Hero
            title={post.title}
            backgroundImage={{
              url: '/images/undraw_connected_world_wuay.png'
            }}
            fullHeight={false}
          />

          <section className="w-full relative bg-gray-100">
            <div className="p-12 grid md:grid-cols-publicationPage sm:grid-cols-1 gap-y-10 gap-x-10 justify-center items-start">
              <Container paddingBtm={true} paddingTop={true}>
                <article className="innerWrap">
                  <Blocks blocks={post?.blocks} />
                </article>
              </Container>
              <div className="grid grid-cols-1 gap-y-10 sticky top-20 z-40">
                <Sidebar events={events} />
              </div>
            </div>
          </section>
        </Layout>
      </>
    )
  }

  // Display static page content as fallback.
  return (
    <Layout seo={{...seo}}>
      <Container paddingTop={false} paddingBtm={false}>
        <article>
          <p>
            To display your WordPress homepage dynamically, set your homepage to
            a static page via the WP dashboard (Settings: Reading Settings).
          </p>
        </article>
      </Container>
    </Layout>
  )
}

/**
 * Get post static props.
 *
 * @author WebDevStudios
 * @return {object} Post props.
 */
export async function getStaticProps() {
  return await getPostTypeStaticProps({slug: '/events'}, postType)
}

About.propTypes = {
  ...getPagePropTypes(postType)
}
