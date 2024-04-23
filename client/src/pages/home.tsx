import { useList } from '@pankod/refine-core';

import{ Typography, Box, Stack} from '@pankod/refine-mui'


import{
    PieChart,
    PropertyReferrals,
    TotalRevenue,
    PropertyCard,
    TopAgent
} from 'components';
 

const Home = () => {
    {/*za vracanje propertija koristimo ovu kuku */}
    const {data, isLoading, isError} = useList({
        resource:'properties',
        config: {
            pagination:{
            pageSize: 6
            }
        }


    }) 
    const latestProperties = data?.data ?? [];

    if(isLoading) return <Typography>Loading...</Typography>
    if(isError) return <Typography>Something went wrong!</Typography>


    return(

        <Box>
            <Typography fontSize={25} fontWeight={700} color="#11142D">
                Dashboard
            </Typography>

            <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
                <PieChart
                    title="Properties for Sale"
                    value={20}
                    series={[75,25]}
                    colors={['#275be8', '#c4e8ef']}                
                />
                <PieChart
                    title="Properties for Rent"
                    value={30}
                    series={[60,40]}
                    colors={['#275be8', '#c4e8ef']}                
                />
                <PieChart
                    title="Total customers"
                    value={10}
                    series={[75,25]}
                    colors={['#275be8', '#c4e8ef']}                
                />
                <PieChart
                    title="Properties for Cities"
                    value={50}
                    series={[75,25]}
                    colors={['#275be8', '#c4e8ef']}               
                />
            </Box>
            <Stack mt="25px" width="100%" direction={{xs: 'column', lg: 'row'}} gap={4}>
                <TotalRevenue/>
                <PropertyReferrals/>
            </Stack>

            <Box
                flex = {1}
                borderRadius="15px"
                padding="20px"
                bgcolor="#fcfcfc"
                display="flex"
                flexDirection="column"
                minWidth="100%"
                mt="25px"
                >
                <Typography fontSize="18px" fontWeight={600} color="#11142d"> Latest properties </Typography>
                <Box mt={2.5} sx={{display: 'flex', flexWrap:'wrap', gap:4}}>
                {latestProperties && latestProperties.length > 0 ? (
                latestProperties.map((property) => (
                    <PropertyCard
                    key={property._id}
                    id={property._id}
                    title={property.title}
                    location={property.location}
                    price={property.price}
                    photo={property.photo}
                    />
                ))
                ) : (
                <Typography>No properties available.</Typography>
                )}
                </Box>

            </Box>
        </Box>
        
    )
}

export default Home