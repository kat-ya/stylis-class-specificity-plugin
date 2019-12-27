# stylis-class-specificity-plugin
Adds specificity to simple class selectors (ie transforms .my-class into .my-class.my-class)

```
npm install stylis-class-specificity-plugin
```
## Use case

This plugin can be used with styled-components v5+, in cases where you need to increase class specificity of all elements inside a container using [StyleSheetManager](https://www.styled-components.com/docs/api#stylesheetmanager)

One of the solutions to [third-party styles specificity issue](https://www.styled-components.com/docs/advanced#issues-with-specificity)

It is an alternative way of increasing specificity to 
```css
&&& {
  color: palevioletred;
  font-weight: bold;
}
```

## Example

```jsx
...
import plugin from 'stylis-class-specificity-plugin';

const StyledDiv = styled.div`
  background: #fff;
`

// repeat class name of styled styled components 2 times, ie: .nvF53f => .nvF53f.nvF53f 
const increaseSpecificityPlugin = plugin(2);

render() {
  <StyleSheetManager stylisPlugins={[increaseSpecificityPlugin]}>
    <StyledDiv>...</StyledDiv>
  </StyleSheetManager>
}

```