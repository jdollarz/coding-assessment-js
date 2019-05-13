import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import InfiniteScroll from '../components/infiniteScroll/InfiniteScroll'

import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

const thumbnailData = [
    {
        title: 'some title',
        thumbnailUrl: 'https://via.placeholder.com/150/771796',
        imageUrl: 'some-image.url'
    },
    {
        title: 'some title 2',
        thumbnailUrl: 'https://via.placeholder.com/150/92c952',
        imageUrl: 'some-image.url2'
    }
];
storiesOf('InfiniteScroll', module)
    .add('with pagination', () => <InfiniteScroll thumbnailData={thumbnailData}/>);

