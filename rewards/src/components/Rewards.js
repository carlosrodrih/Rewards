
import React from 'react'
import { Button, Form, Grid, Icon, Popup, Image, Message, Segment, Input } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import logo from './logo.png'

const Rewards = ({ setSubmission, setTipAmount }) => (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
            <Image src={logo} />
            <Form size='large'>
                <Segment>
                    <Segment textAlign='left'>From:</Segment>
                    <Segment textAlign='left'>To:</Segment>

                    <div className="ui three buttons">
                        <Popup trigger={<Button animated='vertical'
                            basic color="black"
                        >
                            <Button.Content hidden>Tip!</Button.Content>
                            <Button.Content visible>
                                <Icon name='ethereum' />
                            </Button.Content></Button>} on='click'>
                            <Input type='text' ref={refInput} placeholder='Ether amount...' onChange={()=>{
                                setTipAmount(refInput)
                            }} >
                                <input />
                                <Button type='submit' onClick={() => {

                                }}>Tip!</Button>
                            </Input>
                        </Popup>
                        <Button
                            animated='vertical'
                            basic color="blue"
                            onClick={() => {

                            }}>
                            <Button.Content hidden>Say thanks!</Button.Content>
                            <Button.Content visible >
                                <Icon name='thumbs up' />
                            </Button.Content>
                        </Button>
                        <Popup wide='very' trigger={<Button animated='vertical'
                            basic color="green"
                        >
                            <Button.Content hidden>Reward!</Button.Content>
                            <Button.Content visible>
                                <Icon name='trophy' />
                            </Button.Content></Button>} on='click'>
                            <Grid divided columns='equal'>
                                <Grid.Column>
                                    <Popup
                                        trigger={<Button color='yellow' content='Gold' fluid />}
                                        content='This is the best reward a reviewer can receive. It is golden as the Golden Snitch.'
                                        position='top center'
                                        size='tiny'
                                        inverted
                                    />
                                </Grid.Column>
                                <Grid.Column>
                                    <Popup
                                        trigger={<Button color='grey' content='Silver' fluid />}
                                        content='This award wont go surfing but it is also really cool.'
                                        position='top center'
                                        size='tiny'
                                        inverted
                                    />
                                </Grid.Column>
                                <Grid.Column>
                                    <Popup
                                        trigger={<Button color='brown' content='Bronce' fluid />}
                                        content='This award does not shine like gold or silver but still makes people happy.'
                                        position='top center'
                                        size='tiny'
                                        inverted
                                    />
                                </Grid.Column>
                                <Grid.Column>
                                    <Popup
                                        trigger={<Button color='purple' content='Fancy' fluid />}
                                        content='Stay in Wonderland, and I show you how deep the rabbit hole goes.'
                                        position='top center'
                                        size='tiny'
                                        inverted
                                    />
                                </Grid.Column>
                            </Grid>
                        </Popup>
                    </div>
                </Segment>
            </Form>
            <Message>
                New to us? <a href='https://github.com/carlosrodrih/Rewards'><Icon name='github' color='black'></Icon></a>
            </Message>
        </Grid.Column>
    </Grid>
)

export default Rewards