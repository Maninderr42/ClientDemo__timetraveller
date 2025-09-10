
import { Button, Card, CardHeader, Input, Textarea } from "@heroui/react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Globe, 
  Send, 
  MessageCircle,
  Headphones,
  Calendar,
  Users
} from "lucide-react";
import { Badge } from "../components/ui/badge";
import { CardContent } from "../components/ui/card";

export function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-TRIP",
      description: "Speak with our travel experts",
      available: "Mon-Fri 8AM-8PM"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@travelease.com",
      description: "Get detailed responses",
      available: "24/7 Response"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      details: "Chat Support",
      description: "Instant help when you need it",
      available: "Online Now"
    },
    {
      icon: Calendar,
      title: "Book Consultation",
      details: "Free 30-min session",
      description: "Personalized travel planning",
      available: "Schedule Today"
    }
  ];

  const offices = [
    {
      city: "London",
      address: "78 King's Road, Chelsea, London SW3 4NY, UK",
      phone: "+44 20 7123 4567",
      email: "london@travelease.com",
      hours: "Mon-Fri: 9AM-5PM GMT"
    }
  ];

  return (
    <div id="contact-page" className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-cyan-50">
      <div id="contact-container" className="container mx-auto px-4 py-16">
        {/* Header */}
        <div id="contact-header" className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Plan Your Dream Journey
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every great adventure starts with a conversation. Tell us your travel dreams,
            and our expert maestros will craft an unforgettable experience just for you.
          </p>
        </div>

        {/* Contact Methods */}
        <div id="contact-methods-grid" className="grid md:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <Card key={index} id={`contact-method-${index}`} className="text-center hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent id={`contact-method-content-${index}`} className="p-6">
                  <div id={`contact-method-icon-${index}`} className="bg-orange-100 group-hover:bg-orange-200 transition-colors rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
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

        <div id="contact-main-grid" className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div id="contact-form-section">
            <Card id="contact-form-card" className="shadow-lg">
              <CardHeader id="contact-form-header">
                <h2 className="text-2xl flex items-center font-semibold">
                  <Send className="h-6 w-6 mr-2 text-orange-500" />
                  Start Your Journey
                </h2>
                <p className="text-muted-foreground">
                  Tell us about your travel dreams and we'll craft the perfect experience for you.
                </p>
              </CardHeader>
              <CardContent id="contact-form-content" className="space-y-6">
                <div id="name-fields" className="grid md:grid-cols-2 gap-4">
                  <div id="first-name-field" className="space-y-2">
                    <label className="text-sm font-medium">First Name *</label>
                    <Input placeholder="Your first name" />
                  </div>
                  <div id="last-name-field" className="space-y-2">
                    <label className="text-sm font-medium">Last Name *</label>
                    <Input placeholder="Your last name" />
                  </div>
                </div>

                <div id="email-field" className="space-y-2">
                  <label className="text-sm font-medium">Email Address *</label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>

                <div id="phone-field" className="space-y-2">
                  <label className="text-sm font-medium">Phone Number</label>
                  <Input type="tel" placeholder="+1 (555) 123-4567" />
                </div>

                <div id="destination-style-fields" className="grid md:grid-cols-2 gap-4">
                  <div id="destination-field" className="space-y-2">
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
                  <div id="dates-field" className="space-y-2">
                    <label className="text-sm font-medium">Travel Dates</label>
                    <Input type="date" />
                  </div>
                  {/* <div id="style-field" className="space-y-2">
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
                  </div> */}
                </div>

                <div id="dates-budget-fields" className="grid md:grid-cols-2 gap-4">
                  
                  {/* <div id="budget-field" className="space-y-2">
                    <label className="text-sm font-medium">Budget Range</label>
                    <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                      <option>Select budget...</option>
                      <option>$1,000 - $2,500</option>
                      <option>$2,500 - $5,000</option>
                      <option>$5,000 - $10,000</option>
                      <option>$10,000+</option>
                      <option>Sky's the limit</option>
                    </select>
                  </div> */}
                </div>

                <div id="dream-trip-field" className="space-y-2">
                  <label className="text-sm font-medium">Tell us about your dream trip *</label>
                  <Textarea
                    placeholder="Describe your ideal travel experience. What excites you? What are you hoping to discover or experience? Any specific requirements or preferences?"
                    rows={4}
                  />
                </div>

                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white" size="lg">
                  <Send className="h-5 w-5 mr-2" />
                  Send My Travel Dreams
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  We'll respond within 24 hours with personalized recommendations
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Office Locations */}
          <div id="office-locations-section" className="space-y-6"  style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div id="offices-header">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Globe className="h-6 w-6 mr-2 text-orange-500" />
                Our Offices
              </h2>
              <p className="text-muted-foreground mb-6">
                Visit us in person or connect virtually. Our travel maestros are here to help you create unforgettable experiences.
              </p>
            </div>

            {offices.map((office, index) => (
              <Card key={index} id={`office-card-${index}`} className="hover:shadow-md transition-shadow">
                <CardContent id={`office-content-${index}`} className="p-6">
                  <h3 className="text-xl font-bold mb-3">{office.city}</h3>
                  <div id={`office-details-${index}`} className="space-y-3">
                    <div id={`office-address-${index}`} className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-orange-500 mt-0.5" />
                      <span className="text-sm">{office.address}</span>
                    </div>
                    <div id={`office-phone-${index}`} className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-orange-500" />
                      <span className="text-sm">{office.phone}</span>
                    </div>
                    <div id={`office-email-${index}`} className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-orange-500" />
                      <span className="text-sm">{office.email}</span>
                    </div>
                    <div id={`office-hours-${index}`} className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-orange-500" />
                      <span className="text-sm">{office.hours}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* FAQ Preview */}
            <Card id="faq-preview-card" className="bg-gradient-to-br from-orange-50 to-orange-100">
              <CardContent id="faq-content" className="p-6">
                <h3 className="text-xl font-bold mb-4">Quick Questions?</h3>
                <div id="faq-questions" className="space-y-3 text-sm">
                  <div id="faq-question-1">
                    <p className="font-medium">How far in advance should I book?</p>
                    <p className="text-muted-foreground">We recommend 3-6 months for international trips, but we can work magic even with shorter notice!</p>
                  </div>
                  <div id="faq-question-2">
                    <p className="font-medium">Do you handle visa and travel documents?</p>
                    <p className="text-muted-foreground">Absolutely! We guide you through all necessary documentation and requirements.</p>
                  </div>
                  <div id="faq-question-3">
                    <p className="font-medium">What if I need to change my plans?</p>
                    <p className="text-muted-foreground">Life happens! We offer flexible booking options and will help you adapt your journey.</p>
                  </div>
                </div>
                <Button variant="bordered" className="w-full mt-4">
                  View All FAQs
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

       <div className="mt-16 text-center bg-muted/30 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">24/7 Support</h2>
          <p className="text-muted-foreground mb-4">
            Already traveling with us? Our hotline is available around the clock for any urgent assistance.
          </p>
          <div className="flex justify-center items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-red-500" />
              <span className="font-medium">+1 (555) 911-HELP</span>
            </div>
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5 text-blue-500" />
              <span className="font-medium">emergency@travelease.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}