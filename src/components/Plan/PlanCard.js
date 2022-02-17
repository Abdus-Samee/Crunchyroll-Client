import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const PlanCard = ({planid, planrange, plancost}) => {
    const navigate = useNavigate()

    useEffect(() => {
        console.log(planid, planrange, plancost)
    }, [])

    async function buyPlan(credentials) {
        return fetch("http://localhost:9000/oracle/plan", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
        })
          .then(data => data.json())
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('Range ', planrange)
            
        const response = await buyPlan({
            planid
        })
        console.log(response.success)

        // // //alert user if response.success is false
        if(response.success){
            navigate('/')
        }
    }

    return(
        <Box 
            className="cen"
            sx={{ marginTop: 8, }}
            onSubmit={handleSubmit}
            component="form"
        >
            <h1>{planrange}</h1>
            <br/>
            <p>Cost: {plancost} credits</p>
            <br /><br />
            <Button
                type="submit"
                variant="contained" 
                sx={{ mt: 3, mb: 2 }}
            >
                Avail Offer!
            </Button>
        </Box>
    )
}

export default PlanCard