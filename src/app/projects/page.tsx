import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Layers, Building, Lightbulb, Compass } from "lucide-react";

function ConsultingPage() {
  const offerings = [
    {
      icon: <Building className="h-5 w-5" />,
      title: "Business Transformation",
      description: "Drive organizational change and improve business processes",
    },
    {
      icon: <Lightbulb className="h-5 w-5" />,
      title: "Customized Consulting Solutions",
      description:
        "Tailored strategies to address your unique business challenges",
    },
    {
      icon: <Compass className="h-5 w-5" />,
      title: "Solution Architecture and Design",
      description:
        "Create robust and scalable solutions for your business needs",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="space-y-4">
          <Badge variant="outline" className="gap-2 px-4 py-2 text-base">
            <Layers className="h-4 w-4" />
            Consulting and Expert Guidance
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground pb-1">
            Consulting and Expert Guidance
          </h1>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Overview Section */}
          <Card className="p-8 hover:shadow-lg transition-shadow duration-300 bg-card/50 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Layers className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Service Overview</h2>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                focal Sprint provides tailored consulting services to address
                your business challenges and drive transformation. Our
                consulting services are backed by industry expertise, innovative
                solutions, and client-focused strategies.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you&apos;re a startup or an established organization,
                our team will guide you every step of the way to achieve your
                business goals.
              </p>
            </div>
          </Card>

          {/* Offerings Grid */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Key Offerings</h2>
            <div className="grid gap-4">
              {offerings.map((offering, index) => (
                <Card
                  key={index}
                  className="p-4 hover:shadow-md transition-all duration-300 hover:translate-x-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {offering.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {offering.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {offering.description}
                      </p>
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
}

export default ConsultingPage;
