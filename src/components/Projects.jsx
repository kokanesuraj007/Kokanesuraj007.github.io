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


    return (
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
                                            _hover={{ cursor: 'pointer', background: '#C668FF', color: 'black' }}
                                        >Code
                                        </Link>
                                        <Link href="https://fastidious-wisp-d5700f.netlify.app/" textDecoration='none' fontSize='14px' minW='100px' ml={10} color='#C668FF' p={8}
                                            border='2px solid #C668FF' target='_blank'
                                            _hover={{ cursor: 'pointer', background: '#C668FF', color: 'black' }}
                                        >Website
                                        </Link>

                                    </Box>
                                </Box>
                                {/* {showVideoOne ? <DemoVideoOne closeDemoVideoOne={closeDemoVideoOne} /> : null} */}
                            </Container>
                            <Container className="projectCard">
                                <Box borderRadius='20px'>
                                    <Image borderRadius='0px 0px 0px 0px' minW={300} height={200} src="wrdrb.png" alt="wrdrb" />
                                </Box>
                                <Box mt={-4} p={10} className="projectButton">
                                    <Box className="projectDescBox">
                                        <Text className="projectDescText">A front-end clone of WRDRB Shop Fashion webpage developed by 5 members in time span of 6 days.
                                            We have added features like filter products, toggle product images, delete a product from cart, payment validation etc
                                        </Text>
                                    </Box>

                                    <Box display='flex' className="techStackBox" justifyContent='center'>
                                        <Text className="techStack">React Js</Text>
                                        <Text className="techStack">MongoDB</Text>
                                        <Text className="techStack">Chakra UI</Text>
                                    </Box>

                                    <Box className="buttonBox">
                                        <Link href="https://github.com/LV-23/fixed-thread-889" textDecoration='none' fontSize='14px' ml={20} color='#C668FF' p={8}
                                            border='2px solid #C668FF' target='_blank'
                                            _hover={{ cursor: 'pointer', background: '#C668FF', color: 'black' }}
                                        >Code
                                        </Link>
                                        <Link href="https://fixed-thread-889.netlify.app/" textDecoration='none' fontSize='14px' minW='100px' ml={10} color='#C668FF' p={8}
                                            border='2px solid #C668FF' target='_blank'
                                            _hover={{ cursor: 'pointer', background: '#C668FF', color: 'black' }}
                                        >Website
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
                                            _hover={{ cursor: 'pointer', background: '#C668FF', color: 'black' }}
                                        >Code
                                        </Link>
                                        <Link href="https://super-pithivier-ba36c1.netlify.app/" textDecoration='none' fontSize='14px' minW='100px' ml={10} color='#C668FF' p={8}
                                            border='2px solid #C668FF' target='_blank'
                                            _hover={{ cursor: 'pointer', background: '#C668FF', color: 'black' }}
                                        >Website
                                        </Link>

                                    </Box>
                                </Box>
                                {/* {showVideoThree ? <DemoVideoThree closeDemoVideoThree={closeDemoVideoThree} /> : null} */}
                            </Container>

                            <Container className="projectCard">
                                <Box borderRadius='20px'>
                                    <Image borderRadius='20px 20px 0px 0px' minW={300} height={200} src="myth.png" alt="Sugar-Cosmatic" />
                                </Box>
                                <Box mt={-4} p={10} className="projectButton">
                                    <Box className="projectDescBox">
                                        <Text className="projectDescText">A front-end clone of Mytheresa Fashion Store webpage developed by 1 members in time span of 6 days.
                                            We have added features like filter products, toggle product images, delete a product from cart, payment validation etc
                                        </Text>
                                    </Box>

                                    <Box display='flex' className="techStackBox" justifyContent='center'>
                                        <Text className="techStack">HTML</Text>
                                        <Text className="techStack">CSS</Text>
                                        <Text className="techStack">JS</Text>
                                    </Box>

                                    <Box className="buttonBox">
                                        <Link href="https://github.com/kokanesuraj007/Mytheresa" textDecoration='none' fontSize='14px' ml={20} color='#C668FF' p={8}
                                            border='2px solid #C668FF' target='_blank'
                                            _hover={{ cursor: 'pointer', background: '#C668FF', color: 'black' }}
                                        >Code
                                        </Link>
                                        <Link href="https://classy-sunshine-4c5995.netlify.app/" textDecoration='none' fontSize='14px' minW='100px' ml={10} color='#C668FF' p={8}
                                            border='2px solid #C668FF' target='_blank'
                                            _hover={{ cursor: 'pointer', background: '#C668FF', color: 'black' }}
                                        >Website
                                        </Link>

                                    </Box>
                                </Box>
                                {/* {showVideoOne ? <DemoVideoOne closeDemoVideoOne={closeDemoVideoOne} /> : null} */}
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
                                            _hover={{ cursor: 'pointer', background: '#C668FF', color: 'black' }}
                                        >Code
                                        </Link>
                                        <Link href="https://fastidious-wisp-d5700f.netlify.app/" textDecoration='none' fontSize='14px' minW='100px' ml={10} color='#C668FF' p={8}
                                            border='2px solid #C668FF' target='_blank'
                                            _hover={{ cursor: 'pointer', background: '#C668FF', color: 'black' }}
                                        >Website
                                        </Link>

                                    </Box>
                                </Box>
                                {/* {showVideoOne ? <DemoVideoOne closeDemoVideoOne={closeDemoVideoOne} /> : null} */}
                            </Container>

                            <Container className="projectCard">
                                <Box borderRadius='20px'>
                                    <Image borderRadius='20px 20px 0px 0px' minW={300} height={200} src="wrdrb.png" alt="wrdrb" />
                                </Box>
                                <Box mt={-4} p={10} className="projectButton">
                                    <Box className="projectDescBox">
                                        <Text className="projectDescText">A front-end clone of WRDRB Shop Fashion  webpage developed by 5 members in time span of 6 days.
                                            We have added features like filter products, toggle product images, delete a product from cart, payment validation etc
                                        </Text>
                                    </Box>

                                    <Box display='flex' className="techStackBox" justifyContent='center'>
                                        <Text className="techStack">ReactJs</Text>
                                        <Text className="techStack">MongoDB</Text>
                                        <Text className="techStack">Chakra UI</Text>
                                    </Box>

                                    <Box className="buttonBox">
                                        <Link href="https://github.com/LV-23/fixed-thread-889" textDecoration='none' fontSize='14px' ml={20} color='#C668FF' p={8}
                                            border='2px solid #C668FF' target='_blank'
                                            _hover={{ cursor: 'pointer', background: '#C668FF', color: 'black' }}
                                        >Code
                                        </Link>
                                        <Link href="https://fixed-thread-889.netlify.app/" textDecoration='none' fontSize='14px' minW='100px' ml={10} color='#C668FF' p={8}
                                            border='2px solid #C668FF' target='_blank'
                                            _hover={{ cursor: 'pointer', background: '#C668FF', color: 'black' }}
                                        >Website
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
                                            _hover={{ cursor: 'pointer', background: '#C668FF', color: 'black' }}
                                        >Code
                                        </Link>
                                        <Link href="https://super-pithivier-ba36c1.netlify.app/" textDecoration='none' fontSize='14px' minW='100px' ml={10} color='#C668FF' p={8}
                                            border='2px solid #C668FF' target='_blank'
                                            _hover={{ cursor: 'pointer', background: '#C668FF', color: 'black' }}
                                        >Website
                                        </Link>

                                    </Box>
                                </Box>
                                {/* {showVideoThree ? <DemoVideoThree closeDemoVideoThree={closeDemoVideoThree} /> : null} */}
                            </Container>

                            <Container className="projectCard">
                                <Box borderRadius='20px'>
                                    <Image borderRadius='20px 20px 0px 0px' minW={300} height={200} src="myth.png" alt="Sugar-Cosmatic" />
                                </Box>
                                <Box mt={-4} p={10} className="projectButton">
                                    <Box className="projectDescBox">
                                        <Text className="projectDescText">A front-end clone of Mytheresa Fashion Store webpage developed by 1 members in time span of 6 days.
                                            We have added features like filter products, toggle product images, delete a product from cart, payment validation etc
                                        </Text>
                                    </Box>

                                    <Box display='flex' className="techStackBox" justifyContent='center'>
                                        <Text className="techStack">HTML</Text>
                                        <Text className="techStack">CSS</Text>
                                        <Text className="techStack">JS</Text>
                                    </Box>

                                    <Box className="buttonBox">
                                        <Link href="https://github.com/kokanesuraj007/Mytheresa" textDecoration='none' fontSize='14px' ml={20} color='#C668FF' p={8}
                                            border='2px solid #C668FF' target='_blank'
                                            _hover={{ cursor: 'pointer', background: '#C668FF', color: 'black' }}
                                        >Code
                                        </Link>
                                        <Link href="https://classy-sunshine-4c5995.netlify.app/" textDecoration='none' fontSize='14px' minW='100px' ml={10} color='#C668FF' p={8}
                                            border='2px solid #C668FF' target='_blank'
                                            _hover={{ cursor: 'pointer', background: '#C668FF', color: 'black' }}
                                        >Website
                                        </Link>

                                    </Box>
                                </Box>
                                {/* {showVideoOne ? <DemoVideoOne closeDemoVideoOne={closeDemoVideoOne} /> : null} */}
                            </Container>

                        </SimpleGrid>
                    </Center>
                </Container>
            }



             //github

        {isLargerThan1200 ?
            <Container mt={50} mb={150} >
                <Center>
                    <Heading color='#6889FF' borderBottom='2px solid #C668FF' width={209} alignContent='center'>GitHub Calendar</Heading>
                </Center>

                <Center>

                    <GitHubCalendar username="kokanesuraj007" />

                </Center>

                <Center mt={60}>
                    <SimpleGrid columns={2} spacing={30}>
                        <Container className="projectC">
                            <Box borderRadius='20px'>
                                <Image borderRadius='20px 20px 0px 0px' minW={300} height={200} src="https://github-readme-stats.vercel.app/api?username=kokanesuraj007&show_icons=true" alt="" />
                            </Box>
                        </Container>

                        <Container className="projectC">
                            <Box borderRadius='20px'>
                                <Image borderRadius='20px 20px 0px 0px' minW={300} height={200} src="https://github-readme-streak-stats.herokuapp.com/?user=kokanesuraj007" alt="" />
                            </Box>
                        </Container>

                        <Container className="git">

                            <Box borderRadius='20px' >
                                <Image borderRadius='20px 20px 0px 0px' src="https://github-readme-stats.vercel.app/api/top-langs?username=kokanesuraj007&show_icons=true" alt="" />
                            </Box>

                        </Container>

                        <Container className="git">
                            <Box borderRadius='20px'>
                                <Image borderRadius='20px 20px 0px 0px' minW={300} height={200} src="https://camo.githubusercontent.com/8518504a205f83c6d26f677ce0dd8230e6fdbd19a8b9d113bd6589687bd55d7d/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f313239323637372f73637265656e73686f74732f363133393136372f6d656469612f35333837646337653033356233656665396439343531363034346465363661342e676966" alt="" />
                            </Box>
                        </Container>
                    </SimpleGrid>
                </Center>
            </Container>

            :

            <Container mt={150} mb={150} >
                <Center>
                    <Heading color='#6889FF' borderBottom='2px solid #C668FF' width={209} alignContent='center'>GitHub Calendar</Heading>
                </Center>
                <Center>

                    <GitHubCalendar username="kokanesuraj007" />

                </Center>

                <Center mt={60}>
                    <SimpleGrid columns={1} spacing={30}>
                        <Container className="projectC">
                            <Box borderRadius='20px'>
                                <Image borderRadius='20px 20px 0px 0px' minW={300} height={200} src="https://github-readme-stats.vercel.app/api?username=kokanesuraj007&show_icons=true" alt="" />
                            </Box>
                        </Container>

                        <Container className="projectC">
                            <Box borderRadius='20px'>
                                <Image borderRadius='20px 20px 0px 0px' minW={300} height={200} src="https://github-readme-streak-stats.herokuapp.com/?user=kokanesuraj007" alt="" />
                            </Box>
                        </Container>

                        <Container className="git">

                            <Box borderRadius='20px' >
                                <Image borderRadius='20px 20px 0px 0px' src="https://github-readme-stats.vercel.app/api/top-langs?username=kokanesuraj007&show_icons=true" alt="" />
                            </Box>

                        </Container>
                        <Container className="git">
                            <Box borderRadius='20px'>
                                <Image borderRadius='20px 20px 0px 0px' minW={300} height={200} src="https://camo.githubusercontent.com/8518504a205f83c6d26f677ce0dd8230e6fdbd19a8b9d113bd6589687bd55d7d/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f313239323637372f73637265656e73686f74732f363133393136372f6d656469612f35333837646337653033356233656665396439343531363034346465363661342e676966" alt="" />
                            </Box>
                        </Container>

                    </SimpleGrid>
                </Center>
            </Container>
        }
        
        </>
    )
};