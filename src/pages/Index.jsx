import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronRight, Mail, Phone, MapPin, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { UserRegistrationForm } from "@/components/UserRegistrationForm";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

// Mock API function (replace with actual API call)
const fetchHomeContent = async () => {
  // Simulating API call
  return {
    heroTitle: "Empowering Africa Through Innovation",
    missionStatement: "To foster sustainable development in Africa through innovative solutions and community empowerment.",
    featuredProjects: [
      { id: 1, title: "The Sustainability Project Incubator LAB", description: "Advancing science, innovation, and strategic leadership for a sustainable society in Cameroon." },
      { id: 2, title: "Enhancing Staple Crop Production", description: "Implementing low-tech practices to improve staple crop production in Cameroon." },
      { id: 3, title: "Agriculture and Agribusiness Wealth Creation Initiative", description: "Identifying opportunities for wealth creation through agriculture and agribusiness in Cameroon." },
    ],
  };
};

const Index = () => {
  const { data: homeContent, isLoading, error } = useQuery({
    queryKey: ['homeContent'],
    queryFn: fetchHomeContent,
  });

  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading content</div>;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/hero-banner.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{homeContent.heroTitle}</h1>
          <div className="flex justify-center space-x-4">
            <Link to="/get-involved">
              <Button size="lg" variant="secondary">Get Involved</Button>
            </Link>
            <Dialog open={isRegistrationOpen} onOpenChange={setIsRegistrationOpen}>
              <DialogTrigger asChild>
                <Button size="lg" variant="outline">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Register
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] max-h-[90vh]">
                <DialogHeader>
                  <DialogTitle>Create an Account</DialogTitle>
                  <DialogDescription>
                    Join HUFIDA and be part of our mission to empower Africa.
                  </DialogDescription>
                </DialogHeader>
                <ScrollArea className="h-[60vh] pr-4">
                  <UserRegistrationForm onSuccess={() => setIsRegistrationOpen(false)} />
                </ScrollArea>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Rest of the component remains unchanged */}
      {/* ... */}
    </div>
  );
};

export default Index;