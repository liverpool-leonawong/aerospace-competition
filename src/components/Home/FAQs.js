import { React, useState } from 'react';
import Accordion from '../Accordion';

function FAQ () {
  return (
    <div className="main">
        <div class="container mx-auto text-center mt-24 mb-8">
          <h1>常見問題</h1>
        </div>
      <div className="accordion">
        <Accordion
          title="Item 1 - Lorem ipsum dolor sit amet"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        />
        <Accordion
          title="Item 2 - Lorem ipsum dolor sit amet"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        />
        <Accordion
          title="Item 3 - Lorem ipsum dolor sit amet"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        />
        <Accordion
          title="Item 4 - Lorem ipsum dolor sit amet"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        />
      </div>
    </div>
  );
}

export default FAQ;