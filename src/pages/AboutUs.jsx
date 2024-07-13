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
              <p>HUFIDA was founded in 2010 by a group of passionate individuals who saw the need for innovative solutions to address Africa's developmental challenges. Our journey began with small-scale projects in rural communities, focusing on sustainable agriculture and clean water access.</p>
              <p className="mt-4">Over the years, we've expanded our reach and impact, partnering with local and international organizations to implement cutting-edge technologies and empower communities across the continent.</p>
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
              <p>To foster sustainable development in Africa through innovative solutions and community empowerment, addressing critical challenges in education, healthcare, agriculture, and technology.</p>
              <h3 className="text-xl font-semibold mt-4 mb-2">Vision</h3>
              <p>A thriving Africa where every community has access to the tools, knowledge, and resources needed to build a prosperous and sustainable future.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="team">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Dr. Amina Nkrumah", role: "Founder & CEO", avatar: "/placeholder.svg" },
              { name: "John Okafor", role: "Director of Operations", avatar: "/placeholder.svg" },
              { name: "Sarah Mwangi", role: "Head of Innovation", avatar: "/placeholder.svg" },
              { name: "Robert Mensah", role: "Chief Financial Officer", avatar: "/placeholder.svg" },
              { name: "Grace Adebayo", role: "Director of Partnerships", avatar: "/placeholder.svg" },
              { name: "David Lindh", role: "Board Member", avatar: "/placeholder.svg" },
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