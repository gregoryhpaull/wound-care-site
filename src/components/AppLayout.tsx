import { useState } from 'react';
import { Phone, MapPin, Clock, Mail, Heart, Shield, Users, Award } from 'lucide-react';
import WoundCard from './WoundCard';
import ContactForm from './ContactForm';
import WoundModal from './WoundModal';
const AppLayout: React.FC = () => {
  const [modalData, setModalData] = useState<any>(null);
  const woundTypes = [{
    title: 'Diabetic Ulcers',
    description: 'Diabetic foot ulcers are a frequent complication of poorly controlled diabetes mellitus, often stemming from inadequate glycemic control, neuropathy, peripheral vascular disease, or insufficient foot care.',
    image: 'https://static.wixstatic.com/media/3d9a0c_80c411fc0ef149a18c5302034135c4ab~mv2.jpg',
    fullDescription: 'Diabetic foot ulcers are a leading cause of osteomyelitis in the feet and may necessitate lower extremity amputation. Our mobile wound care specialists provide advanced treatment including placental-derived grafts that are Medicare-approved. We come to your home in NY, NJ, and CT to provide comprehensive diabetic wound care.'
  }, {
    title: 'Pressure Ulcers (Bed Sores)',
    description: 'A pressure ulcer is a localized injury to the skin and/or underlying tissue usually over a bony prominence, as a result of pressure or pressure in combination with shear.',
    image: 'https://static.wixstatic.com/media/3d9a0c_7be13ce6745e42958a431005577c9054~mv2.jpg',
    fullDescription: 'Pressure ulcers develop in individuals who are immobile or have difficulty moving. They vary in severity from mild reddening to severe tissue damage involving muscles and bones. Our at-home treatment includes specialized dressings, advanced wound healing grafts, and comprehensive care plans to promote healing and prevent complications.'
  }, {
    title: 'Venous Leg Ulcers',
    description: 'Venous ulcers develop due to damage to valves within leg veins, which normally regulate blood pressure. When these valves fail, blood pools in the legs, leading to ulcer formation.',
    image: 'https://static.wixstatic.com/media/3d9a0c_47a386fa5c8b45c098eb99fbde3ece4c~mv2.jpg',
    fullDescription: 'Sustained venous hypertension causes blood to pool in the legs, forming ulcers around the ankles. Our mobile wound care team provides compression therapy, advanced wound dressings, and placental tissue grafts to promote healing. Medicare-approved treatment available throughout NY and NJ.'
  }, {
    title: 'Second Degree Burns',
    description: 'A partial thickness burn involves damage to the top two layers of skin: the epidermis and dermis. These burns can evolve over time and carry a heightened risk of infection.',
    image: 'https://static.wixstatic.com/media/3d9a0c_c66562f2c9d744cabfcc5a2eb644bfe8~mv2.jpg',
    fullDescription: 'Second-degree burns require specialized care to prevent infection and promote proper healing. Our mobile wound care specialists provide advanced burn treatment including amniotic tissue matrix grafts that accelerate healing. We bring hospital-quality care to your home.'
  }, {
    title: 'Draining Wounds',
    description: 'A draining wound releases fluid, such as pus or serous fluid, typically due to infection or inflammation. It requires regular cleaning and appropriate dressing to promote healing.',
    image: 'https://static.wixstatic.com/media/3d9a0c_ddf2613c40b449bcac678023ddaa9a56~mv2.jpg',
    fullDescription: 'Draining wounds need specialized care to manage infection and promote proper healing. Our mobile wound care team provides expert wound cleaning, advanced dressings, and infection management. Medicare covers our services for eligible patients in NY, NJ, and CT.'
  }, {
    title: 'Tunneled Wounds',
    description: 'A tunneled wound has channels extending from the main wound into surrounding tissue. These require specialized care to clean and pack the tunnels with appropriate dressings.',
    image: 'https://static.wixstatic.com/media/3d9a0c_df95fe670069414ea9e83b266fe433a3~mv2.jpg',
    fullDescription: 'Tunneled wounds create narrow paths beneath the skin surface that must be properly managed to promote healing from the inside out. Our specialists use advanced packing techniques and placental-derived grafts to close tunnels and facilitate complete wound closure.'
  }];
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 sm:gap-6">
              <img src="https://d64gsuwffb70l.cloudfront.net/688d16d7d70a228a89e27277_1761093783298_704d3872.png" alt="NY Mobile Wound Care" className="h-12 sm:h-16 md:h-20 object-contain" />
              <div className="flex items-center gap-1 sm:gap-2 bg-blue-50 px-2 sm:px-3 py-1 sm:py-2 rounded-lg border-2 border-blue-200 shadow-sm">
                <img src="https://d64gsuwffb70l.cloudfront.net/688d16d7d70a228a89e27277_1761095492799_4f07e329.png" alt="Medicare" className="h-6 sm:h-10 md:h-12 object-contain" />
                <span className="text-[10px] sm:text-xs md:text-sm font-bold text-blue-800"></span>
              </div>
            </div>


            <a href="tel:3322038950" className="bg-blue-600 text-white px-3 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-blue-700 transition-colors">
              Call (332) 203-8950
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}

      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 opacity-20">
          <img src="https://d64gsuwffb70l.cloudfront.net/68f7b3b56171dcdb5438c2ca_1761064374607_5bf0e660.webp" alt="Hero" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h2 className="text-5xl font-bold mb-6">We Come To You</h2>
            <p className="text-2xl mb-4">Medicare Approved Mobile Wound Care</p>
            <p className="text-xl mb-8">Advanced wound healing with the latest medical technologies like placental-derived skin substitute allografts that dissolve into the wound. Fully approved by Medicare applied in the patient's home!
 • Serving New York, New Jersey & Connecticut</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:3322038950" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors text-center">
                Call Now: (332) 203-8950
              </a>
              <button onClick={scrollToContact} className="bg-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-400 transition-colors">
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* We Come To You Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">On Call To Your Home</h3>
            <p className="text-xl text-gray-600">Professional mobile wound care delivered to your home</p>
          </div>
          <img src="https://d64gsuwffb70l.cloudfront.net/688d16d7d70a228a89e27277_1761075994476_e4fcf7aa.png" alt="Mobile Wound Care Van" className="w-full max-w-5xl mx-auto rounded-lg shadow-xl" />



          <div className="text-center mt-8">
            <p className="text-lg text-gray-700 mb-6">Our mobile wound care specialists bring hospital-quality treatment directly to your home. No need to travel - we come to you with all the necessary equipment and advanced wound healing technologies.</p>
            <a href="tel:3322038950" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Schedule a Home Visit
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="bg-gray-100 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">Free Wound Consultation</h3>
            <p className="text-center text-gray-600 mb-8">Fill out the form below or call us at (332) 203-8950</p>
            <ContactForm />
          </div>
        </div>
      </section>


      {/* Allograft Tissue Patches Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Advanced Allograft Tissue Technology</h3>
            <p className="text-xl text-gray-600">Highly controlled placenta-derived grafts approved by Medicare</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img src="https://static.wixstatic.com/media/3d9a0c_ee8a0a32cad74bd593c12908ed2af452~mv2.png" alt="Amniotic Tissue Matrix" className="w-full h-48 object-contain mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Amniotic Tissue Matrix</h4>
              <p className="text-gray-600">Wet or dry patches for advanced wound healing</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img src="https://static.wixstatic.com/media/3d9a0c_9dbce3bbd8184999bf1313b165fe8596~mv2.jpg" alt="Not a Skin Transplant" className="w-full h-48 object-contain mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Not a Skin Transplant!</h4>
              <p className="text-gray-600">Safe, effective biological wound healing technology</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img src="https://static.wixstatic.com/media/3d9a0c_593c9800aba147b5a3f0cd1d4ff47461~mv2.jpg" alt="Allograft Application" className="w-full h-48 object-contain mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Allograft Dissolves into Wound</h4>
              <p className="text-gray-600">Natural integration for optimal healing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Medicare Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Medicare Approved Advanced Wound Healing</h3>
              <p className="text-lg text-gray-700 mb-4">
                If you are 65 or older, Medicare approves and reimburses our advanced wound care services. Don't settle for inferior wound care.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Get the very best healing from placental wound healing technology providers with highly controlled placenta-derived grafts approved by Medicare for super advanced healing.
              </p>
              <a href="tel:3322038950" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Schedule Free Consultation
              </a>
            </div>
            <img src="https://www.ama-assn.org/sites/ama-assn.org/files/styles/image_ratio_16_9/public/wire/Media%20Root/2018-03-21-index-medicard.jpg?itok=giolLHna" alt="Medicare" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>


      {/* Wound Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-4">Wounds We Treat</h3>
          <p className="text-xl text-center text-gray-600 mb-12">Expert care for hard-to-heal wounds covered by Medicare</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {woundTypes.map((wound, index) => <WoundCard key={index} title={wound.title} description={wound.description} image={wound.image} onLearnMore={() => setModalData(wound)} />)}
          </div>
        </div>
      </section>

      {/* At Home Care Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img src="https://d64gsuwffb70l.cloudfront.net/68f7b3b56171dcdb5438c2ca_1761064382036_be33c4b9.webp" alt="Home Care" className="rounded-lg shadow-lg" />
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">At Home Wound Care & Doctor Office Care</h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-2xl">✓</span>
                  <span>Amniotic tissue matrix wet or dry patches</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-2xl">✓</span>
                  <span>Not a skin transplant - allograft dissolves into wound</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-2xl">✓</span>
                  <span>Highly controlled placenta-derived grafts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-2xl">✓</span>
                  <span>Used only by select doctors for super advanced healing</span>
                </li>
              </ul>
              <button onClick={scrollToContact} className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">NY Mobile Wound Care</h4>
              <p className="text-gray-400">Professional mobile wound care services serving New York, New Jersey, and Connecticut.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Contact</h4>
              <p className="text-gray-400">Phone: (332) 203-8950</p>
              <p className="text-gray-400">Email: ny.mobilewoundcare@gmail.com</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Service Areas</h4>
              <p className="text-gray-400">New York</p>
              <p className="text-gray-400">New Jersey</p>
              <p className="text-gray-400">Connecticut</p>
            </div>
          </div>
          
          {/* Logo at bottom of footer */}
          <div className="mt-12 flex justify-center">
            <img src="https://d64gsuwffb70l.cloudfront.net/688d16d7d70a228a89e27277_1761093960129_44f6953d.png" alt="Mobile Wound Care Logo" className="h-32 object-contain opacity-80" />
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 NY Mobile Wound Care. All rights reserved.</p>
          </div>
        </div>
      </footer>


      {/* Modal */}
      {modalData && <WoundModal isOpen={!!modalData} onClose={() => setModalData(null)} title={modalData.title} description={modalData.description} fullDescription={modalData.fullDescription} />}
    </div>;
};
export default AppLayout;