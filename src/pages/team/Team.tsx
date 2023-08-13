import { Spacer, VStack, Text, Button, Stack, useMediaQuery } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import LocalizedStrings from 'react-localization';
import { useSelector } from 'react-redux';

import { DeveloperInfo } from '../../components/developerInfo/DeveloperInfo';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { IRootState } from '../../interfaces/IRootState';
import MatrixRainingLetters from './MatrixRain';
import AlexLeonov from '../../assets/developers/AlexLeonov.jpg';
import Zifrkoks from '../../assets/developers/Zifrkoks.jpg';
import Eliseev from '../../assets/developers/Eliseev.jpg';
import Raspaev from '../../assets/developers/Raspaev.jpg';
import Profile from '../../assets/developers/profile.jpg';
import Sergeev from '../../assets/developers/Sergeev.jpg';

export const Team = React.memo(() => {
  const { height } = useWindowDimensions();

  const texts = new LocalizedStrings({
    EN: {
      team: 'Team',
      meetTeam: 'Meet the Team',
      meetTeamText:
        'The development of all the projects is done by our team, just look at these guys, here they are from top to bottom.',
      meetTeamButton: 'I want to join you too',
      organizers: 'Organizers and managers',
      organizersText:
        'Organizing and managing large and technically complex projects is not an easy but interesting task. Thanks to competent management, you can achieve great success.',
      developers: 'Developers and engineers',
      developersText:
        'Without technically competent and motivated specialists, the development of serious hardware solutions is simply impossible. That is why we take a very careful approach to the selection of our technical team members.',
    },
    RU: {
      team: 'Команда',
      meetTeam: 'Познакомьтесь с Командой',
      meetTeamText:
        'Разработкой всех проектов занимается наша команда, только посмотрите на этих ребят, вот они сверху вниз.',
      meetTeamButton: 'Я тоже хочу к вам',
      organizers: 'Организаторы и руководители',
      organizersText:
        'Организовывать и руководить крупными и технически сложными проектами, непростая но интересная задача. Благодаря грамотному руководству, можно добиться больших успехов.',
      developers: 'Разработчики и инженеры',
      developersText:
        'Без технически грамотных и мотивированных специалистов, разработка серьёзных аппаратных решений попросту невозможна. Именно поэтому мы очень тщательно подходим к подбору участников нашей технической команды.',
    },
  });

  const lang = useSelector((state: IRootState) => state.core.lang);
  const pageHeightRef = useRef<HTMLDivElement>(null);
  const [isLargerThan1420] = useMediaQuery('(min-width: 1220px)');

  return (
    <>
      <Helmet>
        <title> ATLAS | {texts.getString('team', lang)}</title>
      </Helmet>
      <Header aboutUs={true} />
      <VStack minH={`${pageHeightRef.current?.scrollHeight}px`} position="absolute" m={0} p={0}>
        <MatrixRainingLetters height={pageHeightRef.current?.scrollHeight} />
      </VStack>
      <VStack
        bgColor="brand.dark"
        minH={`${height}px`}
        maxW="full"
        ref={pageHeightRef}
        overflowX="hidden"
        justify="center"
      >
        <VStack zIndex={100} w="full" spacing={[2, 4]} pt={2} justify="center" align="center" px={2}>
          <VStack
            w={isLargerThan1420 ? '50%' : '100%'}
            align={isLargerThan1420 ? 'start' : 'center'}
            p={4}
            backgroundColor="rgb(37,37,37, 0.7)"
            border="2px"
            borderColor="brand.gray"
            borderRadius="10px"
          >
            <Text fontSize={['lg', 'xl', '2xl', '3xl', '4xl']} fontWeight="500">
              {texts.getString('meetTeam', lang)}
            </Text>
            <Text color="brand.lightGray" maxW={isLargerThan1420 ? '55%' : '100%'}>
              {texts.getString('meetTeamText', lang)}
            </Text>
            <Button variant="brand-circle-border" size="sm" isDisabled={true}>
              {texts.getString('meetTeamButton', lang)}
            </Button>
          </VStack>
          <Stack
            w={isLargerThan1420 ? '50%' : '100%'}
            align="start"
            p={4}
            backgroundColor="rgb(37,37,37, 0.7)"
            border="2px"
            borderColor="brand.gray"
            borderRadius="10px"
            direction={isLargerThan1420 ? 'row' : 'column'}
          >
            <VStack maxW={isLargerThan1420 ? '50%' : '100%'} align="start" spacing={0}>
              <Text fontSize={['lg', 'xl', '2xl']} fontWeight="500">
                {texts.getString('organizers', lang)}
              </Text>
              <Text color="brand.lightGray" fontSize="xs">
                {texts.getString('organizersText', lang)}
              </Text>
            </VStack>
            <VStack w="full">
              <DeveloperInfo
                src={AlexLeonov}
                name="Леонов Алексей"
                position="Основатель Atlas IT/Ведущий frontend-разработчик"
                stack={['JS', 'SCSS', 'HTML', 'TS', 'C++', 'ReactJS', 'CSS', 'Python', 'jQuery', 'AJAX']}
                city="Москва"
                country="Россия"
                languages={['Русский', 'English']}
                git="https://github.com/sandDespotismGit"
                vk="https://vk.com/l122http"
                telegram="https://t.me/ALLeoon"
              />
              <DeveloperInfo
                src={Zifrkoks}
                name="Яков Арханов"
                position="Сооснователь Atlas IT/Ведущий backend-разработчик"
                stack={['C', 'C#', 'Java', 'JS', 'C++', 'ReactJS', 'Maven', 'Spring', '.NET core', 'DOCKER']}
                city="Москва"
                country="Россия"
                languages={['Русский', 'English']}
                git="https://github.com/zifrkoks"
                vk=""
                telegram="https://t.me/Zifrkoks"
              />
              <DeveloperInfo
                src={Eliseev}
                name="Елисеев Егор"
                position="Сооснователь Atlas IT/Ведущий android-ios разработчик"
                stack={['C#', 'Java', 'C', 'HTML', 'C++', 'ReactJS', 'CSS', 'Python', 'Kotlin', 'Swift']}
                city="Ульяновск"
                country="Россия"
                languages={['Русский', 'English']}
                git="https://github.com/ElEgEv"
                vk="https://vk.com/id321670251"
                telegram="https://t.me/ThreeE_74"
              />
            </VStack>
          </Stack>
          <Stack
            w={isLargerThan1420 ? '50%' : '100%'}
            align={isLargerThan1420 ? 'start' : 'center'}
            p={4}
            backgroundColor="rgb(37,37,37, 0.7)"
            border="2px"
            borderColor="brand.gray"
            borderRadius="10px"
            direction={isLargerThan1420 ? 'row' : 'column'}
          >
            <VStack maxW={isLargerThan1420 ? '50%' : '100%'} align="start" spacing={0}>
              <Text fontSize={['lg', 'xl', '2xl']} fontWeight="500">
                {texts.getString('developers', lang)}
              </Text>
              <Text color="brand.lightGray" fontSize="xs">
                {texts.getString('developersText', lang)}
              </Text>
            </VStack>
            <VStack w="full">
              <DeveloperInfo
                src={Raspaev}
                name="Распаев Николай"
                position="Frontend-разработчик"
                stack={['JS', 'TS', 'ReactJS', 'C#', 'Java', 'CSS', 'SCSS', 'Redux']}
                city="Ульяновск"
                country="Россия"
                languages={['Русский', 'English']}
                git="https://github.com/keyssen"
                vk=""
                telegram="https://t.me/takench"
              />
              <DeveloperInfo
                src={Profile}
                name="Данил Малин"
                position="Backend-разработчик"
                stack={['C#', 'Java', 'PHP', 'ReactJS', 'JS', 'Postgre', 'MySQL']}
                city="Ульяновск"
                country="Россия"
                languages={['Русский', 'English']}
                git="https://github.com/SaYxGal"
                vk=""
                telegram="http://t.me/SaYxGal"
              />
              <DeveloperInfo
                src={Sergeev}
                name="Никита Сергеев"
                position="Fullstack-разработчик"
                stack={['Java', 'NodeJS', 'JS', 'C#']}
                city="Ульяновск"
                country="Россия"
                languages={['Русский', 'English']}
                git="https://github.com/NotScream73"
                vk="https://vk.com/notscream73"
                telegram="https://t.me/notscream73"
              />
            </VStack>
          </Stack>
        </VStack>
        <Spacer />
        <Footer />
      </VStack>
    </>
  );
});
