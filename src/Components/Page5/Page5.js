// import React from 'react';
// import Status from '../Status/Status'
// import Page1 from '../pages/page1';
// import packing from '../../assets/Packing.png'
// import { Card } from 'antd';
// import AddressBox from '../AddressBox/AddressBox'

// function Page3() {
//     return (

//         <div style={{ position: 'absolute', backgroundColor: '#F5F8F8' }}>
//             <div>
//                 <p style={{ marginTop: '84px', marginLeft: '30px', fontFamily: 'Poppins', fontWeight: 600, fontSize: '32px', lineHeight: '48px' }}>Zippyy Tracking</p>
//             </div>

//             <Card style={{ marginLeft: '16px', marginRight: '16px', marginBottom: '16px', marginTop: '16px' }}>
//                 <div>

//                     <div style={{ display: 'flex', flexDirection: 'row' }}>
//                         <div>
//                             <Status />
//                             <Page1 />
//                         </div>
//                         <div>
//                             <Card stylye={{ width: '693px', paddingLeft: '20px', marginLeft: '59px' }}>
//                                 <div style={{ flex: 'display', position: 'absolut', margintop: '357px', textAlign: 'center' }}>
//                                     <img src={packing} alt="nologo"></img>
//                                     <p>Sorry! Invalid Order ID</p>
//                                 </div>
//                             </Card>
//                             <AddressBox />
//                         </div>
//                     </div>
//                 </div>
//             </Card>
//         </div>
//     );
// }

// export default Page3;
// import React from 'react';
// import Status from '../Status/Status';
// import Page1 from '../pages/page1';
// import packing from '../../assets/Packing.png';
// import { Card } from 'antd';
// import AddressBox from '../AddressBox/AddressBox';

// function Page3() {
//     return (
//         <div style={{ position: 'relative', backgroundColor: '#F5F8F8', minHeight: '100vh' }}>
//             <div>
//                 <p style={{ marginTop: '84px', marginLeft: '30px', fontFamily: 'Poppins', fontWeight: 600, fontSize: '32px', lineHeight: '48px' }}>Zippyy Tracking</p>
//             </div>

//             <Card style={{ marginLeft: '16px', marginRight: '16px', marginBottom: '16px', marginTop: '16px' }}>
//                 <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
//                     <div style={{ flex: 1 }}>
//                         <Status />
//                         <Page1 />
//                     </div>
//                     <div style={{ flex: 1, marginLeft: '59px' }}>
//                         <Card style={{ width: '100%', padding: '20px', textAlign: 'center' }}>
//                             <div style={{ position: 'relative', marginTop: '357px' }}>
//                                 <img src={packing} alt="nologo" />
//                                 <p>Sorry! Invalid Order ID</p>
//                             </div>
//                         </Card>
//                         <AddressBox />
//                     </div>
//                 </div>
//             </Card>
//         </div>
//     );
// }

// export default Page3;

import React from 'react';
import Status from '../Status/Status';
import Page1 from '../pages/page1';
import packing from '../../assets/Packing.png';
import { Card } from 'antd';
import AddressBox from '../AddressBox/AddressBox';

function Page5() {
    return (
        <div style={{ position: 'absolute', backgroundColor: '#F5F8F8' }}>
            <div style={{ position: 'absolute', width: '1440px', left: '2px', height: '60px', backgroundColor: 'white' }}></div>
            <div>
                <p style={{ marginTop: '84px', marginLeft: '30px', fontFamily: 'Poppins', fontWeight: 600, fontSize: '32px', lineHeight: '48px' }}>Zippyy Tracking</p>
            </div>

            <Card style={{ marginLeft: '16px', marginRight: '16px', marginBottom: '16px', marginTop: '16px', width: '1408px', height: '1045px' }}>
                <div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div>
                            <Status />
                            <Page1 />
                        </div>
                        <div>
                            <Card style={{ width: '693px', paddingLeft: '20px', marginLeft: '59px', height: '736px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '120px', textAlign: 'center' }}>
                                    <img src={packing} alt="nologo" />

                                    <p>Sorry! Invalid Order ID</p>
                                </div>
                            </Card>
                            <AddressBox />
                        </div>
                    </div>
                    <div style={{ position: 'absolute', height: '18px', top: '990px', left: '1260px' }}>Powered by Zippyy</div>
                </div>
            </Card>
        </div>
    );
}

export default Page5;
