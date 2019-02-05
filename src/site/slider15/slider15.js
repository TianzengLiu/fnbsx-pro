import React from 'react';
import './slider15.css';
import LogoImage from "../site/bg0.jpg";
import LogoImage2 from "../site/bg10.jpg";
import LogoImage3 from "../site/bg5.jpg";
import LogoImage4 from "../site/bg9.jpg";
import LogoImage5 from "../site/bg9.jpg";
import LogoImage6 from "../site/dg2.jpg";
import LogoImage7 from "../site/Thedrumsetonthestage2.jpg";
import LogoImage8 from "../site/bg0.jpg";

const items = [{
  url: LogoImage,
  creatorName: 'Tag Line',
//   projectFormat: 'Novel',
  projectTitle: 'Title',
  projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industry',
  progress: '70',
  raisedValue: '18.0M',
  totalValue: '1.0B'
}, {
  url: LogoImage2,
  creatorName: 'Tag Line',
//   projectFormat: 'Novel',
  projectTitle: 'Title',
  projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  progress: '20.5',
  raisedValue: '18.0M',
  totalValue: '1.0B'
}, {
  url: LogoImage3,
  creatorName: 'Tag Line',
//   projectFormat: 'Novel',
  projectTitle: 'Title',
  projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  progress: '70.5',
  raisedValue: '18.0M',
  totalValue: '1.0B'
}, {
  url: LogoImage4 ,
  creatorName: 'Tag Line',
//   projectFormat: 'Novel',
  projectTitle: 'Title',
  projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  progress: '35',
  raisedValue: '18.0M',
  totalValue: '1.0B'
}, {
  url: LogoImage5,
  creatorName: 'Tag Line',
//   projectFormat: 'Novel',
  projectTitle: 'Title',
  projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  progress: '5.5',
  raisedValue: '18.0M',
  totalValue: '1.0B'
}, {
  url: LogoImage6,
  creatorName: 'Tag Line',
//   projectFormat: 'Novel',
  projectTitle: 'Title',
  projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  progress: '90.5',
  raisedValue: '18.0M',
  totalValue: '1.0B'
}, {
  url: LogoImage7,
  creatorName: 'Tag Line',
//   projectFormat: 'Novel',
  projectTitle: 'Title',
  projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  progress: '90.5',
  raisedValue: '18.0M',
  totalValue: '1.0B'
}, {
  url: LogoImage8,
  creatorName: 'Tag Line',
//   projectFormat: 'Novel',
  projectTitle: 'Title',
  projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  progress: '90.5',
  raisedValue: '18.0M',
  totalValue: '1.0B'
}];

class Slider15 extends React.Component {
  constructor(props) {
    super(props);

    this.offset = 0;
    this.firstPage = this.currenPage = 1;

    this.columns = this.getColumns();

    this.pages = this.getPages(this.columns);
    this.length = this.pages.length;
    this.pageLength = 100 / this.length;

    this.appendItems();

    this.state = { pages: this.pages };
  }

  componentDidMount() {
    if (this.pages.length === 1)
      document.querySelector('.slider15_forward').hidden = true;

    this.setPageWidth();
    this.resize();
  }

  resize() {
    window.addEventListener('resize', reset.bind(this));

    function reset() {
      document.querySelector('.slider15_backward').hidden = true;

      if (this.length === 1)
        document.querySelector('.slider15_forward').hidden = true;
      else document.querySelector('.slider15_forward').hidden = false;

      document.querySelector('.slider15_items').style.cssText =
        this.getTransition(0, 0);

      this.offset = 0;
      this.currenPage = 1;
      this.columns = this.getColumns();

      this.pages = this.getPages(this.columns);
      this.length = this.pages.length;
      this.pageLength = 100 / this.length;

      this.appendItems();
      this.setState({ pages: this.pages });

      this.setPageWidth();
    }
  }

