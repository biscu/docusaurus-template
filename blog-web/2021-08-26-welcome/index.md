---
slug: tabs-component
title: Web post
authors: davide
tags: [app, web, documentation]
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Eaxmple for blog post with tabs for different platform.

<Tabs>
  <TabItem value="apple" label="Easypark" default>
  <ThemedImage
alt="Docusaurus themed image"
sources={{ light: useBaseUrl('/img/ep-button-light.svg'), dark: useBaseUrl('/img/ep-button-dark.svg')}}/>
  </TabItem>
  <TabItem value="orange" label="ParkMobile">
  <ThemedImage
alt="Docusaurus themed image"
sources={{ light: useBaseUrl('/img/pm-button-light.svg'), dark: useBaseUrl('/img/pm-button-dark.svg')}}/>
  </TabItem>
</Tabs>

Simply add Markdown files (or folders) to the `blog` directory.

A blog post folder can be convenient to co-locate blog post images:

![Docusaurus Plushie](./docusaurus-plushie-banner.jpg)

The blog supports tags as well!

**And if you don't want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config.
