import React from "react";
import "./creators.css";
import {Link} from 'react-router-dom';
import Parse from 'parse';
import $ from 'jquery';
import {MainHeader,Footer} from "../header";
import {SiteFooter2} from "../header";
let rolesArray = ["Actor","Actor (Lead)","Animator","Artist (Visual)","Author","Author (Lead)","Casting Director","Cinematographer","Designer (Costume)","Designer (Graphics)","Designer (Motion Graphics)","Director","DJ/ Turntablist","Editor","Engineer (Audio)","Engineer (Software)","Executive Producer","Game Designer","Host (On-Air)","Instrumentalist ","Lighting","Producer","Production Manager","Programmer","Vocalist (Rapper, Singer)","Writer"];

export class Creators extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			"collaborators":[],
			"showCollab":false,
			"stageName":"",
			"roles":[],
			"companyWebsite":"",
			"projectTitle":"",
			"projectWebsite":"",
			"logoAttach":[],
			"projectSubtitle":"",
			"projectDescription":"",
			"projectMedium":"default",
			"projectPerks":"",
			"socialMedia":[],
			"promotionalBanners":[],
			"videoPitch":[],
			"videoPromo":[],
			"additonalAttachments":[],
			"licenseType":""
		}
	}
	componentDidMount(){
		if (localStorage.getItem('saved')) {
			this.setState({
				stageName:localStorage.getItem('stageName'),
				roles:JSON.parse(localStorage.getItem('roles')),
				companyWebsite:localStorage.getItem('companyWebsite'),
				projectTitle:localStorage.getItem('projectTitle'),
				projectWebsite:localStorage.getItem('projectWebsite'),
				projectSubtitle:localStorage.getItem('projectSubtitle'),
				projectDescription:localStorage.getItem('projectDescription'),
				projectMedium:localStorage.getItem('projectMedium'),
				projectPerks:localStorage.getItem('projectPerks'),
				socialMedia:JSON.parse(localStorage.getItem('socialMedia')),
				licenseType:localStorage.getItem('licenseType'),
				collaborators:localStorage.getItem('collaborators') == undefined ? [] : JSON.parse(localStorage.getItem('collaborators')) 
			})
		}
	}
	handlePublish = (e) => {
		let logoAttach = this.state.logoAttach,
			promotionalBanners = this.state.promotionalBanners,
			additonalAttachments = this.state.additonalAttachments,
			stageName = this.state.stageName,
			roles = this.state.roles,
			companyWebsite = this.state.companyWebsite,
			projectTitle = this.state.projectTitle,
			projectWebsite = this.state.projectWebsite,
			projectSubtitle = this.state.projectSubtitle,
			projectDescription = this.state.projectDescription,
			projectMedium = this.state.projectMedium,
			projectPerks = this.state.projectPerks,
			socialMedia = this.state.socialMedia,
			videoPitch = this.state.videoPitch,
			videoPromo = this.state.videoPromo,
			licenseType = this.state.licenseType;

			this.getAmazonUrl(logoAttach[0],(url) => {
				logoAttach[0] = url;

				if (promotionalBanners.length != 0) {
					promotionalBanners.map((file,index) => {
						this.getAmazonUrl(file.src,(url) => {
							promotionalBanners[index] = url;
							if (index == promotionalBanners.length - 1) {
								uploadAdditonalAttachments(this);
							}
						});
					})
				} else if (additonalAttachments.length != 0) {
					uploadAdditonalAttachments(this);				
				} else {
					if (videoPromo.length == 1) {
						if (videoPromo[0].thumbnailData) {
							this.getAmazonUrl(videoPromo[0].thumbnailData.src,(url) => {
								delete videoPromo[0].thumbnailData;
								videoPromo[0].thumbnailUrl = url;

								if (videoPitch.length == 1) {
									if (videoPitch[0].thumbnailData) {
										this.getAmazonUrl(videoPitch[0].thumbnailData.src,(url) => {
											delete videoPitch[0].thumbnailData;
											videoPitch[0].thumbnailUrl = url;
											finalizeAll(this)
										});
									} else {
										finalizeAll(this)
									}
								} else {
									finalizeAll(this)
								}
							});
						} else {
							finalizeAll(this)
						}
					} else if (videoPitch.length == 1) {
						if (videoPitch[0].thumbnailData) {
							this.getAmazonUrl(videoPitch[0].thumbnailData.src,(url) => {
								delete videoPitch[0].thumbnailData;
								videoPitch[0].thumbnailUrl = url;
								finalizeAll(this)
							});
						} else {
							finalizeAll(this)
						}
					} else {
						finalizeAll(this)
					}
				}


			})
			function uploadAdditonalAttachments(e) {
				if (additonalAttachments.length != 0) {
					additonalAttachments.map((file,index) => {
						e.getAmazonUrl(file.src,(url) => {
							additonalAttachments[index] = url;
							if (index == additonalAttachments.length - 1) {
								finalizeAll(e)
							}							
						})
					})					
				} else {
					finalizeAll(e);
				}
			}
			function finalizeAll(e) {
				const Projects = Parse.Object.extend("Projects");
				const project = new Projects();
				project.set("creator", Parse.User.current());
				project.set("stageName", stageName);
				project.set("roles", roles);
				project.set("companyWebsite", companyWebsite);
				project.set("projectTitle", projectTitle);
				project.set("projectWebsite", projectWebsite);
				project.set("projectSubtitle", projectSubtitle);
				project.set("projectDescription", projectDescription);
				project.set("projectMedium", projectMedium);
				project.set("projectPerks", projectPerks);
				project.set("socialMedia", socialMedia);
				project.set("videoPitch", videoPitch);
				project.set("videoPromo", videoPromo);
				project.set("licenseType", licenseType);

				project.set("logoAttach", logoAttach);
				project.set("promotionalBanners", promotionalBanners);
				project.set("additonalAttachments", additonalAttachments);
				project.save()
				.then((data) => {
				  if (e.state.collaborators.length != 0) {
				  	e.createCollaborators(data.id);
				  } else {
				  	e.handleEraseLocal();
				  	alert('New object created with objectId: ' + data.id);
				  }
				}, (error) => {
				  alert(error.message);
				});
			}
	}
	createCollaborators = (id) => {
		var collaborators = this.state.collaborators;
		var projectTitle = this.state.projectTitle;
		let collabEmails = collaborators.map(a => a.email);
		collaborators.map((user,i) => {
			const Project_Collaborators = Parse.Object.extend("Project_Collaborators");
			const collab = new Project_Collaborators();
			collab.set("creator", Parse.User.current());
			collab.set("project", {
				"objectId":id,
				"className":"Projects",
				"__type":"Pointer"
			});
			collab.set("no_user_details", {
				"fname":user.fname,
				"lname":user.lname,
				"email":user.email,
			});
			collab.set('role',user.role);
			collab.save()
			.then((data) => {					
				if (i == collaborators.length - 1) {
					Parse.Cloud.run('sendCollaboratorEmail', {
						 "email":Parse.User.current().get('email'),
						 "referralLink":"",
						 "fname":Parse.User.current().get('fname'),
						 "lname":Parse.User.current().get('lname'),
						 "projectName":projectTitle,
						 "emails":collabEmails
					}, {
					success: function(results) {
						alert('all users have been added to collaborators');
					}, error:function(err){
						alert(err.message);
					}});
				}
			}, (error) => {
			  alert(error.message);
			});
		}) 
	}
	getAmazonUrl = (file,callback) => {
		let type = file.type == undefined ? "application/pdf" : file.type;
		let src = file.src == undefined ? file : file.src;
		Parse.Cloud.run('uploadProjectImage', {
			 "base64":src,
			 "type":type,
		}, {
		success: function(results) {
			callback(results)
		}, error:function(err){
			console.log(err.message);
		}});		
	}
	handleGeneralInput = (value,type) => {
	    this.setState({
	      [type]: value
	    });
	}
	handleSaveLocal = (e) => {
		localStorage.setItem('saved','true');
		localStorage.setItem('stageName',this.state.stageName);
		localStorage.setItem('roles', JSON.stringify(this.state.roles));
		localStorage.setItem('companyWebsite',this.state.companyWebsite);
		localStorage.setItem('projectTitle',this.state.projectTitle);
		localStorage.setItem('projectWebsite',this.state.projectWebsite);
		localStorage.setItem('projectSubtitle',this.state.projectSubtitle);
		localStorage.setItem('projectDescription',this.state.projectDescription);
		localStorage.setItem('projectMedium',this.state.projectMedium);
		localStorage.setItem('projectPerks',this.state.projectPerks);
		localStorage.setItem('socialMedia',JSON.stringify(this.state.socialMedia));
		localStorage.setItem('licenseType',this.state.licenseType);
		localStorage.setItem('collaborators', JSON.stringify(this.state.collaborators));
		alert('Your data has been saved');
	}
	handleEraseLocal = (e) => {
		localStorage.removeItem('saved')
		localStorage.removeItem('stageName')
		localStorage.removeItem('roles')
		localStorage.removeItem('companyWebsite')
		localStorage.removeItem('projectTitle')
		localStorage.removeItem('projectWebsite')
		localStorage.removeItem('projectSubtitle')
		localStorage.removeItem('projectDescription')
		localStorage.removeItem('projectMedium')
		localStorage.removeItem('projectPerks')
		localStorage.removeItem('socialMedia')
		localStorage.removeItem('collaborators')
		localStorage.removeItem('licenseType')	
	}
	removeCollab = (value) => {
		var collab = this.state.collaborators;
		let filtered = collab.findIndex(e => e.email == value);
		collab.splice(filtered,1);
		this.setState({"collaborators":collab});
	}
	render(){
		return (
			<div>
				<div className="page indexPageWrap">
					<MainHeader />
					<div className="creator-main-wrapper">
						<p className="section-title">Create a Project</p>
						<div className="section-main">
							<div className="section-sub-title">Creator </div>
							<div className="section-left-side">
								<div className="section-input-wrap">
									<p className="s-input-title">Stage Name:</p>
									<input value={this.state.stageName} onChange={(e) => this.handleGeneralInput(e.target.value,'stageName')} type="text" placeholder="Band name or alias will replace name" />
								</div>
							</div>
							<div className="section-right-side">
								<div className="section-input-wrap">
									<p className="s-input-title">Up to 6 roles: <span className="required-star">Required *</span></p>
									<TagInput chosenData={this.state.roles} maxSize="6" onChange={(e) => this.setState({"roles":e})} data={rolesArray} />
								</div>
								<div className="section-input-wrap">
									<div className="s-input-title">As a Representative or Agent of: <InfoTooltip position="top" message="Only provide a link to your company if this media product is property of that company."><i className="fa fa-info-circle"></i></InfoTooltip></div>	
									<input value={this.state.companyWebsite} onChange={(e) => this.handleGeneralInput(e.target.value,'companyWebsite')} type="text" placeholder="http:// My company website" />
								</div>	
							</div>
						</div>
						<div className="section-main">
							<p className="section-sub-title">Project Details</p>
							<div className="section-left-side">
								<div className="section-input-wrap">
									<p className="s-input-title">Working Title: <span style={{"paddingLeft":"7px"}} className="character-count">{100 - this.state.projectTitle.length}</span><span className="required-star">Required *</span></p>
									<input value={this.state.projectTitle} maxLength="100" onChange={(e) => this.handleGeneralInput(e.target.value,'projectTitle')} type="text" placeholder="i.e. Ghost Busters" />
								</div>

								<div className="section-input-wrap">
									<p className="s-input-title">Tag Line: <span className="character-count">{150 - this.state.projectSubtitle.length}</span></p>
									<input value={this.state.projectSubtitle} maxLength="150" onChange={(e) => this.handleGeneralInput(e.target.value,'projectSubtitle')} type="text" placeholder="i.e. Who you gonna call?" />
								</div>

								<div className="section-input-wrap">
									<p className="s-input-title">Description: <span className="character-count">{1000 - this.state.projectDescription.length}</span></p>
									<textarea value={this.state.projectDescription} maxLength="1000" onChange={(e) => this.handleGeneralInput(e.target.value,'projectDescription')} rows="12" placeholder="This is the synopsis, the concept, or the summary. This is in story form:
									i.e. Imagine a world where (dinosaurs roam the earth)..."></textarea>
								</div>

								<div className="section-input-wrap">
								<p className="s-input-title">Project website:</p>
									<input value={this.state.projectWebsite} onChange={(e) => this.handleGeneralInput(e.target.value,'projectWebsite')} style={{"marginTop":"10px"}} type="text" placeholder="https://" />
								</div>
							</div>
							<div className="section-right-side">
								<div className="section-input-wrap">
									<p className="s-input-title">Logo: <span className="required-star">Required *</span></p>
									<AttachmentsWrapper chosenData={this.state.logoAttach} extraClasses="logo-wrapper" maxUploads="1" maxFileSize="2.5" handleChange={(e) => this.setState({"logoAttach":e})} />
								</div>								
								<div className="section-input-wrap">
									<p className="s-input-title">This project is best described as: <span className="required-star">Required *</span></p>
									<select value={this.state.projectMedium} onChange={(e) => this.handleGeneralInput(e.target.value,'projectMedium')} >
										<option value="default">Medium</option>
										<option>App</option>
										<option>Game</option>
										<option>Film</option>
										<option>Graphic Design</option>
										<option>Magazine</option>
										<option>Meme or .Gif</option>
										<option>Music</option>
										<option>Newspaper</option>
										<option>Photography</option>
										<option>Radio or Podcast</option>
										<option>Sounds</option>
										<option>TV Show or Web Series</option>
										<option>Website</option>
										<option>Video</option>
									</select>
								</div>		
								<div className="section-input-wrap">
									<div className="s-input-title">Perks: <InfoTooltip position="top" message="All perks are listed here, but are not necessarily contractually bound to project unless listed again in the promise section. To adjust these perks is not a contractual deal breaker, although it would be a flaggable event."><i className="fa fa-info-circle"></i></InfoTooltip> <span className="character-count">{2500 - this.state.projectPerks.length}</span></div>
									<textarea value={this.state.projectPerks} maxLength="2500" onChange={(e) => this.handleGeneralInput(e.target.value,'projectPerks')} rows="12" placeholder="This is the description of events, screenings, releases, giveaways, and titles like ‘Executive Producer’ that investors should expect, based on the level they contribute."></textarea>
								</div>
							</div>
							<div className="section-input-wrap two">
								<p className="s-input-title">Social Media: <span style={{"paddingLeft":"370px","float":"none"}} className="character-count">Up to 10</span></p>
								<SocialPlatformInput chosenData={this.state.socialMedia} maxAccounts="10" handleChange={(e) => this.setState({"socialMedia":e})} />
							</div>
						</div>
						<div className="section-main">
							<p className="section-sub-title">Project Attachments</p>
							<div className="section-input-wrap">
								<p className="s-input-title">Promotional Images: <span style={{"paddingLeft":"250px","float":"none"}} className="character-count">Up to 5</span></p>
								<AttachmentsWrapper chosenData={this.state.promotionalBanners} maxUploads="5" maxFileSize="5" extraClasses="promotional-banners-attach" handleChange={(e) => this.setState({"promotionalBanners":e})} />
							</div>
							<div className="section-left-side">
								<YoutubeLinkThumb chosenData={this.state.videoPitch} title="Video Pitch:" placeholder="http:// This is a two minute personal appeal" handleChange={(e) => this.setState({"videoPitch":e})} />
								<YoutubeLinkThumb chosenData={this.state.videoPromo} title="Video Promo:" placeholder="http:// This is a two minute teaser video" handleChange={(e) => this.setState({"videoPromo":e})} />
							</div>
							<div className="section-input-wrap">
								<div className="s-input-title">Additional Attachments: <InfoTooltip position="top" message="Attach additional .pdf documents like insurance policies, scripts, or storyboards."><i className="fa fa-info-circle"></i></InfoTooltip> <span style={{"paddingLeft":"220px","float":"none"}} className="character-count">Up to 6</span></div>
								<AttachmentsWrapper chosenData={this.state.additonalAttachments} maxUploads="6" maxFileSize="5" allowPDF maxPDFSize="15" extraClasses="promotional-banners-attach" handleChange={(e) => this.setState({"additonalAttachments":e})} />
							</div>
						</div>
						<div className="section-main">
							<div className="section-sub-title">Add Collaborators <InfoTooltip position="top" message="All likely collaborators are listed here, but are not necessarily contractually bound to project. All contractually bound, ‘principal’ collaborators are listed again in the ‘Promise’ section. Only changes to ‘Principals’ affect financing."><i className="fa fa-info-circle"></i></InfoTooltip> <span className="character-count">Up to 25</span></div>
							<div className="section-left-side">
								<div className="collaborators-all-wrap">
									{
										this.state.collaborators.map((e,i) => {
											return <span onClick={(a) => this.removeCollab(e.email)}>{e.email}</span>
										})
									}
									{
										this.state.collaborators.length < 25 ?
										<a onClick={(e) => this.setState({"showCollab":!this.state.showCollab})} className={this.state.showCollab == true ? "add-collab-bttn close" : "add-collab-bttn"}><svg width="20" height="20" viewBox="0 0 24 24"><path d="M14.8284 12l4.2427 4.2426c.781.781.781 2.0474 0 2.8285-.781.781-2.0474.781-2.8285 0L12 14.8284l-4.2426 4.2427c-.781.781-2.0474.781-2.8285 0-.781-.781-.781-2.0474 0-2.8285L9.1716 12 4.9289 7.7574c-.781-.781-.781-2.0474 0-2.8285.781-.781 2.0474-.781 2.8285 0L12 9.1716l4.2426-4.2427c.781-.781 2.0474-.781 2.8285 0 .781.781.781 2.0474 0 2.8285L14.8284 12z" fill-rule="evenodd"></path></svg></a>
										: ""
									}
								</div>
								{
									this.state.showCollab ?
									<AddCollaborator collaborators={this.state.collaborators} handleChange={(e) => this.setState({"collaborators":e,"showCollab":false})} />
									: ""
								}
							</div>
						</div>
						<div className="section-main">
							<p className="section-sub-title">Choose a License <span className="required-star">Required *</span></p>
							<div className="section-input-wrap">
								<input onChange={(e) => this.handleGeneralInput('limited','licenseType')} type="radio" name="license" value="limited" id="limitedLicense" checked={this.state.licenseType == 'limited' ? true : false} />
								<label htmlFor="limitedLicense" style={{"display":"inline-block","width":"600px","paddingLeft":"20px","verticalAlign":"middle"}}>
									<p className="s-input-title">LIMITED LICENSE</p>
									<p className="s-input-descr">I am stating that my finished product will be a collector’s item, of a limited number between 1 and 100,000 for auction on the fanbase platform. I accept the Limited License terms of service.</p>
								</label>
							</div>
							<div className="section-input-wrap">
								<input onChange={(e) => this.handleGeneralInput('unlimited','licenseType')} type="radio" name="license" value="limited" id="unlimitedLicense" checked={this.state.licenseType == 'unlimited' ? true : false}/>
								<label htmlFor="unlimitedLicense" style={{"display":"inline-block","width":"600px","paddingLeft":"20px","verticalAlign":"middle"}}>
									<p className="s-input-title">UNLIMITED LICENSE</p>
									<p className="s-input-descr">I am stating that my finished product will be a mass market item for sale in an unlimited fashion, on all exploitable platforms and possible services known to man now or in the future. I accept the Unlimited License terms of service.</p>
								</label>
							</div>	
							{
								this.state.roles.length == 0 ?
								<a className="finalBttn red">Please set at least one role</a>
								: this.state.projectTitle.replace(/ /g,'') == "" ?
								<a className="finalBttn red">Please set a working title</a> 
								: this.state.logoAttach.length == 0 ?
								<a className="finalBttn red">Please upload a project logo</a> 
								: this.state.projectMedium == "default" ?
								<a className="finalBttn red">Please choose a medium</a>
								: this.state.licenseType == "" ?
								<a className="finalBttn red">Please set a license</a>
								:
								<a onClick={this.handlePublish} className="finalBttn">Publish</a> 
							}
							<br style={{"clear":"both"}} />

							<a onClick={this.handleSaveLocal} className="finalBttn saveExitBttn">Save and Exit</a> 
						</div>
					</div>			
				</div>
				<SiteFooter2 handleClose={this.handleWatchVideo} active={this.state.videoShow} />
			</div>
		)
	}
}


