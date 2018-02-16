import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories/MyButton.story');
  require('../src/stories/MyList.story');
}

configure(loadStories, module);
