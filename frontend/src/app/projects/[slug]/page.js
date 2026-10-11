import { notFound } from 'next/navigation';
import ProjectPage from '../../../components/Project/ProjectPage';
import { getProject } from '../../../lib/projects';

export async function generateMetadata({params}) {
  const {slug} = await params;
  const project = (await getProject(slug))?.[0];
  if(!project) return {};
  return {
    title: `${project.title} | Jeremiah Sheehy`,
    description: project.short,
    openGraph: {
      title: project.title,
      description: project.short,
      images: project.images?.length ? [project.images[0]] : [],
    },
  };
}

export default async function Page({params}) {
  const {slug} = await params;
  const project = await getProject(slug);
  // [] means the API said the project doesn't exist; undefined means the API was unreachable
  if(project && !project.length) notFound();
  return <ProjectPage slug={slug} initialData={project} />;
}