class AttachmentsWrapper extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			"attachments":[]
		}
	}
	// e -> files
	handleFile3Change = (files) => {
		//var files = this.refs.fileInput3.files;
		var files = files;
		var r = this;
		var boxE = this.refs.uploadContainer;
		var maxSize = this.props.maxSize;
		var maxFileSize = this.props.maxFileSize;
		var maxPDFSize = this.props.maxPDFSize;
		var allowPDF = this.props.allowPDF;
		var _URL = window.URL || window.webkitURL;
		if (files.length > 0) {
			var file = files[0];
			var fileSize = (file.size/1024/1024).toFixed(2);
			if (file.type == "image/png" || file.type == "image/jpeg" || file.type == "image/jpg" || file.type == "application/pdf") {
				if (allowPDF && file.type == 'application/pdf') {
					if (maxPDFSize) {
						//fileSize > maxPDFSize -> Number(fileSize) > Number(maxPDFSize)
		           		if (Number(fileSize) > Number(maxPDFSize)) {
				           $(boxE).css('backgroundColor',"rgba(255, 0, 0,0.05)");
				           $(boxE).find('.attachment-title').html('The size is too big. (' + fileSize + 'mb)');
				           $(boxE).find('.attachment-title').css('color','red');
		           		} else {
							var reader  = new FileReader();
							reader.onloadend = function () {
								r.setState({
									attachments: r.state.attachments.concat({
										"name":file.name,
										"type":file.type,
										"src":reader.result
									})
								})
							}
							reader.readAsDataURL(file);
							setTimeout((e) => {
								r.props.handleChange(r.state.attachments)
							},100)
		           		}
		           }
				} else if (file.type == "application/pdf") {
		           $(boxE).css('backgroundColor',"rgba(255, 0, 0,0.05)");
		           $(boxE).find('.attachment-title').html('Invalid File Format. Must be png/jpg');
		           $(boxE).find('.attachment-title').css('color','red');
				} else {
					var img = new Image();
			        img.onload = function() {
			        	if (maxSize) {
				           if (this.width > maxSize || this.height > maxSize) {
					           $(boxE).css('backgroundColor',"rgba(255, 0, 0,0.05)");
					           $(boxE).find('.attachment-title').html('The size is too big. (' + this.width + '/' + this.height + 'px)');
					           $(boxE).find('.attachment-title').css('color','red');
				           } else {
								var reader  = new FileReader();
								reader.onloadend = function () {
									r.setState({
										attachments: r.state.attachments.concat({
											"type":file.type,
											"src":reader.result
										})
									})
								}
								reader.readAsDataURL(file);
								setTimeout((e) => {
									r.props.handleChange(r.state.attachments)
								},100)
				           }
			           } else if (maxFileSize) {
						   // fileSize > maxFileSize -> 
			           		if (Number(fileSize) > Number(maxFileSize)) {
					           $(boxE).css('backgroundColor',"rgba(255, 0, 0,0.05)");
					           $(boxE).find('.attachment-title').html('The size is too big. (' + fileSize + 'mb)');
					           $(boxE).find('.attachment-title').css('color','red');
			           		} else {
								var reader  = new FileReader();
								reader.onloadend = function () {
									r.setState({
										attachments: r.state.attachments.concat({
											"type":file.type,
											"src":reader.result
										})
									})
								}
								reader.readAsDataURL(file);
								setTimeout((e) => {
									r.props.handleChange(r.state.attachments)
								},100)
			           		}
			           }
			        };
			        img.src = _URL.createObjectURL(file);
		        }
			} else {
				$(boxE).css('backgroundColor',"rgba(255, 0, 0,0.05)");
				if (allowPDF) {
					$(boxE).find('.attachment-title').html('Invalid File Format. Must be png/jpg/pdf');
				} else {
					$(boxE).find('.attachment-title').html('Invalid File Format. Must be png/jpg');
				}
				$(boxE).find('.attachment-title').css('color','red');
			}
		}		
	}
	handleAttachRemove = (place) => {
		var attachments = this.state.attachments;
		attachments.splice(place,1);
		this.setState({attachments})
	}	
	/* Roys code start  */ 
	onDragOver = (event) => {    
		event.preventDefault()
	}
	onDrop = (event) => {
		event.preventDefault()
		this.handleFile3Change(event.dataTransfer.files)
	}
	/* Roys code end */ 



	render(){
		return (
			<div className={"attachment-wrapper " + this.props.extraClasses}>
				{
					this.state.attachments.map((e,i) => {
						if (e.type == "application/pdf") {
							return (
								<div className="attached-box-upload">
									<div onClick={(e) => this.handleAttachRemove(i)} className="delete-attach-box">
										<svg width="20" height="20" viewBox="0 0 24 24"><path d="M14.8284 12l4.2427 4.2426c.781.781.781 2.0474 0 2.8285-.781.781-2.0474.781-2.8285 0L12 14.8284l-4.2426 4.2427c-.781.781-2.0474.781-2.8285 0-.781-.781-.781-2.0474 0-2.8285L9.1716 12 4.9289 7.7574c-.781-.781-.781-2.0474 0-2.8285.781-.781 2.0474-.781 2.8285 0L12 9.1716l4.2426-4.2427c.781-.781 2.0474-.781 2.8285 0 .781.781.781 2.0474 0 2.8285L14.8284 12z" fill-rule="evenodd"></path></svg>
									</div>
									<p className="pdf-title">{e.name}</p>
								</div>
							)
						} else {
							return (
								<div className="attached-box-upload">
									<div onClick={(e) => this.handleAttachRemove(i)} className="delete-attach-box">
										<svg width="20" height="20" viewBox="0 0 24 24"><path d="M14.8284 12l4.2427 4.2426c.781.781.781 2.0474 0 2.8285-.781.781-2.0474.781-2.8285 0L12 14.8284l-4.2426 4.2427c-.781.781-2.0474.781-2.8285 0-.781-.781-.781-2.0474 0-2.8285L9.1716 12 4.9289 7.7574c-.781-.781-.781-2.0474 0-2.8285.781-.781 2.0474-.781 2.8285 0L12 9.1716l4.2426-4.2427c.781-.781 2.0474-.781 2.8285 0 .781.781.781 2.0474 0 2.8285L14.8284 12z" fill-rule="evenodd"></path></svg>
									</div>
									<img src={e.src} />
								</div>
							)							
						}
					})
				}				
				{
					this.props.maxUploads != this.state.attachments.length ? 
					<div ref="uploadContainer" 
					onClick={(e) => this.refs.fileInput3.click()} 
					className="attachment-box"
					/* Roys code start*/ 
					onDragOver={this.onDragOver} 
                    onDrop={this.onDrop}>
					{/* Roys code end*/ }
						<p className="attachment-title">
							<img src={require('../../../images/upload-button.png')} />Click or drag to add a png/jpg{this.props.allowPDF ? "/pdf" : ""}
						</p>
						{
							this.props.maxSize ?
							<p className="attach-max-size">{this.props.maxSize} by {this.props.maxSize} (px)</p>
							: this.props.maxPDFSize ?
							<p className="attach-max-size">{this.props.maxPDFSize} (mb)</p>
							: this.props.maxFileSize ?
							<p className="attach-max-size">{this.props.maxFileSize} (mb)</p>
							: ""
						}
						{/* Roys code start*/ }
						<input type="file" onChange={(e) => this.handleFile3Change(e.target.files)} onClick={(e) => e.target.value = null} hidden ref="fileInput3" />
						{/* Roys code end*/ }
					</div>
					: ""
				}
			</div>
		)
	}
}

