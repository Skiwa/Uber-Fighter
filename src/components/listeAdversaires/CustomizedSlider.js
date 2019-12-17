import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

  const marksPoids = [
    {
      value: 50,
      label: '50kg',
    },
    {
      value: 100,
      label: '100kg',
    },
    {
      value: 150,
      label: '150kg',
    },
    {
      value: 199,
      label: '200kg+',
    }
  ];
  const marksAge = [
    {
      value: 18,
      label: '18',
    },
    {
      value: 30,
      label: '30',
    },
    {
      value: 50,
      label: '50+',
    }
  ];
  const marksLocalisation = [
    {
      value: 0,
      label: '0km',
    },
    {
      value: 20,
      label: '20km',
    },
    {
      value: 40,
      label: '40km',
    },
    {
      value: 60,
      label: '60km',
    },
    {
      value: 79,
      label: '80km+',
    }
  ];
  const marksTaille = [
    {
      value: 150,
      label: '150cm',
    },
    {
      value: 170,
      label: '170cm',
    },
    {
      value: 190,
      label: '190cm',
    },
    {
      value: 210,
      label: '210cm',
    },
    {
      value: 229,
      label: '230cm+',
    }
  ];
  

const PrettoSlider = withStyles({
  //Style barre
  root: {
    color: '#f5008b',
    height: 8,
  },
  //Style curseur
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus,&:hover,&$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  //Bulle avec valeur
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  //Barre complétée
  track: {
    height: 8,
    borderRadius: 4,
  },
  //Barre non complétée
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);//Slider avec style par défaut


export default class CustomizedSlider extends React.Component {
  classes = useStyles;

  constructor(props){
    super(props);

    this.state = {valueLocalisation : 20 + " km",valueTaille : 170 + " cm",valuePoids : 60 + " kg",valueAge : 18 +" ans"}
  }

  handleChange = (event, newValue, type) =>{    
    switch(type){
      case 'localisation':this.setState({valueLocalisation : newValue !== 80 ? newValue + " km": newValue + " km et +"});break;
      case 'taille':this.setState({valueTaille : newValue !== 230 ? newValue + " cm": newValue + " cm et +"});break;
      case 'poids':this.setState({valuePoids : newValue !== 200 ? newValue + " kg": newValue + " kg et +" });break;
      case 'age':this.setState({valueAge : newValue !== 50 ? newValue + " ans": newValue + " ans et +" });break;    
      default:
      break;
    }
  }

  render(){
    return (
      <div className={this.classes.root} style={{padding: '0 30px'}}>
  
        <Typography id="range-slider" gutterBottom>¨Proximité : <span className="filterValue">{this.state.valueLocalisation}</span></Typography>
        <PrettoSlider valueLabelDisplay="auto"  min= {0} max={80} step={5} marks={marksLocalisation} aria-label="pretto slider" defaultValue={20}  onChange={(event,newValue)=>this.handleChange(event,newValue,'localisation')}/>
        
        <div className={this.classes.margin} />
       
        <Typography gutterBottom>Taille max : <span className="filterValue">{this.state.valueTaille}</span></Typography>
        <PrettoSlider valueLabelDisplay="auto" min= {150} max={230} step={10} marks={marksTaille} aria-label="pretto slider" defaultValue={170} onChange={(event,newValue)=>this.handleChange(event,newValue,'taille')}/>
        
        <div className={this.classes.margin} />
        
        <Typography gutterBottom>Poids max : <span className="filterValue">{this.state.valuePoids}</span></Typography>
        <PrettoSlider valueLabelDisplay="auto" min= {50} max={200} step={10} marks={marksPoids} aria-label="pretto slider" defaultValue={60} onChange={(event,newValue)=>this.handleChange(event,newValue,'poids')}/>
        
        <div className={this.classes.margin} />
  
        <Typography gutterBottom>Age max : <span className="filterValue">{this.state.valueAge}</span></Typography>
        <PrettoSlider valueLabelDisplay="auto" min= {18} max={50} step={1} marks={marksAge} aria-label="pretto slider" defaultValue={18} onChange={(event,newValue)=>this.handleChange(event,newValue,'age')} />
        
        <div className={this.classes.margin} />
      </div>
    );
  }
  
}