---
slug: getting-started-with-push-sdk-uiweb-api
title: 'Getting Started With Push SDK: uiweb API🛠️'
authors: [push]
image: './cover-image.webp'
text: 'The @pushprotocol/uiweb package is a collection of React components for building dApps that interact with the Push Protocol. It includes components for rendering notifications, spam notifications, and forms for subscribing and unsubscribing to spam notification channels.'
tags: [Web3, Developer, Blockchain Development, Web3 Notifications]
---

![Cover image of Getting Started With Push SDK: uiweb API🛠️](./cover-image.webp)

<!--truncate-->

The <b>@pushprotocol/uiweb</b> package is a collection of React components for building dApps that interact with the Push Protocol. It includes components for rendering notifications, spam notifications, and forms for subscribing and unsubscribing to spam notification channels.

In this blog post, we'll take a closer look at the components included in the <b>@pushprotocol/uiweb</b> package and how you can use them in your dApp.

## Components

### NotificationItem

This component displays a single notification item. It takes the following props:

- <b>notificationTitle</b> (string): The title of the notification.
- <b>notificationBody</b> (string): The body of the notification.
- <b>app</b> (string): The name of the app that sent the notification.
- <b>icon</b> (string): The URL of an icon to display next to the notification title.
- <b>image</b> (string): The URL of an image to display in the notification.
- <b>url</b> (string): The URL to open when the notification is clicked.
- <b>theme</b> (string): The theme to use for the notification. Possible values are 'light' and 'dark'.
- <b>chainName</b> (string): The name of the blockchain the notification was sent on. Possible values are "ETH_TEST_GOERLI", "POLYGON_TEST_MUMBAI”.
- <b>isSpam</b> (boolean, optional): Set to true if the notification is spam.
- <b>subscribeFn</b> (function, optional): A function to call when the user clicks the "Opt-in" button on a spam notification.
- <b>isSubscribedFN</b> (function, optional): A function that returns a boolean indicating whether the user is subscribed to the spam notification's channel.

Example:

```js
import { NotificationItem } from '@pushprotocol/uiweb';

function MydApp() {
  const notifications = [
    {
      title: 'Notification 1',
      message: 'This is the first notification',
      app: 'My App',
      icon: 'https://my-app.com/icon.png',
      image: 'https://my-app.com/image.png',
      url: 'https://my-app.com/notification-1',
      blockchain: 'ETH_TEST_GOERLI',
    },
    {
      title: 'Notification 2',
      message: 'This is the second notification',
      app: 'My App',
      icon: 'https://my-app.com/icon.png',
      image: 'https://my-app.com/image.png',
      url: 'https://my-app.com/notification-2',
      blockchain: 'ETH_TEST_GOERLI',
    },
  ];

  return (
    <div>
      {notifications.map((notification, i) => (
        <NotificationItem
          key={i}
          notificationTitle={notification.title}
          notificationBody={notification.message}
          app={notification.app}
          icon={notification.icon}
          image={notification.image}
          url={notification.url}
          theme={{ background: 'blue', color: 'white' }}
          chainName={notification.blockchain}
        />
      ))}
    </div>
  );
}
```

The <b>Notification Item</b> component can also be used to render spam notifications. To get the spam data, you can use the <b>PushAPI.user.getFeeds() </b> method with the <b>spam</b> parameter set to <b>true</b>.

The <b>NotificationItem</b> component is a general-purpose component that can be used to render any type of notification item, including spam notifications. It accepts props such as <b>notificationTitle, notificationBody, cta, app, icon, image,</b> and <b>url</b> to customize the appearance and behavior of the component.

The <b>Spam</b> component is a specialized variant of the <b>NotificationItem</b> component that is specifically designed for rendering spam notifications. It includes additional props such as <b>isSpam, subscribeFn,</b> and <b>isSubscribedFn</b> that allow the user to interact with the spam notification channel. It also includes an unsubscribe form that is displayed if the user is subscribed to the spam notification channel.

You can use the <b>PushAPI.user.getFeeds()</b> method with the <b>spam</b> parameter set to <b>true</b> to get the spam data. Here's an example of how you can use it:

```js
const spams = await PushAPI.user.getFeeds({
  user: 'eip155:11155111:0xD8634C39BBFd4033c0d3289C4515275102423681',
  spam: true,
  env: 'staging',
});
```

To render the <b>Notification Item</b> component for each spam notification, you'll need to pass in the additional props <b>isSpam, subscribeFn,</b> and <b>isSubscribedFn</b>

- isSpam: A boolean value indicating whether the notification is a spam notification
- subscribeFn: A function that opts the user in to the spam notification's channel
- isSubscribedFn: A function that returns a boolean value indicating whether the user is subscribed to the spam notification's channel
  Here’s an example of how you can render the Notification Item component for each spam notification:

```js
{
  spams.map((oneNotification, i) => {
    const {
      cta,
      title,
      message,
      app,
      icon,
      image,
      url,
      blockchain,
      secret,
      notification,
    } = oneNotification;

    return (
      <NotificationItem
        key={`spam-${i}`}
        notificationTitle={title}
        notificationBody={message}
        cta={cta}
        app={app}
        icon={icon}
        image={image}
        url={url}
        theme={theme}
        chainName={blockchain}
        isSpam={true}
        subscribeFn={subscribeFn}
        isSubscribedFn={isSubscribedFn}
      />
    );
  });
}
```

To implement the <b>subscribeFn</b> and <b>isSubscribedFn</b> functions, you can use the <b>PushAPI.channel.subscribe()</b> and <b>PushAPI.channel.subscribe()</b> methods from @pushprotocol/restapi package, respectively.

