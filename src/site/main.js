import React from 'react';
import ReactDOM from 'react-dom';
import "./main.css";
import {Link,NavLink} from 'react-router-dom';
import LogoImage from "../images/F-logo-in-Blue.png";
import LogoWhiteImage from "../images/F-logo-in-Blue.png";
import NavButton from "../images/navButton.png";
import {TokenSummary} from "../app/dashboard/widgets";
import Parse from "parse";
import DropdownImage from "../images/dropdownBlack.png";

import Slider from '../site/slider/slider';
import Slider2 from '../site/slider2/slider2';
import Slider3 from '../site/slider3/slider3';
import Slider4 from '../site/slider4/slider4';
import Slider5 from '../site/slider5/slider5';
import Slider6 from '../site/slider6/slider6';
import Slider7 from '../site/slider7/slider7';
import Slider8 from '../site/slider8/slider8';
import Slider9 from '../site/slider9/slider9';
import Slider10 from '../site/slider10/slider10';
import Slider11 from '../site/slider11/slider11';
import Slider12 from '../site/slider12/slider12';
import Slider13 from '../site/slider13/slider13';
import Slider14 from '../site/slider14/slider14';
import Slider15 from '../site/slider15/slider15';



import {startUrl} from "../index";
import ReactGA from 'react-ga';
ReactGA.initialize('UA-115007597-1');

export const as3url = "https://fnbsx.github.io/fnbsx-saved/#/";




