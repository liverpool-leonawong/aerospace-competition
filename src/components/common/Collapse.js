import cx from 'classnames';
import React from 'react';
import { ExpandMoreRounded, ExpandLessRounded } from '@mui/icons-material';
import { useSpring } from "react-spring";

const Collapse = ({ item, index, className }) => {
  const [isOpen, setIsOpen] = React.useState(index === 0 ? true : false);
  let toggleHandler = (e) => {
    //switch state
    setIsOpen(!isOpen);
  };
  //conditional styling
  const styles = {
    //if open is true, change color of title
    collapseTitle: {
      color: isOpen ? "#ff9900" : "#000000"
    }
  };
  const openAnimation = useSpring({
    from: { opacity: "0"},
    to: { opacity: "1"},
    config: { duration: "300" }
  });

  return (
    <div className={cx('faq_box', className)} style={openAnimation}>
      <div className="faq_table" onClick={toggleHandler} style={styles.collapseTitle}>
        <h3 className="faq_question">Q{index + 1}</h3>
        <h3 className="faq_question">{item.title}</h3>
        {isOpen ? (
          <ExpandLessRounded sx={{ fontSize: 32 }} />
        ) : (
          <ExpandMoreRounded sx={{ fontSize: 32 }} />
        )}
      </div>
      {isOpen && (
        <>
          <div className="faq_table">
            <div></div>
            {item.description}
            <div></div>
          </div>
        </>
      )}
      <hr className="mb-3" />
    </div>
  );
};
export default Collapse;