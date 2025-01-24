import ContactForm from "@/components/ContactForm";
import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Phone, MapPin, Globe, User } from "lucide-react";



const ContactPage = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Address",
      description: (
        <>
          #929, 4th Floor, AECS Layout,
          <br />
          3rd Main Road,
          <br />
          Bangalore- 37
        </>
      ),
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      description: (
        <>
          Off: 080-42213272
          <br />
          Mob: 9949629935 / 8310590859
        </>
      ),
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Email",
      description: (
        <a href="mailto:support@focalsprint.com" className="text-primary hover:underline">
          support@focalsprint.com
        </a>
      ),
    },
  ]
  
  return (
    <div className="min-h-screen bg-gradient-to-bl from-white via-blue-50 to-blue-100 p-6 md:p-12 rounded-xl">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-4">
          <Badge
            variant="outline"
            className="gap-2 px-4 py-2 text-base text-[#2f7df4]"
          >
            <User className="h-4 w-4" />
            Contact
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Get In Touch
          </h1>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="p-8 space-y-6 bg-white shadow-sm border border-gray-100">
            <div>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <Globe className="h-5 w-5 text-primary" />
                <span className="text-blue-700">Send us a Message</span>
              </h2>
              <ContactForm />
            </div>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-blue-700">Contact Information</h2>
            <div className="grid gap-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="p-4 hover:shadow-md transition-all duration-300 hover:translate-x-1 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg transition-colors duration-300 group-hover:bg-[#2f7df4]/10">
                      <div className="text-primary transition-colors duration-300 group-hover:text-[#2f7df4]">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {info.title}
                      </h3>
                      <div className="text-sm text-gray-600">
                        {info.description}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