export class IndexPage extends React.Component {
	constructor(props){
		super(props);
		this.handleWatchVideo = this.handleWatchVideo.bind(this)
		this.state = {
			"slide1":"1",
			"slide2":"1",
			"slide3":"1",
			"videoShow":false
		}
	}
	componentDidMount() {
		document.title = "Fanbase";
		window.scrollTo(0,0);
		ReactGA.pageview(window.location.pathname + window.location.search);
	}
	handleWatchVideo(){
		this.setState({"videoShow": !this.state.videoShow});
	}
	render() {
		return (
			<div className="page" style={{"paddingBottom":"0"}}>
				<SiteHeader />
				<div className="pageContent">
					<div className="mainHeader">
						<p className="mainTitle">We are the music makers, and we are the dreamers of dreams...
						</p>
						<div className="tokenSummarySiteWrap">
							
						</div>
						{/*<a onClick={this.handleWatchVideo} className="waTchVideoBttn">Watch Video</a>*/}
						{/*<Link className="getStartedBttn" to="/register">REGISTER</Link>*/}
					</div>

					
					{/*<div className="subsubHeader">
						<ul>
							<li>
								<i className="fa fa-universal-access"></i>
								<p>Global Network</p>
							</li>
							<li>
								<i className="fa fa-graduation-cap"></i>
								<p>Tuition Token</p>
							</li>
							<li>
								<i className="fa fa-exchange"></i>
								<p>FNB Exchange</p>
							</li>		

							<li>
								<i className="fa fa-bitcoin"></i>
								<p>Major Coins Supported</p>
							</li>
							<li>
								<i className="fa fa-lock"></i>
								<p>Safe &amp; Secure</p>
							</li>
							<li className="mobileOnlySubSubHeader">
								<i className="fa fa-th"></i>
								<p>Education Blockchain</p>
							</li>

						</ul>
		</div>*/}
			
		  

					<div className="fnbXTokenAnythingWrap card6">	
						{/*<p className="mainRowtitle" style={{"color":"grey"}}>Media Redefined Here</p>*/}
						<p className="subDescription" style={{"width": "800px","text-align":"justify","color":"grey", marginBottom:"50px"}}>
						On our platform, fans finance films, shows, games, novels, podcasts, webseries, 
						ezines, music and other digital media content from their favorite media-makers. In return, 
						fans earn monthly or quarterly royalties in fiat, and crypto when they exchange 
						ownership rights. 
						</p>
						
						{/* First Slide Show Start */}
					<div className="leftSideModuleWrap">
					<div className="rightSideModule mobileShow" style={{"width":"40%"}}>

						{
							this.state.slide1 == "1" ?
							<img src={require("./site/coffee611.jpeg")} />
							:
							""
						}
						{
							this.state.slide1 == "2" ?
							<img src={require("./site/coffee611.jpeg")} />
							: ""
						}
						{
							this.state.slide1 == "3" ?
							<img src={require("./site/coffee611.jpeg")} />
							: ""
						}
						{
							this.state.slide1 == "4" ?
							<img src={require("./site/coffee611.jpeg")} />
						
							: ""
						}
						{
							this.state.slide1 == "5" ?
							<img src={require("./site/coffee611.jpeg")} />
							:
							""
						}
					</div>
					<div className="leftSideModule" style={{"width":"55%"}}>

						<div className="featuresListUI lareXWrapper" style={{"text-align":"left"}}>
							<ul>
								<li onClick={(e) => this.setState({"slide1":"1"})} className={this.state.slide1 == "1" ? "featuresListUILI active" : "featuresListUILI" }>Love Patreon?</li>
								<li onClick={(e) => this.setState({"slide1":"2"})} className={this.state.slide1 == "2" ? "featuresListUILI active" : "featuresListUILI" }>Love Cryptokitties?</li>
								<li onClick={(e) => this.setState({"slide1":"3"})} className={this.state.slide1 == "3" ? "featuresListUILI active" : "featuresListUILI" }>Love Coinbase?</li>
								{/*<li onClick={(e) => this.setState({"slide1":"4"})} className={this.state.slide1 == "4" ? "featuresListUILI active" : "featuresListUILI" }>Programs</li>
					<li onClick={(e) => this.setState({"slide1":"5"})} className={this.state.slide1 == "5" ? "featuresListUILI active" : "featuresListUILI" }>Benefits</li>*/}
							</ul>
						</div>
						<p className="lareXLogo" style={{"fontSize":"40px"}}>fanbase</p>
						{
							this.state.slide1 == "1" ?
								<span>
									<p className="title">...♥s patreon!</p>
									<p className="subtitle">Fanbase loves Patreon because we both help independent media-makers thrive! Specifically, we help creators finance their next production by pre-selling a percentage of their intellectual property. We are also similar to Indiegogo, in that we are a crowdfunder, but creators may only crowdfund for media productions (not gadgets), and must share ownership rights with their fans.
									</p>
								</span>
							:
							""
						}
						{
							this.state.slide1 == "2" ?
								<span>
									<p className="title">...♥s cryptokitties!</p>
									<p className="subtitle">Fanbase loves Cryptokitties because we both help creators sell limited licenses for digital media created on our platform. Rather than mass markets, some creators will select limited licensing and choose to auction off ownership of songs, photographs, memes, or mixed-media to collectors. That media will be uniquely tagged like Cryptokitties.
									</p>
								</span>
							: ""
						}
						{
							this.state.slide1 == "3" ?
								<span>
									<p className="title">...♥s coinbase!</p>
									<p className="subtitle">Fanbase loves Coinbase because we both help investors support projects they love. While Coinbase users purchase tokens, fanbase users purchase tickets. Tickets on Fanbase are like tokens on Coinbase, however, ticket holders also collect fiat royalties. Tickets represent ownership of intellectual property, and are traded on Fanbase Exchange (we'll need FinCEN approval for this).
									</p>
								</span>
							: ""
						}
						{/*{
							this.state.slide1 == "4" ?
								<span>
									<p className="title">Universities at your fingertips.</p>
									<p className="subtitle">
									Search and apply your field of study, demographics, degree level, use other filters to narrow down results that are tailored to your path on getting the education you've dreamed of by applying to accredited programs online.</p>
								</span>								
							: ""

						}
						{
							this.state.slide1 == "5" ?
								<span>
									<p className="title">Sow a seed, reap a harvest</p>
									<p className="subtitle">Place and receive your credentials on the blockchain. Weigh out your Student Allowance Contracts and determine your options. If applicable, follow easy Student Visa procedures with access to dozens of other benefits inclusive of insurance, tax help, virtual counseling and so much more. Receive your scholarship in FNB.</p>
								</span>
							:
							""
						}*/}
						<br />
						{/*<Link style={{"marginLeft":"0"}} className="getStartedBttn" to="/register">Learn More</Link>*/}
					</div>
					<div className="rightSideModule desktopShow" style={{"width":"40%"}}>

						{
							this.state.slide1 == "1" ?
							<img src={require("./site/coffee611.jpeg")} />
							:
							""
						}
						{
							this.state.slide1 == "2" ?
							<img src={require("./site/coffee611.jpeg")} />
							: ""
						}
						{
							this.state.slide1 == "3" ?
							<img src={require("./site/coffee611.jpeg")} />
							: ""
						}
						{
							this.state.slide1 == "4" ?
							<img src={require("./site/coffee611.jpeg")} />
						
							: ""
						}
						{
							this.state.slide1 == "5" ?
							<img src={require("./site/coffee611.jpeg")} />
							:
							""
						}
					</div>
					<br style={{"clear":"both"}} />
				</div>
				{/* First Slide Show End */}

				{/* Second Slide Show Start */}
				<div className="rightSideModuleWrap">
					<div className="leftSideModule" style={{"width":"40%"}}>

						{
							this.state.slide2 == "1" ?
								<img src={require("./site/music611.jpeg")} />
							:
							""
						}
						{
							this.state.slide2 == "2" ?
								<img src={require("./site/music611.jpeg")} />
							: ""
						}
						{
							this.state.slide2 == "3" ?
								<img src={require("./site/music611.jpeg")} />
							: ""
						}
						{
							this.state.slide2 == "4" ?
							<img src={require("./site/music611.jpeg")} />
						
							: ""
						}
						{
							this.state.slide2 == "5" ?
							<img src={require("./site/music611.jpeg")} />
							:
							""
						}
					</div>
					<div className="rightSideModule" style={{"width":"60%"}}>

						<div className="featuresListUI lareVIAWrapper" style={{"text-align":"left"}}>
							<ul>
								<li onClick={(e) => this.setState({"slide2":"1"})} className={this.state.slide2 == "1" ? "featuresListUILI active" : "featuresListUILI" }>For Fans</li>
								<li onClick={(e) => this.setState({"slide2":"2"})} className={this.state.slide2 == "2" ? "featuresListUILI active" : "featuresListUILI" }>For Creators</li>
								<li onClick={(e) => this.setState({"slide2":"3"})} className={this.state.slide2 == "3" ? "featuresListUILI active" : "featuresListUILI" }>For Collectors</li>

							  {/*	<li onClick={(e) => this.setState({"slide2":"4"})} className={this.state.slide2 == "4" ? "featuresListUILI active" : "featuresListUILI" }>For Investors</li>
				                	<li onClick={(e) => this.setState({"slide2":"5"})} className={this.state.slide2 == "5" ? "featuresListUILI active" : "featuresListUILI" }>For Learners</li> */}
							</ul>
						</div>
						<p className="lareVIALogo" style={{"fontSize":"40px"}}>fanbase</p>
						{
							this.state.slide2 == "1" ?
								<span>
									<p className="title">...is a home for fans!</p>
									<p className="subtitle">On fanbase, fans are the individuals looking to invest in a creative pursuit, creators are the creatives seeking financing, and 
									collectors are the individuals who want to own rare digital media assets. 
									If, for example, Jay-Z decided to create a song with Bob Dylan, that was intended for a collector audience, 
									and not a mass market, he would select a 'limited license' of only one, would fundraise for that project on our platform, use the money to make the song, 
									then auction the song to the highest bidder. That highest bidder, or collector, would own that song, like an art collector owns a painting. 
									The fans that financed the collaboration would get half of what it sold for, and Jay-Z, the creator, would get the other half.</p>
								</span>
							:
							""
						}
						{
							this.state.slide2 == "2" ?
								<span>
									<p className="title">...is a home for creators!</p>
									<p className="subtitle">Creators of digital media would be nowhere without their fans. 
									In an effort to involve fans in the financing and marketing of media, Creators may choose to finance their
									next media project on Fanbase. Most creators do this because they prefer creative control of their project. 
									But, when they crunch the numbers, they realize all the marketing dollars they'll save when fans share the project within their own networks, 
									and the sales they'll generate because a fan feels a sense of ownership and purchases the content. 
									Finally, some Creators find it appealing that they'll have thousands of watchdogs to disrupt illegal streaming and downloads, and protect their intellectual property.</p>
								</span>
							: ""
						}
						{
							this.state.slide2 == "3" ?
								<span>
									<p className="title">...is a home for collectors!</p>
									<p className="subtitle">Collectors of digital media are no different, psychologically, than collectors of
									baseball cards or other memorabilia. With the ID tags provided to unique Cryptokitties, Fanbase
									will assign ownership of individual media items to collectors, who may then trade, sell, or reuse that media.</p>
								</span>
							: ""
						}




						



                        {/*

						{
							this.state.slide2 == "4" ?
								<span>
									<p className="title">...is a home for investors</p>
									<p className="subtitle">Collectors of digital media are no different, psychologically, than collectors of baseball cards or other memorabilia. With the ID tags provided to unique Cryptokitties, Fanbase will assign ownership of individual media items to collectors, who may then trade, sell, or reuse that media.</p>
								</span>								
							: ""

						}
						{
							this.state.slide2 == "5" ?
								<span>
									<p className="title">...is a home for learners</p>
									<p className="subtitle">Collectors of digital media are no different, psychologically, than collectors of baseball cards or other memorabilia. With the ID tags provided to unique Cryptokitties, Fanbase will assign ownership of individual media items to collectors, who may then trade, sell, or reuse that media.</p>
								</span>
							:
							""
						}
					*/}
						<br />
						{/* <Link style={{"marginLeft":"0","backgroundColor":"#fcb900","boxShadow":"none"}} className="getStartedBttn" to="/register">Learn More</Link>*/}
					</div>
					<br style={{"clear":"both"}} />
				</div>
				{/* Second Slide Show End*/}

				<hr />

				{/* Tonys container for wanna to be a fanancers*/}
				<div className="row2">
				<p className="firstTitle" style={{textAlign:"center", "color":"black"}}>Want to become a Financer?</p>
				<p className="paraDescr" style={{"color":"grey"}}>Explore the various projects seeking financers. If you see a project you like, you can choose to invest! 
				Once the project is fully funded it is ticketized, and becomes a tradable asset on our exchange (we'll need FinCEN authorization and can be denied). 
				Once it is produced, and saleable, financers earn royalty payments to their fanbase wallet. </p>
				{/*<li className="getStartedBttn mobileMenu" style={{"width":"120px","float":"none","backgroundColor":"#2567e5","color":"white !important"}}>Register</li>*/}
				<div style={{textAlign:"center"}}>
				
				{/*<Link to="/login"><button className="getStartedBttn">Explore</button></Link>*/}
						 
						 </div>
						 
				</div>

				{/* Tonys Categories Start */}
				<div className="row2">
				<p className="firstTitle" style={{"color":"black", "fontSize":"20px"}}>Categories</p>
				</div>

				<div className="row3"> 
			 <div class="row5">
			 <div class="column">
			   <div class="card1">
			   <Link to="/tokensale"><img src={require("./site/bg0.jpg")} /></Link>
			   <br />
			   <small style={{"color":"black"}}><b>MUSIC</b></small>
			   <p style={{"color":"purple", "fontSize":"15px"}}>Albums, EPs, LPs, Songs, Sounds & Stems</p>
			   <hr />
			   <small className="text-muted role">On Fanbase, musicians can crowdfund, auction, and exchange various types of audio recordings. 
			   There may even be a collectors market for obscure or rare sounds...</small> 
			   <br />
			   <br />
			   
					<br />   
			   </div>
			 </div>

			 <div class="column">
			 <div class="card1">
			 <img src={require("./site/bg5.jpg")} />
			 <br />
			 <small style={{"color":"black"}}><b>FILM</b></small>
			 <p style={{"color":"purple", "fontSize":"15px"}}>Feature Length, Short Films, and Moving Images</p>
			 <hr />
			 <small className="text-muted role">On Fanbase, filmmakers can crowdfund, auction, and exchange various types of film and video recordings. 
			 There may even be a collectors market for short films and moving images...</small> 
			 <br />
			   <br />
			   
					<br />   					 
			 </div>
			 </div>

			 <div class="column">
			 <div class="card1">
			 <img src={require("./site/office2.jpg")} />
			 <br />
			 <small style={{"color":"black"}}><b>PHOTOGRAPHY</b></small>
			 <p style={{"color":"purple", "fontSize":"15px"}}>Series, Photoessays, Photos and Digital Images</p>
			 <hr />
			 <small className="text-muted role">On Fanbase, photographers can crowdfund, auction, and exchange various types of still images. 
			 There may even be a collectors market for obscure or unique photographs...</small> 
			 <br />
			   <br />
			   
					<br />   				 
			 </div>
			 </div>
			 </div>
			 </div>

			 <br />
			 <br />
			


			 <div className="row3"> 
			 <div class="row5">
			 <div class="column">
			   <div class="card1">
			   <img src={require("./site/newspaper.jpg")} />
			   <br />
			   <small style={{"color":"black"}}><b>DIGITAL MAGAZINES & NEWSPAPERS</b></small>
			   <p style={{"color":"purple", "fontSize":"15px"}}>Periodicals, Dailies, Magazines, Ezines & Newspapers</p>
			   <hr />
			   <small className="text-muted role">On Fanbase, executive editors can crowdfund, auction, and exchange various types of publications.
			   There may even be a collectors market for aspects of journalism, like catchy headlines or captions...</small> 
			   <br />
			   <br />
			   
					<br />   			   
			   </div>
			 </div>

			 <div class="column">
			 <div class="card1">
			 <img src={require("./site/dg3.jpg")} />
			 <br />
			 <small style={{"color":"black"}}><b>RADIO & PODCASTS</b></small>
			 <p style={{"color":"purple", "fontSize":"15px"}}>Terrestrial and Satellite Radio Shows & Podcasts.</p>
			 <hr />
			 <small className="text-muted role">On Fanbase, radio personalities can crowdfund, auction, and exchange ownership for various types of audio broadcasts like news or sports. 
			 There may even be a collectors market for interesting sound bites...</small> 
			 <br />
			   <br />
			   
					<br />   			 
			 </div>
			 </div>

			 <div class="column">
			 <div class="card1">
			 <img src={require("./site/bg9.jpg")} />
			 <br />
			 <small style={{"color":"black"}}><b>GAMES & VIRTUAL REALITY</b></small>
			 <p style={{"color":"purple", "fontSize":"15px"}}>Augmented Reality, Computer Games, Video Games & VR</p>
			 <hr />
			 <small className="text-muted role">On Fanbase, game designers can crowdfund, auction, and exchange various types of games. 
			 There may even be a collectors market for indiviudalized content</small> 
			 <br />
			   <br />
			   
					<br />   				 
			 </div>
			 </div>
			 </div>
			 </div>

			 <br />
			 <br />

			 <div className="row3"> 
			 <div class="row5">
			 <div class="column">
			   <div class="card1">
			   <img src={require("./site/bg10.jpg")} />
			   <br />
			   <small style={{"color":"black"}}><b>BOOKS</b></small>
			   <p style={{"color":"purple", "fontSize":"15px"}}>Novels, Stories, Literature & Words</p>
			   <hr />
			   <small className="text-muted role">On Fanbase, writers can crowdfund, auction, and exchange various types of literary items. 
			   There may even be a collectors market for obscure passages or interesting phrases...</small> 
			   <br />
			   <br />
			   
					<br />   			   
			   </div>
			 </div>

			 <div class="column">
			 <div class="card1">
			 <img src={require("./site/donut.png")} />
			 <br />
			 <small style={{"color":"black"}}><b>GRAPHIC DESIGN</b></small>
			 <p style={{"color":"purple", "fontSize":"15px"}}>Gifs, Memes, Characters & Cards</p>
			 <hr />
			 <small className="text-muted role">On Fanbase, digital artists can crowdfund, auction, and exchange various types of designs. 
			 There may even be a collectors market for interesting designs or funny memes...</small> 
			 <br />
			   <br />
			   
					<br />   				 
			 </div>
			 </div>

			 <div class="column">
			 <div class="card1">
			 <img src={require("./site/dg2.jpg")} />
			 <br />
			 <small style={{"color":"black"}}><b>TELEVISION</b></small>
			 <p style={{"color":"purple", "fontSize":"15px"}}>Televison and Web Series</p>
			 <hr />
			 <small className="text-muted role">On Fanbase, Producers can crowdfund, auction, and exchange various types of programs. 
			 There may even be a collectors market for special episodes...</small> 
			 <br />
			   <br />
			   
					<br />   				 
			 </div>
			 </div>
			 </div>
			 </div>
				


			 {/* Tonys container for wanna to be a fanancers*/}
			 <div className="row2">
			 <p className="firstTitle" style={{textAlign:"center", "fontSize":"25px", color:"black"}}>This is a cool idea.</p>
			 <p style={{textAlign:"center", color:"black"}}><b>How do I join the fun?</b></p>
			 <br />
			 <p className="paraDescr" style={{color:"grey"}}>First, register your profile. Then, explore the various projects seeking financing.
			 Next, you'll need FNB tokens in order to invest. Finally, with FNB in your wallet, you can choose to finance any project you wish.
			 Alternatively, if you are a collector, you can enter the auction and purchase unique licenses. If you are just curious, you can spend time on the site 
			 and read articles written by stars, and gain valuable insites from our professional investors. </p>
			 {/*<li className="getStartedBttn mobileMenu" style={{"width":"120px","float":"none","backgroundColor":"#2567e5","color":"white !important"}}>Register</li>*/}
			 </div>
			 <br />
			 <br />
			 <br />

			 <div className="row3"> 
			 <div class="row6">
			 <div class="column">
			   <div class="card2">
			   <img src={require("./site/f-in-blue1.png")} />
			   <br />
			   <br />
			   <br />
			   <small className="text-muted role">The FNB is an ERC-20 token. The fanbase platform also makes extensive use of the ERC-721
			   token to assign tags to each licensable media product. The ERC-721 token is non-fungible,
			   meaning it is a cryptographic token that is not interchangeable like normal tokens. It is unique, 
			   like a social security number. </small> 			   
			   </div>
			   <br />

			   {/*<div>
				<a href="mailto:info@fnbsx.com">
							<button className="getStartedBttn">Purchase FNB</button>
						 </a>
				</div>*/}
			 </div>
			 </div>

			 <div class="row4">
			 <div class="column">
			 <div class="card2">
			 <br />
			 <h5 style={{color:"black"}}>FNB Token</h5>
			 <br />
			 <p className="text-muted"><b>200m</b> Current Market Cap</p> 
			 <hr />	
			 <p className="text-muted"><b>100m</b> Future Market Cap</p> 
			 <hr />	
			 <p className="text-muted"> &#9989; Buy and Burn</p> 
			 <hr />	
			 <p className="text-muted"> &#9989; Security Token</p> 
			 <hr />	
			 <p className="text-muted"> &#9989; United States Corporation</p> 
			 <hr />	
			 <p className="text-muted"> &#9989; Ethereum Blockchain</p> 
			 <hr />				 
			 </div>
			 </div>

			 <div class="column">
			 <div class="card2">
			 <br />
			 <h5 style={{color:"black"}}>FNB Strategy</h5>
			 <br />
			 <p className="text-muted"><b>18</b> Divisible by Decimals</p>
			 <hr />
			 <p className="text-muted"><b>50%</b> Discounts In-platform</p> 
			 <hr />
			 <p className="text-muted"> &#9989; Binance Token Model</p> 
			 <hr />
			 <p className="text-muted"> &#9989; CryptoKitties Psychology</p> 
			 <hr />
			 <p className="text-muted"> &#9989; Patreon & Indiegogo Utility</p> 
			 <hr />
			 <p className="text-muted"> &#9989; *Coinbase-like IP Exchange</p> 
			 <hr />				 
			 </div>
			 </div>
			 </div>
			 
			 
			 </div>

			









				{/* Third Slide Show Start 
				<div className="leftSideModuleWrap">
					<div className="rightSideModule mobileShow" style={{"width":"40%"}}>

						{
							this.state.slide3 == "1" ?
								<img src={require("./site/music611.jpeg")} />
							:
							""
						}
						{
							this.state.slide3 == "2" ?
								<img src={require("./site/music611.jpeg")} />
							: ""
						}
						{
							this.state.slide3 == "3" ?
								<img src={require("./site/music611.jpeg")} />
							: ""
						}
						{
							this.state.slide3 == "4" ?
								<img src={require("./site/music611.jpeg")} />
						
							: ""
						}
						{
							this.state.slide3 == "5" ?
								<img src={require("./site/music611.jpeg")} />
							:
							""
						}
					</div>
					<div className="leftSideModule" style={{"width":"60%","paddingTop":"130px"}}>
						<div className="featuresListUI lareRWrapper" style={{"text-align":"left"}}>
							<ul>
								<li onClick={(e) => this.setState({"slide3":"1"})} className={this.state.slide3 == "1" ? "featuresListUILI active" : "featuresListUILI" }>Storefront</li>
								<li onClick={(e) => this.setState({"slide3":"2"})} className={this.state.slide3 == "2" ? "featuresListUILI active" : "featuresListUILI" }>CMS</li>
								<li onClick={(e) => this.setState({"slide3":"3"})} className={this.state.slide3 == "3" ? "featuresListUILI active" : "featuresListUILI" }>Marketplace</li>
								<li onClick={(e) => this.setState({"slide3":"4"})} className={this.state.slide3 == "4" ? "featuresListUILI active" : "featuresListUILI" }>Payments</li>
								<li onClick={(e) => this.setState({"slide3":"5"})} className={this.state.slide3 == "5" ? "featuresListUILI active" : "featuresListUILI" }>Services</li>
							</ul>
						</div>
						<p className="lareRLogo" style={{"fontSize":"40px"}}>FanR</p>
						{
							this.state.slide3 == "1" ?
								<span>
									<p className="title">Increase Brand Awareness</p>
									<p className="subtitle">Whether you sell online, on social media, in store, or out of the trunk of your car, LareR has you covered. Establish your brand online with a custom domain name and online store. Dozens of neat themes, complete control over the look and feel and finally a gorgeous store of your own that reflects the personality of your business. Create, manage and organize your content. No design skills needed.</p>
								</span>
							:
							""
						}
						{
							this.state.slide3 == "2" ?
								<span>
									<p className="title">One tool, one process</p>
									<p className="subtitle">Customer relationships are key to passive and recurring income. It's important to know who your customers are, receive analytics on customer behavior, access resources to promote your business, track keen data vital to your success, generate invoices, receipts and manage payments. Fanbase is making business simple.</p>
								</span>
							: ""
						}
						{
							this.state.slide3 == "3" ?
								<span>
									<p className="title">Integrated marketplaces</p>
									<p className="subtitle">Get instant access to millions of people within the Fanbase community who are accessing our integrated marketplaces daily. Market and sell goods or services, locally, nationally or globally.</p>
								</span>
							: ""
						}
						{
							this.state.slide3 == "4" ?
								<span>
									<p className="title">Business solutions</p>
									<p className="subtitle">Enabling businesses to thrive on a student global network by accepting Fanbase as form of payment for goods and services. Our payroll solution allows employers to pay employees in Fanbase. Fanbase can then be converted into fiat or other crypto currencies on the exchange.</p>
								</span>							
							: ""

						}
						{
							this.state.slide3 == "5" ?
								<span>
									<p className="title">Your brand, your vision</p>
									<p className="subtitle">With increased visibility, your business gains more opportunities for conversion. Without marketing your business, your inbound traffic is limited to your usual customers. One of the main goals of almost all businesses is developing a loyal customer base.</p>
								</span>
							:
							""
						}
						<br />
						<Link style={{"marginLeft":"0","backgroundColor":"#EB144C","boxShadow":"none"}} className="getStartedBttn" to="/register">Learn More</Link>
					</div>
					<div className="rightSideModule desktopShow" style={{"width":"40%"}}>

						{
							this.state.slide3 == "1" ?
								<img src={require("./site/music611.jpeg")} />
							:
							""
						}
						{
							this.state.slide3 == "2" ?
								<img src={require("./site/music611.jpeg")} />
							: ""
						}
						{
							this.state.slide3 == "3" ?
								<img src={require("./site/music611.jpeg")} />
							: ""
						}
						{
							this.state.slide3 == "4" ?
								<img src={require("./site/music611.jpeg")} />
						
							: ""
						}
						{
							this.state.slide3 == "5" ?
								<img src={require("./site/music611.jpeg")} />
							:
							""
						}
					</div>
					<br style={{"clear":"both"}} />
				</div>
				 Third Slide Show End */}

					
					</div>
					<br />
					
					
					
					
				
				<SiteFooter handleClose={this.handleWatchVideo} active={this.state.videoShow} />
			</div>

			</div> 
		)
	}
}






export class TokenSaleSite extends React.Component {
	constructor(props){
		super(props);
		this.handleWatchVideo = this.handleWatchVideo.bind(this)
		this.state = {
			"videoShow":false
		}
	}

	componentDidMount(){
		document.title = "Fanbase";
		window.scrollTo(0,0);
		ReactGA.pageview(window.location.pathname + window.location.search);
	}
	handleWatchVideo(){
		this.setState({"videoShow": !this.state.videoShow});
	}



	
	render() {
		return (
			<div className="page" style={{"paddingBottom":"0"}}>
				<SiteHeader />
				<div className="pageContent">
					<div className="mainHeader">
						<p className="mainTitle">Bed Romance</p>
						<p className="mainTitle">- GaGe "Singer, actor"</p>
						<div className="tokenSummarySiteWrap">
							{/*<div className="cHeader">
								<p className="title">Join Our Sale Now</p>
							</div>
							<div className="cBody">
								<TokenSummary />
		                    </div>*/}
						</div>
						{/*<a onClick={this.handleWatchVideo} className="waTchVideoBttn">Watch Video</a>*/}
						<Link className="getStartedBttn" to="/register">Buy Gage Coins</Link>
					</div>

					{/*<div className="fnbXTokenAnythingWrap card6">*/}	
					<div className="leftSideModuleWrap presaleWrapper" style={{"paddingBottom":"80px"}}>
						{/*<div className="rightSideModule" style={{"width":"70%","margin":"0 auto","float":"none","paddingRight":"0","textAlign":"center"}}>
							<img className="fanbaseGraph" />
							<table className="saleTable mainTable">
									<tbody>
										<tr className="saleTablerow mainTablerow">
										<th>Tier</th>
										<th>Issued Tokens</th>
										<th>Bonus</th>
										<th>Total</th>
									</tr>
									<tr className="saleTablerow mainTablerow">
											<td><p className="tiersTitle">Presale</p></td>
											<td><p className="amountCoinsValue">2,000,000,000 FNB</p></td>
											<td><p className="amountCoinsValueDescription">100%</p></td>
											<td><p className="amountCoinsValue">4,000,000,000 FNB</p></td>
									</tr>
									
								</tbody>
							</table>
						</div>*/}
						<div className="leftSideModule" style={{"width":"40%","margin":"0 auto","float":"none","padding":"0","paddingTop":"70px"}}>
							<p className="title">Project Details</p>
							<p className="subtitle">Working Title: </p>
							<p className="subtitle">Tag Line: </p>
							<p className="subtitle">Promotional Image:  </p>
							<p className="subtitle">Attach Promotional Image:  </p>
							<p className="subtitle">Description:  </p>
							<p className="subtitle">Video Pitch Thumbnail:  </p>
							<p className="subtitle">Video Pitch:   </p>
							<p className="subtitle">Video Promo Thumbnail:  </p>
							<p className="subtitle">Additional Attachments:  </p>
							<p className="subtitle">Additional Links:   </p>
							<p className="subtitle">Social Media:    </p>
							<p className="subtitle">Project Website:   </p>
							<br />
							{/*<div className="presaleContainer">
								<b>Release Date</b>
								<span>March 4th, 2018</span>
							</div>
							<hr />
							<div className="presaleContainer">
								<b>End Date:</b>
								<span>July 4th, 2018</span>
							</div>
							<br /><br />
							<br /><br />
							<Link className="getStartedBttn" to="/register">Claim $10 in FNB</Link>*/}
						</div>
						<br style={{"clear":"both"}} />
					</div>


					<div className="leftSideModuleWrap presaleWrapper" style={{"paddingBottom":"80px"}}>
						<div className="rightSideModule" style={{"width":"70%","margin":"0 auto","float":"none","paddingRight":"0"}}>
                             {/*<table className="saleTable mainTable">
								<tbody>
								<tr className="saleTablerow mainTablerow">
									<th>Tier</th>
									<th>Issued Tokens</th>
									<th>Bonus</th>
									<th>Total</th>
								</tr>
								<tr className="saleTablerow mainTablerow">
									<td><p className="tiersTitle">11</p></td>
									<td><p className="amountCoinsValue">691,200,000 FNB</p></td>
									<td><p className="amountCoinsValueDescription">4%</p></td>
									<td><p className="amountCoinsValue">718,848,000 FNB</p></td>
								</tr>
								
							</tbody>
						</table>*/}
						</div>
						<Slider />
						


						
						

						{/*<div className="leftSideModule" style={{"width":"40%","margin":"0 auto","float":"none","padding":"0","paddingTop":"70px"}}>
							<p className="title">Related Project</p>
							<p className="subtitle" style={{"lineHeight":"25px"}}>Working Title: (Must login to pitch a project)</p>
							<br />
							<div className="presaleContainer">
								<b>Start Date:</b>
								<span>July 4th, 2018</span>
							</div>
							<hr />
							<div className="presaleContainer">
								<b>End Date:</b>
								<span>January 4th, 2019</span>
							</div>
						</div>*/}
						<br style={{"clear":"both"}} />
					</div>					
				</div>
				
				{/*<EndWrapper />*/}
				<br />
				<SiteFooter handleClose={this.handleWatchVideo} active={this.state.videoShow} />
			</div>
		)
	}
}





{/* Collectors Page Start */}
export class TokenSaleSite2 extends React.Component {
	constructor(props){
		super(props);
		this.handleWatchVideo = this.handleWatchVideo.bind(this)
		this.state = {
			"videoShow":false
		}
	}

	componentDidMount(){
		document.title = "Fanbase";
		window.scrollTo(0,0);
		ReactGA.pageview(window.location.pathname + window.location.search);
	}
	handleWatchVideo(){
		this.setState({"videoShow": !this.state.videoShow});
	}



	
	render() {
		return (
			<div className="page" style={{"paddingBottom":"0"}}>
				<SiteHeader />
				<div className="pageContent">
					<div className="mainHeader2">
						{/*<p className="mainTitle">Bed Romance</p>
						<p className="mainTitle">- GaGe "Singer, actor"</p>
						<div className="tokenSummarySiteWrap">
							<div className="cHeader">
								<p className="title">Join Our Sale Now</p>
							</div>
							<div className="cBody">
								<TokenSummary />
		                    </div>
						</div>
						<a onClick={this.handleWatchVideo} className="waTchVideoBttn">Watch Video</a>
						<Link className="getStartedBttn" to="/register">Buy Gage Coins</Link>*/}
					</div>
					<div className="fnbXTokenAnythingWrap card6">
					<div className="leftSideModuleWrap presaleWrapper" style={{"paddingBottom":"80px"}}>
						{/*<div className="rightSideModule" style={{"width":"70%","margin":"0 auto","float":"none","paddingRight":"0","textAlign":"center"}}>
							<img className="fanbaseGraph" />
							<table className="saleTable mainTable">
									<tbody>
										<tr className="saleTablerow mainTablerow">
										<th>Tier</th>
										<th>Issued Tokens</th>
										<th>Bonus</th>
										<th>Total</th>
									</tr>
									<tr className="saleTablerow mainTablerow">
											<td><p className="tiersTitle">Presale</p></td>
											<td><p className="amountCoinsValue">2,000,000,000 FNB</p></td>
											<td><p className="amountCoinsValueDescription">100%</p></td>
											<td><p className="amountCoinsValue">4,000,000,000 FNB</p></td>
									</tr>
									
								</tbody>
							</table>
						</div>*/}
						<div className="leftSideModule" style={{"width":"40%","margin":"0 auto","float":"none","padding":"0","paddingTop":"70px"}}>
							{/*<p className="title">Project Detailssss</p>*/}
							<p className="subDescription" style={{"width": "800px","text-align":"justify","color":"grey", marginBottom:"50px"}}>In our auction, collectors purchase limited edition photographs, songs, images, cards, films, shows, games, novels, podcasts, webseries, ezines, memes
							 and other digital media content from their favorite media-makers. The rights to these items are stored in their fanbase wallet, and allow collectors the ability to sell or trade those items to other collectors, like baseball cards. 
							 </p>
							
							<br />
							{/*<div className="presaleContainer">
								<b>Release Date</b>
								<span>March 4th, 2018</span>
							</div>
							<hr />
							<div className="presaleContainer">
								<b>End Date:</b>
								<span>July 4th, 2018</span>
							</div>
							<br /><br />
							<br /><br />
							<Link className="getStartedBttn" to="/register">Claim $10 in FNB</Link>*/}
						</div>
						<br style={{"clear":"both"}} />
					</div>


					<div className="leftSideModuleWrap presaleWrapper" style={{"paddingBottom":"80px"}}>
						<div className="rightSideModule" style={{"width":"70%","margin":"0 auto","float":"none","paddingRight":"0"}}>
                             {/*<table className="saleTable mainTable">
								<tbody>
								<tr className="saleTablerow mainTablerow">
									<th>Tier</th>
									<th>Issued Tokens</th>
									<th>Bonus</th>
									<th>Total</th>
								</tr>
								<tr className="saleTablerow mainTablerow">
									<td><p className="tiersTitle">11</p></td>
									<td><p className="amountCoinsValue">691,200,000 FNB</p></td>
									<td><p className="amountCoinsValueDescription">4%</p></td>
									<td><p className="amountCoinsValue">718,848,000 FNB</p></td>
								</tr>
								
							</tbody>
						</table>*/}
						</div>



						
						
						<Slider2 />
						<hr />
						<Slider3 />
						<hr />
						<Slider4 />
						<hr />
						<Slider5 />
						<hr />
						<Slider6 />
						<hr />
						<Slider7 />
						<hr />
						<Slider8 />
						<hr />
						<Slider9 />
						<hr />
						<Slider10 />
						<hr />
						<Slider11 />
						<hr />
						<Slider12 />
						<hr />
						<Slider13 />
						<hr />
						<Slider14 />
						<hr />
						<Slider15 />


						
						

						{/*<div className="leftSideModule" style={{"width":"40%","margin":"0 auto","float":"none","padding":"0","paddingTop":"70px"}}>
							<p className="title">Related Project</p>
							<p className="subtitle" style={{"lineHeight":"25px"}}>Working Title: (Must login to pitch a project)</p>
							<br />
							<div className="presaleContainer">
								<b>Start Date:</b>
								<span>July 4th, 2018</span>
							</div>
							<hr />
							<div className="presaleContainer">
								<b>End Date:</b>
								<span>January 4th, 2019</span>
							</div>
						</div>*/}
						<br style={{"clear":"both"}} />
					</div>					
				</div>
				</div>
				{/*<EndWrapper />*/}
				<br />
				
				<SiteFooter handleClose={this.handleWatchVideo} active={this.state.videoShow} />
			</div>
		)
	}
}


{/* Collectors Page End */}

















/*export class EndWrapper extends React.Component {
	render() {
		return (
			<div className="endWrapper">	
				<div className="bgImage"></div>	
				<p className="title">Join the Thousands of People using <span className="logo">FNB</span></p>	
				<p className="description">Signup is super easy, quick and secure.</p>	
				<Link to="/register">Get Started</Link>
			</div>
		)
	}
}
*/


export class SiteHeader extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			"mobileSlider":false,
			"active":false,
			"src":"",
			"email":"",
			"dropdown":false,
			"mobileDrop":false,
			"fName":"",
			"lName":""
		}
	}
	componentDidMount() {
		var user = Parse.User.current();
		if (user) {
			var r = this;


		var Users = Parse.Object.extend("_User");
		var query = new Parse.Query(Users);
		query.get(Parse.User.current().id, {
			success: function(results) {
				r.setState(
					{
						"phoneVerified":results.get('phoneVerified'),
						"emailVerified":results.get('eVerified'),
						"fName":results.get('fname'),
						"lName":results.get('lname'),
						"src":typeof(results.get('src')) == "object" ? as3url + results.get('src').name() : "",
						"email":results.get('username'),
						"active":true
					})
			}, error:function(err){
				if (err.code == 209) {
					Parse.User.logOut().then(() => {
					 	window.location.href = startUrl + "login";
					});
				} else {
					console.log(err)
				}
			}});
		} else {
			this.setState({"active":false})
		}
	}
	handleDropdown = (e) => {
		this.setState({"dropdown":!this.state.dropdown});
		this.setState({"mobileDrop":false});
	}
	handleMobileD = (e) => {
		this.setState({"mobileDrop":!this.state.mobileDrop});
		this.setState({"dropdown":false});
	}
	bgDrop = (e) => {
		this.setState({"dropdown":false,"mobileDrop":false});
	}
	handleLogout = (e) => {
		Parse.User.logOut().then(() => {
		 	window.location.reload();
		});
	}
	render() {
		return (
		<div>
			<div className="siteHeaderWrap">
				<ul>
					<Link to="/"><li className="pull-left logoSite">{/*<span className="logoSvgHeader">{logoSvg}</span> */}<img src={LogoImage} style={{ height:"49px", width:"49px", marginTop:"-10px"}} /> </li></Link>
					<Link to="/"><li>FANS</li></Link>
					<NavLink activeClassName="active" to="/tokensale"><li>CREATORS</li></NavLink>
					<NavLink activeClassName="active" to="/tokensale2"><li className="lastChildNav">COLLECTORS</li></NavLink>
					<NavLink activeClassName="active" to="/tokensalepolicy"><li className="lastChildNav">LEARNERS</li></NavLink>
					{
						this.state.active == true && this.state.emailVerified == true && this.state.phoneVerified == true  ?
						<li className="pull-right accountDropdown darkV" >
							<div className="dAccountPreview">
							{
								this.state.src == "" ?
								  <div>
									<Link to="/profile" ><div data-tooltip="Upload Image" data-enabled="true" data-placement="bottom" className="image noImage" style={{"backgroundColor":"white"}}>{this.state.fName.split('')[0]}</div></Link>
									<p className="fullname" onClick={this.handleDropdown}>{this.state.fName} {this.state.lName}</p>
									<img className="dropdownToggle" onClick={this.handleDropdown} style={{"transform":this.state.dropdown == true ? "rotate(180deg)" : "rotate(0deg)"}} src={DropdownImage} />
								  </div>
								: 
								  <div>
									<Link to="/profile" > <div data-tooltip="Upload Image" data-enabled="true" data-placement="bottom" className="image" style={{"backgroundColor":"white","backgroundImage":"url('"+this.state.src+"'"}} ></div></Link>
									<p className="fullname"  onClick={this.handleDropdown}>{this.state.fName} {this.state.lName}</p>
									<img className="dropdownToggle" onClick={this.handleDropdown} style={{"transform":this.state.dropdown == true ? "rotate(180deg)" : "rotate(0deg)"}} src={DropdownImage} />
								  </div>
							}
							</div>
							<div className={this.state.dropdown == true ? "dAccountDropdown visible" : "dAccountDropdown"}>
								<ul>
									<li className="initialScreen">
										{
											this.state.src == "" ?
											  <div>
												<Link to="/profile" ><div className="image noImage" style={{"backgroundColor":"white"}}>{this.state.fName.split('')[0]}</div></Link>
												<Link to="/profile"><p style={{"color":"rgb(6, 103, 208)"}} className="dropName">{this.state.fName} {this.state.lName}</p></Link>
												<p className="dropEmail">{this.state.email}</p>
											  </div>
											: 
											  <div>
												<Link to="/profile" ><div className="image" style={{"backgroundColor":"white","backgroundImage":"url('"+this.state.src+"'"}} ></div></Link>
												<Link to="/profile"><p style={{"color":"rgb(6, 103, 208)"}} className="dropName">{this.state.fName} {this.state.lName}</p></Link>
												<p className="dropEmail">{this.state.email}</p>
											  </div>
										}														
									</li>
									<Link to="/creators"><li>My Creator</li></Link>
									<Link to="/settings/profile"><li>Account Settings</li></Link>
									<Link to="/referrals"><li>Invite Friends <span className="tag green pull-right">Get $10</span></li></Link>
									<a onClick={this.handleLogout}><li>Log out</li></a>
								</ul>
							</div>
						</li>
						: 
						<span>
							<Link to="/register"><li className="getStartedBttn">Register</li></Link>
							<Link to="/login" className="pull-right loginBttnNav"><li>Log in</li></Link>
						 </span>
					}
				</ul>
				<br style={{"clear":"both"}} />
			</div>
			<div className="siteHeaderWrap mobileHeaderWrap">
				<ul>
					<li className="pull-left navButtonClick" onClick={(e) => this.setState({"mobileSlider": !this.state.mobileSlider})}><img src={NavButton} /></li>
					<Link to="/"><li className="pull-left logoSite">{/*<span className="logoSvgHeader">{logoSvg}</span> */}<img src={LogoImage} style={{ height:"49px", width:"49px", marginTop:"-10px"}} /> </li></Link>
					{
						this.state.active == true ?
						<li className="pull-right accountDropdown darkV" >
							<div className="dAccountPreview">
							{
								this.state.src == "" ?
								  <div>
									<Link to="/profile" ><div data-tooltip="Upload Image" data-enabled="true" data-placement="bottom" className="image noImage" style={{"backgroundColor":"white"}}>{this.state.fName.split('')[0]}</div></Link>
									<p className="fullname" onClick={this.handleDropdown}>{this.state.fName} {this.state.lName}</p>
									<img className="dropdownToggle" onClick={this.handleDropdown} style={{"transform":this.state.dropdown == true ? "rotate(180deg)" : "rotate(0deg)"}} src={DropdownImage} />
								  </div>
								: 
								  <div>
									<Link to="/profile" > <div data-tooltip="Upload Image" data-enabled="true" data-placement="bottom" className="image" style={{"backgroundColor":"white","backgroundImage":"url('"+this.state.src+"'"}} ></div></Link>
									<p className="fullname"  onClick={this.handleDropdown}>{this.state.fName} {this.state.lName}</p>
									<img className="dropdownToggle" onClick={this.handleDropdown} style={{"transform":this.state.dropdown == true ? "rotate(180deg)" : "rotate(0deg)"}} src={DropdownImage} />
								  </div>
							}
							</div>
							<div className={this.state.dropdown == true ? "dAccountDropdown visible" : "dAccountDropdown"}>
								<ul>
									<li className="initialScreen">
										{
											this.state.src == "" ?
											  <div>
												<Link to="/profile" ><div className="image noImage" style={{"backgroundColor":"white"}}>{this.state.fName.split('')[0]}</div></Link>
												<Link to="/profile"><p style={{"color":"rgb(6, 103, 208)"}} className="dropName">{this.state.fName} {this.state.lName}</p></Link>
												<p className="dropEmail">{this.state.email}</p>
											  </div>
											: 
											  <div>
												<Link to="/profile" ><div className="image" style={{"backgroundColor":"white","backgroundImage":"url('"+this.state.src+"'"}} ></div></Link>
												<Link to="/profile"><p style={{"color":"rgb(6, 103, 208)"}} className="dropName">{this.state.fName} {this.state.lName}</p></Link>
												<p className="dropEmail">{this.state.email}</p>
											  </div>
										}														
									</li>
									<Link to="/creators"><li>My Creator</li></Link>
									<Link to="/settings/profile"><li>Account Settings</li></Link>
									<Link to="/referrals"><li>Invite Friends <span className="tag green pull-right">Get $10</span></li></Link>
									<a onClick={this.handleLogout}><li>Log out</li></a>
								</ul>
							</div>
						</li>
						: 
						<span>
							<Link to="/register"><li className="getStartedBttn">Register</li></Link>
							<Link to="/login" className="pull-right loginBttnNav"><li>Log in</li></Link>
						 </span>
					}
				</ul>
				<br style={{"clear":"both"}} />
			</div>

				<div className="mobileSlider" style={{"left":this.state.mobileSlider == true ? "0" : "-300px"}}>
					<a className="closeButton" onClick={this.handleMobileSlider} ><i className="fa fa-close"></i></a>
					<div className="mobileFooter">
						<img src={LogoWhiteImage} />
					</div>
					<hr style={{"width": "40px","marginTop": "-20px","border":"1px solid white","marginBottom": "40px"}} />
					<ul>
						<li><Link to="/">Fans</Link></li>
						<li><Link to="/tokensale">Creators</Link></li>
						<li><Link to="/tokensale2">Collectors</Link></li>
						<li><Link to="/tokensalepolicy">Learners</Link></li>
						{
							this.state.active == true ?
							""
							:
							<div style={{"textAlign":"center","paddingTop":"15px"}}>
								<Link to="/login" style={{"float":"none","width":"120px","display":"inline-block"}} className="pull-right loginBttnNav"><li style={{"backgroundColor":"transparent"}}>LOG IN</li></Link>
								<Link to="/register" style={{"display":"inline-block"}}><li className="getStartedBttn mobileMenu" style={{"width":"120px","float":"none","backgroundColor":"white"}}>Register</li></Link>
							</div>							
						}
					</ul>
					<hr style={{"width": "40px","marginTop": "40px","border":"1px solid white","marginBottom": "40px"}} />
				</div>

			<div onClick={(e) => this.setState({"mobileSlider": !this.state.mobileSlider})} className="bgMobileView" style={{"display":this.state.mobileSlider == true ? "block" : "none"}}>></div>
		</div>
		)
	}
}


