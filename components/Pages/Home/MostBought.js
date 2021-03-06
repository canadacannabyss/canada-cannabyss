import React from 'react'
import _ from 'lodash'

import {
  Wrapper,
  Grid,
  Container,
  ProductImage,
  H1
} from '../../../styles/Pages/Home/MostBought'
import MostBoughtList from '../../UI/Lists/Home/MostBoughtList'

const MostBought = (props) => {
  const {mostBought} = props

  console.log('mostBought:', mostBought)

  return (
    <Wrapper>
      {mostBought.fetched &&
          !_.isEmpty(mostBought.data) &&
          !mostBought.loading &&
          !mostBought.error && (
            <>
              <H1>Best Sellers</H1>
              <Grid>
                <MostBoughtList mostBought={mostBought} />
              </Grid>
            </>
          )}
    </Wrapper>
  )
}

export default MostBought
