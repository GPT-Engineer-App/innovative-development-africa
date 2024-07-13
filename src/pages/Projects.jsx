import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("current");

  const currentProjects = [
    {
      id: 1,
      title: "The Sustainability Project Incubator LAB",
      location: "Cameroon",
      description: "A national consultative firm advancing science, innovation, and strategic leadership for a sustainable society.",
      progress: 75,
    },
    // Add more current projects as needed
  ];

  const pastProjects = [
    {
      id: 1,
      title: "Clean Water Initiative",
      location: "Kenya",
      description: "Provided access to clean water for 10,000 people in rural Kenya.",
      impact: "Reduced waterborne diseases by 60% in the target communities.",
    },
    // Add more past projects as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Projects</h1>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList>
          <TabsTrigger value="current">Current Projects</TabsTrigger>
          <TabsTrigger value="past">Past Projects</TabsTrigger>
          <TabsTrigger value="map">Project Map</TabsTrigger>
        </TabsList>
        
        <TabsContent value="current">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentProjects.map((project) => (
              <Card key={project.id}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4" /> {project.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {project.progress}% Complete
                    </span>
                  </div>
                  <Button className="mt-4">Get Involved</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="past">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastProjects.map((project) => (
              <Card key={project.id}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4" /> {project.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{project.description}</p>
                  <p className="font-semibold">Impact:</p>
                  <p>{project.impact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="map">
          <Card>
            <CardContent className="p-6">
              <p className="text-center text-lg mb-4">Interactive Map Coming Soon</p>
              <p className="text-center">We're working on an interactive map to showcase the geographical areas where HUFIDA operates. Stay tuned for updates!</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      {activeTab === "current" && (
        <section className="mt-12">
          <h2 className="text-3xl font-semibold mb-6">Featured Project: The Sustainability Project Incubator LAB</h2>
          <Card>
            <CardHeader>
              <CardTitle>The Sustainability Project Incubator LAB</CardTitle>
              <CardDescription>Accelerating Change Advisory Services in Cameroon</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                The Sustainability Project Incubator LAB is a national consultative firm with several projects at the local and national level. With years of experience, we focus on advancing science, innovation, and strategic leadership to foster a strong economy that thrives within nature's limits.
              </p>
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="mb-4">A sustainable society where individuals, communities, businesses, and institutions flourish within nature's limits.</p>
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="mb-4">To accelerate the transition to a sustainable society in Cameroon, supporting the nation's ambitious programme for economic emergence by 2035.</p>
              <h3 className="text-xl font-semibold mb-2">Our Approach</h3>
              <p className="mb-4">We employ the Framework for Strategic Sustainable Development (FSSD), a science-based approach used successfully in hundreds of forward-thinking organizations worldwide.</p>
              <h3 className="text-xl font-semibold mb-2">Contact</h3>
              <p>Fofuleng Babila</p>
              <p>Email: fofulengbabila@gmail.com</p>
              <p>Telephone: 670172866 / 677554684</p>
              <p>WhatsApp: +46700292915</p>
              <p>Location: Vicky street Small Mankon Bamenda, Cameroon</p>
            </CardContent>
          </Card>
        </section>
      )}
    </div>
  );
};

export default Projects;