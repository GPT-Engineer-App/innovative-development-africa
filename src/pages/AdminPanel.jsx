import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectManagement from "../components/admin/ProjectManagement";
import UserManagement from "../components/admin/UserManagement";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

// Mock API functions (replace with actual API calls)
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

const updateHomeContent = async (newContent) => {
  // Simulating API call
  console.log("Updating home content:", newContent);
  return newContent;
};

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [homeContent, setHomeContent] = useState({
    heroTitle: "",
    missionStatement: "",
    featuredProjects: [],
  });

  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ['homeContent'],
    queryFn: fetchHomeContent,
  });

  const updateMutation = useMutation({
    mutationFn: updateHomeContent,
    onSuccess: () => {
      queryClient.invalidateQueries('homeContent');
      toast.success("Home content updated successfully");
    },
    onError: () => {
      toast.error("Failed to update home content");
    },
  });

  useEffect(() => {
    if (data) {
      setHomeContent(data);
    }
  }, [data]);

  const handleContentChange = (e) => {
    const { name, value } = e.target;
    setHomeContent(prev => ({ ...prev, [name]: value }));
  };

  const handleProjectChange = (index, field, value) => {
    setHomeContent(prev => ({
      ...prev,
      featuredProjects: prev.featuredProjects.map((project, i) => 
        i === index ? { ...project, [field]: value } : project
      ),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMutation.mutate(homeContent);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading content</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Admin Panel</h1>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="home">Home Content</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
        </TabsList>
        
        <TabsContent value="home">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="heroTitle" className="block text-sm font-medium text-gray-700">Hero Title</label>
              <input
                type="text"
                id="heroTitle"
                name="heroTitle"
                value={homeContent.heroTitle}
                onChange={handleContentChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="missionStatement" className="block text-sm font-medium text-gray-700">Mission Statement</label>
              <textarea
                id="missionStatement"
                name="missionStatement"
                value={homeContent.missionStatement}
                onChange={handleContentChange}
                rows="3"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              ></textarea>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Featured Projects</h3>
              {homeContent.featuredProjects.map((project, index) => (
                <div key={project.id} className="mt-2 space-y-2">
                  <input
                    type="text"
                    value={project.title}
                    onChange={(e) => handleProjectChange(index, 'title', e.target.value)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="Project Title"
                  />
                  <textarea
                    value={project.description}
                    onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
                    rows="2"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="Project Description"
                  ></textarea>
                </div>
              ))}
            </div>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Update Home Content
            </button>
          </form>
        </TabsContent>
        
        <TabsContent value="projects">
          <ProjectManagement />
        </TabsContent>
        
        <TabsContent value="users">
          <UserManagement />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminPanel;