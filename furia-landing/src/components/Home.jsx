export default function Home() {
    return (
        <section id="home" className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-blue-950 md:text-5xl lg:text-6xl">
                    Agora você pode acompanhar a <br />FURIA no
                    <span className="text-blue-700 dark:text-blue-500"> Telegram</span>
                </h1>

                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                    Conecte-se, compartilhe – fique por dentro de todas as novidades da FURIA, ao vivo.
                </p>

                <div className="flex justify-center mt-24 w-full">
                    <a
                        href="/outra-pagina"
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
            </div>
        </section>
    );
}
