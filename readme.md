# inferno-styled-jsx

Write [styled-jsx](https://github.com/zeit/styled-jsx) in Inferno.

## Setup

```
npm install --save-dev iferno-styled-jsx
```

## Configuring

In your babel config, configure styled-jsx [as documented](https://github.com/vercel/styled-jsx#configuration-options). Make sure that you configure `styleModule='inferno-styled-jsx/style'` as in the following example:

```json
["styled-jsx/babel", { "optimizeForSpeed": true, "styleModule": "inferno-styled-jsx/style" }],
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
