import { useQuery } from '@apollo/react-hooks';
import React, { FC, useState, useEffect } from 'react';
import { Box, Flex } from 'reflexbox';

import Container from 'components/Container';
import Title, { MainTitle } from 'components/Title';
import BackgroundFood from 'components/BackgroundFood';
import Loading from 'components/Loading';
import RadiusFlex from 'components/RadiusFlex';
import Recipes from 'components/Recipes';
import RecipesFooter from 'components/RecipesFooter/RecipesFooter';

import { LIST_PLANS_QUERY } from './queries/listPlans';
import parseValues from 'providers/parseValues';

const Home: FC = () => {
  const { error, loading: isLoading, data: queryResponse } = useQuery(
    LIST_PLANS_QUERY,
  );

  const parsedData = parseValues(queryResponse);

  const [filterPeople, setFilterPeople] = useState(2);
  const [filterWeek, setFilterWeek] = useState(1);

  const [finalPrice, setFinalPrice] = useState(0);

  useEffect(() => {
    if (!parsedData) return;

    const dataMatch = parsedData.find((data: any) => {
      const peopleMatch = data.numberOfPeople === filterPeople;
      const weekMatch = data.weeklyRecipes === filterWeek;

      return peopleMatch && weekMatch;
    });

    setFinalPrice(dataMatch.price);
  }, [filterPeople, filterWeek, parsedData]);

  if (isLoading) {
    return <Loading full={true} />;
  }

  //  TODO: create error handler cmp
  if (error) {
    return (
      <Container
        alignItems="center"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Title>
          <b>Ooops, parece que tivemos um erro</b> ☹️
          <br /> Por favor tente novamente mais tarde
        </Title>
      </Container>
    );
  }

  return (
    <Container
      alignItems="center"
      height="100%"
      justifyContent="center"
      py="30px"
    >
      <Flex flexDirection="column" height={['none', '451px']} width="100%">
        <Box mb={['20px', '40px']}>
          <MainTitle>
            Configure o plano que <br />
            <b>melhor encaixa na sua rotina.</b>
          </MainTitle>
        </Box>

        <Flex alignItems="center" flexDirection={['column', 'row']}>
          <BackgroundFood maxWidth="462px" />

          <RadiusFlex
            alignItems="center"
            bg="#fff"
            borderRadius={['0 0 10px 10px', '0 10px 10px 0']}
            flexDirection="column"
            height="100%"
            maxWidth="740px"
            p="17px"
            justifyContent="center"
            width="100%"
          >
            <Title>
              <b>
                Gostou e ainda não é assinante? <br /> Escolha já um plano
                semanal!
              </b>
            </Title>

            <Recipes
              filterPeople={setFilterPeople}
              filterWeek={setFilterWeek}
              selected={{
                people: filterPeople,
                week: filterWeek,
              }}
            />

            <Box mb={['27px', '32px']} maxWidth="638px" width="100%">
              <RecipesFooter price={finalPrice} />
            </Box>
          </RadiusFlex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Home;
