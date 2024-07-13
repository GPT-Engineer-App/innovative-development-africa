import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <span>123 HUFIDA Street, Yaounde, Cameroon</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <span>+237 123 456 789</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <span>info@hufida.org</span>
            </div>
            
            <div className="pt-4">
              <h3 className="font-semibold mb-2">Departments</h3>
              <ul className="space-y-2">
                <li>General Inquiries: info@hufida.org</li>
                <li>Projects: projects@hufida.org</li>
                <li>Donations: donate@hufida.org</li>
              </ul>
            </div>

            <div className="pt-4">
              <h3 className="font-semibold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com/hufida" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-6 w-6 text-muted-foreground hover:text-primary" />
                </a>
                <a href="https://twitter.com/hufida" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary" />
                </a>
                <a href="https://linkedin.com/company/hufida" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary" />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;