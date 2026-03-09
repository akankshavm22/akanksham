import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Education } from "./pages/Education";
import { Experience } from "./pages/Experience";
import { Skills } from "./pages/Skills";
import { Projects } from "./pages/Projects";
import { Research } from "./pages/Research";
import { Certifications } from "./pages/Certifications";
import { CareerGoals } from "./pages/CareerGoals";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "education", Component: Education },
      { path: "experience", Component: Experience },
      { path: "skills", Component: Skills },
      { path: "projects", Component: Projects },
      { path: "research", Component: Research },
      { path: "certifications", Component: Certifications },
      { path: "career-goals", Component: CareerGoals },
      { path: "contact", Component: Contact },
    ],
  },
]);