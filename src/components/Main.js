import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import pic04 from '../images/pic04.jpg'
import pic05 from '../images/pic05.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Principles</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            <ul>
               <li>DevOps</li>
                  <ul>
                    <li>Transparency is most important principal in DevOps</li>
                    <li>Making sure our products are repeatable, scalable, and testable for an awesome <a href="https://www.cmswire.com/information-management/7-key-principles-for-a-successful-devops-culture/">DevOps culture</a>.</li>
                  </ul>
            </ul>
            <ul>
               <li>Lean</li>
                  <ul>
                    <li>Making data impacted decisions that fit organization mission</li>
                    <li>Startups within a <a href="https://www.fastcompany.com/3041945/how-to-run-your-team-like-a-startup-even-when-youve-grown">startup</a>.</li>
                    <li>Shared responsibility</li>
                    <li>Service <a href="https://medium.com/openclassrooms-product-design-and-engineering/manage-a-tech-team-as-a-servant-leader-d04e055577b3">Leadership</a></li>
                  </ul>
            </ul>
            <ul>
               <li>Agile</li>
                  <ul>
                    <li>How "WE" <a href="https://www.guru99.com/agile-scrum-extreme-testing.html">agile</a> documentation</li>
                    <li>Metrics for success</li>
                    <li>The big debate <a href="https://www.wrike.com/blog/scrum-vs-kanban/#What-is-Scrum">scrum vs kanban</a></li>
                  </ul>
            </ul>
          </p>
          <p>
            The key to successful change is measuring and understanding the right things with a focus on capabilities, not maturity.
          </p>
          <p>
            Successful measurements of performance should have two key characteristics. First, it should focus on a global outcome to ensure teams are not pitted against each other.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Teams</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
          <ul>
               <li>Squads, Pods, Chapters</li>
                  <ul>
                    <li>Building <a href="https://clearbridgemobile.com/the-benefits-of-squad-based-agile-development/">squads</a> around products and features</li>
                    <li>Standards and baselines for each squad</li>
                    <li>Monthly standup for all squads each squad gets to feature projects</li>
                  </ul>
            </ul>
            <ul>
               <li>Quarterly road maps</li>
                  <ul>
                    <li>Frequent practice of using <a href="https://github.com/joelparkerhenderson/architecture-decision-record">ADR’s</a>, along with <a href="https://www.keka.com/engineering-team-okr-examples">OKR’s</a> and keeping all decisions transparent</li>
                    <li>Seamless collaboration with Product and data team</li>
                  </ul>
            </ul>
            <ul>
               <li>Reviews</li>
                  <ul>
                    <li>Weekly, Quarterly, annual reviews should fit into goal based matrix for each engineer</li>
                  </ul>
            </ul>
            <ul>
               <li>Level Up</li>
                  <ul>
                    <li>Engineers should have dedicated time to get improve skills outside of learning on the job</li>
                    <li>Transparent <a href="https://lattice.com/library/what-is-a-job-leveling-matrix">matrix</a> for milestones needed for promotion for tech and soft skills gained during the year</li>
                    <li>Quarterly updates on progress</li>
                  </ul>
            </ul>
          </p>
          <p>
            Improvements in team product delivery are possible for every 
            team and in every company, as long as leadership provides consistent support that 
            includes time, actions, and resources demonstrating a true commitment to improvement.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Recruitment</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <ul>
               <li>Process</li>
                  <ul>
                    <li>Define a process around recruiting quality engineers that mirrors our commitments to diversity and inclusion.</li>
                    <li>Transparent and inclusive recruiting process.</li>
                    <li>Maintaining and publishing metrics that reflect our progress over time.</li>
                  </ul>
            </ul>
            <ul>
               <li>Accountability</li>
                  <ul>
                    <li>Internal group of colleagues that meets quarterly to <a href="https://www.visier.com/clarity/hire-diverse-talent-workforce-analytics/">review progress.</a></li>
                    <li>Establish key attainable goals for hiring and present to C suite.</li>
                  </ul>
            </ul>
          <p>
            Diversity matters. Research shows that teams with more <a href="https://hbr.org/2016/11/why-diverse-teams-are-smarter">diversity with regard to gender or 
            underrepresented groups are smarter</a>, achieve 
            better team performance (Deloitte 2013), and <a href="https://www.mckinsey.com/insights/organization/~/media/2497d4ae4b534ee89d929cc6e3aea485.ashx">achieve better business outcomes</a>.
          </p>
          {close}
        </article>

        <article
          id="transparency"
          className={`${this.props.article === 'transparency' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">transparency</h2>
          <span className="image main">
            <img src={pic04} alt="" />
          </span>
          <ul>
               <li>Vision</li>
                  <ul>
                    <li>Creating a clear understanding of where our organization is and where will be in 3 years</li>
                  </ul>
            </ul>
            <ul>
               <li>Inspirational Communication</li>
                  <ul>
                    <li>We communicate in a way that inspires and motivates even in a challenging environment</li>
                  </ul>
            </ul>
            <ul>
               <li>Intellectual Stimulation</li>
                  <ul>
                    <li>Foster an environment where solving problems in new ways is embraced</li>
                  </ul>
            </ul>
            <ul>
               <li>Support</li>
                  <ul>
                    <li>Demonstrate that we promote civil and professional consideration of our colleagues needs and feelings</li>
                  </ul>
            </ul>
            <ul>
               <li>Recognition</li>
                  <ul>
                    <li>Acknowledging achievement of goals and improvements in work quality, complimenting others when they do outstanding work</li>
                  </ul>
            </ul>
          <p>
            Good information flow is critical to the safe and effective 
            operation of high-tempo and high-consequence environments. 
          </p>
          <p>
            Good culture requires trust and cooperation between people 
            across the organization, so it reflects the level of collaboration and trust inside the organization.
          </p>

          {close}
        </article>

        <article
          id="questions"
          className={`${this.props.article === 'questions' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Questions</h2>
          <span className="image main">
            <img src={pic05} alt="" />
          </span>
          <p>
            Follow the instructions from the Github repository <a href="https://github.com/roacobb/webdeckdw#instructions-for-asking-questions">README</a> on how to format questions. 
          </p>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
