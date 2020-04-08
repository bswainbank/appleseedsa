import React, { Component } from 'react';
import axios from 'axios';

const Business = props => (
       
    <>
        <div>{props.business.info.name}</div>
  
        <div>{props.business.info.topMessage}</div>
        
        <div>{props.business.info.phone}</div>
        <div>{props.business.info.email}</div>

        <div>{props.business.info.hours.text}</div>

        <div>{props.business.info.address.addr1}</div>
        <div>{props.business.info.address.addr2}</div>
        <div>{props.business.info.address.city}</div>
        <div>{props.business.info.address.state}</div>
        <div>{props.business.info.address.zip}</div>

        <div>{props.business.info.social.facebook}</div>
        <div>{props.business.info.social.twitter}</div>
        <div>{props.business.info.social.instagram}</div>

        <div>{props.business.info.onlineSales.text}</div>
        <div>{props.business.info.onlineSales.url}</div>

        <div>{props.business.info.delivery.text}</div>
        <div>{props.business.info.delivery.url}</div>

        <div>{props.business.info.giftCard.text}</div>
        <div>{props.business.info.giftCard.url}</div>

        <div>{props.business.info.links.link1Label}</div>
        <div>{props.business.info.links.link1Url}</div>

        <div>{props.business.info.links.link2Label}</div>
        <div>{props.business.info.links.link2Url}</div>

        <div>{props.business.info.links.link3Label}</div>
        <div>{props.business.info.links.link3Url}</div>

        <div>{props.business.info.bottomMessage}</div>
    </>
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
                        banner: '',
                        top: '',
                        bottom: '',
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
                <p>View Business { this.props.match.params.pageId }</p>
                <div>
                    {  this.showBusiness() }
                </div>
            </div>

        ) 
    }

}