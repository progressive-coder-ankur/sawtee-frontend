import allMenus from './allMenus'
import defaultSeoFields from './defaultSeoFields'
// import defaultPageAcfFields from './defaultPageAcfFields'

// Query partial: retrieve default data for all frontend pages.
const defaultPageData = `
  ${defaultSeoFields}
  ${allMenus}

`

export default defaultPageData