export class WatchVideo extends React.Component {
	componentDidMount() {

	}
	render(){
		return (
			<div className="watchVideoWrapper" style={{"display":this.props.active == true ? "block" : "none"}}>
				<div className="watchBgColor" onClick={this.props.handleClose}></div>
				<div className="watchVideoWrap">
					<div className="closeButton" onClick={this.props.handleClose}>
						<i className="fa fa-close" ></i>
					</div>
					<iframe src="https://player.vimeo.com/video/262837539" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
				</div>
			</div>
		);
	}
}



export class SiteFooter extends React.Component {
	componentDidMount() {
	}
	render() {
		return (
			<div>
			<div className="siteFooterWrap">
				   {/*<img style={{"width":"133px"}} src={LogoWhiteImage} style={{height:"75px", width:"75px"}}alt="logo" /> 
				   <div className="icon-copyright-footer">
				      <ul className="iconsList">
				         <a target="_blank" href="https://www.facebook.com/FNBSX/">
				            <li style={{"color":"#2567e5"}}><i className="fa fa-facebook"></i></li>
				         </a>
				         <a target="_blank" href="https://twitter.com/FanbaseCoin">
				            <li style={{"color":"#2567e5"}}><i className="fa fa-twitter"></i></li>
				         </a>
				         <a target="_blank" href="https://www.linkedin.com/company/fnbsx/">
				            <li style={{"color":"#2567e5"}}><i className="fa fa-linkedin"></i></li>
				         </a>
				      </ul>
		            </div>*/}
				   <div className="terms-footer">
				      {/*<ul className="footer-list" style={{"marginTop":"10px"}}>
				         <a style={{"cursor":"pointer"}} onClick={this.props.handleClose}>
				            <li className="footer-list-child">Watch Video</li>
				         </a>
				          <Link to="/whitepaper"> 
				            <li className="footer-list-child">Whitepaper</li>
				          </Link>
                		</ul>*/}
				      <ul className="footer-list" style={{float:"left", marginLeft:"2%"}}>
				         <Link to="/terms">
				            <li className="footer-list-child">TERMS OF SERVICE</li>
				         </Link>
				         <Link to="/privacy">
				            <li className="footer-list-child">PRIVACY POLICY</li>
				         </Link>
				         <Link to="/tokensalepolicy"> 
				            <li className="footer-list-child">LEARN ABOUT US</li>
						 </Link>
					  </ul>
					  <br />
					  <br />
				       {/*<p style={{"color":"grey","fontSize":"13px","marginRight":"0"}}>© 2018<a href="https://www.fnbsx.org/TokenInfoPage" style={{"color":"purple"}}>   Fanbase</a> is the blockchain project that will change the way we all interact with our favorite media.</p>*/}

				   </div>
			</div>
			<WatchVideo active={this.props.active} handleClose={this.props.handleClose} />
			</div>
		)
	}
}