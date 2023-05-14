import Head from 'next/head';
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create MVP product fast</title>
        <link rel="icon" href="/archery.svg" />

            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-6ELYFH2L1N`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6ELYFH2L1N', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
      </Head>

      

      <main>
        <div>
          <h3>
            <img src='/1st-medal.svg' />
            MVP As A Service
          </h3>
          <div>
            From idea to MVP in days
          </div>

        </div>
        <br />
        <br />
        <br />

        <div>
          <h3>
            Introducing "MVP As A Service"
          </h3>
          <div>
            A solution for those with an idea but no means to convert it into a minimal viable product (MVP).
            Our service provides MVP development, allowing you to validate your idea quickly and effectively.
            Say goodbye to months of hiring and development time, and hello to a streamlined process for bringing your ideas to life.
          </div>
        </div>

      <br />
      <br />
      <br />
        <div>

          <h4>
            Book a 15-minutes call
          </h4>

          <div>
            Learn more about this service works and how it can help you. 15-minute video meeting to discuss your MVP requirements.
            We are ready to initiate the development process for your idea. We offer unlimited revisions until you are fully satisfied. Deliver the project with full documentation.
          </div>
        </div>
        <br />
        <br />
        <br />
        <div>
          <h4>
            Contact
          </h4>

          <div>
            If you have any questions or if you want to turn your idea into a minimum viable product within days, feel free to drop me a line at mzkhca@gmail.com
          </div>

        </div>

        

      </main>

      <footer>
          Twitter ProductHunt GitHub
        </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width:60%;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
