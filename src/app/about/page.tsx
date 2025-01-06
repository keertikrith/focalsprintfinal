import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Building2,
  Circle,
  Goal,
  Heart,
  LightbulbIcon,
  Target,
  User2,
} from "lucide-react";

function App() {
  const goals = [
    {
      icon: <Target className="h-5 w-5" />,
      title: "Deliver Excellence in IT Solutions",
      description:
        "Providing top-tier technology solutions tailored to your needs",
    },
    {
      icon: <LightbulbIcon className="h-5 w-5" />,
      title: "Promote Innovation and Growth",
      description:
        "Fostering creative solutions and sustainable business expansion",
    },
    {
      icon: <Circle className="h-5 w-5" />,
      title: "Empower Through Education",
      description: "Enabling growth through comprehensive training programs",
    },
    {
      icon: <Goal className="h-5 w-5" />,
      title: "Focus on Customized Solutions",
      description: "Developing personalized strategies for unique challenges",
    },
    {
      icon: <Heart className="h-5 w-5" />,
      title: "Cultivate Thought Leadership",
      description:
        "Leading the industry with innovative thinking and expertise",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="space-y-4">
          <Badge variant="outline" className="gap-2 px-4 py-2 text-base">
            <User2 className="h-4 w-4" />
            About Us
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Who We Are
          </h1>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Company Description */}
          <Card className="p-8 hover:shadow-lg transition-shadow duration-300 bg-card/50 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Our Company</h2>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                focal Sprint, a division of Chavin IT Solution Pvt Ltd, is a
                trusted name in IT consulting and niche professional training.
                With over five years of expertise in the tech consulting and
                training industry and a management team boasting 25+ years of
                experience, we specialize in delivering tailored solutions to
                empower businesses and individuals.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our commitment to excellence, innovation, and client-centric
                approaches sets us apart. Let us help you unlock your potential
                with cutting-edge solutions and industry-leading expertise.
              </p>
            </div>
          </Card>

          {/* Goals Grid */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Our Goals</h2>
            <div className="grid gap-4">
              {goals.map((goal, index) => (
                <Card
                  key={index}
                  className="p-4 hover:shadow-md transition-all duration-300 hover:translate-x-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {goal.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {goal.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {goal.description}
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

export default App;
