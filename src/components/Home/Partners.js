import { React } from 'react';


const Partners = () => {
  return (
    <div id="partners" className="main">
        <div class="container mx-auto text-center mt-16 mb-8">
          <h1>合作夥伴</h1>
        </div>
      <div className="grid items-center mt-12 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-10 md:grid-cols-3 md:gap-x-4 md:gap-y-12 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-12">
      <img src="/assets/logo_ired.webp" alt="iReds" className="h-auto align-middle border-none justify-self-center" width="120"/>
      <img src="/assets/logo_hkte.svg" alt="HKTE" className="h-auto align-middle border-none justify-self-center" width="160" />
      <img src="/assets/logo_checkpoint.png" alt="Checkpoint" className="h-auto align-middle border-none justify-self-center" width="180"  />
      <img src="/assets/logo_lenovo.jpg" alt="Lenovo" className="h-auto align-middle border-none justify-self-center" width="160" />
      <img src="/assets/logo_union.webp" alt="Union Enterprise" className="h-auto align-middle border-none justify-self-center" width="160" />
      <img src="/assets/logo_bsn.jpg" alt="BSN" className="h-auto align-middle border-none justify-self-center" width="140" />
      <img src="/assets/logo_cyberport.png" alt="Cyberport" className="h-auto align-middle border-none justify-self-center" width="180" />
      </div>
    </div>
  );
}

export default Partners;