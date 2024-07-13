import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

const GetInvolved = () => {
  const [date, setDate] = useState(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Get Involved with HUFIDA</h1>
      
      <Tabs defaultValue="volunteer" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
          <TabsTrigger value="donate">Donate</TabsTrigger>
          <TabsTrigger value="fundraise">Fundraise</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
        </TabsList>
        
        <TabsContent value="volunteer">
          <Card>
            <CardHeader>
              <CardTitle>Volunteer Opportunities</CardTitle>
              <CardDescription>Join us in making a difference across Africa</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">We offer various volunteer opportunities, including:</p>
              <ul className="list-disc list-inside mb-6">
                <li>Community Development Projects</li>
                <li>Educational Initiatives</li>
                <li>Healthcare Support</li>
                <li>Environmental Conservation</li>
              </ul>
              <form className="space-y-4">
                <Input placeholder="Full Name" />
                <Input type="email" placeholder="Email Address" />
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Area of Interest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="community">Community Development</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="environment">Environment</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea placeholder="Tell us about your skills and experience" />
                <Button type="submit">Apply to Volunteer</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="donate">
          <Card>
            <CardHeader>
              <CardTitle>Support Our Cause</CardTitle>
              <CardDescription>Your donation helps us continue our vital work</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Donation Options:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button variant="outline">One-Time Donation</Button>
                    <Button variant="outline">Monthly Donation</Button>
                    <Button variant="outline">Sponsor a Project</Button>
                  </div>
                </div>
                <form className="space-y-4">
                  <Input type="number" placeholder="Amount" min="1" step="1" />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Payment Method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="card">Credit/Debit Card</SelectItem>
                      <SelectItem value="paypal">PayPal</SelectItem>
                      <SelectItem value="bank">Bank Transfer</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button type="submit">Proceed to Donate</Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="fundraise">
          <Card>
            <CardHeader>
              <CardTitle>Fundraise for HUFIDA</CardTitle>
              <CardDescription>Start your own fundraising campaign</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Fundraising Ideas:</h3>
                  <ul className="list-disc list-inside">
                    <li>Organize a charity run or walk</li>
                    <li>Host a bake sale or craft fair</li>
                    <li>Create a crowdfunding campaign</li>
                    <li>Plan a benefit concert or art exhibition</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Fundraising Tools:</h3>
                  <ul className="list-disc list-inside">
                    <li>Customizable fundraising page</li>
                    <li>Social media sharing tools</li>
                    <li>Progress tracking and goal setting</li>
                    <li>Supporter management system</li>
                  </ul>
                </div>
                <Button>Start Your Fundraiser</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="events">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Join us at our upcoming events and make a difference</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Annual Charity Gala</h3>
                    <p>Date: September 15, 2024</p>
                    <p>Location: Grand Hotel, Nairobi</p>
                    <p className="mt-2">Join us for an evening of inspiration and support for HUFIDA's initiatives.</p>
                    <Button className="mt-4">Register Now</Button>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Community Clean-up Day</h3>
                    <p>Date: July 22, 2024</p>
                    <p>Location: Various locations across Africa</p>
                    <p className="mt-2">Participate in our continent-wide effort to clean up communities and protect the environment.</p>
                    <Button className="mt-4">Sign Up</Button>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Suggest an Event</h3>
                  <form className="space-y-4">
                    <Input placeholder="Event Name" />
                    <Textarea placeholder="Event Description" />
                    <div className="flex flex-col">
                      <label htmlFor="date" className="mb-2">Proposed Date</label>
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border"
                      />
                    </div>
                    <Button type="submit">Submit Event Proposal</Button>
                  </form>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GetInvolved;