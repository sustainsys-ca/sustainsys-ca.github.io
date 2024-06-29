"use client"
import { useState } from "react";
import Image from 'next/image';

export default function Events() {
    const [activeTab, setActiveTab] = useState("upcoming");

    const upcomingEvents = [
        { date: "July 15, 2024", title: "AI in Sustainability Workshop", description: "A workshop exploring the use of AI in sustainable practices.", imageUrl: "/images/ai_workshop.jpg" },
        { date: "August 3, 2024", title: "Data Science Conference", description: "An annual conference for data science professionals and enthusiasts.", imageUrl: "/images/data_science_conference.jpg" },
    ];

    const pastEvents = [
        { date: "May 10, 2024", title: "Machine Learning Basics Webinar", description: "A beginner-friendly webinar on the basics of machine learning.", imageUrl: "/images/ml_webinar.jpg" },
        { date: "June 5, 2024", title: "Climate Change and Data Symposium", description: "A symposium discussing the role of data in combating climate change.", imageUrl: "/images/climate_symposium.jpg" },
    ];

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
                                    width={100}
                                    height={100}
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
                    <div className="flex flex-col items-center space-y-4">
                        {pastEvents.map((event, index) => (
                            <div key={index} className="bg-mikado p-4 rounded-lg shadow-md w-full flex">
                                <Image
                                    src={event.imageUrl}
                                    alt={event.title}
                                    width={100}
                                    height={100}
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
