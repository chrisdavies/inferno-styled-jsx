# inferno-styled-jsx

Write [styled-jsx](https://github.com/zeit/styled-jsx) in Inferno.

## Setup

```
npm install --save-dev inferno-styled-jsx
```

## Configuring

In your babel config, configure styled-jsx [as documented](https://github.com/vercel/styled-jsx#configuration-options). Make sure that you configure `styleModule='inferno-styled-jsx/style'` as in the following example:

```json
["styled-jsx/babel", { "optimizeForSpeed": true, "styleModule": "inferno-styled-jsx/style" }],
```

Styled-jsx does not understand the use of the `class` attribute. So, if you regularly do something like `<a class="foo">...`, you either need to manulaly convert those to className in order to get scoped styles to apply, or you need to use something like `@rollup/plugin-replace`:

```
replace({
  delimiters: ['', ''],
  'class=': 'className=',
})
```

That's a bit hacky, as it will possibly apply to situations you don't want, so use that at your own risk. 

## Example

```jsx
function Example() {
  return (
    <div className="bigtext">
      Hi, there. I'm a large font.
      <style jsx>
        {`
          .bigtext {
            font-size: 5rem;
            color: green;
          }
        `}
      </style>
    </div>
  );
}
```
