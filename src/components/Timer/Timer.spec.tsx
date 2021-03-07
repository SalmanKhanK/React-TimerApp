import React from 'react'
import {shallow,ShallowWrapper} from 'enzyme'
import TimerBtn from './TimerBtn'
describe("App component render",()=>{

    let container:ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
    beforeEach(() => {
        container = shallow(
          <TimerBtn
          Startfnc={jest.fn()} Stopfnc={jest.fn()} Resetfnc={jest.fn()} status={0}
         
          />)
                
      })
    it("should render instances of the TimerButton component", () => {
        expect(container.find("button").length).toEqual(2)
      })
    it("should render div", () => {
        expect(container.find("div").length).toEqual(2)
    })
    it('checking on start button', () => {
     // container.find("#start").simulate("click");
     expect(container.find("#start").text()).toBe("Start");
      });
      it('checking on stop button', () => {
       // container.find("#stop").simulate("click");
       expect(container.find("#stop").text()).toBe("Stop");
        });
     
});