  backward(e) {
    this.currenPage -= 1;
    document.querySelector('.slider15_forward').hidden = false;

    if (this.currenPage === this.firstPage) e.target.hidden = true;

    this.offset += document.querySelector('.slider15').offsetWidth;

    document.querySelector('.slider15_items').style.cssText =
      this.getTransition(450, this.offset);

    this.setPageWidth();
  }

  forward(e) {
    this.currenPage += 1;
    document.querySelector('.slider15_backward').hidden = false;

    if (this.currenPage === this.length) e.target.hidden = true;

    this.offset -= document.querySelector('.slider15').offsetWidth;

    document.querySelector('.slider15_items').style.cssText =
      this.getTransition(450, this.offset);

    this.setPageWidth();
  }

  setPageWidth() {
    document.querySelector('.slider15_items').style.width = `${this.length}00%`;

    Array.prototype.forEach.call(document.querySelectorAll('.slider15_page'),
      page => page.style.width = `${this.pageLength}%`);

    Array.prototype.forEach.call(document.querySelectorAll('.slider15_content'),
      item => {
        item.style.whiteSpace = 'normal';

        const itemMetrics = getComputedStyle(
          document.querySelector('.slider15_content'));

        const pictureWidth = parseInt(itemMetrics.getPropertyValue('width'));

        item.style.whiteSpace = 'nowrap';
        item.style.maxWidth = `${pictureWidth}px`
      });
  }



  getTransition(duration, offset) {
    return `
      transition-property: transform;
      transition-duration: ${duration}ms;
      transition-timing-function: ease-in-out;
      transform: translate(${offset}px);`;
  }

  getColumns() {
    if (document.body.offsetWidth <= 420) return 1;
    if (document.body.offsetWidth <= 820) return 2;
    if (document.body.offsetWidth <= 1100) return 3;
    if (document.body.offsetWidth > 1100) return 4;
  }

  getPages(columns) {
    const pages = [];

    items.reduce((set, item, i) => {
      set.push(item);

      if (!((i + 1) % columns) || i === items.length - 1) {
        pages.push(set);
        return [];
      }
      return set;
    }, []);

    return pages;
  }

  appendItems() {
    if (this.columns <= 1 && this.length <= 1) return;

    const firstPage = this.pages[0];
    const lastPage = this.pages[this.pages.length - 1];

    if (firstPage.length <= lastPage.length) return;

    const delta = firstPage.length - lastPage.length;

    const items = new Array(delta).fill({});

    this.pages[this.pages.length - 1] = lastPage.concat(items);
  }

  render() {
    return (
      <div className="slider15">
        <section className="slider15_title">
          <h3>Meme/.Gif Auction</h3>
        </section>
        <section>
          <div
            hidden
            className="slider15_icon slider15_backward"
            onClick={e => this.backward(e)}>
          </div>
          <div
            className="slider15_icon slider15_forward"
            onClick={e => this.forward(e)}>
          </div>
        </section>
        <section className="slider15_overflow">
          <section className="slider15_items">
            {this.state.pages.map((page, i) => (
              <div key={i} className="slider15_page">
                <ul className="slider15_list">
                  {page.map((item, i) => (
                    <li key={i} className="slider15_item">
                      <a href="#">
                        <img src={item.url} className="slider15_picture"/>
                      </a>
                      {item.creatorName &&
                        <section className="slider15_content">
                          <p className="slider15_content_creator">
                            {item.creatorName}
                            <span>{item.projectFormat}</span>
                          </p>
                          <p className="slider15_content_title">
                            {item.projectTitle}
                          </p>
                         {/*} <a className="slider15_content_description" href="#">
                            {item.projectDescription}
                      </a>*/}
                          {/*<div className="slider15_progress">
                            <div
                              className="slider15_progress_bar" 
                              style={{ width: `${item.progress}%` }}>
                            </div>
                      </div>*/}
                          {/*<p className="slider15_status">
                            <span className="slider15_status_raised">
                              ${item.raisedValue} raised
                            </span> of ${item.totalValue}
                    </p>*/}
                        </section>
                      }
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </section>
      </div>
    );
  }
}

export default Slider15;
