import { FiVolumeX, FiVideo, FiFileText } from "react-icons/fi";

export default function HearingImpairmentFeatures() {
    return (
        <div className="p-8">
            {/* Section Heading */}
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
                Hearing Impairment Features
            </h1>
        <div className="grid grid-cols-2 gap-6 p-8">
            {/* Real-Time Hearing Assistance */}
            <div className="bg-transparent text-slate-900 p-6 rounded-xl shadow-lg hover:scale-105 transition transform flex flex-col items-center">
                <div className="text-4xl mb-4">
                    <FiVolumeX />
                </div>
                <h2 className="text-xl font-bold text-center mb-2">Hearing Assistance</h2>
                <p className="text-center">
                    Real-time assistance for hearing impairments using advanced AI technology.
                </p>
            </div>

            {/* Hearing Video Tutorial */}
            <div className="bg-transparent text-slate-900 p-6 rounded-xl shadow-lg hover:scale-105 transition transform flex flex-col items-center">
                <div className="text-4xl mb-4">
                    <FiVideo />
                </div>
                <h2 className="text-xl font-bold text-center mb-2">Hearing Video Tutorial</h2>
                <p className="text-center">
                    Learn through customized video tutorials designed for hearing-impaired users.
                </p>
            </div>

            {/* Audio to Text */}
            <div className="bg-transparent text-slate-900 p-6 rounded-xl shadow-lg hover:scale-105 transition transform flex flex-col items-center">
                <div className="text-4xl mb-4">
                    <FiFileText />
                </div>
                <h2 className="text-xl font-bold text-center mb-2">Audio to Text</h2>
                <p className="text-center">
                    Convert audio into text in real-time to aid those with hearing impairments.
                </p>
            </div>
        </div>
        </div>
    );
}
