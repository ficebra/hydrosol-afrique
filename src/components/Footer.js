// components/Footer.js
export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-bold mb-4">GINGER Hydrosol Afrique</h3>
                        <p className="text-gray-400">Laboratoire spécialisé en géotechnique et travaux spéciaux de fondations, intervenant en Afrique de l'Ouest et Centrale.</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4">Services</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Reconnaissance des sols</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Essais de laboratoire</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Études géotechniques</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Études de risque</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4">Liens utiles</h4>
                        <ul className="space-y-2">
                            <li><a href="#accueil" className="text-gray-400 hover:text-white transition duration-300">Accueil</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-white transition duration-300">Services</a></li>
                            <li><a href="#expertise" className="text-gray-400 hover:text-white transition duration-300">Expertise</a></li>
                            <li><a href="#projets" className="text-gray-400 hover:text-white transition duration-300">Projets</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4">Contact</h4>
                        <address className="text-gray-400 not-italic">
                            <p className="mb-2">Abidjan, Côte d'Ivoire</p>
                            <p className="mb-2">Immeuble Les Harmonies, Plateau</p>
                            <p className="mb-2">hydrosol.afrique@gmail.com</p>
                            <p>+225 22 43 40 20</p>
                        </address>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-gray-400 hover:text-white transition duration-300"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#" className="text-gray-400 hover:text-white transition duration-300"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-gray-400 hover:text-white transition duration-300"><i className="fab fa-facebook-f"></i></a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2023 GINGER Hydrosol Afrique. Tous droits réservés.</p>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition duration-300">Mentions légales</a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition duration-300">Politique de confidentialité</a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition duration-300">Conditions d'utilisation</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
