import React from 'react'
import "./InfoBox.css"
import {Card , CardContent , Typography} from "@material-ui/core"

function InfoBox({ title , cases , total}) {
    return (
        <Card className="infoBox">
            <CardContent>
                <Typography className="infoBox_title" color="textSecondary">
                    <h2><u>{title}</u></h2>
                </Typography>
                <h3 className="infoBox_cases">{cases} Today</h3>
                <Typography className="infoBox_total" color="textSecondary">
                    {total} Total
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox;
