import React, { useState } from 'react';
import { motion } from "framer-motion"

const ExperienceTile = ({ companyName, responsibility, role, startDate, endDate }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    // Split responsibilities into an array and remove any empty strings
    const responsibilitiesArray = responsibility.split('\n').filter(item => item.trim() !== '');

    // Determine if a responsibility should be listed or not
    const isBulletPoint = (item) => {
        const nonBulletKeywords = ["Participant of", "Month 1", "Month 2", "Month 3"];
        return !nonBulletKeywords.some(keyword => item.trim().startsWith(keyword));
    };

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 0.2 },
                ease: "easeIn",
            }}
            className="group flex flex-col items-center bg-teal-500 rounded-[15px] shadow-2xl p-12 ml-56 mr-56 hover:bg-white cursor-pointer"
            onClick={toggleExpansion}
        >
            <span className='flex flex-col-3'>
                <h3 className="font-semibold text-lg text-left text-black">{companyName}</h3>
                <p className="text-lg text-black font-semibold ml-2">{role}</p>
                <p className="text-lg text-black font-semibold ml-2">{startDate}</p>
                <p className="text-lg text-black font-semibold ml-2">{endDate}</p>
            </span>

            {isExpanded && (
                <div className="mt-2 text-black font-normal text-left">
                    <ul className="list-disc list-inside">
                        {responsibilitiesArray.map((item, index) => (
                            isBulletPoint(item) ? (
                                <li key={index}>{item.trim()}</li>
                            ) : (
                                <p key={index} className="mt-2">{item.trim()}</p>
                            )
                        ))}
                    </ul>
                </div>
            )}
        </motion.div>
    );
};

export default ExperienceTile;