For examples on how you can implement these functions, check out [PUSH-SDK Rest API blog post](https://medium.com/push-protocol/getting-started-with-push-sdk-rest-api-%EF%B8%8F-821e5b8389cc) we recently published.

Here’s an example of how you can implement these functions:

```js
await PushAPI.channels.subscribe({
  signer: _signer,
  user: 'eip155:11155111:0xD8634C39BBFd4033c0d3289C4515275102423681',
  channel: 'eip155:11155111:0xD8634C39BBFd4033c0d3289C4515275102423681',
  env: 'staging',
});

const subscriptions = await PushAPI.user.getSubscriptions({
  user: 'eip155:11155111:0xD8634C39BBFd4033c0d3289C4515275102423681',
  env: 'staging',
});
```

## Putting it all together

Here is an example using <b>subscribeFn</b> that demonstrates the <b>uiweb</b> components used together.

```js
import React, { useState, useEffect } from "react";
import { NotificationItem, chainNameType } from "@pushprotocol/uiweb";

function MydApp() {
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    const fetchNotifications = async () => {
      // fetch user notifications using the PushAPI
      const notifications = await PushAPI.user.getFeeds({
        user: 'eip155:11155111:0xD8634C39BBFd4033c0d3289C4515275102423681', // user address in CAIP
        env: 'staging'
      });
      setNotifications(notifications);
    };
    fetchNotifications();
  }, []);
  return (
    <div>
      <h1>MydApp</h1>
      <h2>Notifications</h2>
      {notifications.map((notification, i) => {
        const {
          title,
          message,
          app,
          icon,
          image,
          url,
          blockchain
        } = notification;
        return (
          <NotificationItem
            key={i}
            notificationTitle={title}
            notificationBody={message}
            app={app}
            icon={icon}
            image={image}
            url={url}
            theme={theme}
            chainName={blockchain as chainNameType}
          />
        );
      })}
    </div>
  );
}
```

<b>MydApp</b> is a component that renders a list of notifications and spam notifications, as well as a form for subscribing to or unsubscribing from spam notifications. It uses the following components from the <b>@pushprotocol/uiweb</b> package:

- <b>NotificationItem:</b> A React component for rendering a single notification item.
- <b>Spam:</b> A React component for rendering a single spam notification item, with options for subscribing or unsubscribing to the spam notification channel.
- <b>Subscribe:</b> A React component for rendering a form for subscribing to a spam notification channel.
- <b>Unsubscribe:</b> A React component for rendering a form for unsubscribing from a spam notification channel.

<b>MydApp</b> uses the <b>useState</b> and <b>useEffect</b> Hooks to fetch and display the user's notifications and spam notifications using the <b>PushAPI</b>. It also defines event handlers for subscribing to and unsubscribing from spam notifications.

<b>MydApp</b> returns a JSX element that contains the following elements:

- A <b>div</b> element with a <b>h1</b> element for the title of the application and a <b>h2</b> element for the section heading for the notifications.
- A loop that renders a <b>NotificationItem</b> component for each notification in the <b>notifications</b> array.
- A <b>h2</b> element for the section heading for the spam notifications.
- A loop that renders a <b>Spam</b> component for each spam notification in the <b>spamNotifications</b> array.
- A <b>h2</b> element for the section heading for the subscription form.
- An <b>Unsubscribe</b> component if the user is subscribed to spam notifications, or a <b>Subscribe</b> component if the user is not subscribed to spam notifications.

There are of course other React components that you can to compliment the uiweb API. For instance: the <b>Feed </b>component is a container for displaying a list of notifications in a UI. It takes the following props:

- notifications (array of Notification objects): An array of notifications to be displayed in the feed. Each Notification object should have the following shape:
- <b>cta</b> (string): The call-to-action text for the notification.
- <b>title</b> (string): The title of the notification.
- <b>message</b> (string): The body of the notification.
- <b>app</b> (string): The name of the app that sent the notification.
- <b>icon</b> (string): The URL of an icon to be displayed with the notification.
- <b>image</b> (string): The URL of an image to be displayed with the notification.
- <b>url</b> (string): The URL to be opened when the notification is clicked.
- <b>blockchain</b> (string): The name of the blockchain on which the notification was sent.
- <b>theme</b>(Theme object): An object defining the colors and styles to be used in the feed. The Theme object should have the following shape:
- <b>background</b> (string): The background color of the feed.
- <b>color</b> (string): The text color of the feed.
- <b>chainName</b> (string): The name of the blockchain to be displayed in the feed.

Example:

```js
import NotificationItem from '@pushprotocol/uiweb/NotificationItem';
import Feed from './Feed'; // User-implemented component

const notifications = [
  {
    cta: 'Learn More',
    title: 'Notification 1',
    message: 'This is the first notification',
    app: 'My App',
    icon: '<https://my-app.com/icon.png>',
    image: '<https://my-app.com/image.png>',
    url: '<https://my-app.com/notification-1>',
    blockchain: 'Ethereum',
  },
  {
    cta: 'Get Started',
    title: 'Notification 2',
    message: 'This is the second notification',
    app: 'My App',
    icon: '<https://my-app.com/icon.png>',
    image: '<https://my-app.com/image.png>',
    url: '<https://my-app.com/notification-2>',
    blockchain: 'Ethereum',
  },
];
function MydApp() {
  return (
    <Feed
      notifications={notifications}
      theme={{ background: 'blue', color: 'white' }}
      chainName='Ethereum'
    />
  );
}
```

That’s it! You now know how to use the components of the <b>@pushprotocol/uiweb</b> API to add push notification functionality to your application.

We’ll cover the other parts of the SDK in the coming posts. More reference material is available in the [Push Protocol SDK documentation](https://comms.push.org/docs/).

In addition, try out the [Push SDK sandbox](https://github.com/push-protocol/push-sdk-sandbox).

Keep PUSHING! #PoweredbyPush
