import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Badge } from "../components/ui/badge";

export function ContactPage() {
  const contactMethods = [
    {
      icon: (props: any) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h2l2 5-2 1a11 11 0 006 6l1-2 5 2v2a2 2 0 01-2 2h-1C7.82 19 5 12.18 5 7V6a2 2 0 00-2-2z"/></svg>),
      title: "Call Us",
      details: "+1 (555) 123-TRIP",
      description: "Speak with our travel experts",
      available: "Mon-Fri 8AM-8PM"
    },
    {
      icon: (props: any) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V8a2 2 0 00-2-2H3a2 2 0 00-2 2v6a2 2 0 002 2z"/></svg>),
      title: "Email Us",
      details: "hello@travelease.com",
      description: "Get detailed responses",
      available: "24/7 Response"
    },
    {
      icon: (props: any) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15a4 4 0 01-4 4H7l-4 4V7a4 4 0 014-4h10a4 4 0 014 4v8z"/></svg>),
      title: "Live Chat",
      details: "Chat Support",
      description: "Instant help when you need it",
      available: "Online Now"
    },
    {
      icon: (props: any) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3M3 11h18M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"/></svg>),
      title: "Book Consultation",
      details: "Free 30-min session",
      description: "Personalized travel planning",
      available: "Schedule Today"
    }
  ];

  const offices = [
    {
      city: "New York",
      address: "123 Broadway, Suite 456, New York, NY 10013",
      phone: "+1 (555) 123-4567",
      email: "newyork@travelease.com",
      hours: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM"
    },
    {
      city: "Los Angeles",
      address: "456 Sunset Blvd, Suite 789, Los Angeles, CA 90028",
      phone: "+1 (555) 987-6543",
      email: "losangeles@travelease.com",
      hours: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM"
    },
    {
      city: "London",
      address: "78 King's Road, Chelsea, London SW3 4NY, UK",
      phone: "+44 20 7123 4567",
      email: "london@travelease.com",
      hours: "Mon-Fri: 9AM-5PM GMT"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-cyan-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Plan Your Dream Journey
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every great adventure starts with a conversation. Tell us your travel dreams, 
            and our expert maestros will craft an unforgettable experience just for you.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6">
                  <div className="bg-orange-100 group-hover:bg-orange-200 transition-colors rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="font-bold mb-2">{method.title}</h3>
                  <p className="text-sm font-medium text-orange-600 mb-2">{method.details}</p>
                  <p className="text-xs text-muted-foreground mb-2">{method.description}</p>
                  <Badge variant="secondary" className="text-xs">{method.available}</Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 mr-2 text-orange-500" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l18-9-9 18-2-7-7-2z"/></svg>
                  Start Your Journey
                </CardTitle>
                <p className="text-muted-foreground">
                  Tell us about your travel dreams and we'll craft the perfect experience for you.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name *</label>
                    <Input placeholder="Your first name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name *</label>
                    <Input placeholder="Your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address *</label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone Number</label>
                  <Input type="tel" placeholder="+1 (555) 123-4567" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Preferred Destination</label>
                    <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                      <option>Select destination...</option>
                      <option>Mountains & Alps</option>
                      <option>Tropical Paradise</option>
                      <option>Cultural Cities</option>
                      <option>Wildlife Safari</option>
                      <option>Adventure Sports</option>
                      <option>Spiritual Journey</option>
                      <option>Surprise Me!</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Travel Style</label>
                    <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                      <option>Select style...</option>
                      <option>You Choose, We Plan</option>
                      <option>We Plan, You Choose</option>
                      <option>Luxury & Comfort</option>
                      <option>Adventure & Active</option>
                      <option>Cultural Immersion</option>
                      <option>Romantic Getaway</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Travel Dates</label>
                    <Input type="date" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Budget Range</label>
                    <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                      <option>Select budget...</option>
                      <option>$1,000 - $2,500</option>
                      <option>$2,500 - $5,000</option>
                      <option>$5,000 - $10,000</option>
                      <option>$10,000+</option>
                      <option>Sky's the limit</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Tell us about your dream trip *</label>
                  <Textarea 
                    placeholder="Describe your ideal travel experience. What excites you? What are you hoping to discover or experience? Any specific requirements or preferences?"
                    rows={4}
                  />
                </div>

                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white" size="lg">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l18-9-9 18-2-7-7-2z"/></svg>
                  Send My Travel Dreams
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  We'll respond within 24 hours with personalized recommendations
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Office Locations */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <svg viewBox="0 0 24 24" className="h-6 w-6 mr-2 text-orange-500" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0c4-2.5 4-13.5 0-16-4 2.5-4 13.5 0 16zm-8.66-5.5A9.97 9.97 0 012 12c0-1.8.48-3.49 1.34-4.95M22 12c0 1.8-.48 3.49-1.34 4.95M3.5 9h17M3.5 15h17"/></svg>
                Our Offices
              </h2>
              <p className="text-muted-foreground mb-6">
                Visit us in person or connect virtually. Our travel maestros are here to help you create unforgettable experiences.
              </p>
            </div>

            {offices.map((office, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{office.city}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 text-orange-500 mt-0.5" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10a3 3 0 110-6 3 3 0 010 6zm0 0c-4 0-7 3-7 7 0 2 3 5 7 5s7-3 7-5c0-4-3-7-7-7z"/></svg>
                      <span className="text-sm">{office.address}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 text-orange-500" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h2l2 5-2 1a11 11 0 006 6l1-2 5 2v2a2 2 0 01-2 2h-1C7.82 19 5 12.18 5 7V6a2 2 0 00-2-2z"/></svg>
                      <span className="text-sm">{office.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 text-orange-500" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V8a2 2 0 00-2-2H3a2 2 0 00-2 2v6a2 2 0 002 2z"/></svg>
                      <span className="text-sm">{office.email}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 text-orange-500" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                      <span className="text-sm">{office.hours}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* FAQ Preview */}
            <Card className="bg-gradient-to-br from-orange-50 to-orange-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Quick Questions?</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium">How far in advance should I book?</p>
                    <p className="text-muted-foreground">We recommend 3-6 months for international trips, but we can work magic even with shorter notice!</p>
                  </div>
                  <div>
                    <p className="font-medium">Do you handle visa and travel documents?</p>
                    <p className="text-muted-foreground">Absolutely! We guide you through all necessary documentation and requirements.</p>
                  </div>
                  <div>
                    <p className="font-medium">What if I need to change my plans?</p>
                    <p className="text-muted-foreground">Life happens! We offer flexible booking options and will help you adapt your journey.</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All FAQs
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 text-center bg-muted/30 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">24/7 Emergency Support</h2>
          <p className="text-muted-foreground mb-4">
            Already traveling with us? Our emergency hotline is available around the clock for any urgent assistance.
          </p>
          <div className="flex justify-center items-center space-x-6">
            <div className="flex items-center space-x-2">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-red-500" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h2l2 5-2 1a11 11 0 006 6l1-2 5 2v2a2 2 0 01-2 2h-1C7.82 19 5 12.18 5 7V6a2 2 0 00-2-2z"/></svg>
              <span className="font-medium">+1 (555) 911-HELP</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-blue-500" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15a4 4 0 01-4 4H7l-4 4V7a4 4 0 014-4h10a4 4 0 014 4v8z"/></svg>
              <span className="font-medium">emergency@travelease.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}