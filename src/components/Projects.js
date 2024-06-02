import React, { Component } from "react";
// import ProjectDetailsModal from "./ProjectDetailsModal";
// import $ from 'jquery';
// require('letteringjs'); 

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {}
    };
  }


  lettering(element, method) {
    const text = element.textContent;
    element.textContent = ''; // Clear the original content

    if (method === 'words') {
        const words = text.split(' ');
        words.forEach(word => {
            const wordSpan = document.createElement('span');
            word.split('').forEach(char => {
                const charSpan = document.createElement('span');
                charSpan.textContent = char;
                wordSpan.appendChild(charSpan);
            });
            element.appendChild(wordSpan);
            element.appendChild(document.createTextNode(' ')); // Add space
        });
    } else if (method === 'letters') {
        const chars = text.split('');
        chars.forEach(char => {
            const charSpan = document.createElement('span');
            charSpan.textContent = char;
            element.appendChild(charSpan);
        });
    }
  }

  componentDidMount() {
    const heading = document.querySelector('#os-phrases > h2');
    if (heading) {
        heading.style.opacity = 1; // Set opacity
        this.lettering(heading, 'words');
        heading.querySelectorAll('span').forEach(wordSpan => {
            this.lettering(wordSpan, 'letters');
        });
    }
  }
  // componentDidMount() {
  //   const heading = $("#os-phrases > h2");
  //   if (heading.length) {  // Check if the element exists
  //     heading
  //       .css('opacity', 1)
  //       .lettering('words')
  //       .children("span").lettering()
  //       .children("span").lettering();
  //   } else {
  //     console.log('The element does not exist');
  //   }
  // }

  render() {
    // let detailsModalShow = (data) => {
    //   this.setState({ detailsModalShow: true, deps: data });
    // };

    // let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects;
      var projects = this.props.resumeProjects.map(function (projects) {
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={projects.title}
            style={{ cursor: "pointer" }}
          >
            <span className="portfolio-item d-block">
              <div className="foto">
                <div>
                  <br />
                  <p className="project-title-settings mt-3">
                    {projects.title}
                  </p>
                  {/* <div class="container">  */}
                    {/* <div class="os-phrases" id="os-phrases"> */}
                      <h2><a style = {{color: "black"}} href={projects.link}>{projects.description}</a></h2>
                    {/* </div> */}
                  {/* </div> */}
                </div>
              </div>
            </span>
          </div>
        );
      });
    }
  

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{projects}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
