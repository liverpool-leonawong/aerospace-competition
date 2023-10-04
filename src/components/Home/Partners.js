import { React } from 'react';


const Partners = () => {
  return (
    <div id="partners" className="main">
      <div class="container mx-auto text-center mb-5">
        <div class="flex items-center justify-center mt-16 mb-12 px-10"><img src="/assets/title_partners.svg" width="480px" alt="合作夥伴"></img></div>
      </div>
      <div class="container mx-auto text-left font-semibold px-10">
        <div className="grid items-center mt-8 px-30 grid-cols-1 gap-x-4 gap-y-10">
          主辦機構
        </div>
      </div>
      <div className="grid items-center mt-8 px-30 grid-cols-2 gap-x-4 gap-y-10 px-8 md:grid-cols-3 md:gap-x-4 md:gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12 xl:px-40">
        <img src="/assets/logo_dxne_h_rgb.svg" alt="digixedu" className="h-auto align-middle border-none justify-self-center" width="220" />
        <img src="/assets/logo_adda.svg" alt="Adda" className="h-auto align-middle border-none justify-self-center" width="120" />
        <img src="/assets/logo_glac.jpg" alt="GLAC" className="h-auto align-middle border-none justify-self-center" width="180" />
        <img src="/assets/logo_nam-yue-research.png" alt="南粵研究院" className="h-auto align-middle border-none justify-self-center" width="120" />
      </div>
      <div class="container mx-auto text-left font-semibold px-10">
        <div className="grid items-center mt-8 px-30 grid-cols-2 gap-x-4 gap-y-10">
          <div>協辦機構</div>
          <div className="hidden lg:block">合作</div>
        </div>
      </div>
      <div className="grid items-center mt-12 px-30 grid-cols-2 gap-x-4 gap-y-10 px-8 md:grid-cols-2 md:gap-x-4 md:gap-y-12 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-12 xl:px-40">
        <img src="/assets/logo_hkte.svg" alt="HKTE" className="h-auto align-middle border-none justify-self-center" width="160" />
        <img src="/assets/logo_cyberport.png" alt="Cyberport" className="h-auto align-middle border-none justify-self-center" width="180" />
        <img src="/assets/logo_ired.svg" alt="iRed" className="h-auto align-middle border-none justify-self-center" width="240" />
      </div>
    </div>
  );
}

export default Partners;