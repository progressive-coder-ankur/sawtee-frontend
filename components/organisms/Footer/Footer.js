/* eslint-disable @next/next/link-passhref */
import {seoSocialPropTypes} from '@/functions/getPagePropTypes'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styles from './Footer.module.css'
import {
  FiFacebook,
  FiMail,
  FiMapPin,
  FiPhoneIncoming,
  FiTwitter,
  FiYoutube
} from 'react-icons/fi'
import SubscriptionCall from '@/components/molecules/SubscriptionCall'

/**
 * Render the Footer component.
 *
 * @author                           WebDevStudios
 * @param  {object}  props           The component attributes as props.
 * @param  {object}  props.social    Yoast SEO social media data.
 * @param  {object}  props.menu      Array of footer menu items.
 * @param  {object}  props.menu2     Array of secondary menu items.
 * @param  {string}  props.siteTitle Yoast SEO site title.
 * @return {Element}                 The Footer component.
 */
export default function Footer({social, siteTitle, menu, menu2}) {
  return (
    <footer className={styles.footer}>
      <div className={styles.Container}>
        <div className={styles.Content}>
          <div className={styles.SixColumns}>
            <div className={styles.Column}>
              <h5 className={styles.ColumnHeading}>Contact Us</h5>
              <ul className={styles.LinkList}>
                <li className={styles.LinkListItem}>
                  <FiPhoneIncoming />
                  <a className={styles.Link}>+977-01-4444438</a>
                </li>
                <li className={styles.LinkListItem}>
                  <FiMail />
                  <a className={styles.Link} href="mailto:sawtee@sawtee.org">
                    sawtee@sawtee.org
                  </a>
                </li>
                <li className={styles.LinkListItem}>
                  <FiMapPin />
                  <a className={styles.Link}>
                    Tukucha Marg, Baluwatar, Kathmandu, Nepal
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.Column}>
              <h5 className={styles.ColumnHeading}>Publications</h5>
              <ul className={styles.LinkList}>
                {menu?.map((item) => {
                  return (
                    <>
                      <li key={item.id + 200} className={styles.LinkListItem}>
                        <Link href={item.path}>
                          <a className={styles.Link}> {item.label}</a>
                        </Link>
                      </li>
                    </>
                  )
                })}
              </ul>
            </div>

            <div className={styles.Column}>
              <h5 className={styles.ColumnHeading}>Links</h5>
              <ul className={styles.LinkList}>
                {menu2?.map((item) => {
                  return (
                    <li key={item.id + 500} className={styles.LinkListItem}>
                      <Link href={item.path}>
                        <a className={styles.Link}> {item.label}</a>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className={styles.SubscribeNewsletterColumn}>
              <div className={styles.SubscribeNewsletterContainer}>
                <SubscriptionCall />
              </div>
            </div>
          </div>
          <div className={styles.Divider} />
          <div className={styles.ThreeColRow}>
            <div className={styles.LogoContainer}>
              <Link href="/">
                <h5
                  className={styles.LogoText}
                  title="South Asia Watch on Trade, Economics and Environment"
                >
                  {siteTitle}
                </h5>
              </Link>
            </div>

            <p className={styles.CopywrightNotice}>
              &copy; {new Date().getFullYear()} {siteTitle}. All Rights Reserved
              &reg;.
            </p>

            <div className={styles.SocialLinksContainer}>
              {!!social &&
                Object.entries(social).map(([key, value]) => {
                  if (value) {
                    if (key === 'facebook') {
                      return (
                        <Link key={key} href={value}>
                          <a className={styles.SocialLink}>
                            <FiFacebook />
                          </a>
                        </Link>
                      )
                    } else if (key === 'twitter' && value) {
                      return (
                        <Link key={key} href={value}>
                          <a className={styles.SocialLink}>
                            <FiTwitter />
                          </a>
                        </Link>
                      )
                    }
                    return (
                      <Link key={key} href={value}>
                        <a className={styles.SocialLink}>
                          <FiYoutube />
                        </a>
                      </Link>
                    )
                  }
                })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  ...seoSocialPropTypes,
  siteTitle: PropTypes.string
}
