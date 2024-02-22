


import React from "react";
import "./style.css";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';

const FAQ = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={"faq  " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question">
        {faq.question}
        <span className="faq-toggle-icon">{faq.open ? <RemoveRoundedIcon className="subbutton" /> : <AddRoundedIcon className="addbutton" />}</span>
      </div>
      <div className="faq-answer">{faq.answer}</div>
    </div>
  );
};

export default FAQ;

