import { FiMic, FiImage, FiFileText, FiSearch, FiYoutube, FiBookOpen } from "react-icons/fi";

const options = [
    {
        icon: <FiMic size={40} />,
        title: "Topic Selection",
        color: "bg-blue-100",
    },
    {
        icon: <FiImage size={40} />,
        title: "Scene Description",
        color: "bg-purple-100",
    },
    {
        icon: <FiFileText size={40} />,
        title: "Note Making",
        color: "bg-orange-200",
    },
    {
        icon: <FiSearch size={40} />,
        title: "Document Summarizer",
        color: "bg-green-100",
    },
    {
        icon: <FiYoutube size={40} />,
        title: "YouTube Braille",
        color: "bg-pink-200",
    },
    {
        icon: <FiBookOpen size={40} />,
        title: "MCQ Generator",
        color: "bg-purple-200",
    },
];

export default function VisualAssistance() {
    return (
        <div className="min-h-screen p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Visual Assistance</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {options.map((option, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center justify-center bg-transparent border-2 border-gray-200 p-10 rounded-lg shadow-md hover:scale-105 transition-transform w-full h-64`}
                    >
                        <div className="text-gray-800 mb-4">{option.icon}</div>
                        <h2 className="text-xl font-semibold text-center">{option.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}
