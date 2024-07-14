import { Home, Info, Briefcase, HandHeart, Newspaper, Mail, Settings } from "lucide-react";
import Index from "./pages/Index.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Projects from "./pages/Projects.jsx";
import GetInvolved from "./pages/GetInvolved.jsx";
import News from "./pages/News.jsx";
import Contact from "./pages/Contact.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "About Us",
    to: "/about",
    icon: <Info className="h-4 w-4" />,
    page: <AboutUs />,
  },
  {
    title: "Projects",
    to: "/projects",
    icon: <Briefcase className="h-4 w-4" />,
    page: <Projects />,
  },
  {
    title: "Get Involved",
    to: "/get-involved",
    icon: <HandHeart className="h-4 w-4" />,
    page: <GetInvolved />,
  },
  {
    title: "News",
    to: "/news",
    icon: <Newspaper className="h-4 w-4" />,
    page: <News />,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <Mail className="h-4 w-4" />,
    page: <Contact />,
  },
  {
    title: "Admin",
    to: "/admin",
    icon: <Settings className="h-4 w-4" />,
    page: <AdminPanel />,
  },
];