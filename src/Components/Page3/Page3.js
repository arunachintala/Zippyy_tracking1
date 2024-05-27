import React from 'react';
import Page1 from '../pages/page1';
import Page2 from '../pages/Page2';
import { Card } from 'antd';
function Page3() {
    return (

        <div style={{ position: 'absolute', backgroundColor: '#F5F8F8' }}>
            <div style={{ position: 'absolute', width: '1440px', left: '2px', height: '60px', backgroundColor: 'white' }}></div>
            <div>
                <p style={{ marginTop: '84px', marginLeft: '30px', fontFamily: 'Poppins', fontWeight: 600, fontSize: '32px', lineHeight: '48px' }}>Zippyy Tracking</p>
            </div>

            <Card style={{ marginLeft: '16px', marginRight: '16px', marginBottom: '16px', marginTop: '16px' }}>
                <div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div>
                            <div style={{ marginLeft: '16px', width: 'auto', height: 'auto', }}><p style={{ fontFamily: 'Poppins', fontWeight: '600', fontSize: '16px', lineHeight: '24px', color: '#121114' }}>Tracking Status</p>
                                <p style={{ fontFamily: 'Poppins', color: '#5F5A6B', fontWeight: '400', fontSize: '12px', lineHeight: '18px' }}>Quickly check your tracking status below or click on details see more info.</p></div>
                            <Page1 />
                        </div>
                        <div>
                            <Page2 />
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default Page3;

