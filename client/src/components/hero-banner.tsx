import { useLanguage } from "@/contexts/LanguageContext";

export default function HeroBanner() {
  const { t } = useLanguage();
  return (
    <section className="relative h-96 w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&h=600')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/50 transition-opacity duration-500 hover:opacity-80" />
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-bounce-in float">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {t('hero.subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
}
