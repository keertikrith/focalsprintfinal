import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Lightbulb, Code, Database, Brain, Cloud, Award } from "lucide-react";

function HandsOnLearningPage() {
  const programs = [
    {
      icon: <Code className="h-5 w-5" />,
      title: "Java and Spring Boot",
      description: "Master backend development and scalable architectures",
    },
    {
      icon: <Database className="h-5 w-5" />,
      title: "Data Science",
      description:
        "Dive into analytics, visualization, and predictive modeling",
    },
    {
      icon: <Brain className="h-5 w-5" />,
      title: "AI/ML (Python)",
      description:
        "Learn machine learning algorithms and artificial intelligence techniques",
    },
    {
      icon: <Cloud className="h-5 w-5" />,
      title: "DevOps (AWS, Azure)",
      description: "Build expertise in automation and cloud infrastructure",
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "Cloud Certifications",
      description: "Gain globally recognized certifications",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-bl flex items-center justify-center from-white via-blue-50 to-blue-100 p-6 md:p-12 rounded-xl">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Section */}
        <div className="space-y-4">
          <Badge
            variant="outline"
            className="gap-2 px-4 py-2 text-base text-[#2f7df4]"
          >
            <Lightbulb className="h-4 w-4" /> Hands-On Learning
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground pb-1">
            Hands-On Learning
          </h1>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Overview Section */}
          <Card className="p-8 hover:shadow-lg transition-shadow duration-300 bg-card/50 backdrop-blur-sm group">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg transition-colors duration-300 group-hover:bg-[#2f7df4]/10">
                <Lightbulb className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-[#2f7df4]" />
              </div>
              <h2 className="text-2xl font-semibold text-blue-700">Learning Overview</h2>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                At focal Sprint, we offer immersive, hands-on learning
                experiences in niche fields, ensuring our learners are equipped
                with the skills and expertise required to excel in the rapidly
                evolving tech landscape.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our training programs are available online and in classrooms,
                with free demo sessions every Saturday. Join us and experience
                the difference.
              </p>
            </div>
          </Card>

          {/* Programs Grid */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-blue-700">Programs Offered</h2>
            <div className="grid gap-4">
              {programs.map((program, index) => (
                <Card
                  key={index}
                  className="p-4 hover:shadow-md transition-all duration-300 hover:translate-x-1 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg transition-colors duration-300 group-hover:bg-[#2f7df4]/10">
                      <div className="text-primary transition-colors duration-300 group-hover:text-[#2f7df4]">
                        {program.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {program.title}
                      </h3>
                      <p className="text-sm text-gray-600">
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

export default HandsOnLearningPage;