class YoutubeLinkThumb extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			"services":["vimeo.com","facebook.com","instagram.com","youku.com","weibo.com","twitch.tv","amazon.com","dailymotion.com","veoh.com","metacafe.com","hulu.com","hotstar.com","Dlive.tv","us.hotstar.com","bitchute.com","bit.tube","d.tube"],
			"youtubeLink":"",
			"showThumbnail":false,
			"thumbnailUrl":"",
			"thubmnailData":undefined
		}
	}
	componentWillReceiveProps(prps) {
		if (prps.chosenData && prps.chosenData.length == 1) {
			if (this.state.thumbnailUrl != prps.chosenData[0].thumbnailUrl) {
				this.setState({
					"thumbnailUrl":prps.chosenData[0].thumbnailUrl == undefined ? "" : prps.chosenData[0].thumbnailUrl,
				})				
			} 
		    if (this.state.youtubeLink != prps.chosenData[0].videoLink) {
				this.setState({
					"youtubeLink":prps.chosenData[0].videoLink,
				})	
			}
		    if (this.state.thubmnailData != prps.chosenData[0].thumbnailData) {
				this.setState({
					"thubmnailData":prps.chosenData[0].thumbnailData,
					"showThumbnail":true
				});
			}
		}
	}
	handleChange = (e) => {
		let value = e.target.value;
		let services = this.state.services;
		this.setState({"youtubeLink":value});
		if (value.includes('youtube.com')) {
			let match = value.match(/v=([0-9a-z_-]{1,20})/i);
			if (match) {
				this.setState({"thumbnailUrl":"https://img.youtube.com/vi/"+match[1]+"/0.jpg",'showThumbnail':false});
				this.props.handleChange([{
					"thumbnailUrl":"https://img.youtube.com/vi/"+match[1]+"/0.jpg",
					"videoLink":value
				}])
			} else {
				this.setState({"thumbnailUrl":"",'showThumbnail':false})
				this.props.handleChange([])
			}
		} else if (value.replace(/ /g,'') == "") {
			this.setState({"thumbnailUrl":"",'showThumbnail':false})
			this.props.handleChange([])
		} else {
			value = value.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "");
			value = "https://"+value;
			if (isURL(value)) {
				var newV = value.toLowerCase();
				var filtered = services.filter((e) => {
					return newV.includes(e.toLowerCase());
				})
				if (filtered == "") {
					this.setState({"thumbnailUrl":""})
					this.props.handleChange([])
				} else {
					if (this.state.thubmnailData) {
						this.props.handleChange([{
							"videoLink":value,
							"thumbnailData":this.state.thubmnailData
						}])
					}
					this.setState({"showThumbnail":true})
				}
			} else {
				this.setState({"showThumbnail":false})
				this.props.handleChange([])
			}
		}
	}
	handleFileChange = (e) => {
		this.setState({"thubmnailData":e})
		this.props.handleChange([{
			"videoLink":this.state.youtubeLink,
			"thumbnailData":e
		}])
	}
	render(){
		return (
			<div className="section-input-wrap">
				<p className="s-input-title">{this.props.title}</p>
				{
					this.state.showThumbnail ?
					<div style={{"marginBottom":"5px"}}>
						<AttachmentsWrapper chosenData={this.state.thubmnailData} maxUploads="1" maxFileSize="5" handleChange={this.handleFileChange} />
					</div>
					: ""
				}
				{
					this.state.thumbnailUrl != "" ?
					<div className="youtube-thumbnail-wrap">
						<img src={this.state.thumbnailUrl} />
					</div>
					: ""
				}
				<input onChange={this.handleChange} value={this.state.youtubeLink} type="text" placeholder={this.props.placeholder ? this.props.placeholder : "What is the video link?"} />
			</div>
		)
	}
}

