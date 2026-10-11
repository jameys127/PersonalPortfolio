import { Fragment } from 'react';
import DashHeader from './DashHeader';
import DashFooter from './DashFooter';

const DashLayout = ({children}) => {
  return (
    <Fragment>
        <DashHeader />
        <div className='dash-container'>
            {children}
        </div>
        <DashFooter />
    </Fragment>
  )
}

export default DashLayout
