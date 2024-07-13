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
    {
      id: 3,
      title: "Agriculture and Agribusiness Wealth Creation Initiative",
      location: "Cameroon",
      description: "Identifying opportunities and strategies for achieving wealth through agriculture and agribusiness in Cameroon.",
      progress: 25,
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
          <h2 className="text-3xl font-semibold mb-6">Featured Project: Agriculture and Agribusiness Wealth Creation Initiative</h2>
          <Card>
            <CardHeader>
              <CardTitle>Agriculture and Agribusiness Wealth Creation Initiative</CardTitle>
              <CardDescription>Leveraging agriculture and agribusiness opportunities to build wealth in Cameroon</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                This project aims to identify opportunities and strategies for achieving wealth through agriculture and agribusiness in Cameroon, focusing on key areas such as crop production, livestock farming, and agro-processing.
              </p>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="context">
                  <AccordionTrigger>Context and Objectives</AccordionTrigger>
                  <AccordionContent>
                    <p><strong>Objective:</strong> To identify opportunities and strategies for achieving wealth through agriculture and agribusiness in Cameroon.</p>
                    <p><strong>Current Focus:</strong> Evaluating key areas such as crop production, livestock farming, and agro-processing, with a focus on market demand, best practices, and value addition.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="domains">
                  <AccordionTrigger>Main Domains</AccordionTrigger>
                  <AccordionContent>
                    <ol className="list-decimal list-inside space-y-2">
                      <li><strong>Crop Production:</strong> Focusing on staple crops, cash crops, and organic farming.</li>
                      <li><strong>Livestock Farming:</strong> Emphasizing poultry, cattle, and aquaculture.</li>
                      <li><strong>Agro-Processing:</strong> Developing food processing, beverage production, and packaging and distribution.</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="components">
                  <AccordionTrigger>Contextual Components</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>Crop Production:</strong> Market demand, export potential, certification and quality.</li>
                      <li><strong>Livestock Farming:</strong> Animal husbandry practices, breeding and genetics, sustainability practices.</li>
                      <li><strong>Agro-Processing:</strong> Value addition, quality control, market access.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="entanglement">
                  <AccordionTrigger>Entanglement Nodes</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Market Demand ↔ Export Potential</li>
                      <li>Animal Husbandry Practices ↔ Breeding and Genetics</li>
                      <li>Value Addition ↔ Quality Control</li>
                      <li>Market Demand ↔ Market Access</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="suggestions">
                  <AccordionTrigger>Usability Suggestions</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>Crop Production:</strong> Focus on high-demand staple crops and cash crops with strong export potential.</li>
                      <li><strong>Livestock Farming:</strong> Implement best practices in animal husbandry and advanced breeding techniques to enhance livestock productivity.</li>
                      <li><strong>Agro-Processing:</strong> Invest in value-adding processes, ensuring quality control and effective packaging for market access.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="zooming">
                  <AccordionTrigger>Contextual Zooming</AccordionTrigger>
                  <AccordionContent>
                    <p><strong>Zooming In:</strong> Focus on specific aspects within a domain, such as improving poultry farming practices in the livestock farming sector.</p>
                    <p><strong>Zooming Out:</strong> Integrate multiple domains to understand their interconnectedness and overall impact on wealth creation in Cameroon's agriculture and agribusiness sector.</p>
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