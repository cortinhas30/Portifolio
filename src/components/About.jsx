import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Formado em Engenharia de Computação na Universidade Federal do
          Pará (UFPA), com formação também em Tecnico em Informatica pelo
          Instituto Federal do Pará, possuo boa experiencia com programação
          tendo um artigo publicado recentemente sobre um jogo desenvolvido
          na plataforma Unity3D com o objetivo de democratizar o ensino do 
          inglês, jogo esse que foi escrito em C# e possui a feature de 
          reconhecimento de voz.
        </p>

        <br />

        <p className="text-xl">
          Possuo experiencia com varias tecnologias, como por exemplo C,
          Python, Java, C#, mas atualmente venho trabalhando minhas habilidades
          em Javascript e frameworks React e React Native, já tendo trabalhado
          no desenvolvimento de um aplicativo para consultas de notas fiscais
          em um escritorio contabil durante o estagio obrigatorio, alem de todo
          frontend desenvolvido com React, ainda trabalhei no desenvolvimento do
          backend com NodeJS, experiencias solidas que me ajudaram a crescer como
          desenvolvedor. 
        </p>
      </div>
    </div>
  );
}

export default About;
