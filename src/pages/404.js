/*** 
* Info: 404 Page (Not Found)
* Description: Displays when url is not available on site
***/
import { getNextStaticProps } from '@faustjs/next';
import { client } from 'client';
import { Button, Footer, Header, EntryHeader, Main, SEO } from 'components';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { pageTitle } from 'utils';
import { FaSearch } from 'react-icons/fa';
import styles from 'styles/pages/_404.module.scss';

export default function Page() {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <SEO title={pageTitle(generalSettings)} />

      <Header />

      <Main>
        <EntryHeader title="Page Not Found" />
        <div className="container small">
          <p className="text-center">
            Not the content you're looking for. Use the search field below to help.
          </p>

          <form
            className={styles.form}
            onSubmit={(e) => {
              e.preventDefault();

              router.push({
                pathname: '/search',
                query: { searchQuery: searchQuery },
              });
            }}
          >
            {/* <label htmlFor="404-search-input" className="sr-only">
              Search
            </label> */}

            <input
              id="404-search-input"
              name="404-search-input"
              className={styles['search-input']}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Start typing..."
            />

            <Button styleType="secondary" role="submit">
              <FaSearch className={styles.icon} />
              <label className="sr-only" htmlFor="search">
                Search
              </label>
            </Button>
          </form>
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
