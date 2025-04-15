// components/Projects.js
export default function Projects() {
    return (
        <section id="projets" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-blue-900 mb-4">Nos Réalisations</h2>
                    <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Découvrez quelques-uns de nos projets récents en géotechnique et travaux spéciaux de fondations à travers l'Afrique.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ProjectCard
                        image="etude_geotech.png"
                        title="Tour Administrative"
                        location="Abidjan, Côte d'Ivoire"
                        description="Étude géotechnique complète pour un immeuble de 20 étages"
                    />
                    <ProjectCard
                        image="injection.jpg"
                        title="GINGER Hydrosol fondation"
                        location="Singrobo Ahouaty en Côte d’Ivoire"
                        description="Travaux de contrôle des injections au barrage"
                    />
                    <ProjectCard
                        image="geotech.jpg"
                        title="LABOGEXP/SOGEA SATOM CM"
                        location="Cameroun"
                        description="Campagne géotechnique pour 4 Ouvrages d’Art sur la route OLAMA-BIGAMBO"
                    />
                </div>
                <div className="text-center mt-12">
                    <a href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800 transition duration-300">
                        Voir tous nos projets <i className="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}

function ProjectCard({ image, title, location, description }) {
    return (
        <div className="group relative overflow-hidden rounded-lg shadow-lg">
            <img src={image} alt={title} className="w-full h-64 object-cover transition duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-blue-900 bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 p-6">
                <div className="text-center text-white">
                    <h3 className="text-xl font-bold mb-2">{title}</h3>
                    <p className="mb-4">{location}</p>
                    <p className="text-sm">{description}</p>
                </div>
            </div>
        </div>
    )
}