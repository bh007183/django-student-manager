import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom"

export default function ClassCard(props) {
    console.log(props)
    return (
    <Card sx={{minWidth: 275, maxWidth: 300, minHeight:200}}>
      <CardContent className="align-center">
          <h2>{props.class.class_grade}</h2>
      </CardContent>
      <CardActions  className="align-center">
        <Link role="button" to={`/class/${props.class.id}`} value={props.id} size="small">Manage</Link>
      </CardActions>
    </Card>
    )
}
