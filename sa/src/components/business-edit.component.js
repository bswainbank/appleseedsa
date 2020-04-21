import React, { Component } from 'react';
import './css/business-edit.components.css';
import axios from 'axios';


export default class BusinessEdit extends Component {
    constructor(props) {
        super(props);

        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangePageId = this.onChangePageId.bind(this);
        this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
        this.onChangeWebsite = this.onChangeWebsite.bind(this);
        this.onChangeAddr1 = this.onChangeAddr1.bind(this);
        this.onChangeAddr2 = this.onChangeAddr2.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeState = this.onChangeState.bind(this);
        this.onChangeZip = this.onChangeZip.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeTopMessage = this.onChangeTopMessage.bind(this);
        this.onChangeBottomMessage = this.onChangeBottomMessage.bind(this);
        this.onChangeHoursText = this.onChangeHoursText.bind(this);
        this.onChangeFacebook = this.onChangeFacebook.bind(this);
        this.onChangeTwitter = this.onChangeTwitter.bind(this);
        this.onChangeInstagram = this.onChangeInstagram.bind(this);
        this.onChangeGiftText = this.onChangeGiftText.bind(this);
        this.onChangeGiftUrl = this.onChangeGiftUrl.bind(this);
        this.onChangeOnlineSalesText = this.onChangeOnlineSalesText.bind(this);
        this.onChangeOnlineSalesUrl = this.onChangeOnlineSalesUrl.bind(this);
        this.onChangeDeliveryText = this.onChangeDeliveryText.bind(this);
        this.onChangeDeliveryUrl = this.onChangeDeliveryUrl.bind(this);
        this.onChangeLink1Label = this.onChangeLink1Label.bind(this);
        this.onChangeLink1Url = this.onChangeLink1Url.bind(this);
        this.onChangeLink2Label = this.onChangeLink2Label.bind(this);
        this.onChangeLink2Url = this.onChangeLink2Url.bind(this);
        this.onChangeLink3Label = this.onChangeLink3Label.bind(this);
        this.onChangeLink3Url = this.onChangeLink3Url.bind(this);
        this.onChangeUploadFileId = this.onChangeUploadFileId.bind(this);
        this.onChangeUploadFileName = this.onChangeUploadFileName.bind(this);

        this.handleUpload = this.handleUpload.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
            id: '',
            username: '',
            password: '',
            pageId: '',
            businessName: '',
            website: '',
            uploadFileId: '',
            uploadFileName: '',
            addr1: '',
            addr2: '',
            city: '',
            state: '',
            zip: '',
            phone: '',
            email: '',
            topMessage: '',
            bottomMessage: '',
            hoursText: '',
            facebook: '',
            twitter: '',
            instragram: '',
            giftText: '',
            giftUrl: '',
            onlineSalesText: '',
            onlineSalesUrl: '',
            deliveryText: '',
            deliveryUrl: '',
            link1Label: '',
            link1Url: '',
            link2Label: '',
            link2Url: '',
            link3Label: '',
            link3Url: '',

            modifiedDate: '',
            uploadFile: '',
            errorMessage: '',
        }
    }


    componentDidMount() {

        axios.get('http://localhost:5000/business/load/' + this.props.match.params.pageId)
            .then(response => {
               console.log(response.data);

               this.setState({
                    id: response.data._id,
                    username: response.data.username,
                    password: response.data.password,
                    pageId: response.data.pageId,
                    businessName: response.data.info.name,
                    website: response.data.info.website,
                    uploadFileId: response.data.info.images.top,
                    uploadFileName: '',
                    addr1: response.data.info.address.addr1,
                    addr2: response.data.info.address.addr2,
                    city: response.data.info.address.city,
                    state: response.data.info.address.state,
                    zip: response.data.info.address.zip,
                    phone: response.data.info.phone,
                    email: response.data.info.email,
                    topMessage: response.data.info.topMessage,
                    bottomMessage: response.data.info.bottomMessage,
                    hoursText: response.data.info.hours.text,
                    facebook: response.data.info.social.facebook,
                    twitter: response.data.info.social.twitter,
                    instragram: response.data.info.social.instagram,
                    giftText: response.data.info.giftCard.text,
                    giftUrl: response.data.info.giftCard.url,
                    onlineSalesText: response.data.info.onlineSales.text,
                    onlineSalesUrl: response.data.info.onlineSales.url,
                    deliveryText: response.data.info.delivery.text,
                    deliveryUrl: response.data.info.delivery.url,
                    link1Label: response.data.info.links.link1Label,
                    link1Url: response.data.info.links.link1Url,
                    link2Label: response.data.info.links.link2Label,
                    link2Url: response.data.info.links.link2Url,
                    link3Label: response.data.info.links.link3Label,
                    link3Url: response.data.info.links.link3Url,

                    modifiedDate: response.data.updatedAt
               }) 


            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangeId(e) {

        this.setState({
            id: e.target.value
        });
    }

    onChangeUsername(e) {

        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onChangePageId(e) {
        this.setState({
            pageId: e.target.value
        });
    }

    onChangeBusinessName(e) {
        this.setState({
            businessName: e.target.value
        });
    }

    onChangeWebsite(e) {
        this.setState({
            website: e.target.value
        });
    }

    onChangeAddr1(e) {
        console.log(e.target.value);
        this.setState({
            addr1: e.target.value
        });
    }

    onChangeAddr2(e) {
        this.setState({
            addr2: e.target.value
        });
    }

    onChangeCity(e) {
        this.setState({
            city: e.target.value
        });
    }

    onChangeState(e) {
        this.setState({
            state: e.target.value
        });
    }

    onChangeZip(e) {
        this.setState({
            zip: e.target.value
        });
    }

    onChangePhone(e) {
        this.setState({
            phone: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeTopMessage(e) {
        this.setState({
           topMessage: e.target.value
        });
    }

    onChangeBottomMessage(e) {
        this.setState({
            bottomMessage: e.target.value
        });
    }

    onChangeHoursText(e) {
        this.setState({
            hoursText: e.target.value
        });
    }

    onChangeFacebook(e) {
        this.setState({
            facebook: e.target.value
        });
    }

    onChangeTwitter(e) {
        this.setState({
            twitter: e.target.value
        });
    }

    onChangeInstagram(e) {
        this.setState({
            instagram: e.target.value
        });
    }

    onChangeGiftCode(e) {
        this.setState({
            giftCode: e.target.value
        });
    }

    onChangeGiftText(e) {
        this.setState({
            giftText: e.target.value
        });
    }

    onChangeGiftUrl(e) {
        this.setState({
            giftUrl: e.target.value
        });
    }

    onChangeOnlineSalesText(e) {
        this.setState({
            onlineSalesText: e.target.value
        });
    }

    onChangeOnlineSalesUrl(e) {
        this.setState({
            onlineSalesUrl: e.target.value
        });
    }

    onChangeDeliveryText(e) {
        this.setState({
            deliveryText: e.target.value
        });
    }

    onChangeDeliveryUrl(e) {
        this.setState({
            deliveryUrl: e.target.value
        });
    }

    onChangeLink1Label(e) {
        this.setState({
            link1Label: e.target.value
        });
    }
    onChangeLink1Url(e) {
        this.setState({
            link1Url: e.target.value
        });
    }

    onChangeLink2Label(e) {
        this.setState({
            link2Label: e.target.value
        });
    }
    onChangeLink2Url(e) {
        this.setState({
            link2Url: e.target.value
        });
    }

    onChangeLink3Label(e) {
        this.setState({
            link3Label: e.target.value
        });
    }

    onChangeLink3Url(e) {
        this.setState({
            link3Url: e.target.value
        });
    }

    onChangeUploadFileId(e) {
        console.log(e.target.value);
        this.setState({
            uploadFileId: e.target.value
        });
    }


    onChangeUploadFileName(e) {
        console.log(e.target.value);
        this.setState({
            uploadFileName: e.target.files[0].name
        });
        this.setState({
            uploadFile: e.target.files[0]
        });
    }

    handleUpload (e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', this.state.uploadFile);

        axios.post('http://localhost:5000/image/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            },
        })
        .then(res=> {
            this.setState({uploadFileId: res.data});
        })
        .catch((error) => {
            console.log("ERR" + error.res.data);
            this.setState({errorMessage : error.res.data});
        });
    
    };

    onSubmit(e) {
        e.preventDefault();

        const business = {

            id: this.state.id,
            username: this.state.username,
            password: this.state.password,
            pageId: this.state.pageId,
            info: {
                name: this.state.businessName,
                website: this.state.website,
                images: {
                    top: this.state.uploadFileId,
                },
                address: {
                    addr1: this.state.addr1,
                    addr2: this.state.addr2,
                    city: this.state.city,
                    state: this.state.state,
                    zip: this.state.zip,
                },
                phone: this.state.phone,
                email: this.state.email,
                topMessage: this.state.topMessage,
                bottomMessage: this.state.bottomMessage,
                hours: {
                    text: this.state.hoursText,
                },
                social: {
                    facebook: this.state.facebook,
                    twitter: this.state.twitter,
                    instagram: this.state.instagram
                },
                giftCard: {
                    text: this.state.giftText,
                    url: this.state.giftUrl
                },
                onlineSales: {

                    text: this.state.onlineSalesText,
                    url: this.state.onlineSalesUrl,
                },
                delivery: {
                    text: this.state.deliveryText,
                    url: this.state.deliveryUrl,
                },
                links: {
                    link1Label: this.state.link1Label,
                    link1Url: this.state.link1Url,
                    link2Label: this.state.link2Label,
                    link2Url: this.state.link2Url,
                    link3Label: this.state.link3Label,
                    link3Url: this.state.link3Url,
                },
            }
            
        }
    
        console.log(business);

        axios.post('http://localhost:5000/business/update/' + this.state.id, business)
            .then(res=> {
                console.log(res.data)
                //this.setSetSate({uploadFileId : res.data})
            })
            .catch((error) => {
                console.log("ERR" + error.response.data);
                this.setState({errorMessage : error.response.data});
            });

    }

    render() {
        return (
        <div className = 'container-edit'>
            <div className = 'container'>
                <h3>Edit Page</h3>

                { this.state.errorMessage &&
                    <h3 className="error"> { this.state.errorMessage } </h3> }
                    
                <form onSubmit={this.onSubmit}>
                    
                    <div className="formGroup">
                        <label>Page Id: </label>
                        <input type ="text" 
                            required
                            className = "form-control"
                            value={this.state.pageId}
                            onChange={this.onChangePageId}
                            />
                    </div>

                    <div>
                        View and test your page:<br></br>
                        <a href={"http://localhost:3000/view/" + this.state.pageId}>{"http://localhost:3000/view/" + this.state.pageId}</a>
                    </div>

                    <div>
                        Last Updated: {this.state.modifiedDate}
                    </div>

                    <div className="formGroup">
                        <label>Username: </label>
                        <input type ="text" 
                            className = "form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                            />
                    </div>
                    <div className="formGroup">
                        <label>Password: </label>
                        <input type ="text" 
                            className = "form-control"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                            />
                    </div>

                    <div className='custom-file mb-4'>
                        <input
                            type='file'
                            className='custom-file-input'
                            id='customFile'
                            onChange={this.onChangeUploadFileName}
                        />
                        <label className='custom-file-label' htmlFor='customFile'>
                            {this.state.uploadFileName}
                        </label>
                    </div>

                    <a href="#" className='btn btn-primary btn-block mt-4' onClick={this.handleUpload}>
                        Upload
                    </a>
                    
                    {this.state.uploadFileId ? (
                        <div className='row mt-5'>
                            <div className='col-md-6 m-auto'>
                                <img src={'http://localhost:5000/image/' + this.state.uploadFileId} alt='' />
                            </div>
                        </div>
                    )  : null } 

                    <div className="formGroup">
                        <label>Business Name: </label>
                        <input type ="text" 
                            required
                            className = "form-control"
                            value={this.state.businessName}
                            onChange={this.onChangeBusinessName}
                            />
                    </div>

                    <div className="formGroup">
                        <label>Website: </label>
                        <input type ="text" 
                            className = "form-control"
                            value={this.state.website}
                            onChange={this.onChangeWebsite}
                            />
                    </div>

                    <div className="formGroup">
                        <label>Address: </label>
                        <input type ="text" 
                            className = "form-control"
                            value={this.state.addr1}
                            onChange={this.onChangeAddr1}
                            />
                    </div>
                    <div className="formGroup">
                        <label>Address 2: </label>
                        <input type ="text" 
                            className = "form-control"
                            value={this.state.addr2}
                            onChange={this.onChangeAddr2}
                            />
                    </div>
                    <div className="formGroup">
                        <label>City: </label>
                        <input type ="text" 
                            className = "form-control"
                            value={this.state.city}
                            onChange={this.onChangeCity}
                            />
                    </div>
                    <div className="formGroup">
                        <label>State: </label>
                        <input type ="text" 
                            className = "form-control"
                            value={this.state.state}
                            onChange={this.onChangeState}
                            />
                    </div>
                    <div className="formGroup">
                        <label>Zip: </label>
                        <input type ="text" 
                            className = "form-control"
                            value={this.state.zip}
                            onChange={this.onChangeZip}
                            />
                    </div>
                    <div className="formGroup">
                        <label>Phone: </label>
                        <input type ="text" 
                            className = "form-control"
                            value={this.state.phone}
                            onChange={this.onChangePhone}
                            />
                    </div>
                    <div className="formGroup">
                        <label>Email: </label>
                        <input type ="text" 
                            className = "form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                            />
                    </div>
                    <div className="formGroup">
                        <label>Welcome Message: </label>
                        <input type ="textarea" 
                            className = "form-control"
                            value={this.state.topMessage}
                            onChange={this.onChangeTopMessage}
                            />
                    </div>
                    <div className="formGroup">
                        <label>Footer Message: </label>
                        <input type ="textarea" 
                            className = "form-control"
                            value={this.state.bottomMessage}
                            onChange={this.onChangeBottomMessage}
                            />
                    </div>
                    <div className="formGroup">
                        <label>Hours: </label>
                        <input type ="textarea" 
                            className = "form-control"
                            value={this.state.hoursText}
                            onChange={this.onChangeHoursText}
                            />
                    </div>
                    <div className="formGroup">
                        <label>Facebook: </label>
                        <input type ="text" 
                            className = "form-control"
                            value={this.state.facebook}
                            onChange={this.onChangeFacebook}
                            />
                    </div>
                    <div className="formGroup">
                        <label>Twitter: </label>
                        <input type ="text" 
                            className = "form-control"
                            value={this.state.twitter}
                            onChange={this.onChangeTwitter}
                            />
                    </div>
                    <div className="formGroup">
                        <label>Instagram: </label>
                        <input type ="text" 
                            className = "form-control"
                            value={this.state.instagram}
                            onChange={this.onChangeInstagram}
                            />
                    </div>
                    <div className="formGroup">
                        <label>Gift Card Text: </label>
                        <input type ="textarea" 
                            className = "form-control"
                            value={this.state.giftText}
                            onChange={this.onChangeGiftText}
                            />
                    </div>
                    <div className="formGroup">
                        <label>Gift Card Url: </label>
                        <input type ="text" 
                            className = "form-control"
                            value={this.state.giftUrl}
                            onChange={this.onChangeGiftUrl}
                            />
                    </div>
                    <div className="formGroup">
                        <label>Online Sales Text: </label>
                        <input type ="textarea" 
                            className = "form-control"
                            value={this.state.onlineSalesText}
                            onChange={this.onChangeOnlineSalesText}
                            />
                    </div>
                    <div className="formGroup">
                        <label>Online Sales Url: </label>
                        <input type ="text" 
                            className = "form-control"
                            value={this.state.onlineSalesUrl}
                            onChange={this.onChangeOnlineSalesUrl}
                            />
                    </div>
                    <div className="formGroup">
                        <label>Delivery Text: </label>
                        <input type ="textarea" 
                            className = "form-control"
                            value={this.state.deliveryText}
                            onChange={this.onChangeDeliveryText}
                            />
                    </div>
                    <div className="formGroup">
                        <label>Delivery Url: </label>
                        <input type ="text" 
                            className = "form-control"
                            value={this.state.deliveryUrl}
                            onChange={this.onChangeDeliveryUrl}
                            />
                    </div>


                    <div className="formGroup">
                        <label>Link 1 Label: </label>
                        <input type ="text" 
                            className = "form-control"
                            value={this.state.link1Label}
                            onChange={this.onChangeLink1Label}
                            />
                    </div>

                    <div className="formGroup">
                        <label>Link 1 Url: </label>
                        <input type ="text" 
                            className = "form-control"
                            value={this.state.link1Url}
                            onChange={this.onChangeLink1Url}
                            />
                    </div>
                    <div className="formGroup">
                        <label>Link 2 Label: </label>
                        <input type ="text" 
                            className = "form-control"
                            value={this.state.link2Label}
                            onChange={this.onChangeLink2Label}
                            />
                    </div>
                    <div className="formGroup">
                        <label>Link 2 Url: </label>
                        <input type ="text" 
                            className = "form-control"
                            value={this.state.link2Url}
                            onChange={this.onChangeLink2Url}
                            />
                    </div>
                    <div className="formGroup">
                        <label>Link 3 Label: </label>
                        <input type ="text" 
                            className = "form-control"
                            value={this.state.link3Label}
                            onChange={this.onChangeLink3Label}
                            />
                    </div>
                    <div className="formGroup">
                        <label>Link 3 Url: </label>
                        <input type ="text" 
                            className = "form-control"
                            value={this.state.link3Url}
                            onChange={this.onChangeLink3Url}
                            />
                    </div>

                    

                    <div className="form-group">
                        <input type="submit" value="Update"
                            className="btn btn-primary" />
                    </div>

                </form>
            </div>
        </div>

        ) 
    }

}
