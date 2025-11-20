import { render, screen, fireEvent } from '@testing-library/react';
import VoteList from './VoteList';

test('Upvote selection changes when clicked', () => {
  render(

    //selection stored in votelist, create votelist with one vote to test
    <VoteList
      listId={1}
      localvotes={[{voteid: 1}]}
      localselected={false}
      updateLists={() => {}}
    />
  );

  //get upvote button
  const button = screen.getByRole('button', { name: 'Upvote Button' });

  //initially not selected
  expect(button).toHaveStyle({ background: '#F4F6F8' });

  //click
  fireEvent.click(button);

  //expected state after selection
  expect(button).toHaveStyle({ background: '#E5E8FD' });
});
