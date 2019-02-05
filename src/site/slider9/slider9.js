import React from 'react';
import './slider9.css';
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
  creatorName: 'Artist',
//   projectFormat: 'Novel',
  projectTitle: 'Title',
  projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  progress: '20.5',
  raisedValue: '18.0M',
  totalValue: '1.0B'
}, {
  url: LogoImage3,
  creatorName: 'Artist',
//   projectFormat: 'Novel',
  projectTitle: 'Title',
  projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  progress: '70.5',
  raisedValue: '18.0M',
  totalValue: '1.0B'
}, {
  url: LogoImage4 ,
  creatorName: 'Artist',
//   projectFormat: 'Novel',
  projectTitle: 'Title',
  projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  progress: '35',
  raisedValue: '18.0M',
  totalValue: '1.0B'
}, {
  url: LogoImage5,
  creatorName: 'Artist',
//   projectFormat: 'Novel',
  projectTitle: 'Title',
  projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  progress: '5.5',
  raisedValue: '18.0M',
  totalValue: '1.0B'
}, {
  url: LogoImage6,
  creatorName: 'Artist',
//   projectFormat: 'Novel',
  projectTitle: 'Title',
  projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  progress: '90.5',
  raisedValue: '18.0M',
  totalValue: '1.0B'
}, {
  url: LogoImage7,
  creatorName: 'Artist',
//   projectFormat: 'Novel',
  projectTitle: 'Title',
  projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  progress: '90.5',
  raisedValue: '18.0M',
  totalValue: '1.0B'
}, {
  url: LogoImage8,
  creatorName: 'Artist',
//   projectFormat: 'Novel',
  projectTitle: 'Title',
  projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  progress: '90.5',
  raisedValue: '18.0M',
  totalValue: '1.0B'
}];

class Slider9 extends React.Component {
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
      document.querySelector('.slider9_forward').hidden = true;

    this.setPageWidth();
    this.resize();
  }

  resize() {
    window.addEventListener('resize', reset.bind(this));

    function reset() {
      document.querySelector('.slider9_backward').hidden = true;

      if (this.length === 1)
        document.querySelector('.slider9_forward').hidden = true;
      else document.querySelector('.slider9_forward').hidden = false;

      document.querySelector('.slider9_items').style.cssText =
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
    document.querySelector('.slider9_forward').hidden = false;

    if (this.currenPage === this.firstPage) e.target.hidden = true;

    this.offset += document.querySelector('.slider9').offsetWidth;

    document.querySelector('.slider9_items').style.cssText =
      this.getTransition(450, this.offset);

    this.setPageWidth();
  }

  forward(e) {
    this.currenPage += 1;
    document.querySelector('.slider9_backward').hidden = false;

    if (this.currenPage === this.length) e.target.hidden = true;

    this.offset -= document.querySelector('.slider9').offsetWidth;

    document.querySelector('.slider9_items').style.cssText =
      this.getTransition(450, this.offset);

    this.setPageWidth();
  }

  setPageWidth() {
    document.querySelector('.slider9_items').style.width = `${this.length}00%`;

    Array.prototype.forEach.call(document.querySelectorAll('.slider9_page'),
      page => page.style.width = `${this.pageLength}%`);

    Array.prototype.forEach.call(document.querySelectorAll('.slider9_content'),
      item => {
        item.style.whiteSpace = 'normal';

        const itemMetrics = getComputedStyle(
          document.querySelector('.slider9_content'));

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
      <div className="slider9">
        <section className="slider9_title">
          <h3>Sounds Auction</h3>
        </section>
        <section>
          <div
            hidden
            className="slider9_icon slider9_backward"
            onClick={e => this.backward(e)}>
          </div>
          <div
            className="slider9_icon slider9_forward"
            onClick={e => this.forward(e)}>
          </div>
        </section>
        <section className="slider9_overflow">
          <section className="slider9_items">
            {this.state.pages.map((page, i) => (
              <div key={i} className="slider9_page">
                <ul className="slider9_list">
                  {page.map((item, i) => (
                    <li key={i} className="slider9_item">
                      <a href="#">
                        <img src={item.url} className="slider9_picture"/>
                      </a>
                      {item.creatorName &&
                        <section className="slider9_content">
                          <p className="slider9_content_creator">
                            {item.creatorName}
                            <span>{item.projectFormat}</span>
                          </p>
                          <p className="slider9_content_title">
                            {item.projectTitle}
                          </p>
                         {/*} <a className="slider9_content_description" href="#">
                            {item.projectDescription}
                      </a>*/}
                          {/*<div className="slider9_progress">
                            <div
                              className="slider9_progress_bar" 
                              style={{ width: `${item.progress}%` }}>
                            </div>
                      </div>*/}
                          {/*<p className="slider9_status">
                            <span className="slider9_status_raised">
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

export default Slider9;
