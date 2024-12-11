import React from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';

export default function AnnouncementBarContent(props) {
  const {announcementBar} = useThemeConfig();
  const {content} = announcementBar;
  return (
    <div
      {...props}
      // Developer provided the HTML, so assume it's safe.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: content}}
    />
  );
}
