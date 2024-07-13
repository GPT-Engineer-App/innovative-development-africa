import { Home, Info, Briefcase, HandHeart, Newspaper, Mail } from "lucide-react";
import Index from "./pages/Index.jsx";

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
    page: <div>About Us Page</div>,
  },
  {
    title: "Projects",
    to: "/projects",
    icon: <Briefcase className="h-4 w-4" />,
    page: <div>Projects Page</div>,
  },
  {
    title: "Get Involved",
    to: "/get-involved",
    icon: <HandHeart className="h-4 w-4" />,
    page: <div>Get Involved Page</div>,
  },
  {
    title: "News",
    to: "/news",
    icon: <Newspaper className="h-4 w-4" />,
    page: <div>News Page</div>,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <Mail className="h-4 w-4" />,
    page: <div>Contact Page</div>,
  },
];