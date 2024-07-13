import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
    {
      id: 2,
      title: "Enhancing Staple Crop Production with Low-Tech Practices",
      location: "Cameroon",
      description: "Implementing cutting-edge low-tech practices to improve staple crop production through soil preparation, planting techniques, and pest management.",
      progress: 40,
    },
  ];

  const pastProjects = [
    {
      id: 1,
      title: "Clean Water Initiative",
      location: "Kenya",
      description: "Provided access to clean water for 10,000 people in rural Kenya.",
      impact: "Reduced waterborne diseases by 60% in the target communities.",
    },
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
          <h2 className="text-3xl font-semibold mb-6">Featured Project: Enhancing Staple Crop Production with Low-Tech Practices</h2>
          <Card>
            <CardHeader>
              <CardTitle>Enhancing Staple Crop Production with Low-Tech Practices</CardTitle>
              <CardDescription>Implementing cutting-edge low-tech practices in Cameroon</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                This project aims to enhance the production of staple crops in Cameroon by focusing on soil preparation, planting techniques, and pest management using cutting-edge low-tech practices.
              </p>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="context">
                  <AccordionTrigger>Context</AccordionTrigger>
                  <AccordionContent>
                    <p><strong>Objective:</strong> To enhance the production of staple crops in Cameroon by focusing on soil preparation, planting techniques, and pest management using cutting-edge low-tech practices.</p>
                    <p><strong>Current Focus:</strong> Implementing composting, optimal seed spacing, proper seed depth, and natural pest management to improve soil fertility, plant growth, and crop protection.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="steps">
                  <AccordionTrigger>Step-by-Step Guide</AccordionTrigger>
                  <AccordionContent>
                    <ol className="list-decimal list-inside space-y-2">
                      <li><strong>Soil Preparation:</strong> Implement composting to increase organic matter and improve soil structure and fertility.</li>
                      <li><strong>Planting Techniques:</strong> Use optimal seed spacing and proper seed depth to ensure healthy plant growth.</li>
                      <li><strong>Pest Management:</strong> Apply natural pesticides and implement integrated pest management strategies.</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="context-zoom">
                  <AccordionTrigger>Contextual Zooming</AccordionTrigger>
                  <AccordionContent>
                    <p><strong>Zooming In:</strong> Focus on specific aspects such as improving composting practices.</p>
                    <p><strong>Zooming Out:</strong> Integrate multiple practices to understand their interconnectedness and overall impact on agricultural success.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="example">
                  <AccordionTrigger>Example Scenario</AccordionTrigger>
                  <AccordionContent>
                    <p><strong>Context:</strong> Enhancing staple crop production using composting, optimal seed spacing, proper seed depth, and natural pest management in Cameroon.</p>
                    <p><strong>Domains:</strong> Soil Preparation, Planting Techniques, Pest Management</p>
                    <p><strong>Usability Suggestions:</strong></p>
                    <ul className="list-disc list-inside">
                      <li>Implement composting to increase organic matter and improve soil fertility.</li>
                      <li>Use optimal seed spacing and proper seed depth to ensure healthy plant growth.</li>
                      <li>Apply natural pesticides and monitor pest populations while using beneficial insects for biological control.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>
      )}
    </div>
  );
};

export default Projects;