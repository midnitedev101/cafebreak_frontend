/*** 
* Info: Home Page
* Description: Displays the home page of the site
***/
import { getNextStaticProps } from '@faustjs/next';
import React from 'react';
import { client } from 'client';
import { FaArrowRight } from 'react-icons/fa';
import {
  HomePost,
  Header,
  Footer,
  EntryHeader,
  Main,
  LoadMore,
  Button,
  Heading,
  CTA,
  Testimonials,
  SEO,
  Sidebar,
} from 'components';
import styles from 'styles/pages/_Home.module.scss';
import { pageTitle } from 'utils';
import useNodePagination from 'hooks/useNodePagination';

const postsPerPage = 1;

const POST_NODES_PREPASS_FIELDS = [
  'databaseId',
  'id',
  '__typename',
  'featuredImage.*',
  'featuredImage.node.altText',
  'featuredImage.node.mediaDetails.width',
  'featuredImage.node.mediaDetails.height',
  'featuredImage.node.sourceUrl',
  'author.node.name',
  'date',
  'uri',
  'title',
  'slug',
  'summary',
];

export default function Page() {
  const { useQuery, usePosts } = client;
  // const generalSettings = useQuery().generalSettings;
  const posts = usePosts({
    first: postsPerPage,
    where: {
      categoryName: 'uncategorized',
    },
  });
  // const testimonials = useQuery().testimonials();
  const mainBanner = {
    sourceUrl: '/static/banner.jpeg',
    mediaDetails: { width: 1200, height: 600 },
    altText: 'Blog Banner',
  };

  // const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;
  const { data, fetchMore, isLoading } = useNodePagination(
    (query, queryArgs) => query.posts(queryArgs),
    POST_NODES_PREPASS_FIELDS
  );
  
  return (
    <>
      <SEO
        title={pageTitle(generalSettings)}
        imageUrl={mainBanner?.sourceUrl}
      />

      <Header />

      {/* <Main className={styles.home}>
        <EntryHeader image={mainBanner} />
        <div className="container">
          <section className="hero text-center">
            <Heading className={styles.heading} level="h1">
              Welcome to your Blueprint
            </Heading>
            <p className={styles.description}>
              Achieve unprecedented performance with modern frameworks and the
              world&apos;s #1 open source CMS in one powerful headless platform.{' '}
            </p>
            <div className={styles.actions}>
              <Button styleType="secondary" href="/contact-us">
                GET STARTED
              </Button>
              <Button styleType="primary" href="/about">
                LEARN MORE
              </Button>
            </div>
          </section>
          <section className="cta">
            <CTA
              Button={() => (
                <Button href="/posts">
                  Get Started <FaArrowRight style={{ marginLeft: `1rem` }} />
                </Button>
              )}
            >
              <span>
                Learn about Core Web Vitals and how Atlas can help you reach
                your most demanding speed and user experience requirements.
              </span>
            </CTA>
          </section>
          <section className={styles.posts}>
            <Heading className={styles.heading} level="h2">
              Latest Posts
            </Heading>
            <Posts posts={posts?.nodes} id="posts-list" />
          </section>
          <section className="cta">
            <CTA
              Button={() => (
                <Button href="/posts">
                  Get Started <FaArrowRight style={{ marginLeft: `1rem` }} />
                </Button>
              )}
            >
              <span>
                Learn about Core Web Vitals and how Atlas can help you reach
                your most demanding speed and user experience requirements.
              </span>
            </CTA>
          </section>
          <section className={styles.testimonials}>
            <Heading className={styles.heading} level="h2">
              Testimonials
            </Heading>
            <p className={styles.description}>
              Here are just a few of the nice things our customers have to say.
            </p>
            <Testimonials testimonials={testimonials?.nodes} />
          </section>
        </div>
      </Main> */}

        <Main>
          <EntryHeader title="" image={mainBanner} />
          <div className={styles.hContents}>
            <div className={styles.hContainer}>
              <section className={styles.posts}>
                <Heading className={styles.heading} level="h2">
                  Featured
                </Heading>
                <HomePost posts={posts?.nodes} id="" />
              </section>
            </div>
            <Sidebar level="h2"></Sidebar>
          </div>
        </Main>

      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
  return getNextStaticProps(context, {
    Page,
    client,
  });
}
