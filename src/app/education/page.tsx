import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap, Target, Users, Award } from "lucide-react";

function App() {
  const programs = [
    {
      icon: <Target className="h-5 w-5" />,
      title: "Scrum and Kanban Methodologies",
      description:
        "Master agile frameworks and lean project management techniques",
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "SAFe Certifications",
      description:
        "Gain industry-recognized certifications in Scaled Agile Framework",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Leadership Training for Professionals",
      description:
        "Develop essential leadership skills for modern project management",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="space-y-4">
          <Badge variant="outline" className="gap-2 px-4 py-2 text-base">
            <Briefcase className="h-4 w-4" />
            Agile and Project Management
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground pb-1">
            Agile and Project Management
          </h1>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Overview Section */}
          <Card className="p-8 hover:shadow-lg transition-shadow duration-300 bg-card/50 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Training Overview</h2>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Enhance your leadership and project management skills with our
                specialized Agile and Project Management training programs.
                Designed to meet industry demands, our courses prepare you to
                lead teams and manage projects with efficiency and confidence.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                These programs are tailored to ensure you stay ahead in
                today&apos;s fast-paced business world, combining theoretical
                knowledge with practical applications.
              </p>
            </div>
          </Card>

          {/* Programs Grid */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Programs Offered</h2>
            <div className="grid gap-4">
              {programs.map((program, index) => (
                <Card
                  key={index}
                  className="p-4 hover:shadow-md transition-all duration-300 hover:translate-x-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {program.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {program.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {program.description}
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
