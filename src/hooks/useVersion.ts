import { graphql, useStaticQuery } from 'gatsby';
import { useEffect, useState } from 'react';
import { coerce, gt, valid } from 'semver';

const GITHUB_API_ENDPOINT = 'https://api.github.com';

interface QueryData {
  site: {
    siteMetadata: {
      repository: string;
    };
  };
}

interface Release {
  prerelease: boolean;
  tag_name: string;
}

export const useVersion = (): string => {
  const [version, setVersion] = useState('0.0.0');
  const { site } = useStaticQuery<QueryData>(graphql`
    query {
      site {
        siteMetadata {
          repository
        }
      }
    }
  `);

  useEffect(() => {
    fetch(`${GITHUB_API_ENDPOINT}/repos/${site.siteMetadata.repository}/releases?per_page=100`, {
      headers: {
        Accept: 'application/vnd.github.v3+json'
      }
    })
      .then((response) => response.json())
      .then((json: Release[]) =>
        json
          .filter((release) => !!valid(coerce(release.tag_name)))
          .filter((release) => release.prerelease)
          .map((release) => ({
            ...release,
            tag_name: coerce(release.tag_name)!
          }))
          .sort((a, b) => (gt(b.tag_name, a.tag_name) ? 1 : -1))
      )
      .then((json) => json[0] && setVersion(json[0].tag_name.format()))
      .catch(console.error);
  }, []);

  return version;
};
