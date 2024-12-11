import React from 'react';
import {translate} from '@docusaurus/Translate';
import IconClose from '@theme/Icon/Close';
export default function AnnouncementBarCloseButton(props) {
  return (
    <button
      type="button"
      aria-label={translate({
        id: 'theme.AnnouncementBar.closeButtonAriaLabel',
        message: 'Close',
        description: 'The ARIA label for close button of announcement bar',
      })}
      {...props}
      >
      <IconClose width={14} height={14} strokeWidth={3.1} />
    </button>
  );
}
