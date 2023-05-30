import protectedContext from '@/context/protectedContext'
import FeedsView from '@/layouts/FeedsView'
import ProtectedRouteWrapper from '@/layouts/ProtectedRouteWrapper'
import Sidebar from '@/layouts/Sidebar'
import { Grid, Heading } from '@chakra-ui/react'
import React, { useContext } from 'react'

const Test =()=>{
  const me:any = useContext(protectedContext)
  return( 
    <>{me.data.email}</>
  )
}

const index = () => {
  return (
  <ProtectedRouteWrapper>
   <Grid gap={10} templateColumns={"250px 1fr"}>
    <Sidebar />
    <FeedsView />
   </Grid>
  </ProtectedRouteWrapper>
  )
}

export default index