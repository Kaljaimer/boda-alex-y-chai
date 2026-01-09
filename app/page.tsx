"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, MapPin, Calendar, Clock } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {LogoBoda} from "@/app/LogoBoda";

export default function WeddingInvitation() {
  const [showForm, setShowForm] = useState(false)

    const SectionFromLeft = ({ children }: { children: React.ReactNode }) => {
        const ref = useRef(null)
        const inView = useInView(ref, { once: true, margin: "-100px" })

        return (
            <motion.section
                ref={ref}
                initial={{ x: -100, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {children}
            </motion.section>
        )
    }

    const SectionFromRight = ({ children }: { children: React.ReactNode }) => {
        const ref = useRef(null)
        const inView = useInView(ref, { once: true, margin: "-100px" })

        return (
            <motion.section
                ref={ref}
                initial={{ x: 100, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {children}
            </motion.section>
        )
    }
  return (
    <div className="min-h-screen bg-gradient-to-b ">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-serif text-rose-900 mb-8 text-balance">ESTÁS INVITADO A LA BODA DE</h1>
        <div className="relative mb-12">
            <img
                src="/logoBoda1.png"
                alt="Logo Boda Alex y Chai"
            />
        </div>
        <p className="text-xl md:text-2xl text-rose-700 mb-4 font-light">Una historia de película</p>
        <p className="text-lg text-rose-600 max-w-2xl text-balance">
          Únete a nuestro inolvidable día, pero antes, nos gustaría contarte...
        </p>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-rose-900 mb-6 text-center text-balance">
            Nuestra <span className="italic">historia</span>
          </h2>
          <p className="text-xl text-rose-700 text-center mb-16 text-balance">
            Un viaje lleno de magia, miradas y señales del destino
          </p>

          {/* Chapter 1 */}
            <SectionFromLeft>
                <div className="mb-16 grid md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1">
                        <img src="/romantic-first-date-couple-at-bar.jpg" alt="El Comienzo" className="w-full h-auto rounded-lg shadow-xl" />
                    </div>
                    <div className="order-1 md:order-2">
                        <h3 className="text-2xl font-serif text-rose-800 mb-4">Capítulo I: El Comienzo</h3>
                        <p className="text-rose-700 leading-relaxed">
                            Tres presentaciones. Tres señales. Primero en una parada de guaguas, luego en un cumpleaños, y
                            finalmente en el bar donde trabajaba. Sin buscar nada serio, empezamos a quedar. Entre risas, miradas
                            cómplices y charlas sinceras, se fue colando algo más fuerte. Pese a los obstáculos, siempre volvíamos
                            el uno al otro. Había algo que no nos dejaba separarnos… algo que hoy llamamos destino.
                        </p>
                    </div>
                </div>
            </SectionFromLeft>


          {/* Chapter 2 */}
            <SectionFromRight>
                <div className="mb-16 grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h3 className="text-2xl font-serif text-rose-800 mb-4">Capítulo II: Nuestra Primera Decisión</h3>
                        <p className="text-rose-700 leading-relaxed">
                            No vivíamos juntos, pero sabíamos que necesitábamos compartir algo más. Fue nuestra primera gran
                            decisión como pareja. El primer paso hacia construir una vida juntos. Cada pequeña elección nos acercaba
                            más, tejiendo un futuro compartido que apenas empezábamos a imaginar.
                        </p>
                    </div>
                    <div>
                        <img
                            src="/happy-couple-making-decision-together.jpg"
                            alt="Primera Decisión"
                            className="w-full h-auto rounded-lg shadow-xl"
                        />
                    </div>
                </div>
            </SectionFromRight>


          {/* Chapter 3 */}
            <SectionFromLeft>
                <div className="mb-16 grid md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1">
                        <img
                            src="/couple-moving-into-first-home-together.jpg"
                            alt="Nuestro Hogar"
                            className="w-full h-auto rounded-lg shadow-xl"
                        />
                    </div>
                    <div className="order-1 md:order-2">
                        <h3 className="text-2xl font-serif text-rose-800 mb-4">Capítulo III: Nuestro Hogar</h3>
                        <p className="text-rose-700 leading-relaxed">
                            Decidimos dar el salto. Nos fuimos a vivir juntos, construyendo nuestra rutina, nuestro hogar. Poco a
                            poco fuimos llenando cada rincón con recuerdos, risas y sueños compartidos. Cada mañana juntos nos
                            recordaba que habíamos tomado la decisión correcta.
                        </p>
                    </div>
                </div>
            </SectionFromLeft>


          {/* Chapter 4 */}
            <SectionFromRight>
                <div className="mb-16 grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h3 className="text-2xl font-serif text-rose-800 mb-4">Capítulo IV: Crecer Juntos</h3>
                        <p className="text-rose-700 leading-relaxed">
                            Con ilusión decidimos dar el siguiente paso, ampliar nuestra aventura. Los primeros momentos fueron
                            intensos: risas, lágrimas, inseguridades. Pero cada día nos enseñaba lo que significa el amor
                            incondicional y el compromiso verdadero.
                        </p>
                    </div>
                    <div>
                        <img
                            src="/couple-celebrating-christmas-together-at-home.jpg"
                            alt="Creciendo Juntos"
                            className="w-full h-auto rounded-lg shadow-xl"
                        />
                    </div>
                </div>
            </SectionFromRight>


          {/* Chapter 5 */}
            <SectionFromLeft>
                <div className="mb-16 grid md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1">
                        <img
                            src="/couple-celebrating-new-year-together.jpg"
                            alt="Nuestro Futuro"
                            className="w-full h-auto rounded-lg shadow-xl"
                        />
                    </div>
                    <div className="order-1 md:order-2">
                        <h3 className="text-2xl font-serif text-rose-800 mb-4">Capítulo V: El Siguiente Paso</h3>
                        <p className="text-rose-700 leading-relaxed">
                            Y ahora, queremos compartir con ustedes el siguiente capítulo de nuestra historia. Un momento que hemos
                            soñado, planeado y esperado con todo nuestro corazón. Queremos celebrarlo rodeados de las personas que
                            más queremos, de quienes han sido parte de nuestro viaje.
                        </p>
                    </div>
                </div>
            </SectionFromLeft>

        </div>
      </section>

      {/* Event Section */}
      <section className="py-20 px-4 bg-gradient-to-b ">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-rose-900 mb-16 text-center">Evento</h2>

          <Card className="overflow-hidden border-2 border-rose-200 shadow-2xl">
            <CardContent className="p-8 md:p-12 bg-white/80 backdrop-blur-sm">
              <h3 className="text-3xl font-serif text-rose-800 mb-8 text-center">Ceremonia</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Calendar className="w-6 h-6 text-rose-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-rose-900 mb-1">Fecha:</p>
                    <p className="text-xl text-rose-700">17 de octubre del 2026</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-rose-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-rose-900 mb-1">Hora:</p>
                    <p className="text-xl text-rose-700">12:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-rose-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-rose-900 mb-1">Lugar:</p>
                    <p className="text-xl text-rose-700">Finca Casa Rafael</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button
                  className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-6 text-lg"
                  onClick={() => window.open("https://www.google.es/maps/place/Finca+Casa+Rafael/@36.9002037,-2.451487,16z/data=!4m6!3m5!1s0xd707576cf7fa731:0x11bc934e8971d194!8m2!3d36.9002037!4d-2.4468224!16s%2Fg%2F1td506bz?entry=ttu&g_ep=EgoyMDI2MDEwNi4wIKXMDSoASAFQAw%3D%3D", "_blank")}
                >
                  Ver Ubicación
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-20 px-4 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-rose-900 mb-6 text-center">Confirmación</h2>
          <p className="text-xl text-rose-700 text-center mb-4">
            Por favor, confirma tu asistencia completando este formulario
          </p>
          <p className="text-rose-600 text-center mb-12">
            Tu respuesta nos ayudará a planificar mejor nuestro gran día
          </p>

          <Card className="border-2 border-rose-200 shadow-xl">
            <CardContent className="p-8 md:p-12 bg-white/80 backdrop-blur-sm">
              {!showForm ? (
                <div className="text-center">
                  <p className="text-rose-700 mb-6">Cargando formulario...</p>
                  <Button
                    onClick={() => setShowForm(true)}
                    className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-6 text-lg"
                  >
                    Abrir Formulario de Confirmación
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  <p className="text-center text-rose-700 mb-4">Por favor, completa tu información:</p>
                  <div className="aspect-video bg-rose-50 rounded-lg flex items-center justify-center border-2 border-dashed border-rose-300">
                    <p className="text-rose-600 text-center px-4">
                      Inserta aquí tu formulario de Google Forms o cualquier otro sistema de RSVP
                    </p>
                  </div>
                  <p className="text-center text-sm text-rose-600">
                    ¿Tienes problemas con el formulario?{" "}
                    <a href="#" className="underline hover:text-rose-800" onClick={(e) => e.preventDefault()}>
                      Ábrelo en una nueva ventana
                    </a>
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-4 bg-gradient-to-b ">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-rose-900 mb-16 text-center">Localización</h2>

          <Card className="overflow-hidden border-2 border-rose-200 shadow-2xl">
            <CardContent className="p-0">
              <div className="aspect-video bg-rose-50 w-full">
                <iframe
                    src="https://www.google.com/maps?q=Finca+Casa+Rafael,+36.9002037,-2.451487&hl=es&z=16&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
              <div className="p-8 md:p-12 bg-white/90 backdrop-blur-sm">
                <h3 className="text-2xl md:text-3xl font-serif text-rose-800 mb-4 text-center">Finca Casa Rafael</h3>
                <p className="text-rose-700 text-center mb-2">Carretera Nacional 340, 259, 04230 Huércal de Almería, Almería</p>
                <p className="text-rose-600 text-center mb-8 italic">
                  Un lugar mágico que esperamos os encante tanto como a nosotros.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-6 text-lg"
                    onClick={() => window.open("https://www.google.es/maps/place/Finca+Casa+Rafael/@36.9002037,-2.451487,16z/data=!4m6!3m5!1s0xd707576cf7fa731:0x11bc934e8971d194!8m2!3d36.9002037!4d-2.4468224!16s%2Fg%2F1td506bz?entry=ttu&g_ep=EgoyMDI2MDEwNi4wIKXMDSoASAFQAw%3D%3D", "_blank")}
                  >
                    Abrir en Google Maps
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-rose-900 text-white text-center">
        <Heart className="w-8 h-8 mx-auto mb-4 animate-pulse" />
        <p className="text-lg mb-2">Nos casamos</p>
        <p className="text-2xl font-serif mb-4">Alex & Chai</p>
        <p className="text-rose-200">17 de octubre de 2026</p>
      </footer>
    </div>
  )
}
