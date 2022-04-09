import React from 'react';
import Icon1 from '../../images/doctors.svg';
import Icon2 from '../../images/doctors.svg';
import Icon3 from '../../images/doctors.svg';
import { ServicesContainer, ServicesH1,ServicesWrapper,ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';
const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP> We help reduce your fess</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Virtual meeting</ServicesH2>
                    <ServicesP> We can access our platform online</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Benefite</ServicesH2>
                    <ServicesP> We help reduce your fess</ServicesP>
                </ServicesCard>        
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
