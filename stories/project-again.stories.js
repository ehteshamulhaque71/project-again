import { html } from 'lit';
import '../src/project-again.js';

export default {
  title: 'ProjectAgain',
  component: 'project-again',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <project-again
      style="--project-again-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </project-again>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
