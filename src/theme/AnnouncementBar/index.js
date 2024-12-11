import React from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import {useAnnouncementBar} from '@docusaurus/theme-common/internal';
import AnnouncementBarCloseButton from '@theme/AnnouncementBar/CloseButton';
import AnnouncementBarContent from '@theme/AnnouncementBar/Content';

export default function AnnouncementBar() {
  const {announcementBar} = useThemeConfig();
  const {isActive, close} = useAnnouncementBar();
  if (!isActive) {
    return null;
  }
  const {backgroundColor, textColor, isCloseable} = announcementBar;
  return (
    <div
      className="p-4 text-white dark:text-neutral-900 bg-blue-950 dark:bg-slate-100"
      role="banner">
      {isCloseable && <div className="mr-4" />}
      <AnnouncementBarContent className="text-lg text-center" />
      {isCloseable && (
        <AnnouncementBarCloseButton
          onClick={close}
          className="ml-auto"
        />
      )}
    </div>
  );
}
