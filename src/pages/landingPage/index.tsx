import React, { useState } from "react";
import { BsArrowRight, BsCurrencyDollar, BsDownload, BsFacebook, BsFileEarmarkMinus } from "react-icons/bs";
import { BiDollarCircle } from "react-icons/bi";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import { Link } from "react-scroll";
import Carousel from "../../components/Carousel";

import "react-multi-carousel/lib/styles.css";
import CarouselHeader from "../../components/CarouselHeader";
import { IoMdAdd } from "react-icons/io";
import bgDesktop from "../../assets/desktop.svg";
import { AiFillInstagram, AiFillLinkedin, AiFillYoutube, AiTwotoneSetting } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import SliderCard from "../../components/SlideCard";

function Chack() {
  return (
    <svg
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.03646 13.9792C5.69757 13.9792 5.37986 13.9258 5.08333 13.819C4.78681 13.714 4.51146 13.5344 4.25729 13.2802L0.698957 9.72187C0.232985 9.2559 0 8.66285 0 7.94271C0 7.22257 0.232985 6.62951 0.698957 6.16354C1.16493 5.69757 1.75798 5.46458 2.47812 5.46458C3.19826 5.46458 3.79132 5.69757 4.25729 6.16354L6.03646 7.94271L13.2802 0.698959C13.7462 0.232987 14.3392 0 15.0594 0C15.7795 0 16.3726 0.232987 16.8385 0.698959C17.3045 1.16493 17.5375 1.75799 17.5375 2.47813C17.5375 3.19827 17.3045 3.79132 16.8385 4.25729L7.81562 13.2802C7.56146 13.5344 7.28611 13.714 6.98958 13.819C6.69306 13.9258 6.37535 13.9792 6.03646 13.9792Z"
        fill="#283990"
      />
    </svg>
  );
}

