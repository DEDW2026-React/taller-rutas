import { createContext, useContext, useState } from 'react'
import { Link, MemoryRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router'

export const titulo = 'Desafío: perfil con sesión'
export const enunciado =
  'Arma una app con Inicio, Login y Perfil, donde el perfil solo se ve con sesión iniciada. Esta vez no hay pasos guiados, así que tú decides cómo hacerlo.'

// ✅ REQUISITOS
// 1. Un menú con dos links: "Inicio" (a /) y "Mi perfil" (a /perfil)
// 2. En / se ve un <h3>Inicio</h3>
// 3. Sin sesión, /perfil redirige a /login. Usa <Navigate to="/login" />
// 4. En /login hay un <h3>Iniciar sesión</h3>, un input para el nombre y un botón "Entrar".
//    Al entrar, se guarda la sesión y se vuelve a /perfil con useNavigate
// 5. Con sesión, /perfil muestra "Hola, {nombre}" y un botón "Salir".
//    Al salir, la sesión se borra y /perfil vuelve a pedir sesión
// 6. La sesión vive en un SesionProvider con un hook useSesion, como en el taller de contexto
//
// Antes de programar, responde en papel. ¿Qué guarda el contexto? ¿Qué componentes lo leen?

export default function Sesion() {
  return (
    // 🎁 Esto ya viene hecho. Tu app va dentro, en lugar del <p>.
    <MemoryRouter>
      <BarraDireccion />
      {/* 🎃 Desde aquí es tuyo. */}
      <p className="muted">Aquí va tu app</p>
    </MemoryRouter>
  )
}

// 🎁 Muestra la URL actual, como la barra del navegador
function BarraDireccion() {
  const { pathname } = useLocation()
  return <div className="barra-direccion" aria-label="Barra de direcciones">localhost:5173{pathname}</div>
}

// 💡 Pistas, solo si te quedas pegado (léelas de a una):
//
// Pista 1: el contexto guarda el nombre de quien entró (o null) y dos funciones: entrar y salir.
//
// Pista 2: el SesionProvider va dentro del MemoryRouter y envuelve el menú y las rutas.
//
// Pista 3: la página de perfil decide qué mostrar.
//          if (!nombre) return <Navigate to="/login" />
//
// Pista 4: en el login, después de entrar(nombre), llama a navigate('/perfil').
