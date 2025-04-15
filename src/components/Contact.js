// components/Contact.js
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-blue-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Contactez-nous</h2>
                        <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
                        <p className="mb-8">
                            Notre équipe est à votre disposition pour répondre à vos questions et discuter de vos projets géotechniques en Afrique.
                        </p>
                        <ContactInfo icon={<FaMapMarkerAlt className="text-blue-700" />} />
                        <div className="mt-8">
                            <h4 className="font-bold mb-4">Zones d'intervention</h4>
                            <div className="flex flex-wrap gap-2">
                                {["Côte d'Ivoire", "Ghana", "Burkina Faso", "Mali", "Guinée", "Libéria", "Cameroun", "Tchad"].map((pays, i) => (
                                    <span key={i} className="bg-blue-800 px-3 py-1 rounded-full text-sm">{pays}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-xl p-8 text-gray-800">
                        <h3 className="text-2xl font-bold text-blue-900 mb-6">Envoyez-nous un message</h3>
                        <form>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input label="Prénom" id="first-name" />
                                <Input label="Nom" id="last-name" />
                            </div>
                            <Input label="Email" id="email" type="email" className="mt-4" />
                            <Input label="Téléphone" id="phone" type="tel" className="mt-4" />
                            <div className="mt-4">
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                                <select id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                                    <option>Demande d'information</option>
                                    <option>Devis</option>
                                    <option>Support technique</option>
                                    <option>Autre</option>
                                </select>
                            </div>
                            <div className="mt-4">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea id="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"></textarea>
                            </div>
                            <div className="mt-6">
                                <button type="submit" className="w-full bg-blue-900 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition duration-300">
                                    Envoyer le message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

function Input({ label, id, type = "text", className = "" }) {
    return (
        <div className={className}>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <input type={type} id={id} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
        </div>
    )
}

// function ContactInfo(icon) {
//     const infos = [
//         { icon: icon, title: "Siège Social", lines: ["Abidjan, Côte d'Ivoire", "Immeuble Les Harmonies, Plateau"] },
//         { icon: "fa-phone-alt", title: "Téléphone", lines: ["+225 XX XX XX XX"] },
//         { icon: "fa-envelope", title: "Email", lines: ["contact@hydrosolafrique.com"] },
//     ]
//     return (
//         <div className="space-y-6">
//             {infos.map((info, i) => (
//                 <div key={i} className="flex items-start">
//                     <div className="flex-shrink-0 bg-blue-800 p-3 rounded-full mr-4">
//                         <i className={`fas ${info.icon}`}></i>
//                     </div>
//                     <div>
//                         <h4 className="font-bold">{info.title}</h4>
//                         {info.lines.map((line, j) => <p key={j}>{line}</p>)}
//                     </div>
//                 </div>
//             ))}
//         </div>
//     )
// }

function ContactInfo() {
    const infos = [
        {
            icon: <FaMapMarkerAlt className="text-white" />,
            title: "Siège Social",
            lines: ["Abidjan, Côte d'Ivoire", "Immeuble Les Harmonies, Plateau"],
        },
        {
            icon: <FaPhoneAlt className="text-white" />,
            title: "Téléphone",
            lines: ["+225 22 43 40 20"],
        },
        {
            icon: <FaEnvelope className="text-white" />,
            title: "Email",
            lines: ["hydrosol.afrique@gmail.com"],
        },
    ];

    return (
        <div className="space-y-6">
            {infos.map((info, i) => (
                <div key={i} className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-800 p-3 rounded-full mr-4">
                        {info.icon}
                    </div>
                    <div>
                        <h4 className="font-bold">{info.title}</h4>
                        {info.lines.map((line, j) => (
                            <p key={j}>{line}</p>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
