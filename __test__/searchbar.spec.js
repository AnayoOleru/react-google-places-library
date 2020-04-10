import { mount, shallow, render } from 'enzyme';

import SearchBar from '../src/searchBar';

describe('Search Bar Component', () => {
it('should render search bar component correctly', () => {
    const component = shallow(<SearchBar/>);
    expect(component).toMatchSnapshot();
  });
});

