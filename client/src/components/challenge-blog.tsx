import { ArrowLeft, Lightbulb, Target, Settings, AlertTriangle, Trophy } from "lucide-react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";
import ReviewSection from "./review-section";

interface ChallengeBlogProps {
  title: string;
  description: string;
  heroImage: string;
  colorClass: string;
  bgColor: string;
  challengeType: string;
  content: {
    ideas: string[];
    objectives: string[];
    development: string[];
    problems: string[];
    results: string[];
  };
  processImages: string[];
}

export default function ChallengeBlog({ 
  title, 
  description, 
  heroImage, 
  colorClass, 
  bgColor, 
  challengeType,
  content, 
  processImages 
}: ChallengeBlogProps) {
  // Auto-scroll to the first section (Resultados Finales) when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      const firstSection = document.getElementById('section-0');
      if (firstSection) {
        firstSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const sections = [
    {
      title: "Objetivos",
      icon: Target,
      color: "text-emerald-600",
      bgColor: "bg-emerald-100",
      items: content.objectives
    },
    {
      title: "Ideas",
      icon: Lightbulb,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      items: content.ideas
    },
    {
      title: "Desarrollo",
      icon: Settings,
      color: "text-amber-600",
      bgColor: "bg-amber-100",
      items: content.development
    },
    {
      title: "Problemas y Soluciones",
      icon: AlertTriangle,
      color: "text-red-600",
      bgColor: "bg-red-100",
      items: content.problems
    },
    {
      title: "Resultados Finales",
      icon: Trophy,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      items: content.results
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span className="text-lg font-semibold">Volver al Inicio</span>
              </div>
            </Link>
            <h1 className="text-xl font-bold text-gray-900">{title}</h1>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: `url('${heroImage}')` }}
        />
        <div className={`absolute inset-0 ${bgColor}`} />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{title}</h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">{description}</p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-16">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <Card key={section.title} id={`section-${index}`} className="shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 ${section.bgColor} rounded-full flex items-center justify-center mr-4`}>
                      <IconComponent className={`${section.color} w-6 h-6`} />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
                  </div>
                  
                  {/* Process Image */}
                  {processImages[index] && (
                    <div className="mb-8">
                      <img 
                        src={processImages[index]} 
                        alt={`${section.title} proceso`}
                        className="w-full max-w-2xl mx-auto rounded-xl shadow-lg"
                      />
                    </div>
                  )}
                  
                  <div className="grid gap-6">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="bg-gray-50 rounded-lg p-6">
                        <p className="text-gray-700 leading-relaxed text-lg">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Review Section */}
        <ReviewSection challengeType={challengeType} challengeTitle={title} />
      </div>
    </div>
  );
}
