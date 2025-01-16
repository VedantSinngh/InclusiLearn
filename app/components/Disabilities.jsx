'use client';
import Link from "next/link";
import { useState } from "react";
import { FiEye, FiVolumeX } from "react-icons/fi";

export default function DisabilityToggle() {
    const [selected, setSelected] = useState("visual");

    return (
        <>
            <h1 className="text-3xl font-bold text-center mb-8">Choose Assistance Type</h1>
            <div className="flex items-center justify-center gap-6 border-2 p-16 rounded-xl border-gray-200 bg-transpa">
                
                <Link
                    href={`/visual`}
                    className={`flex items-center gap-3 px-6 py-4 rounded-xl border transition-all ${selected === "visual"
                            ? "bg-white shadow-lg border-gray-300"
                            : "bg-gray-100 hover:bg-gray-200"
                        }`}
                    onClick={() => setSelected("visual")}
                >
                    <FiEye size={24} className="text-gray-800" />
                    <span className={selected === "visual" ? "font-semibold text-gray-900" : "text-gray-600"}>
                        Visual Impairment
                    </span>
                </Link>
                <Link
                    href={`/hearing`}
                    className={`flex items-center gap-3 px-6 py-4 rounded-xl border transition-all ${selected === "hearing"
                            ? "bg-white shadow-lg border-gray-300"
                            : "bg-gray-100 hover:bg-gray-200"
                        }`}
                    onClick={() => setSelected("hearing")}
                >
                    <FiVolumeX size={24} className="text-gray-800" />
                    <span className={selected === "hearing" ? "font-semibold text-gray-900" : "text-gray-600"}>
                        Hearing Impairment
                    </span>
                </Link>
            </div>
        </>
    );
}
