import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import furiaLogo from '../assets/images/Furia_Esports_logo.png';

export default function Footer() {
    return (
        <footer className="p-4 bg-white sm:p-6">
            <div className="mx-auto max-w-screen-xl pt-3 pb-3">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="#" className="flex items-center">
                            <img
                                src={furiaLogo}
                                className="w-32 h-auto"
                                alt="Logo"
                            />
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Saiba Mais</h2>
                            <ul className="text-gray-600">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Serviços</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Sobre Nós</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Nos Siga</h2>
                            <ul className="text-gray-600">
                                <li className="mb-4">
                                    <a href="https://www.instagram.com/furiagg/" target="_blank" className="hover:underline">Instagram</a>
                                </li>
                                <li>
                                    <a href="https://x.com/FURIA" target="_blank" className="hover:underline">X/Twitter</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-600">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Política de Privacidade</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Termos e Condições</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2025 FURIA. Todos os Direitos Reservados.
                    </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        <a
                            href="http://facebook.com/furiagg/" target="_blank"
                            className="text-gray-500 hover:text-gray-900"
                        >
                            <FaFacebook className="w-5 h-5" />
                        </a>
                        <a
                            href="https://www.instagram.com/furiagg/" target="_blank"
                            className="text-gray-500 hover:text-gray-900"
                        >
                            <FaInstagram className="w-5 h-5" />
                        </a>
                        <a
                            href="https://x.com/FURIA" target="_blank"
                            className="text-gray-500 hover:text-gray-900"
                        >
                            <FaTwitter className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
