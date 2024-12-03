---
sidebar_position: 2
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Button Filled

Buttons let people take action and make choices with one tap.

<Tabs >
  <TabItem value="apple" label="Easypark" default>
  <ThemedImage
      alt="Docusaurus themed image"
      sources={{ 
        light: useBaseUrl('/img/ep-button-light.svg'), 
        dark: useBaseUrl('/img/ep-button-dark.svg')}}/>
  </TabItem>
  <TabItem value="orange" label="ParkMobile">
  <ThemedImage
alt="Docusaurus themed image"
sources={{ light: useBaseUrl('/img/pm-button-light.svg'), dark: useBaseUrl('/img/pm-button-dark.svg')}}/>
  </TabItem>
</Tabs>

### Android

### iOS

### Code

<Tabs queryString="os">
  <TabItem value="ios" label="iOS" default>
   ```swift
import Rally

RallyFilledButton(title: "Filled button") {
//put your action here
}

````
</TabItem>
<TabItem value="android" label="Android">
 ```jsx
RallyFilledButton(
    text = "Rally",
    icon = RallyTheme.icons.infoFilled
)
````

</TabItem>
</Tabs>

### Do's and Don'ts

Buttons let people take action and make choices with one tap.
