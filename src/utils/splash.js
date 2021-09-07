import { useSplashStyles } from '../styles';

export default function Splash() {
  const classes = useSplashStyles();

  return (
    <div className={classes.root}>
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  );
}