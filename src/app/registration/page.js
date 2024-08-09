import React from "react";
import Image from "next/image";
import MainButton from "@/components/ui/MainButton";
import Banner from "@/components/ui/Banner";

export default function Page() {
    return (
        <>
           <Banner/>
            <div className="mt-[50px] mx-auto xl:w-[1000px] lg:w-[848px] md:w-[669px] sm:w-[510px] xsm:w-[340px]">
                <div className="xsm:mb-[10px] lg:mb-[5px] xl:mb-[0px]">
                    <div className="relative sm:w-[250px] sm:h-[90px] mb-[10px] xsm:w-[166.67px] xsm:h-[60px]">
                        <Image
                            src="/assets/images/FYLP_Logo.png"
                            alt=""
                            fill
                            style={{ objectFit: "contain" }}
                        />
                    </div>
                    
                    <div className="md:h-[50px] sm:h-[90px] xsm:h-[60px] flex items-center">
                        <p className="font-poppins font-semibold xsm:text-[16.67px] sm:text-[25px] xsm:leading-[25px] sm:leading-[37.5px]">Join the Filipino Youth Leadership Program 2024</p>
                    </div>
                    <div className="sm:h-[150px] h-[100px]">
                        <p className="font-poppins font-normal sm:text-[16px] xsm:text-[10.67px] sm:leading-[24px] xsm:leading-[16px]">
                        Welcome to the application page for the Filipino Youth Leadership Program. Whether you are a passionate young leader eager to make a difference or an experienced mentor ready to guide the next generation, we have opportunities for you. Please select the appropriate application form below.
                        </p>
                    </div>
                </div>
                <div className="xsm:mb-[35px] md:mb-[20px] lg:mb-[50px]">
                    <div className="sm:h-[17px] md:h-[32px] lg:hidden 2xl:h-[7px] 2xl:block"></div>
                    <div className="sm:h-[50px] xsm:h-[33.33px] flex items-center">
                        <p className="font-poppins font-semibold sm:text-[20px] xsm:text-[13.33px] sm:leading-[30px] xsm:leading-[20px]">Apply as a <span className="text-[#0364FD]">Delegate</span></p>
                    </div>
                    <div className="xsm:h-[63.33px] sm:h-[95px] md:h-[70px]">
                        <p className="font-poppins font-normal xsm:text-[10.67px] sm:text-[16px] xsm:leading-[16px] sm:leading-[24px]">Are you a young leader with a vision to create positive change in your community and beyond? Apply now to join a network of motivated peers, develop your leadership skills, and gain valuable experience through our immersive program.</p>
                    </div>
                    <div className="xsm:h-[16px] sm:h-[30px] xl:hidden 2xl:h-[5px] 2xl:block"></div>
                    <div className="xsm:h-[33.33px] sm:h-[50px] flex items-center">
                        <p className="font-poppins font-semibold xsm:text-[10.67px] sm:text-[16px] xsm:leading-[16px] sm:leading-[24px]">Eligibility for Delegates:</p>
                    </div>
                    <div className="font-poppins font-normal xsm:text-[10.67px] sm:text-[16px] xsm:leading-[16px] sm:leading-[24px] pl-[9px]">
                        <ol className="list-decimal list-inside">
                            <li className="xsm:mb-[9.5px] sm:mb-[13px]">
                            The Filipino Youth Leadership program is open for delegates between the ages of 18 to 25 with the intention of learning about valuable leadership skills and nation-building.
                            </li>
                            <li className="xsm:mb-[9.5px] sm:mb-[13px]">
                            The delegate must be a Filipino citizen residing in Mindanao.
                            </li>
                            <li className="xsm:mb-[9.5px] sm:mb-[13px]">
                            Individuals with a passion for driving positive change, fostering innovation, and inspiring others are encouraged to apply.
                            </li>
                            <li className="xsm:mb-[9.5px] sm:mb-[13px]">
                            Eligibility is not restricted by geographic location, nationality, gender, race, or any other discriminatory factor.
                            </li>
                            <li className="xsm:mb-[9.5px] sm:mb-[13px]">
                            Participants should have a basic understanding of leadership principles or a willingness to learn and engage actively in the program.
                            </li>
                            <li>
                            While prior leadership experience is not mandatory, a genuine interest in assuming leadership roles and responsibilities is essential.
                            </li>
                        </ol>
                    </div>
                    <div className="flex justify-center xsm:mt-[35px] sm:mt-[55px] xl:mt-[50px] 2xl:mt-[55px]">
                        <MainButton href="https://docs.google.com/forms/d/17smTdDBxL6BSHFONyc_2IfwGmoW_PHRm8DVVD7Rh_94/edit">apply as a delegate</MainButton>
                    </div>
                </div>

                <div className="xsm:mb-[100px] sm:mb-[170px] lg:mb-[155px] ">
                    <div className="sm:h-[17px] md:h-[32px] lg:hidden 2xl:h-[7px] 2xl:block"></div>
                    <div className="sm:h-[50px] xsm:h-[33.33px] flex items-center">
                        <p className="font-poppins font-semibold sm:text-[20px] xsm:text-[13.33px] sm:leading-[30px] xsm:leading-[20px]">Apply as a <span className="text-[#0364FD]">Mentor</span></p>
                    </div>
                    <div className="xsm:h-[63.33px] sm:h-[95px] md:h-[70px]">
                        <p className="font-poppins font-normal xsm:text-[10.67px] sm:text-[16px] xsm:leading-[16px] sm:leading-[24px]">Are you a young leader with a vision to create positive change in your community and beyond? Apply now to join a network of motivated peers, develop your leadership skills, and gain valuable experience through our immersive program.</p>
                    </div>
                    <div className="xsm:h-[16px] sm:h-[30px] xl:hidden 2xl:h-[5px] 2xl:block"></div>
                    <div className="xsm:h-[33.33px] sm:h-[50px] flex items-center">
                        <p className="font-poppins font-semibold xsm:text-[10.67px] sm:text-[16px] xsm:leading-[16px] sm:leading-[24px]">Eligibility for Mentors:</p>
                    </div>
                    <div className="font-poppins font-normal xsm:text-[10.67px] sm:text-[16px] xsm:leading-[16px] sm:leading-[24px] pl-[9px]">
                        <ol className="list-decimal list-inside">
                            <li className="xsm:mb-[9.5px] sm:mb-[13px]">
                            Demonstrated experience in a leadership role, whether in community service, business, education, government, or other relevant fields.
                            </li>
                            <li className="xsm:mb-[9.5px] sm:mb-[13px]">
                            Proven track record of successfully leading teams, projects, or initiatives.
                            </li>
                            <li className="xsm:mb-[9.5px] sm:mb-[13px]">
                            Deep knowledge and expertise in your field, providing valuable insights and advice to young leaders.
                            </li>
                            <li className="xsm:mb-[9.5px] sm:mb-[13px]">
                            Ability to share best practices, strategies, and skills that are essential for leadership and community development.
                            </li>
                            <li className="xsm:mb-[9.5px] sm:mb-[13px]">
                            Active participation in community service or social impact initiatives.
                            </li>
                            <li>
                            Excellent communication and interpersonal skills, with the ability to connect and build rapport with young people.
                            </li>
                        </ol>
                    </div>
                    <div className="flex justify-center xsm:mt-[35px] sm:mt-[55px] xl:mt-[50px] 2xl:mt-[55px]">
                        <MainButton href="https://docs.google.com/forms/d/1w3p8KYcN0yRelXW7cSsa9Uw8xzlkUQN9UEz9Vk8nCek/edit">apply as a mentor</MainButton>
                    </div>
                </div>
                
            </div>
        </>
    )
}
