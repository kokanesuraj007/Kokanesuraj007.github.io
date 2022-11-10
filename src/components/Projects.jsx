import { Center, Container, Heading, Box, SimpleGrid, Image, Link, Text } from "@chakra-ui/react";
import "./DownArrow.css";
import { useMediaQuery } from '@chakra-ui/react';
import "./Video.css";
import GitHubCalendar from 'react-github-calendar'
// import { useState } from "react";
// import { DemoVideoOne, DemoVideoThree } from "./DemoVideo";
import "./Projects.css";

export const Projects = ({ projectRef }) => {
    const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)');
    // const [showVideoOne, setShowVideoOne] = useState(false);
    // const [showVideoTwo, setShowVideoTwo] = useState(false);
    // const [showVideoThree, setShowVideoThree] = useState(false);

    // const closeDemoVideoOne = () => {
    //     setShowVideoOne(false);
    // }

    // const closeDemoVideoTwo = () => {
    //     setShowVideoTwo(false);
    // }

    // const closeDemoVideoThree = () => {
    //     setShowVideoThree(false);
    // }

    return(
        <> 
            {isLargerThan1200 ? 
            <Container mt={150} mb={150} ref={projectRef}>
            <Center>
                <Heading color='#6889FF' borderBottom='2px solid #C668FF' width={100} alignContent='center'>Projects</Heading>
            </Center>
            {/* minW={300} borderRadius='20px' _hover={{ boxShadow: '0 0 8px #6889FF' }} */}
            <Center mt={60}>
                <SimpleGrid columns={2} spacing={30}>
                    <Container className="projectCard">
                        <Box borderRadius='20px'>
                            <Image borderRadius='20px 20px 0px 0px' minW={300} height={200} src="sugar_Cosmatic.png" alt="Sugar-Cosmatic" />
                        </Box>
                        <Box mt={-4} p={10} className="projectButton">
                            <Box className="projectDescBox">
                                <Text className="projectDescText">A front-end clone of sugar-cosmatic webpage developed by 1 members in time span of 6 days.
                                We have added features like filter products, toggle product images, delete a product from cart, payment validation etc
                                </Text>
                            </Box>

                            <Box display='flex' className="techStackBox" justifyContent='center'>
                                <Text className="techStack">HTML</Text>
                                <Text className="techStack">CSS</Text>
                                <Text className="techStack">JS</Text>
                            </Box>

                            <Box className="buttonBox">
                                <Link href="https://github.com/kokanesuraj007/SugarCosmatic-clone" textDecoration='none' fontSize='14px' ml={20} color='#C668FF' p={8} 
                                    border='2px solid #C668FF' target='_blank'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    >Code
                                </Link>
                                <Link href="https://fastidious-wisp-d5700f.netlify.app/" textDecoration='none' fontSize='14px' minW='100px' ml={10} color='#C668FF' p={8} 
                                    border='2px solid #C668FF' target='_blank'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    >Website
                                </Link>    
                                <Link href="" textDecoration='none' fontSize='14px' minW='100px' ml={10} color='#C668FF' p={8} 
                                    border='2px solid #C668FF' target='_blank'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}>
                                    Demo
                                </Link>
                            </Box>
                        </Box>
                        {/* {showVideoOne ? <DemoVideoOne closeDemoVideoOne={closeDemoVideoOne} /> : null} */}
                    </Container>

                    <Container className="projectCard">
                        <Box borderRadius='20px'> 
                            <Image borderRadius='20px 20px 0px 0px' minW={300} height={200} src="mailtrap.png" alt="mailtrp-project" />
                        </Box>

                        <Box mt={-4} p={10} className="projectButton">
                            <Box className="projectDescBox">
                                <Text className="projectDescText">A front-end clone of mailtrap webpage developed by 5 members in time span of 6 days.
                                    We have added features like SignUp and Login,and dropdown menu,crauser part.  
                                </Text>
                            </Box>

                            <Box display='flex' className="techStackBox" justifyContent='center'>
                                <Text className="techStack">HTML</Text>
                                <Text className="techStack">CSS</Text>
                                <Text className="techStack">JS</Text>
                            </Box>

                            <Box className="buttonBox">
                                <Link href="https://github.com/SubhadeepBid/alleged-partner-6503" textDecoration='none' fontSize='14px' ml={20} color='#C668FF' p={8} 
                                    border='2px solid #C668FF' target='_blank'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    >Code
                                </Link>
                                <Link href="https://super-pithivier-ba36c1.netlify.app/" textDecoration='none' fontSize='14px' minW='100px' ml={10} color='#C668FF' p={8} 
                                    border='2px solid #C668FF' target='_blank'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    >Website
                                </Link>    
                                <Link href="" textDecoration='none' fontSize='14px' minW='100px' ml={10} color='#C668FF' p={8} 
                                    border='2px solid #C668FF' target='_blank'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}>
                                    Demo
                                </Link>
                            </Box>
                        </Box>
                        {/* {showVideoThree ? <DemoVideoThree closeDemoVideoThree={closeDemoVideoThree} /> : null} */}
                    </Container>

                    

                </SimpleGrid>
                </Center>
                </Container>

                :

                <Container mt={150} mb={150} ref={projectRef}>
                <Center>
                    <Heading color='#6889FF' borderBottom='2px solid #C668FF' width={100} alignContent='center'>Projects</Heading>
                </Center>
                {/* minW={300} borderRadius='20px' _hover={{ boxShadow: '0 0 8px #6889FF' }} */}
                <Center mt={60}>
                    <SimpleGrid columns={1} spacing={30}>
                    <Container className="projectCard">
                    <Box borderRadius='20px'>
                        <Image borderRadius='20px 20px 0px 0px' minW={300} height={200} src="sugar_Cosmatic.png" alt="Sugar-Cosmatic" />
                    </Box>
                    <Box mt={-4} p={10} className="projectButton">
                        <Box className="projectDescBox">
                            <Text className="projectDescText">A front-end clone of sugar-cosmatic webpage developed by 1 members in time span of 6 days.
                            We have added features like filter products, toggle product images, delete a product from cart, payment validation etc
                            </Text>
                        </Box>

                        <Box display='flex' className="techStackBox" justifyContent='center'>
                            <Text className="techStack">HTML</Text>
                            <Text className="techStack">CSS</Text>
                            <Text className="techStack">JS</Text>
                        </Box>

                        <Box className="buttonBox">
                            <Link href="https://github.com/kokanesuraj007/SugarCosmatic-clone" textDecoration='none' fontSize='14px' ml={20} color='#C668FF' p={8} 
                                border='2px solid #C668FF' target='_blank'
                                _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                >Code
                            </Link>
                            <Link href="https://fastidious-wisp-d5700f.netlify.app/" textDecoration='none' fontSize='14px' minW='100px' ml={10} color='#C668FF' p={8} 
                                border='2px solid #C668FF' target='_blank'
                                _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                >Website
                            </Link>    
                            <Link href="" textDecoration='none' fontSize='14px' minW='100px' ml={10} color='#C668FF' p={8} 
                                border='2px solid #C668FF' target='_blank'
                                _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}>
                                Demo
                            </Link>
                        </Box>
                    </Box>
                    {/* {showVideoOne ? <DemoVideoOne closeDemoVideoOne={closeDemoVideoOne} /> : null} */}
                </Container>

                <Container className="projectCard">
                    <Box borderRadius='20px'> 
                        <Image borderRadius='20px 20px 0px 0px' minW={300} height={200} src="mailtrap.png" alt="mailtrp-project" />
                    </Box>

                    <Box mt={-4} p={10} className="projectButton">
                        <Box className="projectDescBox">
                            <Text className="projectDescText">A front-end clone of mailtrap webpage developed by 5 members in time span of 6 days.
                                We have added features like SignUp and Login,and dropdown menu,crauser part.  
                            </Text>
                        </Box>

                        <Box display='flex' className="techStackBox" justifyContent='center'>
                            <Text className="techStack">HTML</Text>
                            <Text className="techStack">CSS</Text>
                            <Text className="techStack">JS</Text>
                        </Box>

                        <Box className="buttonBox">
                            <Link href="https://github.com/SubhadeepBid/alleged-partner-6503" textDecoration='none' fontSize='14px' ml={20} color='#C668FF' p={8} 
                                border='2px solid #C668FF' target='_blank'
                                _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                >Code
                            </Link>
                            <Link href="https://super-pithivier-ba36c1.netlify.app/" textDecoration='none' fontSize='14px' minW='100px' ml={10} color='#C668FF' p={8} 
                                border='2px solid #C668FF' target='_blank'
                                _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                >Website
                            </Link>    
                            <Link href="" textDecoration='none' fontSize='14px' minW='100px' ml={10} color='#C668FF' p={8} 
                                border='2px solid #C668FF' target='_blank'
                                _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}>
                                Demo
                            </Link>
                        </Box>
                    </Box>
                    {/* {showVideoThree ? <DemoVideoThree closeDemoVideoThree={closeDemoVideoThree} /> : null} */}
                </Container>
                       
                    </SimpleGrid>
                    </Center>
                </Container>
                }

                <Center>
                <Heading color='#6889FF' borderBottom='2px solid #C668FF' width={209} alignContent='center'>GitHub Calendar</Heading>
            </Center>
                <Center>
               
                <GitHubCalendar username="kokanesuraj007"/>
                </Center>
        </>
    )
};