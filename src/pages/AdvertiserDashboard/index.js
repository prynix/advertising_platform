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

export class AdvertiserDashboard extends Component {
    render() {
        return (
            <Grid columns='equal'>
                <Grid.Row>
                    <Grid.Column textAlign='center'> <Logo/> </Grid.Column>
                    <Grid.Column textAlign='center'> <WorkTogetherButton/> </Grid.Column>
                    <Grid.Column textAlign='center'><Card link header='Advertiser' meta='Promoted: 78' /></Grid.Column>
                    <Grid.Column textAlign='center'><Card link header='Money Earned:' meta='$23,450' /></Grid.Column>
                    <Grid.Column textAlign='center'><Card link header='Social Accounts' /></Grid.Column>
                    <Grid.Column textAlign='center'><Card link header='Withdraw Funds' /></Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign='center'><Card link header='Publisher Name' /></Grid.Column>
                    <Grid.Column textAlign='center'><Card link header='My Account' /></Grid.Column>
                    <Grid.Column textAlign='center'><Card link header='Advertiser' meta='Promoted: 78' /></Grid.Column>
                    <Grid.Column textAlign='center'><Card link header='Money Earned:' meta='$23,450' /></Grid.Column>
                    <Grid.Column textAlign='center'><Card link header='Social Accounts' /></Grid.Column>
                    <Grid.Column textAlign='center'><Card link header='Withdraw Funds' /></Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign='center'><Card link header='Balance' meta='$5,567' /></Grid.Column>
                    <Grid.Column><Card link header='User ID:' meta='356674' /></Grid.Column>
                    <Grid.Column>Computer B Second</Grid.Column>
                    <Grid.Column textAlign='center'><Card link header='Publisher Name' /></Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <BidsCarousel />
                </Grid.Row>
                <Grid.Row>
                    <Segment>
                        <AskForRevShareButton />
                        <AddTrafficSourceButton />
                        <PromoteInChatButton />
                        <StopCampaignButton />
                    </Segment>
                        <MoneyEarnedCard />
                </Grid.Row>
                <Grid.Row>
                    <CampaignClicksCard />
                    <ImpressionsNumberCard />
                </Grid.Row>
            </Grid>
        )
    }
}

