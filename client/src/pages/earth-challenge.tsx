import ChallengeBlog from "@/components/challenge-blog";

export default function EarthChallenge() {
  const content = {
    ideas: [
      "Desarrollar un vehículo terrestre autónomo capaz de navegar terrenos irregulares utilizando sensores LiDAR y cámaras estereoscópicas para mapeo tridimensional del entorno.",
      "Implementar algoritmos de machine learning para reconocimiento de obstáculos y planificación de rutas dinámicas que se adapten a condiciones cambiantes del terreno.",
      "Crear un sistema de tracción inteligente con ruedas omnidireccionales que permita movimientos complejos y mayor maniobrabilidad en espacios reducidos.",
      "Integrar un sistema de comunicación IoT para monitoreo remoto y control telepresencial del vehículo en tiempo real."
    ],
    objectives: [
      "Construir un prototipo funcional de vehículo autónomo terrestre con capacidad de navegación en terrenos complejos y detección de obstáculos en tiempo real.",
      "Lograr una precisión de navegación del 95% en trayectorias predefinidas y capacidad de adaptación automática a obstáculos imprevistos.",
      "Implementar un sistema de control robusto que mantenga estabilidad del vehículo en pendientes de hasta 30 grados y superficies irregulares.",
      "Desarrollar una interfaz de usuario intuitiva para programación de misiones y monitoreo del estado del vehículo desde dispositivos móviles."
    ],
    development: [
      "Diseño y modelado 3D del chasis utilizando software CAD, considerando distribución de peso, centro de gravedad y resistencia estructural para diferentes tipos de terreno.",
      "Selección e integración de componentes electrónicos: microcontrolador ESP32, sensores ultrasónicos HC-SR04, cámara OV2640, módulo GPS, y sistema de tracción con motores paso a paso.",
      "Programación del algoritmo de control utilizando Python y bibliotecas de visión computacional OpenCV para procesamiento de imágenes y detección de obstáculos.",
      "Construcción del prototipo físico utilizando impresión 3D para el chasis, ensamblaje de circuitos electrónicos, y calibración de sensores.",
      "Implementación del sistema de comunicación wireless para transmisión de datos de telemetría y recepción de comandos de control remoto."
    ],
    problems: [
      "Problema de consumo energético: Las primeras pruebas mostraron que el sistema consumía batería rápidamente. Solución: Optimización del código de control y implementación de modos de bajo consumo cuando el vehículo está inactivo.",
      "Interferencia en sensores: Los sensores ultrasónicos presentaban lecturas erróneas en superficies irregulares. Solución: Implementación de filtros digitales y fusión de datos de múltiples sensores para mayor precisión.",
      "Problemas de tracción: El vehículo perdía adherencia en superficies resbaladizas. Solución: Rediseño de las ruedas con patrones de agarre mejorados y sistema de control de tracción diferencial.",
      "Latencia de comunicación: Retrasos en la transmisión de comandos afectaban la respuesta del vehículo. Solución: Optimización del protocolo de comunicación y implementación de buffer predictivo para comandos."
    ],
    results: [
      "Prototipo funcional de vehículo autónomo terrestre con capacidad de navegación exitosa en múltiples tipos de superficie y detección efectiva de obstáculos hasta 2 metros de distancia.",
      "Sistema de control inteligente que permite operación autónoma durante 4 horas continuas con una sola carga de batería y capacidad de completar misiones complejas predefinidas.",
      "Interfaz de usuario móvil completa que permite programación visual de rutas, monitoreo en tiempo real de sensores, y control manual de emergencia del vehículo.",
      "Documentación técnica completa del proyecto incluyendo esquemas electrónicos, código fuente comentado, manual de usuario, y videos demostrativos del funcionamiento del sistema."
    ]
  };

  const processImages = [
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  ];

  return (
    <ChallengeBlog
      title="Reto Tierra"
      description="Desarrollo de vehículos autónomos terrestres con navegación inteligente"
      heroImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600"
      colorClass="earth-color"
      bgColor="bg-gradient-to-r from-purple-900/70 to-purple-600/50"
      challengeType="earth"
      content={content}
      processImages={processImages}
    />
  );
}
