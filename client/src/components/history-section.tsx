import { History, Lightbulb, ServerCog } from "lucide-react";

export default function HistorySection() {
  return (
    <section id="history" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Origen e Historia de la Mecatrónica</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre cómo esta fascinante disciplina revolucionó la ingeniería moderna
          </p>
        </div>

        {/* Historia General */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <History className="text-blue-600 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">La Evolución de una Disciplina</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              La mecatrónica surge en los años 1970 como una respuesta natural a la creciente necesidad de integrar 
              sistemas mecánicos, electrónicos y de control. Esta disciplina interdisciplinaria nació de la 
              convergencia entre la ingeniería mecánica tradicional, la electrónica moderna y la informática, 
              creando un nuevo paradigma en el diseño de sistemas inteligentes.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              A lo largo de las décadas, la mecatrónica ha evolucionado desde simples sistemas automatizados 
              hasta complejas redes de dispositivos inteligentes que forman la base de la Industria 4.0, 
              la robótica avanzada y los sistemas autónomos que transforman nuestro mundo.
            </p>
          </div>
        </div>

        {/* Origen de la Idea */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                <Lightbulb className="text-emerald-600 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">El Nacimiento de una Idea Revolucionaria</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              El término "mecatrónica" fue acuñado por primera vez en 1969 por Ko Kikuchi, un ingeniero de la 
              empresa japonesa Yaskawa Electric Corporation. Kikuchi visionó la necesidad de una nueva disciplina 
              que pudiera abordar la creciente complejidad de los sistemas industriales que requerían la 
              integración perfecta entre componentes mecánicos y electrónicos.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Su concepto inicial era simple pero revolucionario: crear sistemas donde la mecánica, la electrónica 
              y el control trabajaran como una sola entidad, eliminando las barreras tradicionales entre disciplinas 
              y permitiendo el desarrollo de productos más eficientes, precisos y adaptables.
            </p>
          </div>
        </div>

        {/* ¿Qué es la Mecatrónica? */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                <ServerCog className="text-purple-600 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">¿De Qué Trata la Mecatrónica?</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              La mecatrónica es mucho más que la simple suma de sus partes. Es una filosofía de diseño que 
              integra sinérgicamente la ingeniería mecánica, la ingeniería electrónica, la ingeniería de control 
              y la ciencia de la computación para crear sistemas inteligentes que pueden percibir, procesar, 
              decidir y actuar de manera autónoma.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Esta disciplina abarca desde el diseño de robots industriales y vehículos autónomos hasta 
              dispositivos médicos de precisión y sistemas de automatización doméstica. Los ingenieros 
              mecatrónicos desarrollan productos que pueden adaptarse a su entorno, aprender de la experiencia 
              y optimizar su propio rendimiento.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <ServerCog className="text-blue-600 w-6 h-6" />
                </div>
                <h4 className="font-semibold text-gray-900">Robótica</h4>
                <p className="text-sm text-gray-600 mt-2">Sistemas autónomos inteligentes</p>
              </div>
              <div className="text-center p-4 bg-emerald-50 rounded-xl">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <ServerCog className="text-emerald-600 w-6 h-6" />
                </div>
                <h4 className="font-semibold text-gray-900">IoT & Sensores</h4>
                <p className="text-sm text-gray-600 mt-2">Redes de dispositivos conectados</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-xl">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <ServerCog className="text-purple-600 w-6 h-6" />
                </div>
                <h4 className="font-semibold text-gray-900">Automatización</h4>
                <p className="text-sm text-gray-600 mt-2">Sistemas de control avanzados</p>
              </div>
            </div>
          </div>
        </div>

        {/* Original Engineering Concept Image */}
        <div className="text-center">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600"
            alt="Evolución de la ingeniería mecatrónica" 
            className="rounded-2xl shadow-2xl w-full max-w-4xl mx-auto"
          />
          <p className="text-gray-600 mt-4 italic">La evolución desde los conceptos mecánicos tradicionales hasta los sistemas mecatrónicos modernos</p>
        </div>
      </div>
    </section>
  );
}
