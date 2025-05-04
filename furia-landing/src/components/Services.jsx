import { FaClock, FaUsers, FaShoppingCart, FaTrophy, FaNewspaper, FaQuestionCircle } from "react-icons/fa";

const services = [
    {
        icon: <FaClock className="text-blue-950 w-5 h-5 lg:w-6 lg:h-6" />,
        title: "Próximo Jogo",
        description:
            "Fique por dentro do próximo jogo da FURIA no CS2. Saiba a data, hora e local para não perder nenhum detalhe!",
    },
    {
        icon: <FaUsers className="text-blue-950 w-5 h-5 lg:w-6 lg:h-6" />,
        title: "Elenco",
        description:
            "Conheça todos os jogadores da FURIA, desde os riflers até o técnico. Entenda como nossa equipe está se preparando para os desafios no CS2.",
    },
    {
        icon: <FaShoppingCart className="text-blue-950 w-5 h-5 lg:w-6 lg:h-6" />,
        title: "Loja Oficial",
        description:
            "Acesse a loja da FURIA e adquira produtos oficiais, como camisetas, bonés e muito mais para apoiar o time com estilo!",
    },
    {
        icon: <FaTrophy className="text-blue-950 w-5 h-5 lg:w-6 lg:h-6" />,
        title: "Ranking Atual",
        description:
            "Confira o ranking atual da FURIA no campeonato de CS2 e veja como o time está se posicionando nas competições.",
    },
    {
        icon: <FaNewspaper className="text-blue-950 w-5 h-5 lg:w-6 lg:h-6" />,
        title: "Notícias da FURIA",
        description:
            "Fique atualizado com as últimas notícias da FURIA, incluindo vitórias, novos anúncios e atualizações do time no CS2.",
    },
    {
        icon: <FaQuestionCircle className="text-blue-950 w-5 h-5 lg:w-6 lg:h-6" />,
        title: "Comandos do Bot",
        description:
            "Aprenda como interagir com o bot da FURIA e descubra todos os comandos disponíveis para obter informações sobre o time e as competições.",
    },
];

export default function Services() {
    return (
        <section id="services" className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <span className="text-blue-700 dark:text-blue-500 font-semibold">
                    Nossos serviços
                </span>
                <div className="max-w-screen-md mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-blue-950">
                        Fique por dentro de tudo sobre a FURIA no CS2!
                    </h2>
                    <p className="text-gray-500 sm:text-xl dark:text-gray-400">
                        Nosso bot da FURIA no Telegram oferece uma série de funcionalidades para que você possa acompanhar tudo sobre o time de Counter-Strike 2 de maneira fácil e rápida.
                    </p>
                </div>

                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    {services.map((service, index) => (
                        <div key={index} className="text-center">
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-500 lg:h-12 lg:w-12 dark:bg-blue-600">
                                {service.icon}
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-blue-950">{service.title}</h3>
                            <p className="text-gray-500 dark:text-gray-400">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
