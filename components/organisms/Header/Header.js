import Container from '@/components/atoms/Container'
import Logo from '@/components/atoms/Logo'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styles from './Header.module.css'
import Navbar from '../../molecules/Navbar/Navbar'
import style from '../../molecules/Navbar/Navbar.module.css'

/**
 * Render the Header component.
 *
 * @author WebDevStudios
 * @param  {object}  props        The component attributes as props.
 * @param  {object}  props.menu   The header menu object.
 * @param  {Element} props.search The search component.
 * @return {Element}              The Header component.
 */
export default function Header({menu, search}) {
  return (
    <>
      <div className="bg-white sticky top-0 z-50">
        <a className={styles.skip} href="#page-content">
          Skip to Main Content
        </a>

        <header className={styles.header}>
          <Container paddingTop={false} paddingBtm={false}>
            <div className={styles.navigation}>
              <Link href="/">
                <a>
                  <Logo className={styles.logo} type="dark" />
                </a>
              </Link>
              <Navbar menu={menu} style={style} />
              {search && <div className={styles.search}>{search}</div>}
            </div>
          </Container>
        </header>
      </div>
    </>
  )
}

Header.propTypes = {
  menu: PropTypes.array,
  search: PropTypes.element
}
