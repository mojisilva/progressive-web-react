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
                    <Card value={getValue(todayCases).toLocaleString('pt-BR')} label="Casos Hoje" color="#000000">
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card value={getValue(todayDeaths).toLocaleString('pt-BR')} label="Óbitos Hoje" color="#F7B829">
                    </Card>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card value={getValue(cases).toLocaleString('pt-BR')} label="Total de casos" color="#5D78ff">
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card value={getValue(deaths).toLocaleString('pt-BR')} label="Total de Óbitos" color="#E95078">
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card value={getValue(recovered).toLocaleString('pt-BR')} label="Total de Recuperados" color="#67C887">
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}



export default memo(Board)