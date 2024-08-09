import React from 'react';
import FYLPLogo from '../../../public/assets/images/FYLP_Logo.png';
import Image from 'next/image';
import Banner from '@/components/ui/Banner';
import Divider from '@/components/Divider';
import AccordionComponent from '@/components/AccordionComponent';
import StayConnected from '@/components/StayConnected';
import MainButton from '@/components/ui/MainButton';

const Page = () => {
    return (
        <div>
            <Banner />
            <Divider title={'Frequently Asked Questions'}>
                <div className="flex justify-center flex-wrap">
                    <div className="flex flex-col justify-center flex-wrap">
                        <AccordionComponent
                            question="What is the Filipino Youth Leadership Program (FYLP)?"
                            answer="FYLP is a leadership development initiative aimed at cultivating young leaders across the Philippines, with a special focus on Mindanao. The program emphasizes community empowerment, collective action, and nation-building."
                        />
                        <AccordionComponent
                            question="Who can apply for the FYLP?"
                            answer="The program is open to young Filipinos, particularly student leaders, and individuals with a passion for public service and community development. Applicants should have an interest in leadership roles, whether in local government, organizations, or other civic activities."
                        />
                        <AccordionComponent
                            question="What are the key components of the FYLP?"
                            answer="The FYLP includes leadership skill development, networking and mentorship, community engagement, personal growth, and professional advancement. These components are designed to equip delegates with the necessary tools to drive positive change in their communities."
                        />
                        <AccordionComponent
                            question="What is the duration of the program?"
                            answer="The program runs for several weeks, with specific dates and schedules announced during the application process. It includes workshops, community immersion, mentorship sessions, and other activities."
                        />
                        <AccordionComponent
                            question="How do I apply for the FYLP?"
                            answer="Applicants can apply through the program's official website, where they will need to fill out an application form and submit required documents. Details about the application process will be provided on the website."
                        />
                        <AccordionComponent
                            question="What is included in the Leadership Skill Development component?"
                            answer="Delegates will participate in workshops and practical experiences that enhance strategic thinking, effective communication, and team management skills."
                        />
                        <AccordionComponent
                            question="What opportunities are available through Networking and Mentorship?"
                            answer="The program connects delegates with peers, experienced mentors, and industry leaders. This provides personalized guidance, professional insights, and opportunities for career growth."
                        />
                        <AccordionComponent
                            question="What does the Community Engagement component involve?"
                            answer="Delegates will engage with local communities through immersive activities, fostering civic responsibility and driving social change. This includes community service projects and interactive sessions with community leaders."
                        />
                        <AccordionComponent
                            question="How does the program support Personal Growth?"
                            answer="FYLP focuses on nurturing self-awareness, resilience, and confidence, helping delegates in their journey of self-discovery and personal development."
                        />
                        <AccordionComponent
                            question="What are the benefits of Professional Advancement through FYLP?"
                            answer="The program equips delegates with skills, knowledge, and networks that enhance employability and prepare them for leadership roles in their careers. This includes training in leadership, project management, and public speaking."
                        />
                        <AccordionComponent
                            question="Are there any costs associated with participating in the FYLP?"
                            answer="Details about program costs, including any fees or financial aid options, will be provided during the application process. The program aims to be inclusive and accessible to all eligible applicants."
                        />
                        <AccordionComponent
                            question="What kind of support can delegates expect during the program?"
                            answer="Delegates will receive continuous support from program coordinators, mentors, and peers. This includes guidance on projects, personal development, and professional growth."
                        />
                        <AccordionComponent
                            question="How can I learn more about the FYLP?"
                            answer="For more information, visit the official FYLP website or contact the program coordinators through the provided contact details on the website."
                        />
                        <AccordionComponent
                            question="What are the key dates and deadlines for the FYLP?"
                            answer="Key dates, including application deadlines, program start and end dates, and important events, will be announced on the FYLP website. Applicants are encouraged to check the website regularly for updates. If you have any other questions or need further assistance, please feel free to contact us through our official channels."
                        />
                    </div>
                    <div id="right-group" className="flex-shrink-0 sm:w-[18.75rem] sm:h-[18.75rem] w-[14.75rem] h-[14.75rem] xsm:mt-6 lg:mt-6 xl:mt-2  border-[#9CA3AF] border-2 rounded-[0.9375rem] flex flex-col justify-center items-center p-4">
                        <div className="flex flex-col items-center text-center">
                            <div className="sm:text-xl text-[0.83331rem] text-black font-bold font-poppins mb-3">
                                Have More Questions?
                            </div>
                            <div className="sm:text-base text-[0.66669rem] text-black font-extralight font-poppins mb-6">
                                If you have additional questions or need assistance with your application, please contact us. We&apos;re here to help.
                            </div>
                            <MainButton href="mailto:fylp2024@gmail.com">
                                ASK FOR HELP
                            </MainButton>
                        </div>
                    </div>
                </div>
                <StayConnected />
            </Divider>
        </div>
    );
};

export default Page;
