import React from 'react';
import './slider.css';
import LogoImage from "../site/bg0.jpg";
import LogoImage2 from "../site/bg10.jpg";
import LogoImage3 from "../site/bg5.jpg";
import LogoImage4 from "../site/bg9.jpg";
import LogoImage5 from "../site/bg9.jpg";
import LogoImage6 from "../site/dg2.jpg";
import LogoImage7 from "../site/Thedrumsetonthestage2.jpg";
import LogoImage8 from "../site/bg0.jpg";


// Items should be provided by back-end
const items = [{
  url: LogoImage,
  location: 'Los Angeles',
  price: '$123/night average',
}, {
  url: LogoImage2,
  location: 'New York',
  price: '$456/night average'
}, {
  url: LogoImage3,
  location: 'Los Angeles',
  price: '$1283/dfgdfaverage'
}, {
  url: LogoImage4,
  location: 'Losfgsfges',
  price: '$1dfgdfverage',
}, {
  url: LogoImage5,
  location: 'sdfdsfeles',
  price: '$fdgfdserage'
}, {
  url: LogoImage6,
  location: 'Lsdfsdfes',
  price: 'dfgdfight average'
}, {
  url: LogoImage7,
  location: 'Lsdfsdfos Angeles',
  price: '$123/night average',
}, {
  url: LogoImage8,
  location: 'Losdfngeles',
  price: '$123/night average'
}, {
  url: LogoImage8,
  location: 'Losdfsdfs Angeles',
  price: '$123/night average'
}, {
  url: LogoImage8,
  location: 'Lossdfds Angeles',
  price: '$123/night average',
}, {
  url: LogoImage8,
  location: 'Losadsgdbvx Angeles',
  price: '$123/night average'
}, {
  url: LogoImage8,
  location: 'Ldfgbnfdsdvos Angeles',
  price: '$123/night average'
}];

class Slider extends React.Component {
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
      document.querySelector('.slider_forward').hidden = true;

    this.setPageWidth();
    this.resize();
  }

  resize() {
    window.addEventListener('resize', reset.bind(this));

    function reset() {
      document.querySelector('.slider_backward').hidden = true;

      if (this.length === 1)
        document.querySelector('.slider_forward').hidden = true;
      else document.querySelector('.slider_forward').hidden = false;

      document.querySelector('.slider_items').style.cssText =
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
    document.querySelector('.slider_forward').hidden = false;

    if (this.currenPage === this.firstPage) e.target.hidden = true;

    this.offset += document.querySelector('.slider').offsetWidth;

    document.querySelector('.slider_items').style.cssText =
      this.getTransition(450, this.offset);

    this.setPageWidth();
  }

  forward(e) {
    this.currenPage += 1;
    document.querySelector('.slider_backward').hidden = false;

    if (this.currenPage === this.length) e.target.hidden = true;

    this.offset -= document.querySelector('.slider').offsetWidth;

    document.querySelector('.slider_items').style.cssText =
      this.getTransition(450, this.offset);

    this.setPageWidth();
  }

  setPageWidth() {
    document.querySelector('.slider_items').style.width = `${this.length}00%`;

    Array.prototype.forEach.call(document.querySelectorAll('.slider_page'),
      page => page.style.width = `${this.pageLength}%`);
  }

  getTransition(duration, offset) {
    return `
      transition-property: transform;
      transition-duration: ${duration}ms;
      transition-timing-function: ease-in-out;
      transform: translate(${offset}px);`;
  }

  getColumns() {
    if (document.body.offsetWidth <= 320) return 1;
    if (document.body.offsetWidth <= 500) return 2;
    if (document.body.offsetWidth <= 700) return 3;
    if (document.body.offsetWidth > 700) return 4;
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
      <div className="slider">
        <section className="slider_title">
          <h3>Related Projects</h3>
        </section>
        <section>
          <div
            hidden
            className="slider_icon slider_backward"
            onClick={e => this.backward(e)}>
          </div>
          <div
            className="slider_icon slider_forward"
            onClick={e => this.forward(e)}>
          </div>
        </section>
        <section className="slider_overflow">
          <section className="slider_items">
            {this.state.pages.map((page, i) => (
              <div key={i} className="slider_page">
                <ul className="slider_list">
                  {page.map((item, i) => (
                    <li key={i} className="slider_item">
                      <a href="#">
                        <img
                        src={item.url}
                          className="slider_picture"
                        />
                        <div className="slider_item_content">
                          <p className="slider_item_location">
                            {item.location}
                          </p>
                          <span className="slider_item_price">
                            {item.price}
                          </span>
                        </div>
                      </a>
                      
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

export default Slider;
