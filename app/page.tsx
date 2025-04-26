import Navbar from "@/components/Navbar";
import { 
  UserCircleIcon, 
  ChartBarIcon, 
  TrophyIcon, 
  CheckCircleIcon,
  UserGroupIcon,
  ChevronDownIcon,
  EnvelopeIcon,
  AcademicCapIcon
} from "@heroicons/react/24/outline";
import Image from "next/image";
import a1 from "./assets/images/a1.jpg";
import a2 from "./assets/images/a2.jpg";
import a3 from "./assets/images/a3.jpg";
import a4 from "./assets/images/a4.jpg";

export default function Home() {
  const faqItems = [
    {
      question: "How do I get started?",
      answer: "Begin with a free consultation where we assess your goals and create a personalized plan."
    },
    {
      question: "What's included in the programs?",
      answer: "Full training regimens, nutrition plans, and ongoing support via our dedicated app."
    },
    {
      question: "Can I train online?",
      answer: "Yes, we offer fully remote training programs with video check-ins and live sessions."
    }
  ];
  const testimonials = [
    {
      name: "John Smith",
      role: "Professional Athlete",
      text: "The best training programs I've ever experienced. Transformed my performance completely."
    },
    {
      name: "Sarah Johnson",
      role: "Fitness Enthusiast",
      text: "Personalized approach that helped me achieve my dream physique."
    },
    {
      name: "Mike Chen",
      role: "Bodybuilder",
      text: "Scientific approach to nutrition and training that delivers real results."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4 pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-90"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-100 mb-6">
            Elite Fitness <span className="text-indigo-400">Transformation</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
            World-class training programs and cutting-edge nutrition plans for athletes and fitness enthusiasts.
          </p>
          <div className="flex gap-4 justify-center">
            <a 
              href="#programs" 
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              View Programs
            </a>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      {/* <section className="py-24 px-4 bg-gray-800" id="about">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-100 mb-6">
                About Your Coach
              </h2>
              <p className="text-gray-400 text-lg">
                With over 15 years of professional experience in elite athletics and sports science, 
                I've dedicated my career to optimizing human performance. My methodology combines 
                cutting-edge research with practical application for real-world results.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <TrophyIcon className="h-6 w-6 text-indigo-400" />
                  <span className="text-gray-300">IFBB Pro Athlete</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ChartBarIcon className="h-6 w-6 text-indigo-400" />
                  <span className="text-gray-300">MSc Sports Science</span>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 h-96 rounded-xl transform group-hover:scale-105 transition-transform">
                <Image src={a2} alt={""} width={2048} height={2048}/>
              </div>
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2  rounded-xl transform group-hover:scale-105 transition-transform">
                <Image src={a2} alt={""} width={2048} height={2048} className='rounded-xl'/>
              </div>
            </div>
          </div>
        </div>
      </section> */}

<section className="py-24 px-4 bg-gray-900" id="about-alt">
  <div className="max-w-7xl mx-auto">
    <div >
      {/* Text Content */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h2 className="text-5xl font-bold text-gray-100 mb-8">
            Professional Background
          </h2>
          <div className="space-y-6">
            <p className="text-gray-400 text-lg leading-relaxed">
              15+ years transforming athletes through evidence-based training methodologies. 
              IFBB Pro Card holder with multiple championship titles.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-indigo-600/30 px-6 py-3 rounded-full flex items-center gap-2">
                <TrophyIcon className="h-6 w-6 text-indigo-400" />
                <span className="text-gray-100">5x National Champion</span>
              </div>
              <div className="bg-indigo-600/30 px-6 py-3 rounded-full flex items-center gap-2">
                <AcademicCapIcon className="h-6 w-6 text-indigo-400" />
                <span className="text-gray-100">MSc Sports Science</span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative group">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2  rounded-xl transform group-hover:scale-105 transition-transform">
            <Image src={a2} alt={""} width={2048} height={2048} className='rounded-xl'/>
          </div>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-4 py-8 w-full">
  {/* Image 1 */}
  <div className="relative w-full h-96 md:h-96 lg:h-96 rounded-2xl overflow-hidden group">
    <Image
      src={a1}
      alt="Main Coach Photo"
      fill
      className="object-cover group-hover:scale-105 transition-transform"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
  </div>

  {/* Image 2 */}
  <div className="relative w-full h-96 md:h-96 lg:h-96 rounded-2xl overflow-hidden group">
    <Image
      src={a3}
      alt="Group Training"
      fill
      className="object-cover group-hover:scale-105 transition-transform"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
  </div>

  {/* Image 3 */}
  <div className="relative w-full h-96 md:h-96 lg:h-96 rounded-2xl overflow-hidden group">
    <Image
      src={a4}
      alt="Nutrition Guidance"
      fill
      className="object-cover group-hover:scale-105 transition-transform"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
  </div>
</div>
    </div>

    {/* Additional Images Gallery */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
      {[1,2,3,4].map((item) => (
        <div key={item} className="relative h-48 rounded-xl overflow-hidden group bg-gradient-to-br from-indigo-500 to-purple-600">
          {/* <Image
            src={`/gallery-${item}.jpg`}
            alt={`Gallery ${item}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform"
          /> */}
        </div>
      ))}
    </div>
  </div>
</section>

      {/* For Whom Section */}
      <section className="py-24 px-4 bg-gray-900" id="for-whom">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-100 mb-16 text-center">Who Needs This Program</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-colors">
              <CheckCircleIcon className="h-12 w-12 text-indigo-400 mb-6" />
              <h3 className="text-2xl font-bold text-gray-100 mb-4">Competitive Athletes</h3>
              <ul className="space-y-3 text-gray-400">
                <li>• Sport-specific conditioning</li>
                <li>• Competition preparation</li>
                <li>• Recovery optimization</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-colors">
              <CheckCircleIcon className="h-12 w-12 text-indigo-400 mb-6" />
              <h3 className="text-2xl font-bold text-gray-100 mb-4">Fitness Enthusiasts</h3>
              <ul className="space-y-3 text-gray-400">
                <li>• Body recomposition</li>
                <li>• Strength development</li>
                <li>• Lifestyle transformation</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-colors">
              <CheckCircleIcon className="h-12 w-12 text-indigo-400 mb-6" />
              <h3 className="text-2xl font-bold text-gray-100 mb-4">Beginners</h3>
              <ul className="space-y-3 text-gray-400">
                <li>• Foundation building</li>
                <li>• Technique mastery</li>
                <li>• Sustainable habits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Training Community Section */}
      <section className="py-24 px-4 bg-indigo-900/20" id="community">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-100 mb-8">
            Join 2,500+ Athletes Already Training
          </h2>
          <div className="grid md:grid-cols-4 gap-8 mt-16">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-gray-800 p-8 rounded-xl">
                <UserGroupIcon className="h-12 w-12 text-indigo-400 mx-auto mb-6" />
                <div className="text-3xl font-bold text-gray-100 mb-2">450+</div>
                <div className="text-gray-400">Active Members</div>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Services Section */}
       <section className="py-24 px-4 bg-gray-800" id="programs">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-100 mb-16 text-center">Professional Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-700 rounded-xl p-8 hover:bg-gray-600 transition-colors">
              <UserCircleIcon className="h-12 w-12 text-indigo-400 mb-6" />
              <h3 className="text-2xl font-bold text-gray-100 mb-4">Personal Training</h3>
              <p className="text-gray-400 mb-6">
                One-on-one coaching with customized workout plans and technique optimization.
              </p>
            </div>
            
            <div className="bg-gray-700 rounded-xl p-8 hover:bg-gray-600 transition-colors">
              <ChartBarIcon className="h-12 w-12 text-indigo-400 mb-6" />
              <h3 className="text-2xl font-bold text-gray-100 mb-4">Nutrition Planning</h3>
              <p className="text-gray-400 mb-6">
                Scientifically-backed meal plans tailored to your body composition goals.
              </p>
            </div>
            
            <div className="bg-gray-700 rounded-xl p-8 hover:bg-gray-600 transition-colors">
              <TrophyIcon className="h-12 w-12 text-indigo-400 mb-6" />
              <h3 className="text-2xl font-bold text-gray-100 mb-4">Competition Prep</h3>
              <p className="text-gray-400 mb-6">
                Complete preparation package for fitness competitions and events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-100 mb-16 text-center">Training Philosophy</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group relative bg-gray-800 rounded-xl overflow-hidden">
                <div className="h-64 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-100 mb-2">Methodology #{item}</h3>
                  <p className="text-gray-400">
                    Science-based approach combining latest research with practical application.
                  </p>
                </div>
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-100 mb-16 text-center">Client Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-700 rounded-xl p-8">
                <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                <h4 className="text-lg font-bold text-gray-100">{testimonial.name}</h4>
                <p className="text-indigo-400">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-900 to-indigo-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-100 mb-8">Start Your Transformation Today</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Take the first step towards achieving your fitness goals with our expert guidance.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-indigo-700 transition-colors"
          >
            <EnvelopeIcon className="h-6 w-6 mr-2" />
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-gray-800" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-100 mb-16 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-gray-700 pb-6">
                <div className="flex justify-between items-center cursor-pointer group">
                  <h3 className="text-xl font-semibold text-gray-100 group-hover:text-indigo-400 transition-colors">
                    {item.question}
                  </h3>
                  <ChevronDownIcon className="h-6 w-6 text-gray-400 group-hover:text-indigo-400 transition-colors" />
                </div>
                <p className="mt-4 text-gray-400">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      

     
    </div>
  );
}