class TagInput extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			"tags":[],
			"filtered":[],
			"inputValue":"",
			"chosenTags":[]
		}
	}
	componentDidMount(){
		this.setState({"tags":this.props.data});
	}
	componentWillReceiveProps(prps) {
		if (this.state.chosenTags != prps.chosenData) {
			this.setState({"chosenTags":prps.chosenData});
		}
	}
	handleChange = (e) => {
		var value = e.target.value;
		var data = this.state.tags;
		var filtered = data.filter((e) => {
			return e.toLowerCase().startsWith(value.toLowerCase());
		})
		if (filtered.length > 0) {
			$(this.refs.tagDropDown).addClass('visible');
		} else {
			$(this.refs.tagDropDown).removeClass('visible');
		}
		if (value == "") {
			$(this.refs.tagDropDown).removeClass('visible');
		}
		this.setState({"inputValue":value,filtered});
	}
	addTag = (value) => {
		$(this.refs.roleInput).focus();
		var chosenTags = this.state.chosenTags;
		if (this.props.maxSize > this.state.chosenTags.length) {
			chosenTags.push(value);
			this.setState({ chosenTags });
			this.props.onChange(chosenTags)
		}
	}
	removeTag = (value) => {
		var chosenTags = this.state.chosenTags;
		var index = chosenTags.indexOf(value);
		if (index >= 0) {
			chosenTags.splice(index,1);
			this.setState({chosenTags})
			this.props.onChange(chosenTags)
		}
	}
	render(){
		return (
			<div className="tag-input-wrap">
				<div className="chosen-tags-wrap">
					{
						this.state.chosenTags.map((e,i) => {
							return (<span onClick={(a) => this.removeTag(e)} key={i}>{e}</span>)
						})
					}
				</div>
				<input ref="roleInput" onFocus={(e) => $(this.refs.tagDropDown).addClass('visible')} onBlur={(e) => $(this.refs.tagDropDown).removeClass('visible')} onChange={this.handleChange} value={this.state.inputValue} type="text" placeholder="What is your role?" />
				<div ref="tagDropDown" className="tags-all-dropdown">
					<ul>
						{
							this.state.filtered.length > 0 ?
							this.state.filtered.map((e,i) => {
								if (!this.state.chosenTags.includes(e)) {
									return (<li onClick={(a) => this.addTag(e)} key={i}>{e}</li>)
								}
							})
							:
							this.state.tags.map((e,i) => {
								if (!this.state.chosenTags.includes(e)) {
									return (<li onClick={(a) => this.addTag(e)} key={i}>{e}</li>)
								}
							})
						}
					</ul>
				</div>
			</div>
		)
	}
}


