import React, {memo} from "react";
import Grid from "../../../components/Grid";
import Skeleton from "../../../components/Skeleton";
import Card from "./Card";

function Board({data}){
    const {cases, todayDeaths, recovered, deaths, todayCases} = data
    
    const getValue = (value) => value ? value : <Skeleton variant='text' width={182} height={60}></Skeleton>

    return(
        <>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card value={getValue(todayCases)} label="Casos Hoje" color="#000000">
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card value={getValue(todayDeaths)} label="Óbitos Hoje" color="#F7B829">
                    </Card>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card value={getValue(cases)} label="Total de casos" color="#5D78ff">
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card value={getValue(deaths)} label="Total de Óbitos" color="#E95078">
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card value={getValue(recovered)} label="Total de Recuperados" color="#67C887">
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}



export default memo(Board)