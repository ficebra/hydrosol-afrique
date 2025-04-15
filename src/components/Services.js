import { FaMountain, FaFlask, FaShieldAlt, FaArrowRight } from 'react-icons/fa';

// components/Services.js
export default function Services() {
    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-blue-900 mb-4">Nos Services Spécialisés</h2>
                    <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Hydrosol Afrique propose une gamme complète de services en géotechnique et fondations,
                        adaptés aux besoins spécifiques de chaque projet.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ServiceCard
                        icon={<FaMountain className="text-white text-6xl" />}
                        title="Reconnaissance des Sols"
                        description="Forages et essais in-situ pour les études géotechniques des bâtiments, ouvrages d'art, barrages et routes."
                    />
                    <ServiceCard
                        icon={<FaFlask className="text-white text-6xl" />}
                        title="Essais de Laboratoire"
                        description="Analyse des propriétés mécaniques et physiques des sols avec des équipements de haute précision."
                    />
                    <ServiceCard
                        icon={<FaShieldAlt className="text-white text-6xl" />}
                        title="Études de Risque"
                        description="Évaluation des mouvements de terrain, stabilité de pentes et confortements adaptés."
                    />
                </div>
            </div>
        </section>
    )
}

// function ServiceCard({ icon, title, description }) {
//     return (
//         <div className="bg-white rounded-lg overflow-hidden shadow-md service-card transition duration-300">
//             <div className="h-48 bg-blue-900 flex items-center justify-center">
//                 <i className={`fas ${icon} text-white text-6xl`}></i>
//             </div>
//             <div className="p-6">
//                 <h3 className="text-xl font-bold text-blue-900 mb-3">{title}</h3>
//                 <p className="text-gray-600 mb-4">{description}</p>
//                 <a href="#" className="text-yellow-600 font-medium hover:text-yellow-700 flex items-center">
//                     En savoir plus <i className="fas fa-arrow-right ml-2"></i>
//                 </a>
//             </div>
//         </div>
//     )
// }

function ServiceCard({ icon, title, description }) {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md service-card transition duration-300">
            <div className="h-48 bg-blue-900 flex items-center justify-center">
                {icon}
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <a href="#" className="text-yellow-600 font-medium hover:text-yellow-700 flex items-center">
                    En savoir plus <FaArrowRight className="ml-2" />
                </a>
            </div>
        </div>
    );
}
