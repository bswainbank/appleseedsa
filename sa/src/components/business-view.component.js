import React, { Component } from 'react';
import axios from 'axios';

const Business = props => (
       
    <div class = "container-md">
        <div>
            {props.business.info.images.top ? (
                        <div className='row mt-5'>
                            <div className='col-md-6 m-auto'>
                                <img class="img-responsive" src={'http://localhost:5000/image/' + props.business.info.images.top} alt='' />
                            </div>
                        </div>
            )  : null } 
            <div><h1>{props.business.info.name}</h1></div>
        </div>
        <div><p class="lead">{props.business.info.topMessage}</p></div>
        
        {props.business.info.phone ? (
            <div>Phone: {props.business.info.phone}</div>
        ) : null}

        {props.business.info.email ? (
            <div>Email: {props.business.info.email}</div>
        ) : null}

        {props.business.info.hours.text ? (
            <div>{props.business.info.hours.text}</div>
        ) : null}

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

        <div>
            {props.business.info.social.facebook ? (
                <div>Facebook: {props.business.info.social.facebook}</div>
             ) : null}   
            {props.business.info.social.twitter ? (
                <div>Twitter: {props.business.info.social.twitter}</div>
            ) : null}  
            {props.business.info.social.instagram ? (
                <div>Instagram: {props.business.info.social.instagram}</div>
            ) : null}  
        </div>

        <div>{props.business.info.onlineSales.text}</div>
        {props.business.info.social.instagram ? (
            <div>{props.business.info.onlineSales.url}</div>
        ) : null }

        <div>{props.business.info.delivery.text}</div>
        {props.business.info.delivery.url ? (
            <div><a href={props.business.info.delivery.url}>Delivery</a></div>
        ) : null }

        <div>{props.business.info.giftCard.text}</div>
        {props.business.info.giftCard.url ? (
            <div><a href={props.business.info.giftCard.url}>Gift Cards</a></div>
        ) : null }

        <div>{props.business.info.links.link1Label}</div>
        {props.business.info.links.link1Url ? (
            <div><a href={props.business.info.links.link1Url}>{props.business.info.links.link1Url}</a></div>
        ) : null }

        <div>{props.business.info.links.link2Label}</div>
        {props.business.info.links.link2Url ? (
            <div><a href={props.business.info.links.link2Url}>{props.business.info.links.link2Url}</a></div>
        ) : null }

        <div>{props.business.info.links.link3Label}</div>
        {props.business.info.links.link3Url ? (
            <div><a href={props.business.info.links.link3Url}>{props.business.info.links.link3Url}</a></div>
        ) : null }

        <div><p>{props.business.info.bottomMessage}</p></div>
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
               this.setState({ business: response.data})
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