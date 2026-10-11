import Public from '../components/Public/Public';
import { getProjects } from '../lib/projects';

export default async function HomePage() {
  const projects = await getProjects();
  return <Public projects={projects} />;
}