class SocialPlatformInput extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			"accounts":[],
			"inputValue":"",
			"showAdd":"",
			"social":["facebook","twitter","tumblr","instagram","google-plus","snapchat","vk","pinterest","linkedin","telegram","reddit","taringa","foursquare","youtube"]
		}
	}
	componentWillReceiveProps(prps) {
		if (this.state.accounts != prps.chosenData) {
			this.setState({
				"accounts":prps.chosenData
			});
		}
	}
	onInputChange = (e) => {
		var value = e.target.value;
		var social = this.state.social;
		this.setState({"inputValue":value});
		if (value == "") {
			this.setState({"showAdd":""});
		}
		if (value.replace(/ /g,'') != "") {
			value = value.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "");
			value = "https://"+value;
			if (isURL(value)) {
				var newV = value.toLowerCase();
				var filtered = social.filter((e) => {
					return newV.includes(e.toLowerCase());
				})
				if (filtered == "") {
					this.setState({"showAdd":"custom"});
				} else {
					this.setState({"showAdd":filtered});
				}
			}
		}
	}
	addSocialAccount = (type) => {
		var accounts = this.state.accounts;
		var filtered = "";
		if (accounts.length > 0) {
			filtered = accounts.filter((e) => {
				return e.username != undefined ? this.state.inputValue == e.username.toLowerCase() : "";
			})
		}
		if (filtered == "") {
			if (accounts.length < this.props.maxAccounts) {
				var value = this.state.inputValue;
				value = value.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "");
				value = "https://"+value;
				accounts.push({
					"type":type,
					"username":value
				})
				this.setState({accounts,"inputValue":"","showAdd":""});
				$(this.refs['social-add-input']).focus();
			}
		}
	}
	removeSocial = (index) => {
		var accounts = this.state.accounts;
		accounts[index] = "";
		this.setState({accounts});
	}
	render(){
		return (
			<div className="tag-input-wrap">
				<div className="social-tags-wrap">
					{
						this.state.accounts.map((e,i) => {
							if (e != "") {
							return (
									<span title={e.username} key={i}>
										<div onClick={(e) => this.removeSocial(i)} className="delete-attach-box">
											<svg width="20" height="20" viewBox="0 0 24 24"><path d="M14.8284 12l4.2427 4.2426c.781.781.781 2.0474 0 2.8285-.781.781-2.0474.781-2.8285 0L12 14.8284l-4.2426 4.2427c-.781.781-2.0474.781-2.8285 0-.781-.781-.781-2.0474 0-2.8285L9.1716 12 4.9289 7.7574c-.781-.781-.781-2.0474 0-2.8285.781-.781 2.0474-.781 2.8285 0L12 9.1716l4.2426-4.2427c.781-.781 2.0474-.781 2.8285 0 .781.781.781 2.0474 0 2.8285L14.8284 12z" fill-rule="evenodd"></path></svg>
										</div>
										{
											e.type == "custom" ?
											<i className={"fa fa-link"}></i>
											: 
											<i className={"fa fa-"+e.type}></i>
										}
										<p>{e.username}</p>
									</span>
									)
							}
						})
					}
				</div>
				<input className="social-add-input" ref="social-add-input" onChange={this.onInputChange} value={this.state.inputValue} type="text" placeholder="https:// " />
				{
					this.state.accounts.length < this.props.maxAccounts ?
					this.state.showAdd != "" ?
					this.state.showAdd == "custom" ?
					<a onClick={(e) => this.addSocialAccount(this.state.showAdd)} className="add-social-platform">Add Social Platform</a>
					:
					<a onClick={(e) => this.addSocialAccount(this.state.showAdd)} className="add-social-platform">Add {this.state.showAdd} link</a>
					: <a className="add-social-platform">Add Social Platform</a>
					: <a className="add-social-platform">Add Social Platform</a>
				}
			</div>
		)
	}
}



