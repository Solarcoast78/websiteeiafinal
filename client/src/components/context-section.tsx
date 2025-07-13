import { BookOpen, Wrench, Rocket } from "lucide-react";

export default function ContextSection() {
  return (
    <section id="context" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contexto de Nuestra Clase</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explorando los fundamentos, aplicaciones e innovaciones que definen la mecatrónica moderna
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Fundamentos */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6">
              <BookOpen className="text-white w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Fundamentos</h3>
            <p className="text-gray-700 leading-relaxed">
              Nuestra formación académica abarca los principios fundamentales de la mecatrónica, incluyendo 
              matemáticas aplicadas, física avanzada, programación de sistemas embebidos, teoría de control 
              y diseño de circuitos electrónicos. Estos conocimientos forman la base sólida sobre la cual 
              construimos nuestras soluciones innovadoras.
            </p>
          </div>

          {/* Aplicación */}
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mb-6">
              <Wrench className="text-white w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Aplicación</h3>
            <p className="text-gray-700 leading-relaxed">
              A través de proyectos prácticos y retos reales, aplicamos nuestros conocimientos teóricos en 
              el desarrollo de sistemas mecatrónicos funcionales. Trabajamos con herramientas de diseño CAD, 
              software de simulación, microcontroladores y tecnologías de prototipado rápido para materializar 
              nuestras ideas y validar nuestros diseños.
            </p>
          </div>

          {/* Innovación */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-6">
              <Rocket className="text-white w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovación</h3>
            <p className="text-gray-700 leading-relaxed">
              La innovación es el corazón de nuestro aprendizaje. Exploramos tecnologías emergentes como 
              inteligencia artificial, Internet de las Cosas (IoT), realidad aumentada y machine learning 
              aplicados a sistemas mecatrónicos. Nuestros proyectos buscan soluciones creativas a problemas 
              complejos del mundo real, preparándonos para ser líderes en la próxima revolución tecnológica.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
