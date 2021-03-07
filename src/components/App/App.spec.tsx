import React from 'react'
import { shallow,ShallowWrapper} from 'enzyme'
import App from './App'
import { Timer } from '../Timer/Timer';
import TimerBtn from '../Timer/TimerBtn';
describe("App component render",()=>{
 // const container = shallow(<App />);
  let container:ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  beforeEach(() => (container = shallow(<App />)))
    it("should render a <div />", () => {
      expect(container.find("div").length).toEqual(1);
     });

     it("<Timer/> component exist", () => {
      expect(container.containsMatchingElement(<Timer timerprops={container.props().timerprops} />)).toBeTruthy()
     });

     it("<TimerBtn/> component exist", () => {
      expect(container.containsMatchingElement(<TimerBtn Startfnc={container.props().Startfnc}
                                                          Stopfnc={container.props().Stopfnc}
                                                          Resetfnc={container.props().Resetfnc}
                                                          status={container.props().status}
                                                          
                                                                />)).toBeTruthy()
     });
    
});

   
