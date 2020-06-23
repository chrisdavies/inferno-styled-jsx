# xferno-styled-jsx

Write [styled-jsx](https://github.com/zeit/styled-jsx) in Inferno.

## Setup

```
npm install --save-dev xferno-styled-jsx
```

## Configuring

In your babel config, configure styled-jsx [as documented](https://github.com/vercel/styled-jsx#configuration-options). Make sure that you configure `styleModule='xferno-styled-jsx/style'` as in the following example:

```json
["styled-jsx/babel", { "optimizeForSpeed": true, "styleModule": "xferno-styled-jsx/style" }],
```

## Example

```jsx
function Example() {
  return (
    <div class="bigtext">
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
