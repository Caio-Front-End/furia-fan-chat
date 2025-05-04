import React from 'react';
import printBot from '../assets/images/bot-next_game.png';
import furiaFansWpp from '../assets/images/furia-fans.jpeg';

export default function About() {
    return (
        <section id="about" className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <span className="text-blue-700 dark:text-blue-500">
                        Tecnologia a serviço da FURIA
                    </span>
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Conheça o BOT oficial dos times de e-sports
                    </h2>
                    <p className="mb-4">
                        Nosso novo bot foi desenvolvido especialmente para automatizar,
                        otimizar e organizar a comunicação e rotina dos times da FURIA. Com
                        integração fácil, ele se adapta às necessidades do cenário
                        competitivo.
                    </p>
                    <p className="mb-6">
                        Entre suas principais funções estão: envio automático de lembretes,
                        agendamento de treinos, coleta de estatísticas de performance e
                        integração com plataformas como Discord e Google Calendar.
                    </p>

                    <a
                        href="https://link-do-bot.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex justify-center items-center py-3 px-12 text-base font-medium text-center rounded-lg focus:ring-4 focus:ring-primary-300 text-white bg-blue-950 hover:bg-blue-800"
                    >
                        Conhecer
                        <svg
                            className="ml-2 -mr-1 w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                    <img
                        className="w-full rounded-lg shadow-lg"
                        src={printBot}
                        alt="print bot telegram"
                    />
                    <img
                        className="mt-4 w-70 lg:mt-10 rounded-lg shadow-lg"
                        src={furiaFansWpp}
                        alt="wallpaper de fans da furia"
                    />
                </div>
            </div>
        </section>
    );
}
