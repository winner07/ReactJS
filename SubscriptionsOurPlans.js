import React, {Component} from "react";
import {SubscribeOffer} from "presentational";
import {Tabs} from "tabs";
import {withTranslation} from "react-i18next";
import Slider from "react-slick";
import {Popup} from "./components/Popup/Popup";
import "./SubscriptionsOurPlans.scss";
import {MySubscriptions} from "../";

class SubscriptionsOurPlansComponent extends Component {
  constructor(props){
    super(props);
    this.$t  = this.props.t;
    this.i18n = this.props.i18n;
    this.modal = this.props.modal;
    this.steps =  this.modal.steps;
    this.activeIndex = 0;
    this.settingsPrimeSlider = {
      infinite: true,
      centerMode: true,
      centerPadding: "14px",
      slidesToShow: 3,
      dots: true,
      arrows: false,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 1080,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    };
    this.isShowFeaturesPopup = false;
    this.features = ["Create conversations with other parents", "Create groups", "Sort publications (homework, photos, events ...)", "Download photos and videos published by the teacher", "Archive the class at the end of the year to keep it as a souvenir", "Access to exclusive benefits"];
  }

  componentDidMount() {
    window.reactModals.setOptions(this.modal, {title: this.$t("Our plans")});
    this.forceUpdate();
  }

  renderFeaturesList(){
    return this.features.map((feature, i) => (
      <li key={i} className="subscriptions-our-plans__features-list-item">
        <span>{feature}</span>
        <div className="subscriptions-our-plans__features-list-item-icon">
          <span className="icon icon-check" />
        </div>
      </li>
    ));
  }

  goToSubscribe = () => {

  }

  showFeaturesPopup = (e) => {
    this.isShowFeaturesPopup = true;
    this.forceUpdate();
    e.preventDefault();
  }

  hideFeaturesPopup = (e) => {
    this.isShowFeaturesPopup = false;
    this.forceUpdate();
    e.preventDefault();
  }

  getTabs(){
    return [
      {title: this.$t("Yearly"), color: "krBlue"},
      {title: this.$t("Monthly"), color: "krPurple"},
    ]
  }

  onSelectTab = (tabIndex) => {
    this.activeIndex = tabIndex;
    this.forceUpdate();
  }

  renderTab(){
    switch(this.activeIndex) {
      case 0:
        return this.renderTabOne();
      case 1:
        return this.renderTabTwo();
    }
  }

  renderTabOne(){
    return (
      <>
        <SubscribeOffer headTitle={<>{this.$t("Yearly")} <b>{this.$t("prime")}</b></>} headDescription={this.$t("How many children in family?")} countControls economy={this.$t("Save 12% - $1.99/month")} info={this.$t("Cancel at anytime & without engagement !")} onSubscribe={this.goToChangeMyCurrentPlan} />
      </>
    )
  }

  renderTabTwo(){
    return (
      <>
        <SubscribeOffer headTitle={<>{this.$t("Monthly")} <b>{this.$t("prime")}</b></>} headDescription={this.$t("How many children in family?")} countControls info={this.$t("Cancel at anytime & without engagement !")} onSubscribe={this.goToChangeMyCurrentPlan} />
      </>
    )
  }

  goToChangeMyCurrentPlan = () => {
    this.steps.push(<MySubscriptions id="MySubscriptions" modal={this.modal} />);
  }

  render(){
    return (
      <div className="subscriptions-our-plans">
        <div className="subscriptions-our-plans__header">
          <h4>Unlock Ethan’s class</h4>
          <p>Access all the publications of Susan Jones and discover many other advantages.</p>
        </div>
        <div className="subscriptions-our-plans__body">
          <Slider className="subscriptions-our-plans__features-slider" {...this.settingsPrimeSlider}>
            <div className="subscriptions-our-plans__features-slider-card">
              <img src="/k-img/prime/6.svg" alt="" className="subscriptions-our-plans__features-slider-card-icon" />
              <h4>View all the posts</h4>
              <p>Read all Ariana's posts directly from the app.</p>
            </div>
            <div className="subscriptions-our-plans__features-slider-card">
              <img src="/k-img/prime/3.svg" alt="" className="subscriptions-our-plans__features-slider-card-icon" />
              <h4>One subscription for the family</h4>
              <p>Pay only once for the whole family and everyone can see how Ariana is doing in school.</p>
            </div>
            <div className="subscriptions-our-plans__features-slider-card">
              <img src="/k-img/prime/4.svg" alt="" className="subscriptions-our-plans__features-slider-card-icon" />
              <h4>Access easily all your photos and videos</h4>
              <p>Download Ariana's pictures and videos. Memories are precious.</p>
            </div>
            <div className="subscriptions-our-plans__features-slider-card">
              <img src="/k-img/prime/1.svg" alt="" className="subscriptions-our-plans__features-slider-card-icon" />
              <h4>Communicate with other parents</h4>
              <p>Start private or group chats with other parents</p>
            </div>
            <div className="subscriptions-our-plans__features-slider-card">
              <img src="/k-img/prime/5.svg" alt="" className="subscriptions-our-plans__features-slider-card-icon" />
              <h4>Manage all your posts</h4>
              <p>Filter, sort, add to calendar (homework, events, photos...)</p>
            </div>
            <div className="subscriptions-our-plans__features-slider-card">
              <img src="/k-img/prime/7.svg" alt="" className="subscriptions-our-plans__features-slider-card-icon" />
              <h4>Exclusive offers with Prime</h4>
              <p>Get discounts, educational resources for Ariana only reserved to our members</p>
            </div>
          </Slider>
          <div className="subscriptions-our-plans__see-all-features">
            <a href="#" onClick={this.showFeaturesPopup}>See all features of Prime</a>
          </div>
          <h4 className="subscriptions-our-plans__title">Discover our plans <br/><span>Choose your subscription</span></h4>
          <Tabs tabs={this.getTabs()} onSelect={this.onSelectTab} activeIndex={this.activeIndex} />
          <div className="subscriptions-our-plans__tabs-body">
            {this.renderTab()}
          </div>
          <div className="subscriptions-our-plans__description">
            <a href="#" target="_blank">Restore subscription</a>
            <p>*L’abonnement se renouvelle automatiquement sauf si le renouvellement automatique est désactivé au moins 24 heures avant la fin de la période en cours. Le compte sera facturé pour le renouvellement dans les 24 heures avant la fin de la période en cours et identifiera le coût du renouvellement. Les abonnements peuvent être gérés par l’utilisateur et le renouvellement automatique peut être désactivé en accédant aux paramètres du compte de l’utilisateur après l’achat. Toute partie inutilisée d’une période d’essai gratuite, si elle est proposée, sera perdue lorsque l’utilisateur achète un abonnement à cette publication, le cas échéant.</p>
            <a href="#" target="_blank">Terms of use</a>
          </div>
          <Popup show={this.isShowFeaturesPopup} onClose={this.hideFeaturesPopup}>
            <div className="subscriptions-our-plans__features">
              <div className="subscriptions-our-plans__features-icon">
                <span className="icon icon-star" />
              </div>
              <h2>Exclusive <span>features</span></h2>
              <p className="subscriptions-our-plans__features-description">With Klassroom Prime, you have access to exclusive benefits and news features for the application.</p>
              <ul className="subscriptions-our-plans__features-list">
                {this.renderFeaturesList()}
              </ul>
            </div>
          </Popup>
        </div>
      </div>
    );
  }
}

export const SubscriptionsOurPlans = withTranslation()(SubscriptionsOurPlansComponent);