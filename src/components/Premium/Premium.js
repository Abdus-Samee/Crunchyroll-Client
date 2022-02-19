import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import AnimeCard from '../Card'

const Premium = ({token}) => {
    const navigate = useNavigate()
    const [panimes, setPanimes] = useState([])
    const [pmangas, setPmangas] = useState([])

    async function checkPremium(memberid){
        //check if member has a plan
        return fetch('http://localhost:9000/oracle/plan/' + memberid)
        .then(res => res.json())
    }

    useEffect(() => {
        if(token){
            var userType = token.slice(7)
            console.log('Premium component id: ', userType)

            if(userType[0] === 'm'){
                var x = sessionStorage.getItem('token')
                console.log(x.slice(x.indexOf('id')+5).replaceAll('"','').replaceAll('}',''))
                var memberid = x.slice(x.indexOf('id')+5).replaceAll('"','').replaceAll('}','')
                console.log('Premium component memberid: ', memberid)

                const fetchData = async () => {
                    const response = await checkPremium(memberid)
                    console.log('Premium component response: ', response)
                    if(response.reply === -1 || response.reply === 0) navigate('/')
                }

                fetchData()
            }

            //fetch all premium contents
            fetch("http://localhost:9000/oracle/panime")
                .then(response => response.json())
                .then(data => setPanimes(data))
        
            fetch("http://localhost:9000/oracle/pmanga")
                .then(response => response.json())
                .then(data => setPmangas(data))
        }else{
            navigate('/authentication')
        }
    }, [token])
    return(
        <Box sx={{ flexGrow: 1 }}>
            <h1>Premium Animes</h1>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {panimes.map(panime => (
                    <Grid item xs={2} sm={4} md={4} key={panime.PANIMEID}>
                        <Box sx={{ minWidth: 275 }}>
                            <Card variant="outlined">
                                <AnimeCard url="/panime/" animeId={panime.PANIMEID} title={panime.TITLE} synopsis={panime.SYNOPSIS} release={panime['Release Date']} />
                            </Card>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default Premium