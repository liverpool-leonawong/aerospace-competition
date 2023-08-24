import { React, useState } from "react";
import { ExpandMoreRounded } from '@mui/icons-material';
import { useSpring, animated } from "react-spring";

function Accordion(props) {
  const [open, setOpen] = useState(false);
  //toggle accordion function
  let toggleHandler = (e) => {
    //switch state
    setOpen(!open);
  };

  //conditional styling
  const styles = {
    //if open is true, change color of title
    accordionTitle: {
      color: open ? "#e79200" : "#000000"
    }
  };
  //open animation with react spring

  const openAnimation = useSpring({
    from: { opacity: "0", maxHeight: "25px" },
    to: { opacity: "1", maxHeight: open ? "200px" : "25px" },
    config: { duration: "300" }
  });

  //rotate animation
  const iconAnimation = useSpring({
    from: {
      transform: "rotate(0deg)",
      color: "#000000"
    },
    to: {
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
      color: open ? "#e79200" : "#000000"
    },
    config: { duration: "120" }
  });

  return (
    <animated.div className="accordion_item" style={openAnimation}>
      <div className="accordion_header" onClick={toggleHandler}>
        <h4 style={styles.accordionTitle}>{props.title}</h4>
        <animated.i style={iconAnimation}>
          <ExpandMoreRounded />
        </animated.i>
      </div>
      <p className="accordion_content">{props.text}</p>
    </animated.div>
  );
}

export default Accordion;
