import PublicFooter from './PublicFooter';
import PublicHeader from './PublicHeader';
import PublicBody from './PublicBody';

const Public = ({projects}) => {
  return (
    <section>
      <PublicHeader />
      <PublicBody projects={projects} />
      <PublicFooter />
    </section>
  )
}

export default Public
