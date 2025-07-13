import ChallengeBlog from "@/components/challenge-blog";

export default function AirChallenge() {
  const content = {
    ideas: [
      "Desarrollar un dron autónomo multirotor con capacidades avanzadas de vuelo inteligente, navegación GPS de precisión, y evasión automática de obstáculos aéreos.",
      "Implementar sistemas de visión computacional para reconocimiento de patrones, seguimiento de objetivos, y capacidades de búsqueda y rescate en tiempo real.",
      "Crear un sistema de control de vuelo adaptativo que compense automáticamente condiciones meteorológicas adversas como viento cruzado y turbulencias.",
      "Integrar tecnologías de inteligencia artificial para toma de decisiones autónomas durante misiones complejas y optimización de rutas de vuelo."
    ],
    objectives: [
      "Construir un dron autónomo capaz de vuelo estable en exteriores con autonomía de 45 minutos y capacidad de carga útil de 2 kg para sensores especializados.",
      "Implementar un sistema de navegación autónoma con precisión de posicionamiento de ±1 metro utilizando GPS diferencial y sensores inerciales de alta precisión.",
      "Desarrollar capacidades de misión autónoma incluyendo despegue, navegación por waypoints, reconocimiento de objetivos, y aterrizaje automático de precisión.",
      "Lograr transmisión de video en tiempo real con calidad HD y control telepresencial con latencia menor a 200ms en un rango de 2 kilómetros."
    ],
    development: [
      "Diseño aerodinámico del marco utilizando simulaciones CFD para optimizar eficiencia energética, estabilidad de vuelo, y resistencia a perturbaciones externas.",
      "Selección e integración de componentes de vuelo: controlador de vuelo Pixhawk, motores brushless, ESCs, hélices de fibra de carbono, y sistema de telemetría de largo alcance.",
      "Desarrollo del sistema de navegación con GPS RTK, IMU de 9 ejes, barómetro de precisión, y sensores de flujo óptico para estabilización en interiores.",
      "Programación de algoritmos de control de vuelo utilizando PX4 Autopilot con misiones personalizadas en MAVLink y integración con estación de control terrestre.",
      "Implementación de sistema de visión con cámara gimbal estabilizada, procesamiento de imágenes en tiempo real, y algoritmos de detección de objetos usando deep learning."
    ],
    problems: [
      "Problema de estabilidad en vuelo: El dron presentaba oscilaciones durante vuelo en exteriores. Solución: Calibración fina de parámetros PID y adición de amortiguadores de vibración en la IMU.",
      "Interferencia de comunicación: Pérdida de señal de control en áreas urbanas densas. Solución: Upgrade a sistema de telemetría de mayor potencia y implementación de protocolo de retorno automático a casa.",
      "Problemas de autonomía: La batería se agotaba más rápido de lo esperado. Solución: Optimización de algoritmos de control para vuelo eficiente y upgrade a baterías LiPo de mayor capacidad.",
      "Deriva GPS: Inexactitudes en posicionamiento afectaban la precisión de misiones. Solución: Implementación de GPS RTK con estación base local y fusión con sensores visuales para navegación híbrida."
    ],
    results: [
      "Prototipo funcional de dron autónomo con capacidades avanzadas de vuelo, navegación de precisión, y ejecución exitosa de misiones complejas programadas.",
      "Sistema de reconocimiento visual implementado con capacidad de detectar y seguir objetos específicos, útil para aplicaciones de búsqueda y rescate.",
      "Plataforma de control de misión completa con interfaz gráfica para planificación de vuelo, monitoreo en tiempo real, y análisis posterior de datos de telemetría.",
      "Documentación técnica detallada incluyendo manuales de vuelo, procedimientos de seguridad, análisis de rendimiento, y videos demostrativos de capacidades del sistema."
    ]
  };

  const processImages = [
    "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1548558811-14d3e3de6d45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  ];

  return (
    <ChallengeBlog
      title="Reto Aire"
      description="Sistemas aéreos no tripulados con inteligencia avanzada"
      heroImage="https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600"
      colorClass="air-color"
      bgColor="bg-gradient-to-r from-cyan-900/70 to-cyan-600/50"
      challengeType="air"
      content={content}
      processImages={processImages}
    />
  );
}
