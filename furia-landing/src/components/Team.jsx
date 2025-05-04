import React from 'react';
import FallenPic from '../assets/images/fallen.jpg';
import KsceratoPic from '../assets/images/kscerato.jpg';
import YuurihPic from '../assets/images/yuurih.jpg';
import SkullzPic from '../assets/images/skullz.jpg';
import CheloPic from '../assets/images/chelo.jpg';
import SiddePic from '../assets/images/sidde.jpg';

const teamMembers = [
    {
        name: 'Gabriel "FalleN" Toledo',
        role: 'AWPer & Capitão',
        description: 'Lenda do CS brasileiro, bicampeão de Major e líder estratégico da FURIA desde 2023. Conhecido por sua precisão e liderança exemplar.',
        image: FallenPic,
    },
    {
        name: 'Kaike "KSCERATO" Cerato',
        role: 'Rifler',
        description: 'Um dos jogadores mais consistentes do mundo, destaque da FURIA desde 2018. Reconhecido por seu desempenho sólido em momentos decisivos.',
        image: KsceratoPic,
    },
    {
        name: 'Yuri "yuurih" Santos',
        role: 'Rifler',
        description: 'Parte fundamental da FURIA desde 2017, yuurih é conhecido por sua versatilidade e contribuições cruciais em partidas importantes.',
        image: YuurihPic,
    },
    {
        name: 'Marcelo "chelo" Cespedes',
        role: 'Entry Fragger',
        description: 'Chegou à FURIA em 2023, trazendo agressividade e energia ao time. Seu estilo de jogo ousado abre espaço para os companheiros.',
        image: CheloPic,
    },
    {
        name: 'Felipe "skullz" Medeiros',
        role: 'Âncora',
        description: 'Reforço de 2024, skullz é responsável por funções defensivas cruciais. Sua experiência internacional fortalece a equipe.',
        image: SkullzPic,
    },
    {
        name: 'Nicholas "sidde" Giacomini',
        role: 'Técnico',
        description: 'Técnico responsável pela preparação estratégica e psicológica do time. Sidde exerce um papel fundamental nos bastidores da FURIA.',
        image: SiddePic,
    },
];

export default function Team() {
    return (
        <section id="team" className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Equipe Titular da FURIA CS2 – 2025
                    </h2>
                    <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                        Conheça os jogadores que representam a FURIA no cenário competitivo de Counter-Strike 2 em 2025.
                    </p>
                </div>
                <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700"
                        >
                            <img
                                className="w-full h-64 object-cover rounded-lg sm:rounded-none sm:rounded-l-lg sm:w-64"
                                src={member.image}
                                alt={`Avatar de ${member.name}`}
                            />
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {member.name}
                                </h3>
                                <span className="text-gray-500 dark:text-gray-400">{member.role}</span>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                                    {member.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
