import { useFetchProjects } from './fetchProjects'

const Projects = () => {
  const { loading, projects } = useFetchProjects()

  if (loading) {
    return (
      <section className="projects">
        <h2>Loading...</h2>
      </section>
    )
  }
  if (loading) {
    return (
      <section className="projects">
        <div className="title">
          <h2>projects</h2>
        </div>
      </section>
    )
  }

  return <h2>Projects</h2>
}
export default Projects
