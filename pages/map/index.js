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
export default function Map({post}) {
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

          <section className="w-full relativ">
            <div className="p-12 grid md:grid-cols-publicationPage sm:grid-cols-1 gap-y-10 gap-x-10 justify-center items-start">
              <Container paddingBtm={true} paddingTop={true}>
                <article className="innerWrap">
                  <Blocks blocks={post?.blocks} />
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.8575320111836!2d85.32714031438493!3d27.72168473147007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1913dfb0b0b3%3A0x4d5d3519d24d3c38!2sSouth%20Asia%20Watch%20on%20Trade%2C%20Economics%20and%20Environment%20(SAWTEE)!5e0!3m2!1sen!2snp!4v1636368196973!5m2!1sen!2snp"
                    width="600"
                    height="450"
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
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
  return await getPostTypeStaticProps({slug: '/map'}, postType)
}

Map.propTypes = {
  ...getPagePropTypes(postType)
}
