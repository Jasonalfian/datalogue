import React from 'react'
import Card4 from '../Globals/Card4'

// import zero from '../../images/logo70.png'
// import one from '../../images/Kerjasama/HMJ/FITB - HMME.png'
// import two from '../../images/Kerjasama/HMJ/SAPPK - HMP PL ITB.png'
// import three from '../../images/Kerjasama/HMJ/FTMD - MTM ITB.png'
// import four from '../../images/Kerjasama/HMJ/FSRD - terikat ITB.jpg'
// import five from '../../images/Kerjasama/HMJ/SF - HMF.png'
// import six from '../../images/Kerjasama/HMJ/FTI - HMFT ITB.png'
// import seven from '../../images/Kerjasama/HMJ/FTSL - HMS ITB.png'
// import eight from '../../images/Kerjasama/HMJ/FTTM - HIMATG _TERRA_ ITB.jpg'
// import nine from '../../images/Kerjasama/HMJ/SITHR - HMPP _VADRA_ ITB.png'
// import ten from '../../images/Kerjasama/UKM/AKSAN LOGO FIX - Rafael Stevenson.png'
// import eleven from '../../images/Kerjasama/UKM/Logo Vector MBWG - Black - Ramadhan Sulaiman.png'
// import twelve from '../../images/Kerjasama/UKM/UKM Pendidikan ITB Kampus Cirebon.png'
// import thirteen from '../../images/Kerjasama/UKM/logopstk - Agung Bayu Aji.png'
// import sixteen from '../../images/Kerjasama/UKM/Radio Kampus ITB.jpg'
// import fifteen from '../../images/Kerjasama/UKM/MUSI ITB - Mahasiswa Bumi Sriwijaya ITB.png'
// import fourteen from '../../images/Kerjasama/UKM/Logo UKJ ITB - Donny Marcius.png'
// import seventeen from '../../images/Kerjasama/UKM/Logo U-Green WITH BEVEL - Afiya N. N. Syarif.png'

export default ({data}) => {

  const {
    allStrapiKolaborasi: {nodes: Kolaborasi},
  } = data

    return( 
    <section className="py-5 fact">
    <div className="container">
      <div className="mb-3">
      <h3 style={{fontSize:'300%'}} className="font-weight-bold"> <span className="oneData">Kolaborasi </span>karya dengan</h3>
    </div>
      <div className="justify-content-start row py-3">
        
           {
              Kolaborasi.map((kolaborasi) => {
              return <Card4 key={kolaborasi.id} {...kolaborasi}/>
            })}
        
        {/* <Card img={zero}/>
        <Card img={one}/>
        <Card img={two}/>
        <Card img={three}/>
        <Card img={four}/>
        <Card img={five}/>
        <Card img={six}/>
        <Card img={seven}/>
        <Card img={eight}/>
        <Card img={nine}/>
        <Card img={ten}/>
        <Card img={eleven}/>
        <Card img={twelve}/>
        <Card img={thirteen}/>
        <Card img={fourteen}/>
        <Card img={fifteen}/>
        <Card img={sixteen}/>
        <Card img={seventeen}/> */}

      </div>
    </div>
  </section>
 )
}

