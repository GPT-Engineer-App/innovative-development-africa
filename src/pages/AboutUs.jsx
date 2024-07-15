import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">About HUFIDA</h1>
      
      <Tabs defaultValue="story" className="w-full mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="story">Our Story</TabsTrigger>
          <TabsTrigger value="mission">Mission & Vision</TabsTrigger>
          <TabsTrigger value="team">Our Team</TabsTrigger>
          <TabsTrigger value="partners">Partners & Sponsors</TabsTrigger>
        </TabsList>
        
        <TabsContent value="story">
          <Card>
            <CardHeader>
              <CardTitle>Our Story</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">The Humanitarian Foundation for Innovative Development in Africa (HUFIDA) was established as a voluntary, not-for-profit association (Ideell Forening) with its head office in Skövde, Sweden. Founded on September 29, 2019, HUFIDA aims to create a lasting impact on sustainable development in Africa.</p>
              <p className="mb-4">Our key objectives include:</p>
              <ul className="list-disc list-inside mb-4">
                <li>Creating awareness in Sweden and other Northern countries about poverty and sustainable development challenges in Africa.</li>
                <li>Empowering vulnerable and marginalized groups in Africa with innovative tools for poverty alleviation and sustainable livelihood.</li>
                <li>Supporting and fostering solidarity amongst local African communities for meaningful integrated development, socio-cultural cohesion, and peace.</li>
                <li>Developing and deploying infrastructure to maintain a stable future of aid.</li>
              </ul>
              <p className="mb-4">To achieve these objectives, HUFIDA engages in various activities, including:</p>
              <ul className="list-disc list-inside mb-4">
                <li>Organizing seminars, conferences, and workshops on sustainable development in Africa.</li>
                <li>Setting up an Information Clearing House and Documentation (ICHD) Center on African development.</li>
                <li>Assisting in the conservation, restoration, and protection of wildlife, habitats, and associated biodiversity in Africa.</li>
                <li>Delivering humanitarian aid to vulnerable persons in conflict zones.</li>
                <li>Producing a monthly newsletter on development and humanitarian challenges in Africa.</li>
                <li>Collaborating with other organizations for mentorship, knowledge sharing, and capacity building initiatives.</li>
              </ul>
              <p>HUFIDA is committed to transparency, collaboration, and sustainable impact in all its endeavors across Africa.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="mission">
          <Card>
            <CardHeader>
              <CardTitle>Mission & Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">Mission</h3>
              <p>HUFIDA is committed to supporting the development of sustainable and impactful initiatives across Africa, empowering individuals and communities to create positive change. By fostering collaboration and providing resources and tools for task management, communication, knowledge sharing, and fundraising, HUFIDA seeks to promote regional development and address the challenges faced by local communities in Africa.</p>
              <h3 className="text-xl font-semibold mt-4 mb-2">Vision</h3>
              <p>A thriving Africa where every community has access to the tools, knowledge, and resources needed to build a prosperous and sustainable future. We envision a continent where regional development is driven by local initiatives, supported by innovative solutions and collaborative efforts.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="team">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "David Lindh", role: "Director", avatar: "/placeholder.svg" },
              { name: "Babila Fofuleng", role: "General Secretary", avatar: "/placeholder.svg" },
              { name: "Dr. Amina Nkrumah", role: "Head of Innovation", avatar: "/placeholder.svg" },
              { name: "John Okafor", role: "Director of Operations", avatar: "/placeholder.svg" },
              { name: "Sarah Mwangi", role: "Chief Financial Officer", avatar: "/placeholder.svg" },
              { name: "Grace Adebayo", role: "Director of Partnerships", avatar: "/placeholder.svg" },
            ].map((member) => (
              <Card key={member.name}>
                <CardContent className="flex flex-col items-center p-6">
                  <Avatar className="w-24 h-24 mb-4">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="partners">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "TechForGood", logo: "/placeholder.svg", description: "Providing cutting-edge technology solutions for development projects." },
              { name: "GreenAfrica Initiative", logo: "/placeholder.svg", description: "Supporting sustainable agriculture and environmental conservation efforts." },
              { name: "EduEmpower Foundation", logo: "/placeholder.svg", description: "Collaborating on educational programs and digital literacy initiatives." },
              { name: "HealthBridge International", logo: "/placeholder.svg", description: "Partnering on healthcare accessibility projects across rural Africa." },
              { name: "AfriInnovate Corp", logo: "/placeholder.svg", description: "Sponsoring innovation challenges and entrepreneurship programs." },
              { name: "Global Water Solutions", logo: "/placeholder.svg", description: "Supporting clean water and sanitation projects in underserved communities." },
            ].map((partner) => (
              <Card key={partner.name}>
                <CardContent className="flex flex-col items-center p-6">
                  <img src={partner.logo} alt={partner.name} className="w-32 h-32 object-contain mb-4" />
                  <h3 className="text-lg font-semibold text-center">{partner.name}</h3>
                  <p className="text-sm text-muted-foreground text-center mt-2">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AboutUs;