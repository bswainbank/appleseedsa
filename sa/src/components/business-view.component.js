import React, { Component } from 'react';
import axios from 'axios';
import './css/business-view.component.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons';

const Business = props => (
    <div className = 'container-view'> 
    <div className = "container-md">
        <div>
            {props.business.info.images.top ? (
                        <div className='row mt-5'>
                            <div className='col-md-6 m-auto'>
                                <img className="img-responsive" src={'http://localhost:5000/image/' + props.business.info.images.top} alt='' />
                            </div>
                        </div>
            )  : null } 
            <div className = 'h1BusinessName'><h1>{props.business.info.name}</h1></div>
        </div>
        <div><p className='lead businessLead'>{props.business.info.topMessage}</p></div>
        
        <div className = 'row'>
            <div className='col-md-6'>
                <h5>Contact us:</h5>
                {props.business.info.phone ? (
                      <div>Phone: {props.business.info.phone}</div>
                 ) : null}

                {props.business.info.email ? (
                    <div>Email: {props.business.info.email}</div>
                ) : null}
                <br></br>    
                <div>
                    <address>
                        {props.business.info.address.addr1}<br></br>
                        {props.business.info.address.addr2}  
                        {props.business.info.address.addr2 ? (<br></br> ) : null}
                        {props.business.info.address.city}
                        {props.business.info.address.state}
                        {props.business.info.address.zip}
                    </address>
                </div>
            </div>   

            <div className='col-md-6'>
                <h5>Open Hours:</h5>
                {props.business.info.hours.text ? (
                    <div>{props.business.info.hours.text}</div>
                ) : null}
            </div>   

        </div>





        <div className = 'socialMedia'>
          
            <h5>Follow us:</h5>
            {props.business.info.social.facebook ? (                
                <div>                  
                    <a className = 'btnFB' href={props.business.info.social.facebook} target="_blank"> <FontAwesomeIcon icon={faFacebookF} /></a>        
                </div>
             ) : null}   


            {props.business.info.social.twitter ? (                
                <div>                  
                    <a className = 'btnTwitter' href={props.business.info.social.twitter} target="_blank"> <FontAwesomeIcon icon={faTwitter} /></a>        
                </div>
            ) : null}  


            {props.business.info.social.instagram ? (                
                <div>                  
                    <a className = 'btnInst' href={props.business.info.social.twitter} target="_blank"> <FontAwesomeIcon icon={faInstagram} /></a>        
                </div>
            ) : null}  
        </div>

        <div className = 'onlineSales'>{props.business.info.onlineSales.text}
            {props.business.info.onlineSales.url ? (
                <div className = 'salesURL'>{props.business.info.onlineSales.url}</div>
            ) : null }
        </div>


        <div className = 'deliveryText'>{props.business.info.delivery.text}</div>
        {props.business.info.delivery.url ? (
            <div><a href={props.business.info.delivery.url}>Delivery</a></div>
        ) : null }

        <div className = 'divLinks'>{props.business.info.giftCard.text}
        {props.business.info.giftCard.url ? (
            <div><a href={props.business.info.giftCard.url}>Gift Cards</a></div>
        ) : null }</div>


        <div className = 'divLinks'>
            {props.business.info.links.link1Url ? (
                <div><a href={props.business.info.links.link1Url}>{props.business.info.links.link1Label}</a></div>
            ) : null }
        </div>
                
        <div className = 'divLinks'>
            {props.business.info.links.link2Url ? (
                <div><a href={props.business.info.links.link2Url}>{props.business.info.links.link2Label}</a></div>
            ) : null }
        </div>


        <div className = 'divLinks'>
            {props.business.info.links.link3Url ? (
                <div><a href={props.business.info.links.link3Url}>{props.business.info.links.link3Label}</a></div>
            ) : null }
        </div>

        <div><p>{props.business.info.bottomMessage}</p></div>
    </div>
    </div>  
)

export default class BusinessView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            business : {
                username:'',
                password: '',
                pageId:'',
                info: {
                    name: '',
                    images: {
                        top: '',
                    },
                    address: {
                        addr1: '',
                        addr2: '',
                        city: '',
                        state: '',
                        zip: '',
                    },
                    phone: '',
                    email: '',
                    topMessage: '',
                    bottomMessage: '',
                    hours: {
                        text: '',
                    },
                    social: {
                        facebook: '',
                        twitter: '',
                        instagram: '',
                    },
                    giftCard: {
                        text: '',
                        url: '',
                    },
                    onlineSales: {
                        text: '',
                        url: '',
                    },
                    delivery: {
                        text: '',
                        url: '',
                    },
                    links: {
                        link1Label: '',
                        link1Url: '',
                        link2Label: '',
                        link2Url: '',
                        link3Label: '',
                        link3Url: '',
                    },
                }
            }
        };

    }

    componentDidMount() {
        
        axios.get('http://localhost:5000/business/' + this.props.match.params.pageId)
            .then(response => {
               this.setState({ business: response.data});
               
            })
            .catch((error) => {
                console.log(error);
            })

           
    }

    showBusiness() {
        return <Business business={this.state.business}/>;
    }

    render() {
        return (
            <div>
                <div>
                    {  this.showBusiness() }
                </div>
            </div>

        ) 
    }

}