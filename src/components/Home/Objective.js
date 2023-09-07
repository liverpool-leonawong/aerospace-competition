import React from 'react';

const Objective = () => {

  return (
    <>
      <div id="objective" className="items-center mt-16">
        <div class="container mx-auto text-center mb-5">
          <div class="flex items-center justify-center px-10"><img src="/assets/title_objective.svg" width="480px" alt="比賽目的"></img></div>
        </div>
        <div class="mt-4 mb-8 columns-2 gap-8 px-10 md:columns-4 md:gap-12 lg:columns-4 lg:gap-16 xl:px-40">
          <div class="items-center space-y-2">
            <img src="/assets/icon_steam.svg" alt="推動STEAM科學" className="rounded-full max-w-full h-auto align-middle border-none" />
            <p className="object-title">推動STEAM教學</p>
          </div>
          <div class="items-center space-y-2">
            <img src="/assets/icon_programming.svg" alt="推行編程教育" className="rounded-full max-w-full h-auto align-middle border-none" />
            <p className="object-title">推行編程教育</p>
          </div>
          <div class="items-center space-y-2">
            <img src="/assets/icon_opportunity.svg" alt="致力為孩子創造機遇" className="rounded-full max-w-full h-auto align-middle border-none" />
            <p className="object-title">為孩子創造機遇</p>
          </div>
          <div class="items-center space-y-2">
            <img src="/assets/icon_cultivate.svg" alt="培養愛國情懷" className="rounded-full max-w-full h-auto align-middle border-none" />
            <p className="object-title">培養愛國情懷</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Objective;