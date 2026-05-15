'use client'

import { useState, ReactNode } from 'react'

type MenuItemProps = {
  name: string
  label: string
}

type CardProps = {
  children: ReactNode
  onClick?: () => void
}

export default function Home() {

  const [section, setSection] = useState("home")
  const [menuOpen, setMenuOpen] = useState(false)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  const handleLogin = () => {

    if(email && password){
      alert(`Bienvenido ${email}`)
    } else {
      alert("Completa todos los campos")
    }

  }

  const handleRegister = () => {

    if(name && email && password){
      alert(`Cuenta creada para ${name}`)
    } else {
      alert("Completa todos los campos")
    }

  }

  const MenuItem = ({ name, label }: MenuItemProps) => (
    <button
      onClick={() => {
        setSection(name)
        setMenuOpen(false)
      }}
      className="block w-full text-left px-4 py-3 hover:bg-gray-800 rounded-xl transition"
    >
      {label}
    </button>
  )

  const BackButton = () => (
    <button
      onClick={() => setSection("home")}
      className="mt-14 bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition shadow-2xl"
    >
      ← Volver
    </button>
  )

  const Card = ({ children, onClick }: CardProps) => (
    <div
      onClick={onClick}
      className="bg-gray-900/80 backdrop-blur p-6 rounded-3xl shadow-2xl hover:scale-105 border border-gray-800 hover:border-yellow-400 transition duration-300 cursor-pointer"
    >
      {children}
    </div>
  )

  return (
    <main className="min-h-screen bg-black text-white">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 py-5 border-b border-gray-800 bg-black/80 backdrop-blur sticky top-0 z-50">

        <h1 className="font-black text-sm md:text-xl tracking-wide">
          Elite Of Communication School Academy
        </h1>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="bg-gray-800 px-4 py-2 rounded-xl font-bold hover:bg-gray-700 transition"
        >
          ☰ Menú
        </button>

        <div className="flex gap-3">

          <button
            onClick={() => setSection("login")}
            className="bg-blue-500 px-4 py-2 rounded-xl hover:scale-105 transition"
          >
            Login
          </button>

          <button
            onClick={() => setSection("register")}
            className="bg-yellow-400 text-black px-4 py-2 rounded-xl hover:scale-105 transition"
          >
            Register
          </button>

        </div>

      </nav>

      {/* MENU */}
      {menuOpen && (
        <div className="bg-gray-900 border-b border-gray-800 p-4 space-y-2">

          <MenuItem name="home" label="Inicio" />
          <MenuItem name="why" label="Por qué elegirnos" />
          <MenuItem name="levels" label="Niveles" />
          <MenuItem name="courses" label="Cursos" />
          <MenuItem name="online" label="Clases Online" />
          <MenuItem name="presencial" label="Clases Presenciales" />
          <MenuItem name="shop" label="Tienda" />
          <MenuItem name="contact" label="Contacto" />
          <MenuItem name="inscription" label="Inscripciones" />

        </div>
      )}

      {/* HOME */}
      {section === "home" && (
        <section className="text-center py-36 px-6 bg-gradient-to-br from-blue-950 via-black to-yellow-500">

          <h1 className="text-6xl md:text-8xl font-black drop-shadow-2xl">
            Elite Of Communication
            <span className="block text-yellow-300">
              School Academy
            </span>
          </h1>

          <p className="mt-10 text-gray-200 max-w-5xl mx-auto text-xl leading-relaxed">
            Aprende Inglés, Francés y Coreano con una experiencia educativa moderna, profesional e interactiva.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mt-16 max-w-7xl mx-auto">

            <img
              alt=""
              className="rounded-3xl h-72 w-full object-cover shadow-2xl hover:scale-105 transition"
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
            />

            <img
              alt=""
              className="rounded-3xl h-72 w-full object-cover shadow-2xl hover:scale-105 transition"
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            />

            <img
              alt=""
              className="rounded-3xl h-72 w-full object-cover shadow-2xl hover:scale-105 transition"
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
            />

            <img
              alt=""
              className="rounded-3xl h-72 w-full object-cover shadow-2xl hover:scale-105 transition"
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
            />

          </div>

        </section>
      )}

      {/* WHY */}
      {section === "why" && (
        <section className="p-20 text-center min-h-screen bg-gradient-to-b from-black to-gray-950">

          <h2 className="text-5xl font-black mb-16">
            ¿Por qué elegirnos?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

            {[
              {
                title: "Profesores Capacitados",
                desc: "Aprende con maestros expertos y dinámicos.",
                img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              },
              {
                title: "Clases Modernas",
                desc: "Metodología interactiva y divertida.",
                img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
              },
              {
                title: "Certificaciones",
                desc: "Obtén certificados al completar tus niveles.",
                img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644"
              }
            ].map((item, i) => (
              <Card key={i}>

                <img
                  src={item.img}
                  alt=""
                  className="rounded-2xl mb-6 h-60 w-full object-cover"
                />

                <h3 className="text-3xl font-black">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-4">
                  {item.desc}
                </p>

              </Card>
            ))}

          </div>

          <BackButton />

        </section>
      )}

      {/* LEVELS */}
      {section === "levels" && (
        <section className="p-20 text-center min-h-screen">

          <h2 className="text-5xl font-black mb-16">
            Niveles
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              { name: "Básico", desc: "Empieza desde cero" },
              { name: "Intermedio", desc: "Mejora tu conversación" },
              { name: "Avanzado", desc: "Habla con fluidez" },
              { name: "Pro", desc: "Comunicación profesional" }
            ].map((lvl, i) => (
              <Card key={i}>

                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                  className="rounded-2xl mb-6 h-52 w-full object-cover"
                />

                <div className="text-6xl mb-6">
                  📚
                </div>

                <h3 className="text-3xl font-black">
                  {lvl.name}
                </h3>

                <p className="text-gray-400 mt-4">
                  {lvl.desc}
                </p>

              </Card>
            ))}

          </div>

          <BackButton />

        </section>
      )}

      {/* COURSES */}
      {section === "courses" && (
        <section className="p-20 text-center min-h-screen">

          <h2 className="text-5xl font-black mb-16">
            Cursos
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                name: "Inglés",
                img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644"
              },
              {
                name: "Francés",
                img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
              },
              {
                name: "Coreano",
                img: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1"
              }
            ].map((c, i) => (
              <Card key={i}>

                <img
                  alt=""
                  src={c.img}
                  className="rounded-2xl mb-6 h-64 w-full object-cover"
                />

                <h3 className="text-3xl font-black">
                  {c.name}
                </h3>

              </Card>
            ))}

          </div>

          <BackButton />

        </section>
      )}

      {/* ONLINE */}
      {section === "online" && (
        <section className="p-20 text-center min-h-screen">

          <h2 className="text-5xl font-black mb-16">
            Clases Online
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

            <Card>

              <img
                alt=""
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                className="rounded-2xl mb-6 h-64 w-full object-cover"
              />

              <div className="text-7xl mb-6">
                💻
              </div>

              <h3 className="text-4xl font-black">
                Normal
              </h3>

            </Card>

            <Card>

              <img
                alt=""
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                className="rounded-2xl mb-6 h-64 w-full object-cover"
              />

              <div className="text-7xl mb-6">
                👑
              </div>

              <h3 className="text-4xl font-black text-yellow-300">
                Premium
              </h3>

            </Card>

          </div>

          <BackButton />

        </section>
      )}

      {/* PRESENCIAL */}
      {section === "presencial" && (
        <section className="p-20 text-center min-h-screen">

          <h2 className="text-5xl font-black mb-16">
            Clases Presenciales
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
              "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
              "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
            ].map((img, i) => (
              <Card key={i}>

                <img
                  src={img}
                  alt=""
                  className="rounded-2xl mb-6 h-64 w-full object-cover"
                />

                <div className="text-6xl mb-6">
                  🏫
                </div>

                <h3 className="text-3xl font-black">
                  Aula Presencial
                </h3>

              </Card>
            ))}

          </div>

          <BackButton />

        </section>
      )}

      {/* SHOP */}
      {section === "shop" && (
        <section className="p-20 text-center min-h-screen">

          <h2 className="text-5xl font-black mb-16">
            Tienda
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                name: "Libro Inglés",
                price: "$20",
                img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
              },
              {
                name: "Cuaderno Premium",
                price: "$10",
                img: "https://images.unsplash.com/photo-1517842645767-c639042777db"
              },
              {
                name: "Audífonos",
                price: "$35",
                img: "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd"
              }
            ].map((item, i) => (
              <Card key={i}>

                <img
                  src={item.img}
                  alt=""
                  className="rounded-2xl mb-6 h-64 w-full object-cover"
                />

                <h3 className="text-3xl font-black">
                  {item.name}
                </h3>

                <p className="text-yellow-300 text-2xl mt-4">
                  {item.price}
                </p>

              </Card>
            ))}

          </div>

          <BackButton />

        </section>
      )}

      {/* CONTACT */}
      {section === "contact" && (
        <section className="p-20 text-center min-h-screen">

          <h2 className="text-5xl font-black mb-16">
            Contacto
          </h2>

          <div className="max-w-3xl mx-auto bg-gray-900 p-10 rounded-3xl">

            <p className="text-2xl mb-6">
              📞 829-203-4808
            </p>

            <p className="text-2xl mb-6">
              📍 Santiago, República Dominicana
            </p>

            <p className="text-2xl">
              ✉ eliteacademy@gmail.com
            </p>

          </div>

          <BackButton />

        </section>
      )}

      {/* INSCRIPTION */}
      {section === "inscription" && (
        <section className="p-20 text-center min-h-screen">

          <h2 className="text-5xl font-black mb-16">
            Inscripciones
          </h2>

          <div className="max-w-3xl mx-auto bg-gray-900 p-10 rounded-3xl space-y-6">

            <input
              placeholder="Nombre"
              className="w-full p-4 rounded-xl bg-black border border-gray-700"
            />

            <input
              placeholder="Correo"
              className="w-full p-4 rounded-xl bg-black border border-gray-700"
            />

            <select className="w-full p-4 rounded-xl bg-black border border-gray-700">

              <option>Selecciona un curso</option>
              <option>Inglés</option>
              <option>Francés</option>
              <option>Coreano</option>

            </select>

            <button className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-black hover:scale-105 transition">
              Inscribirme
            </button>

          </div>

          <BackButton />

        </section>
      )}

      {/* LOGIN */}
      {section === "login" && (
        <section className="p-20 flex items-center justify-center min-h-screen">

          <div className="bg-gray-900 p-10 rounded-3xl w-full max-w-xl">

            <h2 className="text-5xl font-black mb-10 text-center">
              Login
            </h2>

            <div className="space-y-6">

              <input
                type="email"
                placeholder="Correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 rounded-xl bg-black border border-gray-700"
              />

              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 rounded-xl bg-black border border-gray-700"
              />

              <button
                onClick={handleLogin}
                className="w-full bg-blue-500 p-4 rounded-xl font-black hover:scale-105 transition"
              >
                Iniciar Sesión
              </button>

            </div>

            <BackButton />

          </div>

        </section>
      )}

      {/* REGISTER */}
      {section === "register" && (
        <section className="p-20 flex items-center justify-center min-h-screen">

          <div className="bg-gray-900 p-10 rounded-3xl w-full max-w-xl">

            <h2 className="text-5xl font-black mb-10 text-center">
              Register
            </h2>

            <div className="space-y-6">

              <input
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-4 rounded-xl bg-black border border-gray-700"
              />

              <input
                type="email"
                placeholder="Correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 rounded-xl bg-black border border-gray-700"
              />

              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 rounded-xl bg-black border border-gray-700"
              />

              <button
                onClick={handleRegister}
                className="w-full bg-yellow-400 text-black p-4 rounded-xl font-black hover:scale-105 transition"
              >
                Crear Cuenta
              </button>

            </div>

            <BackButton />

          </div>

        </section>
      )}

    </main>
  )
}