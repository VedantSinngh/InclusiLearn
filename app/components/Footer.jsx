'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from "react-icons/fi";

const teamMembers = [
    {
        name: "Vedant Singh",
        github: "https://github.com/VedantSinngh",
        linkedin: "www.linkedin.com/in/vedant-singh-0b4336258",
        instagram: "https://www.instagram.com/vedaantsinngh/",
        twitter: "https://x.com/vedaantsinngh",
        avatar: "https://github.com/VedantSinngh",
    },
    {
        name: "Srijan Sarkar",
        github: "https://github.com/Srijansarkar17",
        linkedin: "https://www.linkedin.com/in/srijan-sarkar-90177b288/",
        instagram: "https://www.instagram.com/srijann16/",
        twitter: "https://x.com/srijan463",
        avatar: "https://github.com/VedantSinngh",
    },
    {
        name: "Vedant Singh",
        github: "https://github.com/VedantSinngh",
        linkedin: "www.linkedin.com/in/vedant-singh-0b4336258",
        instagram: "https://www.instagram.com/vedaantsinngh/",
        twitter: "https://x.com/vedaantsinngh",
        avatar: "https://github.com/VedantSinngh",
    },
    {
        name: "Vedant Singh",
        github: "https://github.com/VedantSinngh",
        linkedin: "www.linkedin.com/in/vedant-singh-0b4336258",
        instagram: "https://www.instagram.com/vedaantsinngh/",
        twitter: "https://x.com/vedaantsinngh",
        avatar: "https://github.com/VedantSinngh",
    }
];

export default function Footer() {
    return (
        <footer className="absolute bottom-5 left-4 right-4 p-10 bg-transparent text-gray-900 border-2 border-slate-900 rounded-md z-10 shadow-xl">
            <h1 className="text-2xl font-semibold mb-4 text-center italic">Creators</h1>

            <div className="flex justify-center gap-8">
                {teamMembers.map((member) => (
                    <div key={member.name} className="relative group">
                        <Avatar className="w-16 h-16 border-2 border-gray-900 rounded-full">
                            <AvatarImage src={member.avatar} alt={member.name} />
                            <AvatarFallback>{member.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 bg-black bg-opacity-70 text-white p-2 rounded-md opacity-0 group-hover:opacity-100 transition-all">
                            <div className="flex gap-2 justify-center">
                                <a href={member.github} target="_blank" rel="noopener noreferrer">
                                    <FiGithub className="text-xl" />
                                </a>
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                    <FiLinkedin className="text-xl" />
                                </a>
                                <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                                    <FiInstagram className="text-xl" />
                                </a>
                                <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                                    <FiTwitter className="text-xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </footer>
    );
}
