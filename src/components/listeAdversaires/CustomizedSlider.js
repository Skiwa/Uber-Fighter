import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

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

const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

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
      value: 200,
      label: '200kg',
    },
  ];
  const marksAge = [
    {
      value: 18,
      label: '18ans+',
    },
    {
      value: 30,
      label: '30ans+',
    },
    {
      value: 50,
      label: '50ans+',
    },
    {
      value: 70,
      label: '70ans+',
    },
    {
      value: 90,
      label: '90ans+',
    },
  
  ];

  const marksLocalisation = [
    {
      value: 0,
      label: '0km+',
    },
    {
      value: 20,
      label: '20km+',
    },
    {
      value: 40,
      label: '40km+',
    },
    {
      value: 60,
      label: '60km+',
    },
    {
      value: 80,
      label: '80km+',
    },
  ];
  const marksTaille = [
    {
      value: 150,
      label: '150cm+',
    },
    {
      value: 170,
      label: '170cm+',
    },
    {
      value: 190,
      label: '190cm+',
    },
    {
      value: 210,
      label: '210cm+',
    },
    {
      value: 230,
      label: '230cm+',
    },
  ];
  

const IOSSlider = withStyles({
  root: {
    color: '#3880ff',
    height: 2,
    padding: '15px 0',
  },
  thumb: {
    height: 28,
    width: 28,
    backgroundColor: '#fff',
    boxShadow: iOSBoxShadow,
    marginTop: -14,
    marginLeft: -14,
    '&:focus,&:hover,&$active': {
      boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 11px)',
    top: -22,
    '& *': {
      background: 'transparent',
      color: '#000',
    },
  },
  track: {
    height: 2,
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: '#bfbfbf',
  },
  mark: {
    backgroundColor: '#bfbfbf',
    height: 8,
    width: 1,
    marginTop: -3,
  },
  markActive: {
    opacity: 1,
    backgroundColor: 'currentColor',
  },
})(Slider);

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

const AirbnbSlider = withStyles({
  root: {
    color: '#3a8589',
    height: 3,
    padding: '13px 0',
  },
  thumb: {
    height: 27,
    width: 27,
    backgroundColor: '#fff',
    border: '1px solid currentColor',
    marginTop: -12,
    marginLeft: -13,
    boxShadow: '#ebebeb 0px 2px 2px',
    '&:focus,&:hover,&$active': {
      boxShadow: '#ccc 0px 2px 3px 1px',
    },
    '& .bar': {
      // display: inline-block !important;
      height: 9,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 3,
  },
  rail: {
    color: '#d8d8d8',
    opacity: 1,
    height: 3,
  },
})(Slider);

function AirbnbThumbComponent(props) {
  return (
    <span {...props}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </span>
  );
}
function valuetext(value) {
  return `${value}Odsfksdfks`;
}
function valueLabelFormat(value) {
  return marks.findIndex(mark => mark.value === value) + 1;
}
export default function CustomizedSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Typography gutterBottom>Localisation à proximité</Typography>
      <PrettoSlider valueLabelDisplay="auto"  min= {0} max={80} step={5} marks={marksLocalisation} aria-label="pretto slider" defaultValue={20} />
      <div className={classes.margin} />
      <Typography gutterBottom>Taille en cm</Typography>
      <PrettoSlider valueLabelDisplay="auto" min= {150} max={230} step={1} marks={marksTaille} aria-label="pretto slider" defaultValue={170} />
      <div className={classes.margin} />
      <Typography gutterBottom>Poids</Typography>
      <PrettoSlider valueLabelDisplay="auto" min= {50} max={200} step={10} marks={marks} aria-label="pretto slider" defaultValue={60} />
      <div className={classes.margin} />
      <Typography gutterBottom>Age</Typography>
      <PrettoSlider valueLabelDisplay="auto" min= {18} max={90} step={1} marks={marksAge} aria-label="pretto slider" defaultValue={20} />
      <div className={classes.margin} />
    </div>
  );
}