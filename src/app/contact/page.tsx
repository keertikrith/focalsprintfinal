import ContactForm from "@/components/ContactForm";
import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Phone, MapPin, Globe, User } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Header */}
        <div className="space-y-4 mb-16">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <User className="h-4 w-4" />
            <span>Contact</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            We&apos;d love to hear from you. Send us a message and we&apos;ll
            respond as soon as possible.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="p-8 space-y-6 bg-white shadow-sm border border-gray-100">
            <div>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <Globe className="h-5 w-5 text-primary" />
                Send us a Message
              </h2>
              <ContactForm />
            </div>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <Card className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                <div className="flex gap-4">
                  <div className="p-2 bg-gray-50 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Address</h3>
                    <p className="text-gray-600">
                      #929, 4th Floor, AECS Layout,
                      <br />
                      3rd Main Road,
                      <br />
                      Bangalore- 37
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                <div className="flex gap-4">
                  <div className="p-2 bg-gray-50 rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <div className="text-gray-600">
                      <p>Off: 080-42213272</p>
                      <p>Mob: 9949629935 / 8310590859</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                <div className="flex gap-4">
                  <div className="p-2 bg-gray-50 rounded-lg">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <a
                      href="mailto:support@focalsprint.com"
                      className="text-primary hover:underline"
                    >
                      support@focalsprint.com
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
