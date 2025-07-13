import ChallengeBlog from "@/components/challenge-blog";

export default function WaterChallenge() {
  const content = {
    ideas: [
      "Diseñar un vehículo subacuático autónomo (AUV) capaz de exploración marina profunda utilizando sistemas de navegación inercial y sonar para mapeo del fondo oceánico.",
      "Implementar sensores especializados para monitoreo de calidad del agua, incluyendo medición de pH, temperatura, salinidad y detección de contaminantes químicos.",
      "Desarrollar un sistema de propulsión hidrodinámico eficiente con múltiples thrusters que permita movimientos precisos en las seis dimensiones bajo el agua.",
      "Crear un sistema de comunicación subacuática utilizando tecnología acústica para transmisión de datos y localización en tiempo real."
    ],
    objectives: [
      "Construir un prototipo de submarino autónomo capaz de operar a profundidades de hasta 10 metros con navegación precisa y estable en entornos acuáticos.",
      "Implementar un sistema de recolección de datos ambientales que permita monitoreo continuo de parámetros acuáticos durante misiones de hasta 6 horas.",
      "Lograr una precisión de navegación subacuática del 90% utilizando fusión de sensores inerciales, sonar y referencias de superficie.",
      "Desarrollar capacidades de transmisión de datos en tiempo real hacia una estación base con alcance efectivo de 500 metros en condiciones submarinas."
    ],
    development: [
      "Diseño hidrodinámico del casco utilizando software de simulación CFD para optimizar resistencia al agua y estabilidad direccional bajo diferentes corrientes marinas.",
      "Integración de componentes especializados: microcontrolador marino resistente al agua, sensores de presión, giroscopio, brújula digital, sonar ultrasónico, y sensores de calidad del agua.",
      "Desarrollo del sistema de propulsión con motores sumergibles, hélices de paso variable, y sistema de control de flotabilidad utilizando tanques de lastre automatizados.",
      "Programación de algoritmos de navegación subacuática utilizando filtros Kalman para fusión de sensores y estimación de posición en entornos sin GPS.",
      "Construcción de carcasa impermeable con materiales marinos certificados, sistema de sellado redundante, y ventanas de visualización para cámaras subacuáticas."
    ],
    problems: [
      "Problema de impermeabilización: Las primeras pruebas revelaron infiltraciones de agua en las juntas principales. Solución: Rediseño del sistema de sellado con O-rings de grado marino y carcasa de presión mejorada.",
      "Interferencia magnética: La brújula digital presentaba lecturas incorrectas debido a interferencia de motores. Solución: Reubicación de sensores magnéticos y implementación de calibración automática.",
      "Problemas de comunicación: La transmisión acústica subacuática tenía limitaciones de alcance. Solución: Optimización de frecuencias de transmisión y implementación de repetidores acústicos.",
      "Control de flotabilidad: El submarino presentaba dificultades para mantener profundidad constante. Solución: Refinamiento del sistema de control PID y adición de sensores de presión redundantes."
    ],
    results: [
      "Prototipo funcional de submarino autónomo con capacidad de inmersión exitosa, navegación estable a profundidades controladas, y recolección efectiva de datos ambientales.",
      "Sistema de monitoreo ambiental completo que registra y transmite datos de calidad del agua en tiempo real con precisión científica verificada en laboratorio.",
      "Plataforma de control remoto que permite programación de misiones subacuáticas, seguimiento GPS de superficie, y recuperación automática en caso de emergencia.",
      "Documentación completa del proyecto incluyendo análisis hidrodinámico, protocolos de prueba, resultados de misiones de campo, y guías de mantenimiento preventivo."
    ]
  };

  const processImages = [
    "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1564415708827-2d2d2e2c5448?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1571406252890-8fd8b5d1ba99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  ];

  return (
    <ChallengeBlog
      title="Reto Agua"
      description="Sistemas subacuáticos inteligentes para exploración marina"
      heroImage="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600"
      colorClass="water-color"
      bgColor="bg-gradient-to-r from-blue-900/70 to-blue-600/50"
      challengeType="water"
      content={content}
      processImages={processImages}
    />
  );
}
