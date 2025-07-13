import { Link } from "wouter";
import { ArrowRight, Lightbulb, Target, Settings, AlertTriangle, Trophy } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ChallengesSection() {
  const { t } = useLanguage();
  
  const challenges = [
    {
      title: t('challenges.earth.title'),
      description: t('challenges.earth.description'),
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      link: "/reto-tierra",
      colorClass: "earth-color",
      gradientFrom: "from-purple-600/80",
      iconColor: "text-purple-600"
    },
    {
      title: t('challenges.water.title'),
      description: t('challenges.water.description'),
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      link: "/reto-agua",
      colorClass: "water-color",
      gradientFrom: "from-blue-600/80",
      iconColor: "text-blue-600"
    },
    {
      title: t('challenges.air.title'),
      description: t('challenges.air.description'),
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      link: "/reto-aire",
      colorClass: "air-color",
      gradientFrom: "from-cyan-600/80",
      iconColor: "text-cyan-600"
    }
  ];

  return (
    <section id="challenges" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('challenges.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('challenges.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <Link href={challenge.link} key={challenge.title}>
              <div className="group cursor-pointer">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden card-hover theme-transition animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={challenge.image}
                      alt={challenge.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${challenge.gradientFrom} to-transparent transition-opacity duration-300 group-hover:opacity-80`} />
                    <div className="absolute bottom-4 left-4 text-white transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                      <div className="text-3xl mb-2 animate-bounce-in float" style={{ animationDelay: `${index * 0.2}s` }}>
                        {challenge.link === "/reto-tierra" && "🚗"}
                        {challenge.link === "/reto-agua" && "🚢"}
                        {challenge.link === "/reto-aire" && "✈️"}
                      </div>
                      <h3 className="text-2xl font-bold">{challenge.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 dark:text-gray-300 mb-4 theme-transition">{challenge.description}</p>
                    <div className={`flex items-center font-medium ${challenge.colorClass} group-hover:scale-105 transition-transform duration-200`}>
                      <span>{t('challenges.exploreProject')}</span>
                      <ArrowRight className="ml-2 w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Design Process Preview */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{t('challenges.designProcess')}</h3>
          <p className="text-gray-600 text-center mb-8">
            {t('challenges.designProcessDescription')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Lightbulb className="text-blue-600 w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-900">{t('challenges.process.ideas')}</h4>
              <p className="text-sm text-gray-600">{t('challenges.process.ideasDescription')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="text-emerald-600 w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-900">{t('challenges.process.objectives')}</h4>
              <p className="text-sm text-gray-600">{t('challenges.process.objectivesDescription')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Settings className="text-amber-600 w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-900">{t('challenges.process.development')}</h4>
              <p className="text-sm text-gray-600">{t('challenges.process.developmentDescription')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <AlertTriangle className="text-red-600 w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-900">{t('challenges.process.problems')}</h4>
              <p className="text-sm text-gray-600">{t('challenges.process.problemsDescription')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Trophy className="text-purple-600 w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-900">{t('challenges.process.results')}</h4>
              <p className="text-sm text-gray-600">{t('challenges.process.resultsDescription')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
