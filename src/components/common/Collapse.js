import cx from 'classnames';
import React from 'react';

export default ({ item, index, className }) => {
  const [isOpen, setIsOpen] = React.useState(index === 0 ? true : false);

  return (
    <div className={cx('faq_box', className)}>
      <div className="faq_table" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="faq_question">Q{index + 1}</h3>
        <h3 className="faq_question">{item.title}</h3>
        {isOpen ? (
          <span className="material-icons md-expand-down ml-auto">keyboard_arrow_down</span>
        ) : (
          <span className="material-icons md-expand-up ml-auto">keyboard_arrow_right</span>
        )}
      </div>
      <hr className="mb-3" />

      {isOpen && (
        <>
          <div className="faq_table">
            <div></div>
            {item.description}
            <div></div>
          </div>
        </>
      )}
    </div>
  );
};
