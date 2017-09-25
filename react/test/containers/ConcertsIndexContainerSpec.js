
import ConcertsIndexContainer from '../../src/containers/ConcertsIndexContainer';
import ConcertComponent from '../../src/components/ConcertComponent';

describe('ConcertsIndexContainer', () => {
  let wrapper;

  beforeEach(() => {
    let response = new window.Response(
      JSON.stringify([
        {
          id: 1,
          artist: "Coast Modern"
        }
      ]), {
        status: 200,
        statusText: 'OK',
        headers: { 'Content-Type': 'application/json'}
      }
    )

    spyOn(global, 'fetch').and.returnValue(Promise.resolve(response))

    wrapper = mount(
      <ConcertsIndexContainer />
    )
  });

  it('should have a specified initial state', () => {
    expect(wrapper.state()).toEqual({
      concerts: [],
      search: '',
      artistID: ''
    })
  }
)}
)
