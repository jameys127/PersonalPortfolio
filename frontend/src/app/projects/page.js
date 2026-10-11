import Projects from '../../components/Project/Project';
import { getProjects } from '../../lib/projects';

export const metadata = {
  title: 'Projects | Jeremiah Sheehy',
};

export default async function ProjectsPage() {
  const projects = await getProjects();
  return <Projects projects={projects} />;
}
