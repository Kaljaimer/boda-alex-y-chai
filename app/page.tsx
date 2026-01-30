"use client"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, MapPin, Calendar, Clock } from "lucide-react"
import { motion, useInView } from "framer-motion"
import {LogoBoda} from "@/app/LogoBoda";

export default function WeddingInvitation() {
  const [showForm, setShowForm] = useState(true)
    const [showIntroVideo, setShowIntroVideo] = useState(true)
    const videoRef = useRef<HTMLVideoElement>(null)
    const [showPlayButton, setShowPlayButton] = useState(false)
    const [videoSrc, setVideoSrc] = useState("/intro-video.mp4")

    useEffect(() => {
        const isMobile = /iPhone|Android|iPad|iPod|Mobile/i.test(window.navigator.userAgent)
        const src = isMobile ? "/intro-video-phone.mp4" : "/intro-video.mp4"
        setVideoSrc(src)

        setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.load()
                videoRef.current.play().catch(() => {
                    setShowPlayButton(true)
                })
            }
        }, 0)

        if (showIntroVideo) {
            document.body.style.overflow = "hidden"
            document.documentElement.style.overflow = "hidden"
        } else {
            setTimeout(() => {
                document.body.style.touchAction = "manipulation!important"
                document.body.style.overflow = "auto"
                document.documentElement.style.touchAction = "manipulation!important"
                document.documentElement.style.overflow = "auto"
            }, 100)
        }
        return () => {
            document.body.style.touchAction = "manipulation!important"
            document.body.style.overflow = "auto"
            document.documentElement.style.touchAction = "manipulation!important"
            document.documentElement.style.overflow = "auto"
        }
    }, [showIntroVideo])

    const handlePlay = () => {
        videoRef.current?.play()
        setShowPlayButton(false)
    }

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
    <div className="min-h-screen bg-cover bg-center bg-fixed"
         style={{ backgroundImage: "url('/bgWeb.png')"}}
    >
        {showIntroVideo && (
            <div className="fixed inset-0 z-50 bg-black overflow-hidden h-screen w-screen">
                <video
                    ref={videoRef}
                    className="absolute inset-0 w-full h-full object-cover bg-black"
                    autoPlay
                    playsInline
                    onEnded={() => setShowIntroVideo(false)}
                >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {showPlayButton && (
                    <button
                        onClick={handlePlay}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-4 bg-[#886d3a] text-white rounded-lg text-xl z-60"
                    >
                        Reproducir con sonido
                    </button>
                )}
            </div>
        )}

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-serif text-[#886d3a] mb-8 text-balance">Estás invitado a la boda de</h1>
        <div className="relative mb-12">
            <img
                src="/logoBodaNoBG.png"
                alt="Logo Boda Alex y Chai"
            />
        </div>
        <p className="text-xl md:text-2xl text-[#886d3a] mb-4 font-light">Una historia de película</p>
        <p className="text-lg text-[#bf9f5c] max-w-2xl text-balance">
          Únete a nuestro inolvidable día, pero antes, nos gustaría contarte...
        </p>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-[#886d3a] mb-6 text-center text-balance">
            Nuestra <span className="italic">historia</span>
          </h2>
          <p className="text-xl text-[#bf9f5c] text-center mb-16 text-balance">
            Un viaje lleno de magia, miradas y señales del destino
          </p>

          {/* Chapter 1 */}
            <SectionFromLeft>
                <div className="mb-16 grid md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1">
                        <img src="/1.jpg" alt="El Comienzo" className="w-full h-auto rounded-lg shadow-xl" />
                    </div>
                    <div className="order-1 md:order-2">
                        <h3 className="text-2xl font-serif text-[#886d3a] mb-4">Capítulo I: El Comienzo</h3>
                        <p className="text-[#bf9f5c] leading-relaxed">
                            Uno de Almería, otro de Casablanca, conocernos era algo improbable de no ser por el destino.
                            Entre mensajes, risas compartidas y la magia de nuestras películas
                            favoritas de Marvel, comenzó a tejerse una preciosa historia. Dos frikis que, con el paso del tiempo,
                            hemos vivido tantas aventuras juntos... que sin darnos cuenta, nos enamoramos no solo de cada
                            historia, sino aún más el uno del otro.
                        </p>
                    </div>
                </div>
            </SectionFromLeft>


          {/* Chapter 2 */}
            <SectionFromRight>
                <div className="mb-16 grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h3 className="text-2xl font-serif text-[#886d3a] mb-4">Capítulo II: La pregunta</h3>
                        <p className="text-[#bf9f5c] leading-relaxed">
                            Tras años de amor, complicidad y sueños compartidos, sentimos que llegó el momento de dar
                            un paso más. Entre las murallas de un castillo cargado de historia, nos hicimos ver lo
                            importantes que éramos el uno para el otro, dando pié a la gran pregunta.
                            En ese instante, el tiempo pareció detenerse, y con un simple “sí”, sellamos una promesa
                            de amor eterno.
                        </p>
                    </div>
                    <div>
                        <img
                            src="/2.jpeg"
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
                            src="/3.jpeg"
                            alt="Nuestro Hogar"
                            className="w-full h-auto rounded-lg shadow-xl"
                        />
                    </div>
                    <div className="order-1 md:order-2">
                        <h3 className="text-2xl font-serif text-[#886d3a] mb-4">Capítulo III: Nuestro Hogar</h3>
                        <p className="text-[#bf9f5c] leading-relaxed">
                            Juntos encontramos un lugar que pronto se convirtió en nuestro refugio. Amueblamos cada
                            rincón a nuestro gusto, con cuidado y cariño, y llenamos el espacio con toques de nuestras
                            dos culturas, la marroquí y la española. Cada detalle, cada color, cada recuerdo refleja
                            quiénes somos y todo lo que hemos construido juntos. Allí no solo levantamos paredes,
                            sino un hogar lleno de vida, amor y complicidad.
                        </p>
                    </div>
                </div>
            </SectionFromLeft>


          {/* Chapter 4 */}
            <SectionFromRight>
                <div className="mb-16 grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h3 className="text-2xl font-serif text-[#886d3a] mb-4">Capítulo IV: Crecer Juntos</h3>
                        <p className="text-[#bf9f5c] leading-relaxed">
                            Aprendimos a caminar de la mano, a descubrir y respetar la cultura del otro, y a
                            celebrarla con entusiasmo. Viajando, descubrimos nuevos mundos,
                            nuevas experiencias y nuevas formas de amarnos. Cada tradición, cada aventura y cada
                            recuerdo compartido fortaleció nuestro vínculo, demostrando que nuestras diferencias nos
                            unen y hacen nuestro amor más profundo cada día.
                        </p>
                    </div>
                    <div>
                        <img
                            src="/4.jpeg"
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
                            src="/5.jpeg"
                            alt="Nuestro Futuro"
                            className="w-full h-auto rounded-lg shadow-xl"
                        />
                    </div>
                    <div className="order-1 md:order-2">
                        <h3 className="text-2xl font-serif text-[#886d3a] mb-4">Capítulo V: El Siguiente Paso</h3>
                        <p className="text-[#bf9f5c] leading-relaxed">
                            Hoy, con el corazón lleno de amor y una historia justos aún por escribir, damos el siguiente
                            paso. Queremos celebrar nuestra unión rodeados de quienes han sido testigos de nuestro
                            viaje y de quienes serán parte de este nuevo capítulo: el comienzo de nuestra vida juntos.
                        </p>
                    </div>
                </div>
            </SectionFromLeft>

        </div>
      </section>

      {/* Event Section */}
      <section className="py-20 px-4 bg-gradient-to-b ">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-[#886d3a] mb-8 text-center">Evento</h2>

          <Card className="relative overflow-hidden border-2 border-[#dfcfae] shadow-2xl">
              <div
                  className="absolute inset-0 bg-cover bg-center opacity-30"
                  style={{ backgroundImage: "url('/casa-rafael.jpeg')" }}
                  aria-hidden="true"
              />
            <CardContent className="relative p-8 md:p-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Calendar className="w-6 h-6 text-[#886d3a] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#886d3a] mb-1">Fecha:</p>
                    <p className="text-xl text-[#886d3a]">17 de octubre del 2026</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-[#886d3a] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#886d3a] mb-1">Hora:</p>
                    <p className="text-xl text-[#886d3a]">12:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#886d3a] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#886d3a] mb-1">Lugar:</p>
                    <p className="text-xl text-[#886d3a]">Finca Casa Rafael</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button
                  className="bg-[#886d3a] hover:bg-[#bf9f5c] text-white px-8 py-6 text-lg"
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
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-[#886d3a] mb-6 text-center">Confirmación</h2>
          <p className="text-xl text-[#886d3a] text-center mb-4">
            Por favor, confirma tu asistencia completando este formulario
          </p>
          <p className="text-[#bf9f5c] text-center mb-12">
            Tu respuesta nos ayudará a planificar mejor nuestro gran día
          </p>

          <Card className="border-2 border-[#dfcfae] shadow-xl pl-0 pr-0">
            <CardContent className="bg-white/80 backdrop-blur-sm pl-0 pr-0">
              {(
                <div className="space-y-6">
                  <p className="text-center text-[#886d3a] mb-4">Por favor, completa tu información:</p>
                  <div className="aspect-video bg-rose-50 rounded-lg flex items-center justify-center border-2 border-[#dfcfae]">
                      <iframe
                          src="https://docs.google.com/forms/d/e/1FAIpQLSdf1Xse9r7wQFRM8gzHMeE_cNbgSDNYV6mr1Ypv-6vjK_8pRw/viewform?usp=dialog"
                          width="100%"
                          height="900"
                          frameBorder="0"
                          marginHeight={0}
                          marginWidth={0}
                          title="Formulario de Google"
                          allowFullScreen
                      >
                          Cargando…
                      </iframe>
                  </div>
                  <p className="text-center text-sm text-[#886d3a]">
                    ¿Tienes problemas con el formulario?{" "}
                    <a href="#" className="underline text-[#886d3a] hover:text-[#bf9f5c]" onClick={(e) => e.preventDefault()}>
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
          <h2 className="text-4xl md:text-5xl font-serif text-[#886d3a] mb-8 text-center">Localización</h2>

          <Card className="overflow-hidden border-2 border-[#dfcfae] shadow-2xl pt-0 pb-0">
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
                <h3 className="text-2xl md:text-3xl font-serif text-[#886d3a] mb-4 text-center">Finca Casa Rafael</h3>
                <p className="text-[#886d3a] text-center mb-2">Carretera Nacional 340, 259, 04230 Huércal de Almería, Almería</p>
                <p className="text-[#bf9f5c] text-center mb-8 italic">
                  Un lugar mágico que esperamos os encante tanto como a nosotros.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="bg-[#886d3a] hover:bg-[#bf9f5c] text-white px-8 py-6 text-lg"
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
      <footer className="py-12 px-4 bg-[#886d3a] text-white text-center">
        <Heart className="w-8 h-8 mx-auto mb-4 animate-pulse" />
        <p className="text-lg mb-2">Nos casamos</p>
        <p className="text-2xl font-serif mb-4">Alex & Chai</p>
        <p className="border-[#dfcfae]">17 de octubre de 2026</p>
      </footer>
    </div>
  )
}
