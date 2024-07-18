"use client"
import { useState } from "react";
import Image from 'next/image';
import upcomingEvents from "../../../AllMembers/upcomingEvents";
import pastEvents from "../../../AllMembers/pastEvents";

export default function Events() {
    const [activeTab, setActiveTab] = useState("upcoming");
    
    return (
        <div className="min-h-screen flex flex-col items-center p-4 bg-white">
            <header className="w-full max-w-3xl py-4">
                <h1 className="text-3xl font-bold text-everglade mb-4">Events</h1>
                <div className="flex space-x-4 border-b border-everglade">
                    <button
                        className={`py-2 px-4 text-lg font-semibold ${activeTab === "upcoming" ? "border-b-2 border-black" : "hover:text-lightgreen"}`}
                        onClick={() => setActiveTab("upcoming")}
                    >
                        Upcoming Events
                    </button>
                    <button
                        className={`py-2 px-4 text-lg font-semibold ${activeTab === "past" ? "border-b-2 border-black" : "hover:text-lightgreen"}`}
                        onClick={() => setActiveTab("past")}
                    >
                        Past Events
                    </button>
                </div>
            </header>
            <main className="w-full max-w-3xl flex-grow mt-4">
                {activeTab === "upcoming" ? (
                    <div className="flex flex-col items-center space-y-4">
                        {upcomingEvents.map((event, index) => (
                            <div key={index} className="bg-mikado p-4 rounded-lg shadow-md w-full flex">
                                <Image
                                    src={""}
                                    alt={event.title}
                                    width={250}
                                    height={250}
                                    className="rounded-lg mr-4"
                                />
                                <div>
                                    <h2 className="text-xl font-bold text-everglade">{event.title}</h2>
                                    <p className="text-gray-600">{event.date}</p>
                                    <p className="text-gray-800">{event.description}</p>
                                </div>
                            </div>
                        ))}
                        {upcomingEvents.length === 0 && (
                            <p className="text-xl text-gray-600">No upcoming events at the moment. Stay tuned!</p>
                        )}
                    </div>
                ) : (
                    <div className="flex flex-col items-center space-y-4 mb-8">
                        {pastEvents.map((event, index) => (
                            <div key={index} className="bg-mikado p-4 rounded-lg shadow-md w-full flex">
                                <Image
                                    src={event.imageUrl}
                                    alt={event.title}
                                    width={250}
                                    height={250}
                                    className="rounded-lg mr-4"
                                />
                                <div>
                                    <h2 className="text-xl font-bold text-everglade">{event.title}</h2>
                                    <p className="text-gray-600">{event.date}</p>
                                    <p className="text-gray-800">{event.description}</p>
                                </div>
                            </div>
                        ))}
                        {pastEvents.length === 0 && (
                            <p className="text-xl text-gray-600">No past events available.</p>
                        )}
                    </div>
                )}
            </main>
        </div>
    );
}
