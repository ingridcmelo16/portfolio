import { Nav } from "@/components/Nav"
import { Hero } from "@/components/Hero"
import { Results } from "@/components/Results"
import { About } from "@/components/About"
import { Projects } from "@/components/Projects"
import { Process } from "@/components/Process"
import { Experience } from "@/components/Experience"
import { Contact } from "@/components/Contact"

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Results />
      <About />
      <Projects />
      <Process />
      <Experience />
      <Contact />
    </main>
  )
}
