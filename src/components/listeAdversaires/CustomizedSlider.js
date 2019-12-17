import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Input from '@material-ui/core/Input'

const useStyles = makeStyles(theme => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  const popperRef = React.useRef(null);
  React.useEffect(() => {
    if (popperRef.current) {
      popperRef.current.update();
    }
  });

  return (
    <Tooltip
      PopperProps={{
        popperRef,
      }}
      open={open}
      enterTouchDelay={0}
      placement="top"
      title={value}
    >
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};


  const marks = [
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
      label: '200kg',
    },
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
      label: '50',
    },
    {
      value: 70,
      label: '70',
    },
    {
      value: 89,
      label: '90',
    },
  
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
      label: '80km',
    },
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
      label: '230cm',
    },
  ];
  

const PrettoSlider = withStyles({
  root: {
    color: '#f5008b',
    height: 8,
  },
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
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);


export default function CustomizedSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState(30);
  const handleSliderChangeTaille = (event, newValueTaille) => {
    setValue(newValueTaille);
  };
  const handleSliderChangeLocal = (event, newValue) => {
    setValue(newValue);
  };
  const handleInputChange = event => {
    console.log(event.target)
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };
  const handleInputChangeTaille = event => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  return (
    <div className={classes.root}>

  <Typography gutterBottom ><h5><i class="fas fa-map-marker-alt"></i>  Proximité</h5></Typography>
  <Input
            className={classes.input}
            value={value}

            
          />
      <PrettoSlider valueLabelDisplay="auto"  min= {0} max={80} step={5} marks={marksLocalisation} aria-label="pretto slider" defaultValue={20} aria-valuetext onChange={handleSliderChangeLocal} />
      <div className={classes.margin} />
     
      
      <Typography  gutterBottom><h5><i class="fas fa-arrows-alt-v"></i>  Taille max</h5></Typography>
      <Input
            className={classes.input}
            value={value}
            margin="dense"
            onChange={handleInputChangeTaille}
 
          />
      <PrettoSlider valueLabelDisplay="auto" min= {150} max={230} step={1} marks={marksTaille} aria-label="pretto slider" defaultValue={170} onChange={handleSliderChangeTaille} />
        
      <Typography gutterBottom><h5><i className="fas fa-weight-hanging"></i>  Poids max</h5></Typography>
      <PrettoSlider valueLabelDisplay="auto" min= {50} max={200} step={10} marks={marks} aria-label="pretto slider" defaultValue={60} />
      
      
      <div className={classes.margin} />
      <Typography gutterBottom><h5><i class="fas fa-birthday-cake"></i>  Age max</h5></Typography>
      
      <PrettoSlider valueLabelDisplay="auto" min= {18} max={90} step={1} marks={marksAge} aria-label="pretto slider" defaultValue={20} />
      
    </div>
  );
}