class AddCollaborator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			"fname":"",
			"lname":"",
			"role":[],
			"email":""
		}
	}
	componentDidMount(){
		setTimeout((e) => {
			this.refs.fname.focus()
		},1)
	}
	addToList = (e) => {
		var collaborators = this.props.collaborators;
		var filtered = collaborators.filter((e) => {
			return e.email.toLowerCase() == this.state.email.toLowerCase();
		})
		if (filtered == "") {
			collaborators.push({
				"fname":this.state.fname,
				"lname":this.state.lname,
				"role":this.state.role,
				"email":this.state.email
			})
			this.props.handleChange(collaborators);
		} else {
			$(this.refs['error-collab-message']).css('color',"#f03f59");
			$(this.refs['error-collab-message']).html('There is already a collaborator with that email.');
		}
	}
	render(){
		return (
			<div className="collaborator-wrap">
				<div onClick={(e) => this.props.handleChange(this.props.collaborators)} className="delete-attach-box">
					<svg width="20" height="20" viewBox="0 0 24 24"><path d="M14.8284 12l4.2427 4.2426c.781.781.781 2.0474 0 2.8285-.781.781-2.0474.781-2.8285 0L12 14.8284l-4.2426 4.2427c-.781.781-2.0474.781-2.8285 0-.781-.781-.781-2.0474 0-2.8285L9.1716 12 4.9289 7.7574c-.781-.781-.781-2.0474 0-2.8285.781-.781 2.0474-.781 2.8285 0L12 9.1716l4.2426-4.2427c.781-.781 2.0474-.781 2.8285 0 .781.781.781 2.0474 0 2.8285L14.8284 12z" fill-rule="evenodd"></path></svg>
				</div>
				<div className="section-input-wrap">
					<p ref="error-collab-message" className="s-input-title">Invite a new User</p>
					<div className="section-input-wrap two">
						<p className="s-input-title">Name <span className="required-star">Required *</span></p>
						<input ref="fname" value={this.state.fname} onChange={(e) => this.setState({"fname":e.target.value})} type="text" placeholder="First Name" />
						<input value={this.state.lname} onChange={(e) => this.setState({"lname":e.target.value})} type="text" placeholder="Last Name" />
					</div>
					<div className="section-input-wrap">
						<p className="s-input-title">Email <span className="required-star">Required *</span></p>
						<input value={this.state.email} onChange={(e) => this.setState({"email":e.target.value})} type="text" placeholder="Email Address" />
					</div>
					<div className="section-input-wrap">
						<p className="s-input-title">Up to 6 roles <span className="required-star">Required *</span></p>
						<TagInput chosenData={this.state.role} maxSize="6" onChange={(e) => this.setState({"role":e})} data={rolesArray} />
					</div>
					{
						this.state.fname.replace(/ /g,'') != "" && this.state.lname.replace(/ /g,'') != "" && this.state.role.length != 0 && isEmail(this.state.email) != false ?
						<a onClick={this.addToList} className="add-social-platform pull-right">Create collaborator</a> 
						:
						<a style={{"backgroundColor":"#f03f59"}} className="add-social-platform pull-right">Fill in the fields</a> 
					}
					<br style={{"clear":"both"}} />
				</div>
			</div>
		)
	}
}


class InfoTooltip extends React.Component {
	render(){
		return (
			<div className="tooltip-global-wrap">
				<div className={"tooltip-inner-content " + this.props.position}>
					<span className="tooltip-content">
						{this.props.children}
					</span>
					<div className="tooltip-message">	
						<p>{this.props.message}</p>
					</div>
				</div>
			</div>
		)
	}
}







function isURL(str) {
  return /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/.test(str); 
}
function isEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


