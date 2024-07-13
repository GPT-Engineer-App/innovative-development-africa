import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalendarIcon, FileText, Image } from "lucide-react";

const News = () => {
  const [activeTab, setActiveTab] = useState("blog");

  const blogPosts = [
    {
      id: 1,
      title: "HUFIDA's Impact on Rural Communities",
      date: "2024-03-15",
      excerpt: "Exploring the transformative effects of our recent initiatives in rural Cameroon.",
    },
    {
      id: 2,
      title: "Sustainable Agriculture: A Path to Food Security",
      date: "2024-03-10",
      excerpt: "How HUFIDA is promoting sustainable farming practices to ensure long-term food security.",
    },
    {
      id: 3,
      title: "Empowering Youth Through Education",
      date: "2024-03-05",
      excerpt: "Our latest educational programs are creating new opportunities for young Africans.",
    },
  ];

  const pressReleases = [
    {
      id: 1,
      title: "HUFIDA Launches New Clean Water Initiative",
      date: "2024-03-20",
      content: "Today, HUFIDA announced the launch of a groundbreaking clean water project...",
    },
    {
      id: 2,
      title: "Partnership Formed with Global Tech Company",
      date: "2024-03-18",
      content: "HUFIDA is excited to announce a new partnership with TechForGood...",
    },
  ];

  const mediaGallery = [
    {
      id: 1,
      type: "image",
      title: "Community Garden Opening",
      src: "/placeholder.svg",
    },
    {
      id: 2,
      type: "video",
      title: "HUFIDA Annual Conference Highlights",
      src: "https://example.com/video-placeholder.mp4",
    },
    {
      id: 3,
      type: "image",
      title: "Clean Water Project Completion",
      src: "/placeholder.svg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">News & Media</h1>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="blog">Blog</TabsTrigger>
          <TabsTrigger value="press">Press Releases</TabsTrigger>
          <TabsTrigger value="media">Media Gallery</TabsTrigger>
        </TabsList>
        
        <TabsContent value="blog">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id}>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <div className="text-sm text-muted-foreground flex items-center">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {post.date}
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{post.excerpt}</p>
                  <Button className="mt-4">Read More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="press">
          <div className="space-y-6">
            {pressReleases.map((release) => (
              <Card key={release.id}>
                <CardHeader>
                  <CardTitle>{release.title}</CardTitle>
                  <div className="text-sm text-muted-foreground flex items-center">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {release.date}
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{release.content}</p>
                  <Button className="mt-4">
                    <FileText className="mr-2 h-4 w-4" />
                    Download Full Release
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="media">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mediaGallery.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-4">
                  {item.type === "image" ? (
                    <img src={item.src} alt={item.title} className="w-full h-48 object-cover mb-4 rounded" />
                  ) : (
                    <video src={item.src} className="w-full h-48 object-cover mb-4 rounded" controls />
                  )}
                  <p className="font-semibold">{item.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Subscribe to Our Newsletter</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex gap-4">
            <Input type="email" placeholder="Your email address" className="flex-grow" />
            <Button type="submit">Subscribe</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default News;