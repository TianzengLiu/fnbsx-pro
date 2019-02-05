import React from 'react';
import ReactDOM from 'react-dom';
import {Link,NavLink} from 'react-router-dom';
import {MainHeader, SiteFooter2} from "./header";

import {TermsExtension,PrivacyExtension,AMLCFTSiteExtension,TokenSaleExtension} from "../../site/legal/terms.js";






export class TermDash extends React.Component {
    constructor(props){
        super(props);
        this.handleWatchVideo = this.handleWatchVideo.bind(this)
        this.state = {
            "videoShow":false
        }
    }
    handleWatchVideo(){
        this.setState({"videoShow": !this.state.videoShow});
    }  	
	componentDidMount(){
		document.title = "Fanbase";
		window.scrollTo(0,0);
	}
	render() {
		return (
			<div>
			<div className="page">
					<MainHeader />
					<TermsExtension type="dash" />
					<SiteFooter2 handleClose={this.handleWatchVideo} active={this.state.videoShow} />
				</div>
			</div>
		)
	}
}
export class PrivacyDash extends React.Component {
    componentDidMount(){
        document.title = "Fanbase";
        window.scrollTo(0,0);
    }
    constructor(props){
        super(props);
        this.handleWatchVideo = this.handleWatchVideo.bind(this)
        this.state = {
            "videoShow":false
        }
    }
    handleWatchVideo(){
        this.setState({"videoShow": !this.state.videoShow});
    }    
    
	render() {
		return (
			<div>
			<div className="page">
				<MainHeader />
				<PrivacyExtension type="dash" />
				<SiteFooter2 handleClose={this.handleWatchVideo} active={this.state.videoShow} />
			</div>
		</div>
		)
	}
}
export class AMLCFTDash extends React.Component {
    componentDidMount(){
        document.title = "Fanbase";
        window.scrollTo(0,0);
    }
    constructor(props){
        super(props);
        this.handleWatchVideo = this.handleWatchVideo.bind(this)
        this.state = {
            "videoShow":false
        }
    }
    handleWatchVideo(){
        this.setState({"videoShow": !this.state.videoShow});
    } 
	render() {
		return (
			<div>
			<div className="page">
				<MainHeader />
				<AMLCFTSiteExtension type="dash" />
				<SiteFooter2 handleClose={this.handleWatchVideo} active={this.state.videoShow} />
			</div>
		</div>
		)
	}
}


export class TokensalepolicyDash extends React.Component {
    componentDidMount(){
        document.title = "Fanbase";
        window.scrollTo(0,0);
    }
    constructor(props){
        super(props);
        this.handleWatchVideo = this.handleWatchVideo.bind(this)
        this.state = {
            "videoShow":false
        }
    }
    handleWatchVideo(){
        this.setState({"videoShow": !this.state.videoShow});
    } 
	render() {
		return (
			<div>
			<div className="page">
				<MainHeader />
				<TokenSaleExtension type="dash" />
				<SiteFooter2 handleClose={this.handleWatchVideo} active={this.state.videoShow} />
			</div>
		</div>
		)
	}
}

export class WhitePaperDash extends React.Component {
    componentDidMount(){
        document.title = "Fanbase";
        window.scrollTo(0,0);
    }
    constructor(props){
        super(props);
        this.handleWatchVideo = this.handleWatchVideo.bind(this)
        this.state = {
            "videoShow":false
        }
    }
    handleWatchVideo(){
        this.setState({"videoShow": !this.state.videoShow});
    } 
	render() {
		return (
			<div>
			<div className="page">
				<MainHeader />
				<SiteFooter2 handleClose={this.handleWatchVideo} active={this.state.videoShow} />
			</div>
		</div>
		)
	}
}






