import { Spacer, VStack, Text, Stack, Button, useMediaQuery } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import LocalizedStrings from 'react-localization';
import { useSelector } from 'react-redux';

import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { TextInfo } from '../../components/textInfo/TextInfo';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { IRootState } from '../../interfaces/IRootState';

export const FAQ = React.memo(() => {
  const { height } = useWindowDimensions();

  const texts = new LocalizedStrings({
    EN: {
      faq: 'Frequently Asked Questions',
      onPage: 'On this page',
      fog: 'Why we Atlas?',
    },
    RU: {
      faq: 'Часто Задаваемые Вопросы',
      onPage: 'На этой странице',
      fog: 'Почему мы Atlas?',
    },
  });

  const faqTexts = {
    EN: {
      0: {
        head: 'Why are you called Atlas?',
        text: "Because it symbolizes our willingness and desire to create and implement world-class digital solutions",
      },
      1: {
        head: 'How did you appear?',
        text: 'Our origins come from the Volga in the city of Ulyanovsk. A number of creative developers, and enthusiasts decided to join a group to work together on a couple of projects, but eventually things went much further and we decided to work together. \n\n  Today we also work on our own products, and help other entrepreneurs and teams realize their projects. But the most important thing is that all we create in order to make your life better ;)',
      },
      2: {
        head: 'How can I contact you?',
        text: 'We love to talk to you, and we love to hear your ideas and suggestions, and we have our email and social media for that.\n\n  For those who want to join our team, we have a tab of vacancies on the site where you can always see available and choose the right one.\n\n  If you want to work with us, then go to the cooperation tab, and leave your application there. Then we will contact you and discuss the further plan of action.   ',
      },
    },
    RU: {
      0: {
        head: 'Почему вы называетесь Atlas?',
        text: 'Потому что оно символизирует нашу готовность и стремление создавать и внедрять цифровые решения мирового уровня ',
      },
      1: {
        head: 'Как вы появились?',
        text: 'Наше происхождение берёт своё начало на Волге в городе Ульяновск. Ряд креативных разработчиков, и энтузиастов решили объединится в группу что бы вместе заняться работой над парой проектов, но в итоге всё зашло куда дальше и мы решили работать вместе. \n\n Сегодня мы так же трудимся над своими продуктами, и помогаем другим предпринимателям и командам реализовывать их проекты. Но самое главное всё то, что мы создаём нужно для того, что бы сделать вашу жизнь лучше ;)',
      },
      2: {
        head: 'Как с вами связаться?',
        text: 'Мы любим с вами пообщаться, и с удовольствием слушаем ваши идеи и предложения, для этого у нас есть наша почта и социальные сети.\n\n Для желающих присоединится к нашей команде, у нас есть вкладка вакансий на сайте где вы всегда можете посмотреть свободные и выбрать подходящую.\n\n Если же вы хотите с нами работать, то перейдите во вкладку сотрудничества, и оставьте там свою заявку. После чего мы сами с вами свяжемся, обсудим дальнейший план действий.   ',
      },
    },
  };

  const lang = useSelector((state: IRootState) => state.core.lang);

  const myRef = useRef<HTMLDivElement>(null);
  const executeScroll = () => myRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });

  const [isLargerThan1025] = useMediaQuery('(min-width: 1025px)');

  const [buttonHover, setButtonHover] = useState(
    Object.keys(faqTexts[lang]).map(() => {
      return false;
    }),
  );

  return (
    <>
      <Helmet>
        <title> ATLAS | FAQ</title>
      </Helmet>
      <VStack bgColor="brand.dark" minH={`${height}px`} justify="center">
        <Header aboutUs={true} />
        <Stack
          direction={isLargerThan1025 ? 'row' : 'column-reverse'}
          w="full"
          spacing={[2, 4, 10]}
          pt={12}
          justify="center"
          align={isLargerThan1025 ? 'top' : 'center'}
          pr={isLargerThan1025 ? '15%' : '0px'}
          px={isLargerThan1025 ? 0 : 5}
        >
          <VStack spacing={[2, 4, 6]} w={isLargerThan1025 ? ['500px', '600px', '700px'] : 'full'} align="start">
            <Text fontSize={['lg', 'xl', '2xl', '3xl', '4xl']} fontWeight="500" pb={6}>
              {texts.getString('faq', lang)}
            </Text>
            {!isLargerThan1025 && (
              <VStack
                justify="start"
                align="start"
                mb={6}
                p={2}
                w="full"
                border="2px"
                borderColor="brand.orange"
                borderRadius="15px"
              >
                <Text textTransform="uppercase" fontSize="xs">
                  {texts.getString('onPage', lang)}
                </Text>
                {Object.keys(faqTexts[lang]).map(index => {
                  const block = faqTexts[lang];
                  return (
                    <Button
                      variant="brand.icon"
                      key={index}
                      color="brand.lightGray"
                      _hover={{ color: 'brand.orange' }}
                      fontWeight="normal"
                      px="0px"
                      py="0px"
                      h="20px"
                      onClick={executeScroll}
                      onMouseEnter={() => {
                        setButtonHover(
                          Object.keys(faqTexts[lang]).map(faqindex => {
                            return faqindex === index;
                          }),
                        );
                      }}
                      onMouseLeave={() => {
                        setButtonHover(
                          Object.keys(faqTexts[lang]).map(() => {
                            return false;
                          }),
                        );
                      }}
                    >
                      {block[index as unknown as keyof typeof block].head}
                    </Button>
                  );
                })}
              </VStack>
            )}
            {Object.keys(faqTexts[lang]).map(index => {
              const block = faqTexts[lang];
              return (
                <Stack key={index} ref={myRef} w="full">
                  <TextInfo
                    heading={block[index as unknown as keyof typeof block].head}
                    text={
                      <Text color="brand.lightGray">
                        {block[index as unknown as keyof typeof block].text
                          .trim()
                          .replace(/(?:\r\n|\r|\n)/g, '<br />')
                          .split('<br />')
                          .map(function (item: any, textindex: any) {
                            return (
                              <span key={textindex}>
                                {item}
                                <br />
                              </span>
                            );
                          })}
                      </Text>
                    }
                    isActive={buttonHover[Number(index)]}
                  />
                </Stack>
              );
            })}
          </VStack>
          {isLargerThan1025 && (
            <VStack justify="start" align="start" mb={6} p={2} borderColor="brand.orange" borderRadius="15px">
              <Text textTransform="uppercase" fontSize="xs">
                {texts.getString('onPage', lang)}
              </Text>
              {Object.keys(faqTexts[lang]).map(index => {
                const block = faqTexts[lang];
                return (
                  <Button
                    variant="brand.icon"
                    key={index}
                    color="brand.lightGray"
                    _hover={{ color: 'brand.orange' }}
                    fontWeight="normal"
                    px="0px"
                    py="0px"
                    h="20px"
                    onClick={executeScroll}
                    onMouseEnter={() => {
                      setButtonHover(
                        Object.keys(faqTexts[lang]).map(faqindex => {
                          return faqindex === index;
                        }),
                      );
                    }}
                    onMouseLeave={() => {
                      setButtonHover(
                        Object.keys(faqTexts[lang]).map(() => {
                          return false;
                        }),
                      );
                    }}
                  >
                    {block[index as unknown as keyof typeof block].head}
                  </Button>
                );
              })}
            </VStack>
          )}
        </Stack>
        <Spacer />
        <Footer />
      </VStack>
    </>
  );
});