function LandingPage() {

  const [open, setOpen] = useState(0);

  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };


  return (
    <>
      <header
        className={`w-full h-[100vh] bg-[url('assets/desktop.svg')] bg-no-repeat bg-cover bg-right flex flex-col justify-between overflow-hidden`}
      >
        <div className="container mx-auto px-8 my-8 min-[900px]:rounded-[20px] min-[900px]:bg-[url('assets/header-desktop.svg')] bg-no-repeat bg-cover">
          <div className="w-full flex max-[900px]:hidden min-[900px]:items-center  justify-between pt-2 pb-2 max-[900px]:flex-col max-[900px]:gap-7">
            <img src="logo.svg" alt="" className="max-[900px]:w-[180px]" />
            <ul className="ml-48 w-full flex gap-1 items-center max-[900px]:hidden">
              <Link
                to="section0"
                smooth={true}
                duration={500}
                className="w-full cursor-pointer transition-colors hover:text-blue-900 text-lg"
              >
                Principal
              </Link>
              <Link
                to="section2"
                smooth={true}
                duration={500}
                className="w-full cursor-pointer transition-colors hover:text-blue-900 text-lg"
              >
                Sobre App
              </Link>
              <Link
                to="section3"
                smooth={true}
                duration={500}
                className="w-full cursor-pointer transition-colors hover:text-blue-900 text-lg"
              >
                Módulos
              </Link>
              <Link
                to="section4"
                smooth={true}
                duration={500}
                className="w-full cursor-pointer transition-colors hover:text-blue-900 text-lg"
              >
                Contactos
              </Link>
            </ul>
            <div className="max-[900px]:w-full flex gap-2 ">
             <a href="https://apps.monzoyetu.com">
               <button className="max-[900px]:w-full min-[900px]:w-52 p-1 h-12 border border-[#FFF] rounded-sm">
                  Acessar agora
                </button>
              </a>
             <a href="#">
                <button className="w-52 p-1 h-12 text-gray-50 bg-[#283990] flex items-center justify-center gap-4 rounded-sm">
                  Baixar Manual
                <BsDownload size={20} />
                </button>
              </a>
            </div>
          </div>
          <div className="w-full  min-[900px]:hidden flex items-center  justify-between pt-2 pb-2 gap-6">
            <div className="w-full flex gap-2 ">
              <button className="w-full p-1 h-12 border border-[#FFF] rounded-sm text-[10px]">
                Acessar agora
              </button>
              <button className="w-full p-1 text-[10px] h-12 text-gray-50 bg-[#283990] flex items-center justify-center gap-4 rounded-sm">
                Baixar Manual
                <BsDownload size={20} />
              </button>
            </div>
            <img src="logo.svg" alt="" className="max-[900px]:w-[100px]" />
          </div>
        </div>
        <div className="grid grid-cols-2 max-[900px]:grid-cols-1  container mx-auto min-[900px]:pl-8">
          <div className="min-[900px]:mt-52">
            <h2 className="text-center  min-[900px]:text-left min-[900px]:text-5xl text-3xl font-bold">
            Sistema de controle de acesso e gestão de condomínio
            </h2>
            <form
              action=""
              className="w-full max-[900px]:mt-1 min-[900px]:mt-24 max-[900px]:px-9 min-[900px]:justify-start flex  justify-center py-5"
            >
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Seu endereço de e-mail"
                  className="min-[900px]:w-96 p-1 h-12 placeholder:text-[#4D4D4D] placeholder:text-xl placeholder:font-light indent-7 max-[900px]:indent-3"
                />
                <button className="w-20 p-1 h-12 text-gray-50 bg-[#283990] flex items-center justify-center">
                  Entrar
                </button>
              </div>
            </form>
          </div>

          <img src="mobile-banner.svg " className="justify-end" alt="" />
        </div>
      </header>
      <main>
        
        <section className="w-full bg-[#EFF2FF]" id="section3">

          <div className="w-full  min-[900px]:hidden flex items-center  justify-between pt-2 pb-2 gap-6">
            <div className="w-full flex gap-2 ">
            </div>
            <h1 className="min-[900px]:hidden w-full flex font-bold max-w-[900px] gap-3 text-[20px]">Nossos Clientes</h1>
          </div>

          <div className="w-full h-full flex flex-col items-center  pt-20 pb-20 gap-2 container mx-auto px-8  bg-[url('assets/modolo.svg')] bg-cover bg-no-repeat">
            <h1 className="text-5xl font-bold max-[900px]:hidden max-w-[900px] gap-3">Nossos Clientes</h1>
            <h1 className="min-[900px]:hidden  font-bold max-w-[900px] gap-3 text-[30px]">Nossos Clientes</h1>

            {/* <div className=" "> */}
              <Carousel toShow={5}>
                <div className="flex p-2 w-full bg-transparent ">
                  <div className="max-[900px]: ">
                    <div className="w-[260px] flex items-center gap-6 pt-2 bg-transparent ">
                      <ul className="flex items-center w-full gap-5">
                        <li className="font-medium">Condomínio Vereda das Flores</li>
                      </ul>
                      <div className="bg-gray-300 w-[1px] h-7"></div>
                    </div>
                  </div>
                </div>

                <div className="flex p-2 w-full bg-transparent">
                  <div className="max-[900px]: ">
                    <div className="w-[250px] flex items-center gap-6 p-2 bg-transparent ">
                      <ul className="flex items-center w-full gap-5">
                        <li className="font-medium "> Urbanização Boa Vida</li>
                      </ul>
                      <div className="bg-gray-300 w-[1px] h-7"></div>
                    </div>
                  </div>
                </div>

                <div className="flex pt-2 w-full bg-transparent ">
                  <div className="max-[900px]: ">
                  <div className="w-[240px] flex items-center gap-6 pt-2 bg-transparent ">
                      <ul className="flex items-center w-full gap-5">
                      <li className="font-medium ">Condomínio Rosa Linda</li>
                      </ul>
                      <div className="bg-gray-300 w-[1px] h-7"></div>
                    </div>
                  </div>
                </div>

              <div className="flex pt-2 w-full bg-transparent ">
                  <div className="max-[900px]: ">
                  <div className="w-[230px] flex items-center gap-6 pt-2 bg-transparent ">
                      <ul className="flex items-center w-full gap-5">
                      <li className="font-medium ">Condomínio Rivieira</li>
                      </ul>
                      <div className="bg-gray-300 w-[1px] h-7"></div>
                    </div>
                  </div>
                </div>

                  <div className="p-2 w-full bg-transparent">
                    <div className="max-[900px]: ">
                    <div className="w-[300px] flex items-center gap-6 pt-2 bg-transparent ">
                        <ul className="flex items-center w-full gap-5 ">
                          <li className="font-medium">Condomínio Villas do Atlántico</li>
                       </ul>
                        <div className="bg-gray-300 w-[1px] h-7"></div>
                     </div>
                    </div>
                  </div> 
                </Carousel>
          </div>
       </section>

        <section className="w-full" id="section2">
          <div className="flex bg-[url('assets/left-top1.svg')] pt-32 pb-20 items-center container mx-auto px-8  bg-no-repeat bg-cover  bg-left">
            <div className="w-full h-full flex flex-col   gap-7 ">
              <h1 className="text-3xl font-bold max-w-[900px] ">
                Monzo Yetu é o sistema ideal para o seu condomínio.
              </h1>
              <p className="max-w-[900px]">
                O sistema permite controlar os acessos dos moradores, visitantes
                e porteiros em tempo real, tendo o estado alterado quando houver
                uma ação.
              </p>
              <div className="flex gap-12 mt-9  items-center">
              <a href="#">
                <button className="w-52 p-1 h-12 text-gray-50 bg-[#283990] flex items-center justify-center gap-4 rounded-sm">
                  Baixar Manual
                <BsDownload size={20} />
                </button>
                </a>
                <button>
                  <img src="play.svg" className="h-16" alt="" />
                </button>
              </div>
            </div>
            <div className="max-[900px]:hidden">
              <img src="girl.png" alt="" />
            </div>
            
          </div>
        </section>

        <section className="w-full   bg-[#EFF2FF]" id="section3">
          <div className="w-full h-full flex flex-col items-center  pt-20 pb-20 gap-2 container mx-auto px-8  bg-[url('assets/modolo.svg')]  bg-cover bg bg-no-repeat  ">
            <h1 className="text-3xl font-bold max-w-[900px] ">
              Módulos do Sistema
            </h1>
            <p className="max-w-[900px]">Todos os módulos do sistema</p>
            <div className="mt-12 grid  grid-cols-4 max-[900px]:grid-cols-2">
              <div className="flex gap-3 p-9 text-center  items-center flex-col border-r border-b border-[#cbc7c7]">
                <img src="venda.svg" alt="" />
                <h1 className="text-sm font-bold max-w-[900px] ">
                  Gestão de Venda e Imóvel
                </h1>
                <p className="max-w-[900px] text-xs">
                  O sistema facilita a comercialização de propriedades imobiliárias,
                  otimizando o processo
                 de venda dos imóveis.
                 
                </p>
              </div>
              <div className="flex gap-3 p-9 text-center  items-center flex-col border-r border-b max-[900px]:border-r-0 border-[#cbc7c7]">
                <img src="comunica.svg" alt="" />
                <h1 className="text-sm font-bold max-w-[900px] ">
                  Gestão de Comunicação
                </h1>
                <p className="max-w-[900px] text-xs">
                 O sistema facilita a comunicação entre os moradores, visitantes e a
                administração.
                </p>
              </div>
              <div className="flex gap-3 p-9 text-center  items-center flex-col border-r border-b border-[#cbc7c7]">
                <img src="suporte.svg" alt="" />
                <h1 className="text-sm font-bold max-w-[900px] ">Suporte</h1>
                <p className="max-w-[900px] text-xs">
                 Equipa dedicada para dar suporte 24/7.
                </p>
              </div>
              <div className="flex gap-3 p-9 text-center  items-center flex-col  border-b border-[#cbc7c7]">
                <img src="vigilance.svg" alt="" />
                <h1 className="text-sm font-bold max-w-[900px] ">Vigilância</h1>
                <p className="max-w-[900px] text-xs">
                O sistema oferece soluções em monitoramento e segurança,
                 permitindo a visualização de imagens e o registro de ocorrências em tempo real.
                </p>
              </div>
              <div className="flex gap-3 p-9 text-center items-center flex-col border-r max-[900px]:border-b border-[#cbc7c7]">
                <img src="cobranca.svg" alt="" />
                <h1 className="text-sm font-bold max-w-[900px] ">
                  Gestão de Cobranças
                </h1>
                <p className="max-w-[900px] text-xs">
                O sistema automatiza e simplifica o processo de recebimento de pagamentos,
                 permitindo a gestão de contas a receber de forma mais eficiente. 
                </p>
              </div>
              <div className="flex gap-3 p-9 text-center items-center flex-col border-r max-[900px]:border-b max-[900px]:border-r-0 border-[#cbc7c7]">
                <img src="residencia.svg" alt="" />
                <h1 className="text-sm font-bold max-w-[900px] ">
                  Gestão de Residências
                </h1>
                <p className="max-w-[900px] text-xs">
                  O sistema permite controlar os acessos dos moradores e
                  visitantes.
                </p>
              </div>
              <div className="flex gap-3 p-9 text-center items-center flex-col border-r  border-[#cbc7c7]">
                <img src="acesso.svg" alt="" />
                <h1 className="text-sm font-bold max-w-[900px] ">
                  Gestão de Acesso
                </h1>
                <p className="max-w-[900px] text-xs">
                O sistema permite o
                  monitoramento de entradas e saídas de pessoas, com 
                 notificações em tempo real.
                </p>
              </div>
              <div className="flex gap-3 p-9 text-center items-center flex-col   border-[#cbc7c7]">
                <img src="config.svg" alt="" />
                <h1 className="text-sm font-bold max-w-[900px] ">
                  Configurações
                </h1>
                <p className="max-w-[900px] text-xs">
                  Permite a personalização e criação de perfis de acesso.
                   Com uma interface amigável e intuitiva.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full">
          <div className="flex bg-[url('assetsleft-top1.svg')] pt-32 pb-20 items-center gap-64 container mx-auto px-8  bg-no-repeat bg-cover  bg-left">
            <div className="max-[900px]:hidden">
              <img src="morador.png" alt="" className="" />
            </div>
            <div className="w-full h-full flex flex-col   gap-7 ">
              <h1 className="text-3xl font-bold max-w-[900px] ">
                Gestão de Morador.
              </h1>
              <p className="max-w-[900px]">
                Criação de códigos de acesso para visitantes e funcionários.
                Monitoramento dos agendamentos, entrada e saída dos funcionários
                afecto as sua residências. Controlo de entrada e saída dos
                funcionários afecto as suas residências.
              </p>
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-2 text-sm">
                  <Chack /> Código QR de acesso
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Chack />
                  Cadastro de gregados
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Chack />
                  Gestão de Funcionários
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Chack /> Agendar visita
                </li>
              </ul>
              <div className="flex gap-7 mt-9  items-center">
                <div className="flex gap-3  items-center">
                 <a href="https://play.google.com/store/apps/details?id=ao.tescan.monzoyetu.morador&hl=en&gl=US">
                    <button>
                      <img src="google.svg" className="h-16" alt="" />
                    </button>
                  </a>

                  <a href="https://apps.apple.com/us/app/monzoyetu/id1599503143">
                    <button>  
                      <img src="apple.svg" className="h-16" alt=""/>
                    </button>
                  </a>
                </div>
                <button>
                  <img src="play.svg" className="h-16" alt="" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full   bg-[#EFF2FF]">
          <div className="flex bg-[url('assets/left-top1.svg')] pt-32 pb-20 items-center  container mx-auto px-8  bg-no-repeat bg-cover  bg-left">
            <div className="w-full h-full flex flex-col   gap-7 ">
              <h1 className="text-3xl font-bold max-w-[900px] ">
                Gestão de Porteiros
              </h1>
              <p className="max-w-[900px]">
                Melhoria no atendimento dos visitantes, funcionários afectos as
                residências e prestadores de serviços. Redução de custos com
                cadernos de apontamentos. Melhoria da imagem dos serviços da
                portaria.
              </p>
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-2 text-sm">
                  <Chack /> Gestão de visitantes
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Chack /> Gestão de Funcionários
                </li>
                <li className="flex items-center gap-2 text-sm ">
                  <Chack /> Gestão de Moradores
                </li>
              </ul>
              <div className="flex gap-7 mt-9  items-center">
                <div className="flex gap-3  items-center">
                  <a href="https://play.google.com/store/apps/details?id=ao.tescan.monzoyetu.morador&hl=en&gl=US">
                    <button>
                      <img src="google.svg" className="h-16" alt="" />
                    </button>
                  </a>

                  <a href="https://apps.apple.com/us/app/monzoyetu/id1599503143">
                    <button>  
                      <img src="apple.svg" className="h-16" alt=""/>
                    </button>
                  </a>
                </div>
                <button>
                  <img src="play.svg" className="h-16" alt="" />
                </button>
              </div>
            </div>
            <div className="max-[900px]:hidden">
              <img src="man.png" alt="" />
            </div>
          </div>
        </section>
        <section className="w-full   ">
          <div
            className="flex bg-[url('assets/left-top1.svg')] pt-28 pb-20  flex-col  container mx-auto px-8  bg-no-repeat bg-cover  bg-left
         
          "
          >
            <div className="flex items-center justify-center flex-col">
              <h1 className="text-3xl text-center font-bold max-w-[900px] ">
                Equipamentos Associados
              </h1>
              <p className="max-w-[900px]">
                Todos os equipamentos que funcionam com o sistema
              </p>
            </div>
            <div className="mt-20 grid gap-6  grid-cols-2  max-[900px]:grid-flow-row   max-[900px]:grid-cols-1 ">
              <div className="w-full flex rounded-lg  p-9 text-center  items-center flex-col bg-[#EFF2FF] relative">
                <img src="leitor.png" alt="" />
                <h1 className="text-sm font-bold  absolute bottom-5 right-12">
                 PDA
                </h1>
              </div>

              <div className="w-full flex rounded-lg  p-9 text-center  items-center flex-col bg-[#ABB9FF] relative">
                <img src="catraca.png" alt="" />
                <h1 className="text-sm font-bold  absolute bottom-5 right-12">
                  CATRACA
                </h1>
              </div>

              <div className="w-full flex  rounded-lg p-9 text-center  items-center flex-col bg-[#ABB9FF] relative">
                <img src="leitor-phone.png" alt="" />
                <h1 className="text-sm font-bold  absolute bottom-5 right-12">
                  LEITOR DE ACESSO
                </h1>
              </div>

              <div className="w-full flex  rounded-lg p-9 text-center  items-center flex-col bg-[#EFF2FF] relative">
                <img src="cancela.png" alt="" />
                <h1 className="text-sm font-bold  absolute bottom-5 right-12">
                  CANCELA
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full  bg-[#EFF2FF] max-[900px]:hidden">
          <div className="flex  pt-28 pb-20  flex-col  container mx-auto px-8  bg-no-repeat bg-cover  bg-left">
            <Carousel toShow={2}>
              <SliderCard
                mLeft=""
                desc="Super, realmente é fácil e muito eficiente, 
                          em vez de ficar na fila a gastara tempo, 
                          esperando a minha vez de ser atendido, com a Control, foi mais tranquilo e sem estresse."
                title="Paulo Mendes"
                image="/comemt1.png"
              />

              <SliderCard
                mLeft="ml-8"
                desc="Estou super satisfeito, realmente a plataforma
                          funciona e ajuda a evitar filas e estresse, 
                          fique a espera da minah vez no onmforto da minha casa
                          Estou super satisfeito, realmente a plataforma
                          funciona e ajuda a evitar filas e estresse, 
                          fique a espera da minah vez no onmforto da minha casa.
                          "
                title="Fernando Jorge"
                image="/comemt2.png"
              />

              <SliderCard
                mLeft="ml-8"
                desc="Estou super satisfeito, realmente a plataforma
                          funciona e ajuda a evitar filas e estresse, 
                          fique a espera da minah vez no onmforto da minha casa
                          Estou super satisfeito, realmente a plataforma
                          funciona e ajuda a evitar filas e estresse, 
                          fique a espera da minah vez no onmforto da minha casa.
                          "
                title="Fernando Jorge"
                image="/comemt2.png"
              />
            </Carousel>
          </div>
        </section>


<section className="w-full   ">
          <div className="flex bg-[url('assets/left-top1.svg')] pt-32 pb-20 items-center  container mx-auto px-8  bg-no-repeat bg-cover  bg-left">
            <div className="max-[900px]:hidden w-3/4">
              <img src="man-expert.png" alt="" className="" />
            </div>
            <div className="w-full h-full flex flex-col   gap-7 ">
              <h1 className="text-5xl font-bold max-w-[200px] ">
                Perguntas Frequentes
              </h1>
              <Accordion open={open === 1}>
                <AccordionHeader
                  className="font-normal py-5 max-[900px]:text-base text-xl border-b border-[#9F9F9F]"
                  onClick={() => handleOpen(1)}
                >
                  <div className="flex gap-3 w-full h-[50px]">  
                    <span className="w-[80%]"> Como o meu Condomínio pode aderir ao Monzo Yetu?</span>
                    <span className=" ">
                      <button className="p-3  absolute  right-0  text-center text-white bg-[#283990] rounded-[100%]">
                        <IoMdAdd size={20} />
                      </button>
                    </span>
                  </div>
                </AccordionHeader>
                <AccordionBody>
                  Entrando em contato com a ControlJP, pelos seguintes meios: <br />

                  e-mail: geral@monzoyetu.com 
                  Telefone: +244 924266041

                </AccordionBody>
              </Accordion>
              <Accordion open={open === 2}>
                <AccordionHeader
                  onClick={() => handleOpen(2)}
                  className="flex  justify-between max-[900px]:text-base font-normal w-full py-5 items-center gap-2 text-xl border-b border-[#9F9F9F]"
                >
                  <div className="flex gap-3 w-full h-[50px] ">  
                    <span className="w-[80%]"> O sistema Monzo Yetu é adaptável a qualquer país? </span>
                    <span className=" ">
                      <button className="p-3  absolute  right-0  text-center text-white bg-[#283990] rounded-[100%]">
                        <IoMdAdd size={20} />
                      </button>
                    </span>
                  </div>
                </AccordionHeader>
                <AccordionBody>
                    Sim.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 3}>
                <AccordionHeader
                  onClick={() => handleOpen(3)}
                  className="flex  justify-between max-[900px]:text-base font-normal w-full py-5 items-center gap-2 text-xl border-b border-[#9F9F9F]"
                >
                  <div className="flex gap-3 w-full h-[50px] ">  
                    <span className="w-[80%]"> O sistema Monzo Yetu pode ser usado em residencias ou empresas? </span>
                    <span className=" ">
                      <button className="p-3  absolute  right-0  text-center text-white bg-[#283990] rounded-[100%]">
                        <IoMdAdd size={20} />
                      </button>
                    </span>
                  </div>

                </AccordionHeader>
                <AccordionBody>
                Sim, o sistema pode ser usado para qualquer estrutura cujo haja a necessidade do controle de acessos. 
                Para mais informaçoes entre em contacto com a ControlJP.

                </AccordionBody>
              </Accordion>

              <Accordion open={open === 4}>
                <AccordionHeader
                  onClick={() => handleOpen(4)}
                  className="flex  justify-between max-[900px]:text-base font-normal w-full py-5 items-center gap-2 text-xl border-b border-[#9F9F9F]"
                >
                  <div className="flex gap-3 w-full h-[50px] ">  
                    <span className="w-[80%]"> Quem pode ter acesso aos dados? </span>
                    <span className=" ">
                      <button className="p-3  absolute  right-0  text-center text-white bg-[#283990] rounded-[100%]">
                        <IoMdAdd size={20} />
                      </button>
                    </span>
                  </div>
                </AccordionHeader>
                <AccordionBody>
                As credenciais de acesso ao aplicativo são enviados diretamente para o usuário de acorado ao seu cadastro.
                </AccordionBody>
              </Accordion>

              <Accordion open={open === 5}>
                <AccordionHeader
                  onClick={() => handleOpen(5)}
                  className="flex  justify-between max-[900px]:text-base font-normal w-full py-5 items-center gap-2 text-xl border-b border-[#9F9F9F]"
                >
                  <div className="flex gap-3 w-full">  
                    <span className="w-[80%]"> Como é feito o cadastro dos usuarios para liberar o acesso ao aplicativo? </span>
                    <span className=" ">
                      <button className="p-3  absolute  right-0  text-center text-white bg-[#283990] rounded-[100%]">
                        <IoMdAdd size={20} />
                      </button>
                    </span>
                  </div>
                </AccordionHeader>
                <AccordionBody>
                O cadastro e feito apartir do painel de controle de acordo ao local em que o usuario precisa ser cadastrado.
                </AccordionBody>
              </Accordion>

              <Accordion open={open === 6}>
                <AccordionHeader
                  onClick={() => handleOpen(6)}
                  className="flex  justify-between max-[900px]:text-base font-normal w-full py-5 items-center gap-2 text-xl border-b border-[#9F9F9F]"
                >
                  <div className="flex gap-3 w-full">  
                    <span className="w-[80%]"> Um morador pode dar acesso aos seus agregados para fazerem agendamentos? </span>
                    <span className=" ">
                      <button className="p-3 absolute  right-0  text-center text-white bg-[#283990] rounded-[100%]">
                        <IoMdAdd size={20} />
                      </button>
                    </span>
                  </div>

                </AccordionHeader>
                <AccordionBody>
                     Sim.                
                </AccordionBody>
              </Accordion>

              <Accordion open={open === 7}>
                <AccordionHeader
                  onClick={() => handleOpen(7)}
                  className="flex justify-between max-[900px]:text-base font-normal w-full py-5 items-center gap-2 text-xl border-b border-[#9F9F9F]"
                >
                  <div className="flex gap-3 w-full h-[50px]">  
                       <span className="w-[80%] "> Quantos agregados um morador pode adicionar? </span>
                    <span className="pb-20 absolute  right-0  text-center ">
                      <button className="p-3  absolute  right-0  text-center text-white bg-[#283990] rounded-[100%]">
                        <IoMdAdd size={20} />
                      </button>
                    </span>
                  </div>
                </AccordionHeader>
                <AccordionBody>
                Cinco (5). Caso deseje ter mais agregados para agendamentos deve-se contactar a administração do Condomínio.                
                </AccordionBody>
              </Accordion>

            </div>
          </div>
        </section> 

        <section className="w-full   bg-[#EFF2FF]" id="section3">
          <div className="w-full h-full flex flex-col items-center  pt-20 pb-20  gap-2 container mx-auto px-8  bg-[url('assets/modolo.svg')] bg-cover bg bg-no-repeat">
            <h1 className="text-5xl font-bold max-w-[900px] ">Notícias</h1>
            <p className="max-w-[900px] min-[900px]:text-xl">
              Todas as Notícias sobre o app
            </p>
            <div className="flex items-center mt-10 gap-3 container"></div>

            <Carousel toShow={3}>
              <div className="p-2 w-full bg-transparent">
                <div className="bg-white w-full overflow-hidden rounded-xl">
                  <img
                    src="morador.png"
                    className="h-80 w-full rounded-b-xl"
                    alt=""
                  />
                  <div className="px-8 py-4 flex flex-col gap-4">
                    <h1 className="text-xl font-bold">
                      Lorem Ipsum is simply text of the printing and
                    </h1>
                    <p className="text-base">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley.
                    </p>
                  </div>
                  <div className="px-8 py-4 flex items-center justify-between">
                    <a className="w-32 h-9 gap-2 cursor-pointer rounded text-gray-50 bg-[#283990] flex items-center justify-center">
                      saber mais
                      <BsArrowRight className="font-bold" />
                    </a>
                    <div className="p-3 border-l border-t">02 Janeiro 2023</div>
                  </div>
                </div>
              </div>
              <div className="p-2 w-full bg-transparent">
                <div className="bg-white w-full overflow-hidden rounded-xl">
                  <img
                      src="morador.png"
                    className="h-80 w-full rounded-b-xl"
                    alt=""
                  />
                  <div className="px-8 py-4 flex flex-col gap-4">
                    <h1 className="text-xl font-bold">
                      Lorem Ipsum is simply text of the printing and
                    </h1>
                    <p className="text-base">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley.
                    </p>
                  </div>
                  <div className="px-8 py-4 flex items-center justify-between">
                    <a className="w-32 h-9 gap-2 cursor-pointer rounded text-gray-50 bg-[#283990] flex items-center justify-center">
                      saber mais
                      <BsArrowRight className="font-bold" />
                    </a>
                    <div className="p-3 border-l border-t">02 Janeiro 2023</div>
                  </div>
                </div>
              </div>
              <div className="p-2 w-full bg-transparent">
                <div className="bg-white w-full overflow-hidden rounded-xl">
                  <img
                src="morador.png"
                className="h-80 w-full rounded-b-xl"
                 alt=""
                  />
                  <div className="px-8 py-4 flex flex-col gap-4">
                    <h1 className="text-xl font-bold">
                      Lorem Ipsum is simply text of the printing and
                    </h1>
                    <p className="text-base">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley.
                    </p>
                  </div>
                  <div className="px-8 py-4 flex items-center justify-between">
                    <a className="w-32 h-9 gap-2 cursor-pointer rounded text-gray-50 bg-[#283990] flex items-center justify-center">
                      saber mais
                      <BsArrowRight className="font-bold" />
                    </a>
                    <div className="p-3 border-l border-t">02 Janeiro 2023</div>
                  </div>
                </div>
              </div>
              <div className="p-2 w-full bg-transparent">
                <div className="bg-white w-full overflow-hidden rounded-xl">
                  <img
                  src="morador.png"
                    className="h-80 w-full rounded-b-xl"
                    alt=""
                  />
                  <div className="px-8 py-4 flex flex-col gap-4">
                    <h1 className="text-xl font-bold">
                      Lorem Ipsum is simply text of the printing and
                    </h1>
                    <p className="text-base">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley.
                    </p>
                  </div>
                  <div className="px-8 py-4 flex items-center justify-between">
                    <a className="w-32 h-9 gap-2 cursor-pointer rounded text-gray-50 bg-[#283990] flex items-center justify-center">
                      saber mais
                      <BsArrowRight className="font-bold" />
                    </a>
                    <div className="p-3 border-l border-t">02 Janeiro 2023</div>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </section>


 </main>

      <footer className="bg-[#01082E]">
        <section>
          <div
            id="content1"
            className="py-14 container mx-auto px-8 gap-5 grid grid-cols-3 max-[900px]:grid-cols-1"
          >
            <div className="flex p-10 liner gap-7 text-white items-center justify-center flex-col">
              <div className="w-24 h-24  flex items-center justify-center border-4 border-[#A7B5FF] rounded-[100%]">
                <BsCurrencyDollar size={40} />
              </div>
              <p className="max-w-[900px]">Preços acessíveis</p>
            </div>
            <div className="flex p-10 liner text-white items-center gap-4 justify-center flex-col">
              <div className="w-24 h-24 flex items-center justify-center border-4 border-[#A7B5FF] rounded-[100%]">
                <FaPhoneAlt size={40} />
              </div>
              <p className="max-w-[900px]">
                Equipa dedicada para dar suporte 24/7
              </p>
            </div>
            <div className="flex p-10 liner text-white items-center gap-4 justify-center flex-col">
              <div className="w-24 h-24 flex items-center justify-center border-4 border-[#A7B5FF] rounded-[100%]">
                <AiTwotoneSetting size={40} />
              </div>
              <p className="max-w-[900px]">
                Programação contínua para adequar o sistema a novas realidades
              </p>
            </div>
          </div>
        </section>
        <section className="bg-transparent">
          <div
            id="content1"
            className="py-14 container mx-auto px-8 md:flex gap-6 justify-between"
          >
            <div>
              <h1 className="text-3xl text-white w-[200px] font-semibold">
               
              </h1>
            </div>
          </div>
        </section>
        <section
          className="w-full  items-center justify-center  mt-0 gap-2 "
          id="section4"
        >
          <div
            id="contenst1"
            className="py-14 container mx-auto px-8 flex flex-col gap-24 md:flex-row md:justify-between"
          >
            <div className="w-full">
              <form action="" className="flex flex-col gap-7">
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Nome"
                    className="w-full bg-transparent text-white  border-b border-[#dedede55] p-1 h-12 placeholder:text-gray-300  placeholder:text-sm placeholder:font-light"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <input
                      type="text"
                      placeholder="Email"
                      className="w-full bg-transparent text-white  border-b border-[#dedede55] p-1 h-12 placeholder:text-gray-300 placeholder:text-sm placeholder:font-light"
                    />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="text"
                      placeholder="Telefone"
                      className="w-full bg-transparent text-white  border-b border-[#dedede55] p-1 h-12 placeholder:text-gray-300 placeholder:text-sm placeholder:font-light"
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    type="text"
                  placeholder="descrição"
                    className="w-full bg-transparent text-white border-b border-[#dedede55] p-1 h-12 placeholder:text-gray-300 placeholder:text-sm placeholder:font-light"
                  />
                </div>
                <button className="w-20 p-1 h-12 text-gray-50 bg-[#283990] flex items-center justify-center">
                  Enviar
                </button>
              </form>
            </div>
            <div className="flex flex-col text-white  gap-10">
              <div className="flex flex-col">
                <strong className="mb-4  font-bold text-base">
                   Localização
                </strong>
                <p className=" font-light text-base max-w-sm">
                   Urbanização Nova Vida, loja 76.
                </p>
              </div>
              <div className="flex flex-col">
                <strong className="mb-4 font-bold text-base">Contatos</strong>
                <p className=" font-light text-base">+244 924 266 041</p>
              </div>
              <div className="flex flex-col">
                <strong className="mb-4 font-bold text-base">E-mail</strong>
                <p className=" font-light text-base">geral@monzoyetu.com <br/> </p>
                <p className=" font-light text-base">info@controljp.com</p>
              </div>
            </div>
          </div>
        </section>
        <div className="bg-white">
          <div
            id="content1"
            className="py-3 container mx-auto px-8  flex items-center justify-between gap-24 max-[900px]:flex-col
             max-[900px]:gap-1"
          >
            <div className="flex items-center gap-4">
              <a href="https://www.youtube.com/@monzoyetu">
              <AiFillYoutube size={32} className="text-[#283990]"/>
              </a>
              <a href="">
                <AiFillInstagram size={33} className="text-[#283990]" />
              </a>
              <a href="">
                <BsFacebook size={30} className="text-[#283990]" />
              </a>
              <a href="">
                <AiFillLinkedin size={32} className="text-[#283990]" />
              </a>
            </div>
            <div>
              <p className="max-w-[900px] text-xs text-center">
                O Sistema MonzoYetu é um produto da empresa
                <span className="text-[#283990]"> ControlJP.</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default LandingPage;
