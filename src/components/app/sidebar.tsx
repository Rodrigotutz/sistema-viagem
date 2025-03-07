"use client";

import {
  Banknote,
  Briefcase,
  Building,
  Car,
  LayoutDashboardIcon,
  LogOut,
  Plane,
  Settings2,
  TrafficCone,
  User,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import logoutAction from "@/app/dashboard/(logout)/logoutAction";

export default function Sidebar() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const handleMouseEnter = (name: string) => {
    setHoveredIcon(name);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <aside className="h-screen hidden fixed w-12  md:flex flex-col items-center pt-5 pb-5 justify-between text-white bg-orange-400/65 z-[10000]">
      <div className="flex flex-col gap-6">
        <Link
          href={"/dashboard/perfil"}
          onMouseEnter={() => handleMouseEnter("Usuario")}
          onMouseLeave={handleMouseLeave}
          className="relative flex items-center"
        >
          <User size={25} />
          {hoveredIcon === "Usuario" && (
            <span className="absolute left-12 text-white bg-orange-300 p-2 rounded-md text-lg whitespace-nowrap z-[9999]">
              Rodrigo Tutz
            </span>
          )}
        </Link>

        <div className="border w-full border-white"></div>

        <Link
          href={"/dashboard"}
          onMouseEnter={() => handleMouseEnter("Dashboard")}
          onMouseLeave={handleMouseLeave}
          className="relative flex items-center"
        >
          <LayoutDashboardIcon size={22} />
          {hoveredIcon === "Dashboard" && (
            <span className="absolute left-12 text-white bg-orange-300 p-2 rounded-md text-lg whitespace-nowrap z-[9999]">
              Dashboard
            </span>
          )}
        </Link>

        <Link
          href={"/dashboard/prestacao"}
          onMouseEnter={() => handleMouseEnter("Prestação de Contas")}
          onMouseLeave={handleMouseLeave}
          className="relative flex items-center"
        >
          <Banknote size={22} />
          {hoveredIcon === "Prestação de Contas" && (
            <span className="absolute left-12 text-white bg-orange-300 p-2 rounded-md text-lg whitespace-nowrap z-[9999]">
              Prestação de Contas
            </span>
          )}
        </Link>

        <Link
          href={"/dashboard/cidades"}
          onMouseEnter={() => handleMouseEnter("Cidades")}
          onMouseLeave={handleMouseLeave}
          className="relative flex items-center"
        >
          <Building size={22} />
          {hoveredIcon === "Cidades" && (
            <span className="absolute left-12 text-white bg-orange-300 p-2 rounded-md text-lg whitespace-nowrap z-[9999]">
              Cidades
            </span>
          )}
        </Link>

        <Link
          href={"/dashboard/veiculos"}
          onMouseEnter={() => handleMouseEnter("Veiculos")}
          onMouseLeave={handleMouseLeave}
          className="relative flex items-center"
        >
          <Car size={22} />
          {hoveredIcon === "Veiculos" && (
            <span className="absolute left-12 text-white bg-orange-300 p-2 rounded-md text-lg whitespace-nowrap z-[9999]">
              Veículos
            </span>
          )}
        </Link>

        <Link
          href={"/dashboard/viagens"}
          onMouseEnter={() => handleMouseEnter("Viagens")}
          onMouseLeave={handleMouseLeave}
          className="relative flex items-center"
        >
          <Plane size={22} />
          {hoveredIcon === "Viagens" && (
            <span className="absolute left-12 text-white bg-orange-300 p-2 rounded-md text-lg whitespace-nowrap z-[9999]">
              Viagens
            </span>
          )}
        </Link>

        <Link
          href={"/dashboard/tecnicos"}
          onMouseEnter={() => handleMouseEnter("Técnicos")}
          onMouseLeave={handleMouseLeave}
          className="relative flex items-center"
        >
          <Briefcase size={22} />
          {hoveredIcon === "Técnicos" && (
            <span className="absolute left-12 text-white bg-orange-300 p-2 rounded-md text-lg whitespace-nowrap z-[9999]">
              Técnicos
            </span>
          )}
        </Link>
      </div>

      <div className="flex flex-col gap-5">
        <Link
          href={"/dashboard/definicoes"}
          onMouseEnter={() => handleMouseEnter("Definições")}
          onMouseLeave={handleMouseLeave}
          className="relative flex items-center"
        >
          <Settings2 size={22} />
          {hoveredIcon === "Definições" && (
            <span className="absolute left-12 text-white bg-orange-300 p-2 rounded-md text-lg whitespace-nowrap z-[9999]">
              Definições
            </span>
          )}
        </Link>

        <div
          onMouseEnter={() => handleMouseEnter("Sair")}
          onMouseLeave={handleMouseLeave}
          className="relative flex items-center cursor-pointer"
        >
          <button onClick={logoutAction} className="cursor-pointer">
            <LogOut size={22} />
          </button>
        </div>
      </div>
    </aside>
  );
}
