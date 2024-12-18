import { fireEvent, render } from "@testing-library/react";
import { Devcha } from "../components/Devcha";

test("render the devcha component" , () => {
    const devcha = render(<Devcha />)

    const inputTxt = devcha.getByTestId('input')
    const hintBtn = devcha.getByTestId('hintBtn')
    const message = devcha.getByTestId('message')
    
    expect(inputTxt.getAttribute('value')).toBe("")
    expect(message.textContent).toBe("")

    const clickBtn = devcha.getByTestId('clickBtn')
})

test("input match",()=>{
    const devcha = render(<Devcha />)

    const inputTxt = devcha.getByTestId('input')
    const hintBtn = devcha.getByTestId('hintBtn')
    const message = devcha.getByTestId('message')

    fireEvent.click(hintBtn)
    expect(message.textContent).toBe("Call getDevcha function to get you devcha code")

    fireEvent.change(inputTxt, { target: { value: "45rft" } })

    const clickBtn = devcha.getByTestId("clickBtn")
    fireEvent.click(clickBtn)

    if(inputTxt.value === "45rft"){
        expect(message.textContent).toBe("Hurray!!! You solve this Devcha Succesfully!!")
    }else if(inputTxt.value === ""){
        expect(message.textContent).toBe("Call getDevcha function to get you devcha code")
    }else{
        expect(message.textContent).toBe("Sorry!!! Try later")
    }
    
})