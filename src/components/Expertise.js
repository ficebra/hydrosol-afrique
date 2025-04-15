// components/Expertise.js
import { FaCheckCircle } from 'react-icons/fa';

export default function Expertise() {
    return (
        <section id="expertise" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-blue-900 mb-6">Notre Expertise en Afrique</h2>
                        <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
                        <p className="text-gray-600 mb-6">
                            Basé à Abidjan, Hydrosol Afrique intervient dans la plupart des pays d'Afrique de l'Ouest et Centrale,
                            avec le soutien technique de GINGER HYDROSOL FONDATIONS.
                        </p>
                        <div className="space-y-4">
                            <ExpertiseItem 
                                icon={<FaCheckCircle className="text-blue-700" />} 
                                title="Couverture Régionale" 
                                description="Intervention en Côte d'Ivoire, Ghana, Burkina Faso, Mali, Guinée, Libéria, Cameroun, Tchad..." 
                            />
                            <ExpertiseItem 
                                icon={<FaCheckCircle className="text-blue-700" />} 
                                title="Savoir-Faire Technique" 
                                description="Méthodologies adaptées aux conditions géologiques de l'Afrique subsaharienne." 
                            />
                            <ExpertiseItem 
                                icon={<FaCheckCircle className="text-blue-700" />} 
                                title="Support International" 
                                description="Appui permanent de notre partenaire GINGER HYDROSOL FONDATIONS, référence en géotechnique en Afrique du Nord." 
                            />
                        </div>
                    </div>
                    <div className="relative">
                        <img src="carte_afrique.jpg" alt="Zone d'intervention" className="rounded-lg shadow-xl" />
                        <div className="absolute -bottom-6 -right-6 bg-blue-900 text-white p-6 rounded-lg shadow-lg hidden lg:block">
                            <div className="text-center">
                                <p className="font-bold text-xl">8+</p>
                                <p className="text-sm">pays couverts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function ExpertiseItem({ icon, title, description }) {
    return (
        <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full mr-4">
                {icon}
            </div>
            <div>
                <h4 className="font-bold text-blue-900">{title}</h4>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    )
}