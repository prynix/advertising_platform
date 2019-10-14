import React, { Component } from 'react';
//import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css';
import './styles.css';
import { Grid, Card, Segment } from 'semantic-ui-react';
import { Logo } from '../../components/Logo';
import { BidsCarousel } from '../../components/BidsCarousel';
import { WorkTogetherButton } from '../../components/WorkTogetherButton';
import { AskForRevShareButton } from '../../components/AskForRevShareButton';
import { AddTrafficSourceButton} from '../../components/AddTrafficSourceButton';
import { PromoteInChatButton } from '../../components/PromoteInChatButton';
import { StopCampaignButton } from '../../components/StopCampaignButton';
import { MoneyEarnedCard } from '../../components/MoneyEarnedCard';
import { CampaignClicksCard } from '../../components/CampaignClicksCard';
import { ImpressionsNumberCard } from '../../components/ImpressionsNumberCard';

import { PublisherNameButton } from '../../components/PublisherNameButton';
import { BalanceButton } from '../../components/BalanceButton';
import { MyAccountButton } from '../../components/MyAccountButton';
import { UserIDButton } from '../../components/UserIDButton';
import { AdvertiserButton } from '../../components/AdvertiserButton';
import { TotalClicksCard } from '../../components/TotalClicksCard';
import { MoneyEarnedButton } from '../../components/MoneyEarnedButton';
import { TotalImpressionsNumberCard } from '../../components/TotalImpressionsNumberCard';
import { SocialAccountsCard } from '../../components/SocialAccountsCard';
import { NewOffersCard } from '../../components/NewOffersCard';
import { WithdrawFundsCard } from '../../components/WithdrawFundsCard';
import { SupportCard } from '../../components/SupportCard'; 

export class PublisherDashboard extends Component {
    render() {
        return (
            <Grid columns={6}> 
                <Grid.Row stretched>
                    <Grid.Column textAlign='center'>
                        <Logo />
                        <PublisherNameButton />
                        <BalanceButton />
                    </Grid.Column>
                    <Grid.Column textAlign='center'>
                        <WorkTogetherButton/>
                        <MyAccountButton />
                        <UserIDButton  />
                    </Grid.Column>
                    <Grid.Column textAlign='center' >
                        <AdvertiserButton /> 
                        <TotalClicksCard />
                    </Grid.Column>
                    <Grid.Column textAlign='center'>
                        <MoneyEarnedButton />
                        <TotalImpressionsNumberCard />
                    </Grid.Column>
                    <Grid.Column textAlign='center'>
                        <SocialAccountsCard  />
                        <NewOffersCard  />
                    </Grid.Column>
                    <Grid.Column textAlign='center'>
                        <WithdrawFundsCard />
                        <SupportCard  />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <BidsCarousel />
                </Grid.Row>

                <Grid.Row  columns={4}>
                    
                    <Grid.Column >
                    
                        <AskForRevShareButton />
                         
                    </Grid.Column>
                    <Grid.Column >
                        <AddTrafficSourceButton />
                    </Grid.Column>
                    <Grid.Column >
                        <PromoteInChatButton />
                    </Grid.Column>
                    <Grid.Column >
                        <StopCampaignButton />
                    </Grid.Column>
                    

                    
                        
                </Grid.Row>
                <Grid.Row columns={3}>
                <Grid.Column >
                        <MoneyEarnedCard />
                    </Grid.Column>
                <Grid.Column >
                    <CampaignClicksCard />
                </Grid.Column>
                <Grid.Column >
                    < ImpressionsNumberCard />
                    </Grid.Column>
                    </Grid.Row>
            </Grid>
        )
    }
}

