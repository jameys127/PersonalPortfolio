import React, { Fragment } from 'react'
import PublicHeader from '../Public/PublicHeader'
import PublicFooter from '../Public/PublicFooter'

const ProjectLayout = ({children}) => {
  return (
    <Fragment>
        <PublicHeader />
        <div className='project-page-container'>
            {children}
        </div>
        <PublicFooter />
    </Fragment>
  )
}

export default ProjectLayout
